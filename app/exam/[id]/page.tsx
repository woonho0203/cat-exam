"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter, useParams } from "next/navigation";
import allQuestions from "../../../data";

// [도우미] 배열을 무작위로 섞는 함수
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
  
  const originalQuestions = allQuestions[params.id as string];

  // 1. 보기 셔플 및 데이터 준비 (Hook 최상단 유지)
  const questions = useMemo(() => {
    if (!originalQuestions) return [];
    return originalQuestions.map((q: any) => {
      const optionsWithIndex = q.options.map((text: string, i: number) => ({
        text,
        originalNum: i + 1,
      }));
      return {
        ...q,
        shuffledOptions: shuffleArray(optionsWithIndex),
      };
    });
  }, [originalQuestions]);

  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [result, setResult] = useState<"correct" | "wrong" | null>(null);
  const [isExamMode, setIsExamMode] = useState(false);
  const [seconds, setSeconds] = useState(0);

  const q = questions[index];

  // 2. 초기화 및 타이머
  useEffect(() => {
    if (questions.length > 0) {
      setAnswers(Array(questions.length).fill(0));
    }
  }, [questions]);

  useEffect(() => {
    const timer = setInterval(() => setSeconds((prev) => prev + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  // 3. [개선] 키보드 제어 (오답노트와 동일하게 연타 기능 추가)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!q) return;

      if (['1', '2', '3', '4'].includes(e.key)) {
        if (!isExamMode && result) {
          next(); // 정답 확인 상태에서 숫자 누르면 다음 문제로
        } else {
          const selectedOpt = q.shuffledOptions[Number(e.key) - 1];
          if (selectedOpt) handleSelectAnswer(selectedOpt.originalNum);
        }
      }

      if (e.key === "ArrowRight" || e.key === "Enter") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [index, isExamMode, result, q]);

  // 4. 기능 함수들
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60).toString().padStart(2, "0");
    const s = (secs % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  const next = () => {
    if (index < questions.length - 1) {
      setIndex(index + 1);
      setResult(null);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
      setResult(null);
    }
  };

  const handleSelectAnswer = (originalNum: number) => {
    if (!isExamMode && result) {
      next();
      return;
    }
    const newAnswers = [...answers];
    newAnswers[index] = originalNum;
    setAnswers(newAnswers);

    if (isExamMode) {
      setResult(null);
      if (index < questions.length - 1) {
        setTimeout(() => setIndex((prev) => prev + 1), 150); 
      }
    } else {
      setResult(originalNum === q.answer ? "correct" : "wrong");
    }
  };

  const submit = () => {
    const savedWrongs = JSON.parse(localStorage.getItem("cbt-wrong-list") || "[]");
    const currentWrongs = questions.filter((item: any, idx: number) => {
      return answers[idx] !== 0 && answers[idx] !== item.answer;
    }).map((item: any) => ({
      ...item,
      examId: params.id,
      addedAt: new Date().getTime()
    }));

    const combined = [...currentWrongs, ...savedWrongs];
    const uniqueWrongs = combined.filter((v: any, i: number, a: any[]) => 
      a.findIndex((t: any) => t.id === v.id && t.examId === v.examId) === i
    );

    localStorage.setItem("cbt-wrong-list", JSON.stringify(uniqueWrongs));
    localStorage.setItem("cbt-answers", JSON.stringify(answers));
    localStorage.setItem("cbt-time", formatTime(seconds));
    localStorage.setItem("cbt-id", params.id as string);
    router.push("/result");
  };

  const attemptedCount = answers ? answers.filter((a) => a !== 0).length : 0;
  const correctCount = answers ? answers.filter((ans, idx) => questions[idx] && ans === questions[idx].answer).length : 0;
  const accuracy = attemptedCount > 0 ? Math.round((correctCount / attemptedCount) * 100) : 0;

  if (questions.length === 0 || !q) return <div style={{ minHeight: "100vh", backgroundColor: "#121212", color: "white", padding: 20 }}>데이터 로딩 중...</div>;

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#121212", display: "flex", flexDirection: "column" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "20px", width: "100%", color: "#ffffff" }}>
        
        {/* 상단 헤더 & 현황판 생략 (기존과 동일) */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 15 }}>
          <div style={{fontSize: "1.2rem", fontWeight: "bold", color: "#ddd"}}>{params.id}회차</div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#FFD54F", border: "1px solid #FFD54F", padding: "5px 12px", borderRadius: "20px" }}>
              ⏳ {formatTime(seconds)}
            </div>
            <label style={{ fontSize: 14, display: "flex", alignItems: "center", cursor: "pointer", backgroundColor: isExamMode ? "#444" : "#eee", color: isExamMode ? "white" : "black", padding: "8px 16px", borderRadius: 20 }}>
              <input type="checkbox" checked={isExamMode} onChange={(e) => { setIsExamMode(e.target.checked); setResult(null); }} style={{ marginRight: 8 }} />
              {isExamMode ? "📝 실전" : "📖 학습"}
            </label>
          </div>
        </div>

        {/* 문제 영역 */}
        <div style={{ color: "#4FC3F7", marginBottom: 10, fontWeight: "bold" }}>Q{index + 1}.</div>
        <h2 style={{ fontSize: "1.4rem", lineHeight: "1.6", marginBottom: 20, color: "#ffffff", backgroundColor: "#1E1E1E", padding: "20px", borderRadius: "12px", border: "1px solid #333" }}>
          {q.question}
        </h2>

        {/* 4. [개선] 보기 버튼 영역 (학습 모드 시 시각적 피드백 강화) */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "30px" }}>
          {q.shuffledOptions?.map((opt: any, idx: number) => {
            const isSelected = answers[index] === opt.originalNum;
            
            let bgColor = "#2C2C2C";
            let borderColor = "#333";
            let textColor = "white";

            // 학습 모드에서 정답 확인 상태일 때의 색상 로직
            if (!isExamMode && result) {
              if (opt.originalNum === q.answer) {
                bgColor = "#1B5E20"; // 정답: 초록색
                borderColor = "#4CAF50";
              } else if (isSelected) {
                bgColor = "#3E2723"; // 오답 선택: 빨간색
                borderColor = "#FF5252";
              } else {
                bgColor = "#1E1E1E";
                textColor = "#666";
              }
            } else if (isSelected) {
              bgColor = "#1565C0";
              borderColor = "#64B5F6";
            }

            return (
              <div key={idx} onClick={() => handleSelectAnswer(opt.originalNum)}
                style={{
                  padding: "15px 20px", border: `2px solid ${borderColor}`,
                  borderRadius: "10px", cursor: "pointer", backgroundColor: bgColor,
                  color: textColor, fontSize: "1.1rem", display: "flex", alignItems: "center",
                  transition: "all 0.2s"
                }}
              >
                <span style={{ marginRight: "15px", width: "24px", height: "24px", borderRadius: "50%", border: "1px solid #555", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "0.8rem" }}>{idx + 1}</span>
                {opt.text}
              </div>
            );
          })}
        </div>

        {/* 해설 영역 및 하단 버튼 생략 (기존과 동일) */}
        {!isExamMode && result && (
          <div style={{ backgroundColor: result === "correct" ? "#1B5E20" : "#3E2723", color: "white", padding: 20, borderRadius: 10, marginBottom: 20, border: result === "correct" ? "1px solid #4CAF50" : "1px solid #FF5252" }}>
            <h3 style={{ margin: "0 0 10px 0", color: result === "correct" ? "#81C784" : "#FF5252" }}>
              {result === "correct" ? "✅ 정답입니다!" : `❌ 오답입니다. (정답: ${q.answer}번)`}
            </h3>
            <div style={{ fontSize: 16, lineHeight: "1.6" }}><strong>[해설]</strong> {q.explanation}</div>
          </div>
        )}

        <div style={{ display: "flex", gap: 10, justifyContent: "center", paddingBottom: "40px" }}>
          <button onClick={prev} disabled={index === 0} style={{ padding: "14px 28px", borderRadius: 8, border: "1px solid #555", background: "#333", color: "white", cursor: "pointer" }}>⬅️ 이전</button>
          <button onClick={index < questions.length - 1 ? next : submit} style={{ padding: "14px 28px", backgroundColor: index < questions.length - 1 ? "#2196F3" : "#4CAF50", color: "white", border: "none", borderRadius: 8, cursor: "pointer", fontWeight: "bold" }}>
            {index < questions.length - 1 ? "다음 문제 ➡️" : "최종 제출 🏁"}
          </button>
        </div>
      </div>
    </div>
  );
}