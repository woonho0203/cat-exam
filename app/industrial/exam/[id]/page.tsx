"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter, useParams } from "next/navigation";
// ✅ 데이터 경로 (사용자 설정 유지)
import allQuestions from "../../../../data/industrial";

// 1. 타입 정의
interface Question {
  id: number;
  question: string;
  options: any[];
  answer: number;
  explanation: string;
  image?: string | null;
  shuffledOptions?: any[];
}

// 2. 보기 섞기 함수
const shuffleArray = (array: any[]) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export default function ExamPage() {
  const router = useRouter();
  const params = useParams();
  const examId = params.id as string;
  const originalQuestions = allQuestions[examId] || [];

  // 3. 문제 초기화 (최초 1회 보기 섞기)
  const questions = useMemo(() => {
    if (!originalQuestions) return [];
    return originalQuestions.map((q: Question) => ({
      ...q,
      shuffledOptions: shuffleArray(q.options.map((opt: any, i: number) => {
        if (typeof opt === 'string') return { text: opt, originalNum: i + 1 };
        return { ...opt, originalNum: i + 1 };
      }))
    }));
  }, [originalQuestions]);

  // 4. 상태 관리
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [result, setResult] = useState<"correct" | "wrong" | null>(null);
  const [isExamMode, setIsExamMode] = useState(false);
  const [seconds, setSeconds] = useState(0);

  const q = questions[index];
  const currentCorrectNum = useMemo(() => 
    q ? q.shuffledOptions?.findIndex((opt: any) => opt.originalNum === q.answer)! + 1 : 0
  , [q]);

  // 5. 타이머 및 답변 배열 초기화
  useEffect(() => {
    if (questions.length > 0) setAnswers(Array(questions.length).fill(0));
    const timer = setInterval(() => setSeconds((prev) => prev + 1), 1000);
    return () => clearInterval(timer);
  }, [questions]);

  // 6. 실시간 통계 및 과목별 점수 계산
  const stats = useMemo(() => {
    if (questions.length === 0) return null;
    const totalCorrect = answers.filter((ans, idx) => questions[idx] && ans === questions[idx].answer).length;
    const totalSolved = answers.filter(a => a !== 0).length;
    const currentTotalScore = Math.round((totalCorrect / questions.length) * 100);
    
    // 산업안전기사 6과목 (20문제씩)
    const subjectDetails = [0, 1, 2, 3, 4, 5].map((sIdx) => {
      const subAns = answers.slice(sIdx * 20, (sIdx + 1) * 20);
      const subQue = questions.slice(sIdx * 20, (sIdx + 1) * 20);
      const corrects = subAns.filter((ans, i) => subQue[i] && ans === subQue[i].answer).length;
      return { corrects, score: corrects * 5 }; // 문제당 5점
    });
    return { subjectDetails, totalCorrect, totalSolved, currentTotalScore };
  }, [answers, questions]);

  // 7. 정답 선택 핸들러
  const handleSelectAnswer = (originalNum: number) => {
    if (!isExamMode && result) {
      next();
      return;
    }

    const newAnswers = [...answers];
    newAnswers[index] = originalNum;
    setAnswers(newAnswers);

    if (isExamMode) {
      if (index < questions.length - 1) setTimeout(() => next(), 150);
    } else {
      setResult(originalNum === q.answer ? "correct" : "wrong");
    }
  };

  const next = () => { if (index < questions.length - 1) { setIndex(index + 1); setResult(null); } };
  const prev = () => { if (index > 0) { setIndex(index - 1); setResult(null); } };

  // 8. 최종 제출 및 오답 저장
  const submit = () => {
    const savedWrongs = JSON.parse(localStorage.getItem("cbt-wrong-list") || "[]");
    const currentWrongs = questions
      .filter((que: any, i: number) => answers[i] !== 0 && answers[i] !== que.answer)
      .map((que: any) => ({ ...que, examId, addedAt: new Date().getTime() }));

    const correctIds = questions
      .filter((que: any, i: number) => answers[i] === que.answer)
      .map((que: any) => `${examId}-${que.id}`);

    const filteredSaved = savedWrongs.filter((v: any) => !correctIds.includes(`${v.examId}-${v.id}`));
    const combined = [...currentWrongs, ...filteredSaved];
    const uniqueWrongs = combined.filter((v, i, a) => 
      a.findIndex((t) => t.id === v.id && t.examId === v.examId) === i
    );

    localStorage.setItem("cbt-wrong-list", JSON.stringify(uniqueWrongs));
    localStorage.setItem("cbt-answers", JSON.stringify(answers));
    localStorage.setItem("cbt-id", examId);
    localStorage.setItem("cbt-time", `${Math.floor(seconds/60)}:${(seconds%60).toString().padStart(2,'0')}`);
    router.push("/industrial/result");
  };

  // 9. 키보드 이벤트
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

  if (!q || !stats) return (
    <div style={{ minHeight: "100vh", backgroundColor: "#121212", color: "white", display: "flex", justifyContent: "center", alignItems: "center" }}>
      로딩 중입니다...
    </div>
  );

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#121212", color: "white", padding: "15px" }}>
      {/* 📱 모바일 자동 글씨 크기 조절을 위한 내부 스타일 주입 */}
      <style jsx global>{`
        :root {
          --text-header: 1.1rem;
          --text-stats-label: 0.7rem;
          --text-stats-val: 1.1rem;
          --text-question: 1.2rem;
          --text-option: 1.05rem;
          --text-explanation: 0.95rem;
        }

        @media (max-width: 600px) {
          :root {
            --text-header: 0.95rem;
            --text-stats-label: 0.6rem;
            --text-stats-val: 0.9rem;
            --text-question: 1.05rem;
            --text-option: 0.9rem;
            --text-explanation: 0.85rem;
          }
        }
      `}</style>

      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        
        {/* 상단 헤더 */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 15 }}>
          <span style={{ fontWeight: "bold", fontSize: "var(--text-header)" }}>👷 {examId}회차</span>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <span style={{ color: "#FFD54F", fontWeight: "bold", fontSize: "0.9rem" }}>⏱ {Math.floor(seconds/60)}:{(seconds%60).toString().padStart(2,'0')}</span>
            <button 
              onClick={() => {setIsExamMode(!isExamMode); setResult(null);}} 
              style={{ 
                padding: "6px 12px", borderRadius: 20, border: "none", cursor: "pointer",
                backgroundColor: isExamMode ? "#444" : "#eee", color: isExamMode ? "white" : "black",
                fontWeight: "bold", fontSize: "0.75rem"
              }}>
              {isExamMode ? "실전모드" : "학습모드"}
            </button>
          </div>
        </div>

        {/* 종합 현황판 */}
        <div style={{ 
          backgroundColor: "#1E1E1E", padding: "15px", borderRadius: "15px", border: "1px solid #333", 
          marginBottom: "15px", display: "flex", justifyContent: "space-around", alignItems: "center" 
        }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "var(--text-stats-label)", color: "#aaa" }}>진행도</div>
            <div style={{ fontSize: "var(--text-stats-val)", fontWeight: "bold" }}>{stats.totalSolved} / {questions.length}</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "var(--text-stats-label)", color: "#aaa" }}>현재 정답</div>
            <div style={{ fontSize: "var(--text-stats-val)", fontWeight: "bold", color: "#4CAF50" }}>{stats.totalCorrect}개</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "var(--text-stats-label)", color: "#aaa" }}>평균 점수</div>
            <div style={{ fontSize: "calc(var(--text-stats-val) * 1.2)", fontWeight: "bold", color: stats.currentTotalScore >= 60 ? "#4FC3F7" : "#FF5252" }}>{stats.currentTotalScore}점</div>
          </div>
        </div>

        {/* 과목별 실시간 점수 판 */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "4px", marginBottom: "25px" }}>
          {stats.subjectDetails.map((item, i) => {
            const isCurrentSubject = Math.floor(index / 20) === i;
            const isFail = item.score < 40;
            return (
              <div key={i} style={{ 
                backgroundColor: "#1E1E1E", padding: "8px 2px", borderRadius: "8px", textAlign: "center",
                border: `1px solid ${isCurrentSubject ? "#4FC3F7" : "#333"}`,
                boxShadow: isCurrentSubject ? "0 0 10px rgba(79, 195, 247, 0.2)" : "none"
              }}>
                <div style={{ fontSize: "0.55rem", color: "#aaa" }}>{i+1}과목</div>
                <div style={{ fontSize: "0.75rem", fontWeight: "bold", color: isFail ? "#FF5252" : "#4CAF50" }}>{item.corrects}/20</div>
                <div style={{ fontSize: "0.6rem", color: isFail ? "#FF8A80" : "#81C784", fontWeight: "bold" }}>{item.score}점</div>
              </div>
            );
          })}
        </div>

        {/* 문제 영역 */}
        <div style={{ backgroundColor: "#1E1E1E", padding: "20px", borderRadius: "15px", border: "1px solid #333", marginBottom: 20 }}>
          <h2 style={{ fontSize: "var(--text-question)", lineHeight: "1.6", margin: 0, wordBreak: "keep-all" }}>
            <span style={{ color: "#4FC3F7", marginRight: 10, fontWeight: "900" }}>Q{index + 1}.</span>
            {q.question}
          </h2>
        </div>

        {q.image && (
          <div style={{ marginBottom: 20, textAlign: "center", background: "#000", padding: 10, borderRadius: 12, border: "1px solid #333" }}>
            <img src={q.image} alt="문제 이미지" style={{ maxWidth: "100%", maxHeight: "250px", objectFit: "contain" }} />
          </div>
        )}

        {/* 보기 영역 */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 30 }}>
          {q.shuffledOptions?.map((opt: any, i: number) => {
            const isSelected = answers[index] === opt.originalNum;
            let bgColor = "#2C2C2C";
            let borderColor = "#333";

            if (!isExamMode && result) {
              if (opt.originalNum === q.answer) { bgColor = "#1B5E20"; borderColor = "#4CAF50"; } 
              else if (isSelected) { bgColor = "#3E2723"; borderColor = "#FF5252"; }
            } else if (isSelected) {
              bgColor = "#1565C0"; borderColor = "#64B5F6";
            }

            return (
              <div 
                key={i} 
                onClick={() => handleSelectAnswer(opt.originalNum)} 
                style={{ 
                  padding: "16px 18px", borderRadius: "12px", backgroundColor: bgColor, 
                  border: `2px solid ${borderColor}`, cursor: "pointer", transition: "all 0.2s" 
                }}>
                <div style={{ fontSize: "var(--text-option)" }}>{i + 1}. {opt.text}</div>
                {opt.image && <img src={opt.image} alt="보기 이미지" style={{ maxWidth: "200px", marginTop: 10, borderRadius: 5 }} />}
              </div>
            );
          })}
        </div>

        {/* 해설창 (학습모드) */}
        {!isExamMode && result && (
          <div style={{ 
            backgroundColor: "#1E1E1E", padding: "20px", borderRadius: "15px", 
            border: `1px solid ${result === "correct" ? "#4CAF50" : "#FF5252"}`, marginBottom: 30 
          }}>
            <h3 style={{ margin: "0 0 10px 0", color: result === "correct" ? "#81C784" : "#FF5252", fontSize: "1.1rem" }}>
              {result === "correct" ? "✅ 정답입니다!" : `❌ 오답 (정답: ${currentCorrectNum}번)`}
            </h3>
            <div style={{ lineHeight: "1.6", color: "#ddd", fontSize: "var(--text-explanation)" }}>
              <strong>[해설]</strong> {q.explanation}
            </div>
            <p style={{ textAlign: "center", color: "#666", marginTop: 15, fontSize: "0.75rem" }}>보기를 한 번 더 클릭하거나 [Enter]를 누르면 다음으로</p>
          </div>
        )}

        {/* 네비게이션 버튼 */}
        <div style={{ display: "flex", gap: 12, justifyContent: "center", paddingBottom: 80 }}>
          <button 
            onClick={prev} 
            disabled={index === 0} 
            style={{ 
              padding: "12px 25px", background: "#333", color: "white", borderRadius: 12, 
              border: "none", cursor: index === 0 ? "default" : "pointer", opacity: index === 0 ? 0.5 : 1, fontSize: "0.9rem"
            }}>
            이전
          </button>
          <button 
            onClick={index === questions.length - 1 ? submit : next} 
            style={{ 
              padding: "12px 40px", background: index === questions.length - 1 ? "#4CAF50" : "#2196F3", 
              color: "white", borderRadius: 12, border: "none", fontWeight: "bold", cursor: "pointer", fontSize: "0.9rem"
            }}>
            {index === questions.length - 1 ? "최종 제출 🏁" : "다음 문제 ➡️"}
          </button>
        </div>
      </div>
    </div>
  );
}