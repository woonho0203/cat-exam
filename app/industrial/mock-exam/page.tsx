"use client";

import { useState, useEffect, useMemo, Suspense } from "react";
import { useRouter } from "next/navigation";
// ✅ 데이터 경로: industrial 폴더의 index.ts를 불러옵니다.
import allQuestions from "../../../data/industrial"; 

// 보기 섞기용 함수
const shuffleArray = (array: any[]) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// 실제 모의고사 로직을 담은 내부 컴포넌트
function MockExamContent() {
  const router = useRouter();

  // 1. 데이터 생성 (6과목 120문제 + 회차 정보 origin 포함)
  const mockQuestions = useMemo(() => {
    const subjects: any[][] = [[], [], [], [], [], []];
    
    if (!allQuestions) return [];

    Object.entries(allQuestions).forEach(([sessionKey, qList]: [string, any]) => {
      if (!Array.isArray(qList)) return;
      qList.forEach((q: any, idx: number) => {
        const sIdx = Math.floor(idx / 20);
        if (sIdx < 6) {
          // ✅ q.origin에 "2023-1" 같은 회차 정보를 심습니다.
          subjects[sIdx].push({ ...q, origin: sessionKey });
        }
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
    
    const subjectDetails = [0, 1, 2, 3, 4, 5].map(sIdx => {
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
    if (!isExamMode && result) {
      next();
      return;
    }
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
    const savedWrongs = JSON.parse(localStorage.getItem("cbt-wrong-list") || "[]");
    const currentWrongs = mockQuestions
      .filter((que, i) => answers[i] !== 0 && answers[i] !== que.answer)
      .map(que => ({ ...que, examId: que.origin, addedAt: new Date().getTime() }));
    
    const correctIds = mockQuestions.filter((que, i) => answers[i] === que.answer).map(que => `${que.origin}-${que.id}`);
    const filteredSaved = savedWrongs.filter((v: any) => !correctIds.includes(`${v.examId}-${v.id}`));
    const uniqueWrongs = [...currentWrongs, ...filteredSaved].filter((v, i, a) => 
      a.findIndex(t => t.id === v.id && t.examId === v.examId) === i
    );

    localStorage.setItem("cbt-wrong-list", JSON.stringify(uniqueWrongs));
    localStorage.setItem("cbt-answers", JSON.stringify(answers));
    sessionStorage.setItem("cbt-mock-questions", JSON.stringify(mockQuestions)); 
    localStorage.setItem("cbt-id", "랜덤 모의고사");
    localStorage.setItem("cbt-time", `${Math.floor(seconds/60)}:${(seconds%60).toString().padStart(2,'0')}`);
    
    router.push("/industrial/result");
  };

  // 3. 키보드 단축키
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!q) return;
      if (['1', '2', '3', '4'].includes(e.key)) {
        if (!isExamMode && result) next();
        else {
          const opt = q.shuffledOptions?.[Number(e.key) - 1];
          if (opt) handleSelectAnswer(opt.originalNum);
        }
      }
      if (e.key === "Enter" || e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [index, isExamMode, result, q]);

  if (!q || !stats) return <div style={{ minHeight: "100vh", backgroundColor: "#121212", color: "white", display: "flex", justifyContent: "center", alignItems: "center" }}>산업안전기사 문제를 생성 중입니다...</div>;

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#121212", color: "white", padding: "20px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        
        {/* 상단바 */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 15 }}>
          <div>
            <span style={{ display: "block", fontSize: "0.8rem", color: "#888", marginBottom: "4px" }}>산업안전기사</span>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <h1 style={{ margin: 0, fontSize: "1.1rem", fontWeight: "bold", color: "#fff" }}>🎯 랜덤 모의고사</h1>
              {/* ✅ 복구된 회차 정보 뱃지 */}
              <span style={{ fontSize: "0.65rem", color: "#4FC3F7", backgroundColor: "#333", padding: "2px 6px", borderRadius: "4px", fontWeight: "bold" }}>
                {q.origin} 기출
              </span>
            </div>
          </div>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <span style={{ color: "#FFD54F", fontWeight: "bold" }}>⏳ {Math.floor(seconds/60)}:{(seconds%60).toString().padStart(2,'0')}</span>
            <button onClick={() => {setIsExamMode(!isExamMode); setResult(null);}} style={{ padding: "5px 12px", borderRadius: 15, border: "none", backgroundColor: isExamMode ? "#444" : "#eee", color: isExamMode ? "white" : "black", fontSize: "0.75rem", fontWeight: "bold", cursor: "pointer" }}>
              {isExamMode ? "실전모드" : "학습모드"}
            </button>
          </div>
        </div>

        {/* 종합 현황판 */}
        <div style={{ backgroundColor: "#1E1E1E", padding: "15px", borderRadius: "15px", border: "1px solid #333", marginBottom: "15px", display: "flex", justifyContent: "space-around" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "0.7rem", color: "#aaa" }}>진행도</div>
            <div style={{ fontSize: "1.1rem", fontWeight: "bold" }}>{stats.totalSolved} / {mockQuestions.length}</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "0.7rem", color: "#aaa" }}>평균 점수</div>
            <div style={{ fontSize: "1.4rem", fontWeight: "bold", color: stats.currentTotalScore >= 60 ? "#4FC3F7" : "#FF5252" }}>{stats.currentTotalScore}점</div>
          </div>
        </div>

        {/* 과목별 실시간 타일 (6과목) */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "6px", marginBottom: "25px" }}>
          {stats.subjectDetails.map((item, i) => (
            <div key={i} style={{ 
              backgroundColor: "#1E1E1E", padding: "8px 2px", borderRadius: "10px", textAlign: "center",
              border: `1px solid ${Math.floor(index/20) === i ? "#4FC3F7" : "#333"}`
            }}>
              <div style={{ fontSize: "0.55rem", color: "#aaa" }}>{i+1}과목</div>
              <div style={{ fontSize: "0.8rem", fontWeight: "bold", color: item.score >= 40 ? "#4CAF50" : "#FF5252" }}>{item.corrects}/20</div>
              <div style={{ fontSize: "0.65rem", color: item.score >= 40 ? "#4CAF50" : "#FF5252", fontWeight: "bold" }}>{item.score}점</div>
            </div>
          ))}
        </div>

        {/* 문제 영역 */}
        <div style={{ backgroundColor: "#1E1E1E", padding: "20px", borderRadius: "12px", border: "1px solid #333", marginBottom: 20 }}>
          <h2 style={{ fontSize: "1.2rem", lineHeight: "1.6", margin: 0 }}>
            <span style={{ color: "#4FC3F7", marginRight: 10, fontWeight: "900" }}>Q{index + 1}.</span>{q.question}
          </h2>
          {q.image && <img src={q.image} alt="문제 이미지" style={{ maxWidth: "100%", maxHeight: "300px", marginTop: 20, borderRadius: 10 }} />}
        </div>

        {/* 보기 영역 */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 30 }}>
          {q.shuffledOptions?.map((opt: any, i: number) => {
            const isSelected = answers[index] === opt.originalNum;
            let bgColor = "#2C2C2C";
            let borderColor = "#333";
            if (!isExamMode && result) {
              if (opt.originalNum === q.answer) { bgColor = "#1B5E20"; borderColor = "#4CAF50"; } 
              else if (isSelected) { bgColor = "#3E2723"; borderColor = "#FF5252"; }
            } else if (isSelected) { bgColor = "#1565C0"; borderColor = "#64B5F6"; }
            return (
              <div key={i} onClick={() => handleSelectAnswer(opt.originalNum)} style={{ padding: "16px 20px", borderRadius: "10px", backgroundColor: bgColor, border: `2px solid ${borderColor}`, cursor: "pointer" }}>
                {i + 1}. {opt.text}
              </div>
            );
          })}
        </div>

        {/* 해설창 */}
        {!isExamMode && result && (
          <div style={{ backgroundColor: "#1E1E1E", padding: 25, borderRadius: 15, border: `1px solid ${result === "correct" ? "#4CAF50" : "#FF5252"}`, marginBottom: 30 }}>
            <h3 style={{ margin: "0 0 10px 0", color: result === "correct" ? "#81C784" : "#FF5252" }}>
              {result === "correct" ? "✅ 정답입니다!" : `❌ 오답 (정답: ${currentCorrectNum}번)`}
            </h3>
            <div style={{ lineHeight: "1.6", color: "#ddd" }}><strong>[해설]</strong> {q.explanation}</div>
            <p style={{ textAlign: "center", color: "#666", marginTop: 15, fontSize: "0.8rem" }}>보기를 다시 클릭하거나 [Enter]를 누르면 다음으로</p>
          </div>
        )}

        {/* 하단 버튼 */}
        <div style={{ display: "flex", gap: 12, justifyContent: "center", paddingBottom: 60 }}>
          <button onClick={prev} disabled={index === 0} style={{ padding: "14px 28px", background: "#333", color: "white", borderRadius: 10, border: "none", cursor: "pointer" }}>이전</button>
          <button onClick={index === mockQuestions.length - 1 ? submit : next} style={{ padding: "14px 35px", background: index === mockQuestions.length - 1 ? "#4CAF50" : "#2196F3", color: "white", borderRadius: 10, border: "none", fontWeight: "bold", cursor: "pointer" }}>
            {index === mockQuestions.length - 1 ? "최종 제출 🏁" : "다음 문제 ➡️"}
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