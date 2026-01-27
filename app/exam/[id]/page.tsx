"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import allQuestions from "../../../data";

export default function ExamPage() {
  const router = useRouter();
  const params = useParams();
  
  const questions = allQuestions[params.id as string];

  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [result, setResult] = useState<"correct" | "wrong" | null>(null);
  const [isExamMode, setIsExamMode] = useState(false);
  const [seconds, setSeconds] = useState(0);

  // 초기화
  useEffect(() => {
    if (questions) {
      setAnswers(Array(questions.length).fill(0));
    }
  }, [questions]);

  // 타이머
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // 📊 [추가된 로직] 통계 계산
  // 1. 푼 문제 수 (0이 아닌 답의 개수)
  const attemptedCount = answers ? answers.filter((a) => a !== 0).length : 0;
  
  // 2. 맞은 문제 수
  const correctCount = answers ? answers.filter((ans, idx) => questions && questions[idx] && ans === questions[idx].answer).length : 0;

  // 3. 현재 정답률
  const accuracy = attemptedCount > 0 ? Math.round((correctCount / attemptedCount) * 100) : 0;


  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60).toString().padStart(2, "0");
    const s = (secs % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  if (!questions) return <div style={{color:"white", padding:20}}>해당 회차 문제를 찾을 수 없습니다.</div>;
  
  const q = questions[index];
  if (!q) return <div style={{color:"white", padding:20}}>문제 로딩 중...</div>;

  const handleSelectAnswer = (number: number) => {
    if (!isExamMode && result) {
      next();
      return;
    }

    const newAnswers = [...answers];
    newAnswers[index] = number;
    setAnswers(newAnswers);

    if (isExamMode) {
      setResult(null);
      if (index < questions.length - 1) {
        setTimeout(() => setIndex((prev) => prev + 1), 150); 
      }
    } else {
      if (number === q.answer) setResult("correct");
      else setResult("wrong");
    }
  };

  // 키보드 이벤트
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['1', '2', '3', '4'].includes(e.key)) handleSelectAnswer(Number(e.key));
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [index, isExamMode, result]);

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

  const submit = () => {
    localStorage.setItem("cbt-answers", JSON.stringify(answers));
    localStorage.setItem("cbt-time", formatTime(seconds));
    localStorage.setItem("cbt-id", params.id as string);
    router.push("/result");
  };

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "20px", color: "#ffffff" }}>
      
      {/* 1. 상단 헤더 & 모드 & 타이머 */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 15 }}>
        <div style={{fontSize: "1.2rem", fontWeight: "bold"}}>
           {params.id}회차
        </div>
        
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#FFD54F", border: "1px solid #FFD54F", padding: "5px 12px", borderRadius: "20px" }}>
            ⏳ {formatTime(seconds)}
          </div>
          <label style={{ fontSize: 14, display: "flex", alignItems: "center", cursor: "pointer", backgroundColor: isExamMode ? "#444" : "#fff", color: isExamMode ? "white" : "black", padding: "8px 16px", borderRadius: 20 }}>
            <input type="checkbox" checked={isExamMode} onChange={(e) => { setIsExamMode(e.target.checked); setResult(null); }} style={{ marginRight: 8 }} />
            {isExamMode ? "📝 실전" : "📖 학습"}
          </label>
        </div>
      </div>

      {/* 2. [추가됨] 실시간 현황판 (푼 문제 / 맞은 개수 / 정답률) */}
      <div style={{ 
        backgroundColor: "#1E1E1E", padding: "15px", borderRadius: "12px", marginBottom: "25px",
        display: "flex", justifyContent: "space-around", alignItems: "center", border: "1px solid #333",
        boxShadow: "0 4px 6px rgba(0,0,0,0.3)"
      }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "0.9rem", color: "#aaa", marginBottom: "5px" }}>푼 문제</div>
          <div style={{ fontSize: "1.4rem", fontWeight: "bold" }}>
            <span style={{ color: "white" }}>{attemptedCount}</span>
            <span style={{ color: "#555", fontSize: "1rem" }}> / {questions.length}</span>
          </div>
        </div>

        <div style={{ width: "1px", height: "40px", backgroundColor: "#444" }}></div>

        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "0.9rem", color: "#aaa", marginBottom: "5px" }}>맞은 개수</div>
          <div style={{ fontSize: "1.4rem", fontWeight: "bold", color: "#4CAF50" }}>
            {correctCount}개
          </div>
        </div>

        <div style={{ width: "1px", height: "40px", backgroundColor: "#444" }}></div>

        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "0.9rem", color: "#aaa", marginBottom: "5px" }}>현재 정답률</div>
          <div style={{ fontSize: "1.4rem", fontWeight: "bold", color: "#2196F3" }}>
            {accuracy}%
          </div>
        </div>
      </div>

      {/* 3. 문제 영역 */}
      <div style={{ color: "#aaa", marginBottom: 10 }}>문제 {index + 1}</div>
      <h2 style={{ fontSize: "1.4rem", lineHeight: "1.5", marginBottom: 20, color: "#ffffff" }}>{q.question}</h2>

      {q.image && (
        <div style={{ marginBottom: 20, border: "1px solid #555", borderRadius: 8, padding: 10, display: "flex", justifyContent: "center", background: "#000" }}>
          <img src={q.image} alt="문제이미지" style={{ maxWidth: "100%", maxHeight: "400px" }} />
        </div>
      )}

      {/* 4. 보기 버튼 영역 */}
      <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "30px" }}>
        {q.options?.map((option: string, idx: number) => {
          const num = idx + 1;
          const isSelected = answers[index] === num;
          return (
            <div key={idx} onClick={() => handleSelectAnswer(num)}
              style={{
                padding: "15px 20px", border: isSelected ? "3px solid #2196F3" : "3px solid transparent",
                borderRadius: "10px", cursor: "pointer", backgroundColor: isSelected ? "#E3F2FD" : "white",
                color: isSelected ? "#1976D2" : "black", fontSize: "1.1rem", display: "flex", alignItems: "center",
                fontWeight: isSelected ? "bold" : "normal"
              }}
            >
              <span style={{ marginRight: "12px" }}>{num}.</span>{option}
            </div>
          );
        })}
      </div>

      {/* 5. 해설 영역 */}
      {!isExamMode && result && (
        <div style={{ backgroundColor: result === "correct" ? "#1B5E20" : "#B71C1C", color: "white", padding: 20, borderRadius: 10, marginBottom: 20 }}>
          <h3 style={{ margin: "0 0 10px 0", color: result === "correct" ? "#81C784" : "#FF8A80" }}>
            {result === "correct" ? "✅ 정답입니다!" : `❌ 오답입니다. (정답: ${q.answer}번)`}
          </h3>
          <div style={{ fontSize: 16, lineHeight: "1.6" }}><strong>[해설]</strong> {q.explanation}</div>
          <div style={{ marginTop: 10, color: "#ddd", fontSize: 14 }}>👉 아무 번호나 누르면 다음 문제로 넘어갑니다.</div>
        </div>
      )}

      {/* 6. 하단 버튼 */}
      <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
        <button onClick={prev} disabled={index === 0} style={{ padding: "12px 24px", borderRadius: 5, border: "none", background: "#333", color: "white", cursor: "pointer" }}>⬅️ 이전</button>
        {index < questions.length - 1 ? (
          <button onClick={next} style={{ padding: "12px 24px", backgroundColor: "#2196F3", color: "white", border: "none", borderRadius: 5, cursor: "pointer" }}>다음 문제 ➡️</button>
        ) : (
          <button onClick={submit} style={{ padding: "12px 24px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: 5, cursor: "pointer" }}>최종 제출 🏁</button>
        )}
      </div>
    </div>
  );
}