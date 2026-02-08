"use client";

import { useState, useEffect, useMemo, Suspense } from "react";
import { useRouter } from "next/navigation";
// ✅ 데이터 경로 (프로젝트 구조에 맞게 확인)
import allQuestions from "../../../data/fire";

const shuffleArray = (array: any[]) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

function MockExamContent() {
  const router = useRouter();

  // ✅ [추가] 모바일 자동 감지 상태
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); // 초기 실행
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // 1. 문제 생성 (4과목 80문제 + 회차 정보(origin) 포함)
  const mockQuestions = useMemo(() => {
    const subjects: any[][] = [[], [], [], []];
    if (!allQuestions) return [];

    Object.entries(allQuestions).forEach(([sessionKey, qList]: [string, any]) => {
      if (!Array.isArray(qList)) return;
      qList.forEach((q: any, idx: number) => {
        const sIdx = Math.floor(idx / 20);
        if (sIdx < 4) subjects[sIdx].push({ ...q, origin: sessionKey });
      });
    });

    const getRandom = (pool: any[], count: number) => 
      [...pool].sort(() => Math.random() - 0.5).slice(0, Math.min(count, pool.length));

    const selected = subjects.flatMap((pool) => getRandom(pool, 20));
    
    return selected.map((q: any) => ({
      ...q,
      shuffledOptions: shuffleArray((q.options || []).map((text: string, i: number) => ({ text, originalNum: i + 1 })))
    }));
  }, []);

  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [result, setResult] = useState<"correct" | "wrong" | null>(null);
  const [seconds, setSeconds] = useState(0);
  const [isExamMode, setIsExamMode] = useState(false);

  const q = mockQuestions[index];
  const currentCorrectNum = useMemo(() => 
    q?.shuffledOptions?.findIndex((opt: any) => opt.originalNum === q.answer) + 1 || 0
  , [q]);

  useEffect(() => {
    if (mockQuestions.length > 0) setAnswers(Array(mockQuestions.length).fill(0));
    const timer = setInterval(() => setSeconds((prev) => prev + 1), 1000);
    return () => clearInterval(timer);
  }, [mockQuestions]);

  // 2. 통계 계산 (실시간 과목별 점수)
  const stats = useMemo(() => {
    if (mockQuestions.length === 0) return null;
    const totalCorrect = answers.filter((ans, idx) => mockQuestions[idx] && ans === mockQuestions[idx].answer).length;
    const totalSolved = answers.filter(a => a !== 0).length;
    const currentTotalScore = Math.round((totalCorrect / mockQuestions.length) * 100);
    
    const subjectDetails = [0, 1, 2, 3].map(sIdx => {
      const subAns = answers.slice(sIdx * 20, (sIdx + 1) * 20);
      const subQue = mockQuestions.slice(sIdx * 20, (sIdx + 1) * 20);
      const corrects = subAns.filter((ans, i) => subQue[i] && ans === subQue[i].answer).length;
      return { corrects, score: corrects * 5 };
    });
    return { subjectDetails, totalCorrect, totalSolved, currentTotalScore };
  }, [answers, mockQuestions]);

  const next = () => { if (index < mockQuestions.length - 1) { setIndex(index + 1); setResult(null); } };
  const prev = () => { if (index > 0) { setIndex(index - 1); setResult(null); } };

  const handleSelectAnswer = (originalNum: number) => {
    if (!isExamMode && result) { next(); return; }
    const newAnswers = [...answers];
    newAnswers[index] = originalNum;
    setAnswers(newAnswers);
    if (isExamMode) {
      if (index < mockQuestions.length - 1) setTimeout(() => next(), 150);
    } else {
      setResult(originalNum === q.answer ? "correct" : "wrong");
    }
  };

  const submit = () => {
    const savedWrongs = JSON.parse(localStorage.getItem("fire-wrong-list") || "[]");
    const currentWrongs = mockQuestions
      .filter((que, i) => answers[i] !== 0 && answers[i] !== que.answer)
      .map(que => ({ ...que, examId: que.origin, addedAt: new Date().getTime() }));
    
    localStorage.setItem("fire-wrong-list", JSON.stringify([...currentWrongs, ...savedWrongs]));
    localStorage.setItem("fire-answers", JSON.stringify(answers));
    sessionStorage.setItem("fire-mock-questions", JSON.stringify(mockQuestions)); 
    localStorage.setItem("fire-id", "랜덤 모의고사");
    localStorage.setItem("fire-time", `${Math.floor(seconds/60)}:${(seconds%60).toString().padStart(2,'0')}`);
    router.push("/fire/result");
  };

  // 3. 키보드 단축키
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!q) return;
      if (['1', '2', '3', '4'].includes(e.key)) {
        if (!isExamMode && result) next();
        else {
          const opt = q.shuffledOptions[Number(e.key) - 1];
          if (opt) handleSelectAnswer(opt.originalNum);
        }
      }
      if (e.key === "Enter" || e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [index, isExamMode, result, q]);

  if (!q || !stats) return <div style={{ minHeight: "100vh", backgroundColor: "#121212", color: "white", display: "flex", justifyContent: "center", alignItems: "center" }}>데이터 로딩 중...</div>;

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#121212", color: "white", padding: isMobile ? "10px" : "20px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        
        {/* 상단바 */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 15 }}>
          <div>
            <h1 style={{ margin: 0, fontSize: isMobile ? "0.95rem" : "1.1rem", fontWeight: "bold" }}>🚒 소방 모의고사</h1>
            <span style={{ fontSize: "0.65rem", color: "#FF5252", backgroundColor: "#333", padding: "2px 6px", borderRadius: "4px" }}>
              {q.origin} 기출
            </span>
          </div>
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <span style={{ color: "#FFD54F", fontWeight: "bold", fontSize: isMobile ? "0.8rem" : "1rem" }}>⏳ {Math.floor(seconds/60)}:{(seconds%60).toString().padStart(2,'0')}</span>
            <button onClick={() => {setIsExamMode(!isExamMode); setResult(null);}} style={{ padding: isMobile ? "4px 10px" : "5px 12px", borderRadius: 15, border: "none", backgroundColor: isExamMode ? "#444" : "#eee", color: isExamMode ? "white" : "black", fontSize: "0.7rem", fontWeight: "bold", cursor: "pointer" }}>
              {isExamMode ? "실전" : "학습"}
            </button>
          </div>
        </div>

        {/* 종합 현황판 */}
        <div style={{ backgroundColor: "#1E1E1E", padding: isMobile ? "10px" : "15px", borderRadius: "15px", border: "1px solid #333", marginBottom: "15px", display: "flex", justifyContent: "space-around" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "0.65rem", color: "#aaa" }}>진행도</div>
            <div style={{ fontSize: isMobile ? "0.9rem" : "1.1rem", fontWeight: "bold" }}>{stats.totalSolved}/{mockQuestions.length}</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "0.65rem", color: "#aaa" }}>현재 점수</div>
            <div style={{ fontSize: isMobile ? "1.2rem" : "1.4rem", fontWeight: "bold", color: stats.currentTotalScore >= 60 ? "#4CAF50" : "#FF5252" }}>{stats.currentTotalScore}점</div>
          </div>
        </div>

        {/* 과목별 실시간 점수 타일 */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "6px", marginBottom: "20px" }}>
          {stats.subjectDetails.map((item, i) => {
            const isCurrent = Math.floor(index / 20) === i;
            return (
              <div key={i} style={{ 
                backgroundColor: "#1E1E1E", padding: "8px 2px", borderRadius: "10px", textAlign: "center",
                border: `1px solid ${isCurrent ? "#FF5252" : "#333"}`,
                boxShadow: isCurrent ? "0 0 10px rgba(255, 82, 82, 0.2)" : "none"
              }}>
                <div style={{ fontSize: "0.55rem", color: "#aaa" }}>{i+1}과목</div>
                <div style={{ fontSize: "0.8rem", fontWeight: "bold", color: item.score < 40 ? "#FF5252" : "#4CAF50" }}>{item.corrects}/20</div>
                <div style={{ fontSize: "0.65rem", color: item.score < 40 ? "#FF8A80" : "#81C784", fontWeight: "bold" }}>{item.score}점</div>
              </div>
            );
          })}
        </div>

        {/* 문제 영역 */}
        <div style={{ backgroundColor: "#1E1E1E", padding: isMobile ? "15px" : "20px", borderRadius: "12px", border: "1px solid #333", marginBottom: 15 }}>
          <h2 style={{ fontSize: isMobile ? "1rem" : "1.2rem", lineHeight: "1.5", margin: 0 }}>
            <span style={{ color: "#FF5252", marginRight: 8, fontWeight: "900" }}>Q{index + 1}.</span>{q.question}
          </h2>
          {q.image && <img src={q.image} alt="문제 이미지" style={{ maxWidth: "100%", maxHeight: isMobile ? "200px" : "300px", marginTop: 15, borderRadius: 10 }} />}
        </div>

        {/* 보기 영역 */}
        <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? "8px" : "12px", marginBottom: 25 }}>
          {q.shuffledOptions.map((opt: any, i: number) => {
            const isSelected = answers[index] === opt.originalNum;
            let bgColor = "#2C2C2C";
            if (isSelected) bgColor = "#D84315";
            if (!isExamMode && result) {
              if (opt.originalNum === q.answer) bgColor = "#1B5E20";
              else if (isSelected) bgColor = "#3E2723";
            }
            return (
              <div 
                key={i} 
                onClick={() => handleSelectAnswer(opt.originalNum)} 
                style={{ 
                  padding: isMobile ? "14px 16px" : "18px 20px", 
                  fontSize: isMobile ? "0.9rem" : "1rem",
                  borderRadius: "12px", 
                  backgroundColor: bgColor, 
                  border: "1px solid #333", 
                  cursor: "pointer",
                  lineHeight: "1.4"
                }}
              >
                {i + 1}. {opt.text}
                {opt.image && <img src={opt.image} alt="보기 이미지" style={{ maxWidth: "100%", marginTop: 10, borderRadius: 5 }} />}
              </div>
            );
          })}
        </div>

        {/* 해설 영역 */}
        {!isExamMode && result && (
          <div style={{ backgroundColor: "#1E1E1E", padding: isMobile ? "18px" : "25px", borderRadius: 15, border: `1px solid ${result === "correct" ? "#4CAF50" : "#FF5252"}`, marginBottom: 30 }}>
            <h3 style={{ margin: "0 0 8px 0", fontSize: isMobile ? "1rem" : "1.1rem", color: result === "correct" ? "#81C784" : "#FF5252" }}>
              {result === "correct" ? "✅ 정답!" : `❌ 오답 (정답: ${currentCorrectNum}번)`}
            </h3>
            <div style={{ lineHeight: "1.6", color: "#ddd", fontSize: isMobile ? "0.85rem" : "1rem" }}>
              <strong>[해설]</strong> {q.explanation}
            </div>
          </div>
        )}

        {/* 하단 네비게이션 */}
        <div style={{ display: "flex", gap: 10, justifyContent: "center", paddingBottom: 80 }}>
          <button onClick={prev} disabled={index === 0} style={{ padding: isMobile ? "12px 24px" : "14px 28px", background: "#333", color: "white", borderRadius: 10, border: "none", cursor: "pointer", fontSize: isMobile ? "0.9rem" : "1rem" }}>이전</button>
          <button onClick={index === mockQuestions.length - 1 ? submit : next} style={{ padding: isMobile ? "12px 30px" : "14px 35px", background: index === mockQuestions.length - 1 ? "#4CAF50" : "#FF5252", color: "white", borderRadius: 10, border: "none", fontWeight: "bold", cursor: "pointer", fontSize: isMobile ? "0.9rem" : "1rem" }}>
            {index === mockQuestions.length - 1 ? "최종 제출" : "다음 문제"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function MockExamPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: "100vh", backgroundColor: "#121212", color: "white", display: "flex", justifyContent: "center", alignItems: "center" }}>로딩 중...</div>}>
      <MockExamContent />
    </Suspense>
  );
}