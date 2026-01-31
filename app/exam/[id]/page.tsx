"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter, useParams } from "next/navigation";
import allQuestions from "../../../data";

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

  const questions = useMemo(() => {
    if (!originalQuestions) return [];
    return originalQuestions.map((q: any) => ({
      ...q,
      shuffledOptions: shuffleArray(q.options.map((text: string, i: number) => ({ text, originalNum: i + 1 })))
    }));
  }, [originalQuestions]);

  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [result, setResult] = useState<"correct" | "wrong" | null>(null);
  const [isExamMode, setIsExamMode] = useState(false);
  const [seconds, setSeconds] = useState(0);

  const q = questions[index];
  const currentCorrectNum = useMemo(() => q ? q.shuffledOptions.findIndex((opt: any) => opt.originalNum === q.answer) + 1 : 0, [q]);

  useEffect(() => {
    if (questions.length > 0) setAnswers(Array(questions.length).fill(0));
    const timer = setInterval(() => setSeconds((prev) => prev + 1), 1000);
    return () => clearInterval(timer);
  }, [questions]);

  // 📊 현재 과목 실시간 채점 로직
  const subjectStats = useMemo(() => {
    const subjectIdx = Math.floor(index / 20);
    const start = subjectIdx * 20;
    const end = start + 20;
    const subAnswers = answers.slice(start, end);
    const subQuestions = questions.slice(start, end);
    
    const attempted = subAnswers.filter(a => a !== 0).length;
    const corrects = subAnswers.filter((ans, i) => subQuestions[i] && ans === subQuestions[i].answer).length;
    return { subjectIdx: subjectIdx + 1, attempted, corrects, wrongs: attempted - corrects };
  }, [index, answers, questions]);

  const handleSelectAnswer = (originalNum: number) => {
    const newAnswers = [...answers];
    newAnswers[index] = originalNum;
    setAnswers(newAnswers);
    if (isExamMode) {
      if (index < questions.length - 1) setTimeout(() => setIndex(index + 1), 150);
    } else {
      setResult(originalNum === q.answer ? "correct" : "wrong");
    }
  };

  const next = () => { if (index < questions.length - 1) { setIndex(index + 1); setResult(null); } };
  const prev = () => { if (index > 0) { setIndex(index - 1); setResult(null); } };

  // 키보드 제어
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

  if (!q) return <div style={{ minHeight: "100vh", backgroundColor: "#121212", color: "white", display: "flex", justifyContent: "center", alignItems: "center" }}>로딩 중...</div>;

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#121212", color: "white", padding: "20px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        {/* 상단바 */}
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 15 }}>
          <span style={{ fontWeight: "bold" }}>{params.id}회차</span>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <span style={{ color: "#FFD54F" }}>⏳ {Math.floor(seconds/60)}:{(seconds%60).toString().padStart(2,'0')}</span>
            <button onClick={() => setIsExamMode(!isExamMode)} style={{ padding: "5px 15px", borderRadius: 20, border: "none", backgroundColor: isExamMode ? "#444" : "#eee" }}>
              {isExamMode ? "실전모드" : "학습모드"}
            </button>
          </div>
        </div>

        {/* 문제 영역 */}
        <h2 style={{ backgroundColor: "#1E1E1E", padding: "20px", borderRadius: "12px", border: "1px solid #333", marginBottom: 20 }}>
          <span style={{ color: "#4FC3F7", marginRight: 10 }}>Q{index + 1}.</span>{q.question}
        </h2>

        {/* 보기 영역 */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 30 }}>
          {q.shuffledOptions.map((opt: any, i: number) => {
            const isSelected = answers[index] === opt.originalNum;
            let bgColor = "#2C2C2C";
            if (!isExamMode && result) {
              if (opt.originalNum === q.answer) bgColor = "#1B5E20";
              else if (isSelected) bgColor = "#3E2723";
            } else if (isSelected) bgColor = "#1565C0";
            return (
              <div key={i} onClick={() => handleSelectAnswer(opt.originalNum)} style={{ padding: "15px", borderRadius: "10px", backgroundColor: bgColor, border: "1px solid #333", cursor: "pointer" }}>
                {i + 1}. {opt.text}
              </div>
            );
          })}
        </div>

        {/* 🔥 [수정된 정답/해설창] 과목별 성적 추가 */}
        {!isExamMode && result && (
          <div style={{ backgroundColor: "#1E1E1E", padding: 25, borderRadius: 15, border: `1px solid ${result === "correct" ? "#4CAF50" : "#FF5252"}`, marginBottom: 30 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 15 }}>
              <div>
                <h3 style={{ margin: 0, color: result === "correct" ? "#81C784" : "#FF5252" }}>
                  {result === "correct" ? "✅ 정답입니다!" : `❌ 오답 (정답: ${currentCorrectNum}번)`}
                </h3>
              </div>
              {/* 실시간 과목 성적 배지 */}
              <div style={{ textAlign: "right", backgroundColor: "#333", padding: "8px 15px", borderRadius: "10px", fontSize: "0.9rem" }}>
                <div style={{ color: "#aaa", fontSize: "0.75rem" }}>{subjectStats.subjectIdx}과목 현재 성적</div>
                <div>
                  <span style={{ color: "#4CAF50" }}>👍 {subjectStats.corrects}</span> / 
                  <span style={{ color: "#FF5252" }}> 👎 {subjectStats.wrongs}</span>
                </div>
              </div>
            </div>
            <div style={{ lineHeight: "1.6", color: "#ddd" }}><strong>[해설]</strong> {q.explanation}</div>
            <p style={{ textAlign: "center", color: "#666", marginTop: 15, fontSize: "0.8rem" }}>[Enter]를 눌러 다음 문제로</p>
          </div>
        )}

        {/* 하단 버튼 */}
        <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
          <button onClick={prev} style={{ padding: "12px 25px", background: "#333", color: "white", borderRadius: 8, border: "none" }}>이전</button>
          <button onClick={index === questions.length - 1 ? () => router.push("/result") : next} style={{ padding: "12px 25px", background: "#2196F3", color: "white", borderRadius: 8, border: "none" }}>
            {index === questions.length - 1 ? "최종 제출" : "다음 문제"}
          </button>
        </div>
      </div>
    </div>
  );
}