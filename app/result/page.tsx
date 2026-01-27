"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import allQuestions from "../../data"; // 전체 데이터 불러오기

export default function ResultPage() {
  const router = useRouter();
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [wrongCount, setWrongCount] = useState(0);
  const [timeTaken, setTimeTaken] = useState("");
  const [questions, setQuestions] = useState<any[]>([]); // 현재 푼 문제들

  useEffect(() => {
    const savedAnswers = localStorage.getItem("cbt-answers");
    const savedTime = localStorage.getItem("cbt-time");
    const savedId = localStorage.getItem("cbt-id"); // 저장된 시험 ID (예: 2021-1)

    if (savedTime) setTimeTaken(savedTime);
    
    // ID에 맞는 문제 데이터 로딩
    if (savedId && allQuestions[savedId]) {
      setQuestions(allQuestions[savedId]);
    }

    if (savedAnswers && savedId && allQuestions[savedId]) {
      const parsedAnswers = JSON.parse(savedAnswers);
      const currentQuestions = allQuestions[savedId];
      setUserAnswers(parsedAnswers);

      let correctCount = 0;
      parsedAnswers.forEach((ans: number, index: number) => {
        if (currentQuestions[index] && ans === currentQuestions[index].answer) {
          correctCount++;
        }
      });

      const calculatedScore = Math.round((correctCount / currentQuestions.length) * 100);
      setScore(calculatedScore);
      setWrongCount(currentQuestions.length - correctCount);
    }
  }, []);

  const isPass = score >= 60;

  if (questions.length === 0) return <div style={{padding:20, color:"white"}}>결과를 불러오는 중...</div>;

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 20px", fontFamily: "sans-serif", color: "white" }}>
      <h1 style={{ textAlign: "center", marginBottom: 20 }}>시험 결과</h1>
      
      <div style={{ 
        textAlign: "center", padding: 30, borderRadius: 15, marginBottom: 40,
        backgroundColor: "#1E1E1E", border: `2px solid ${isPass ? "#4CAF50" : "#F44336"}`
      }}>
        <div style={{ fontSize: 20, color: "#aaa", marginBottom: 10 }}>당신의 점수는?</div>
        <div style={{ fontSize: 60, fontWeight: "bold", color: isPass ? "#4CAF50" : "#FF5252" }}>{score}점</div>
        <div style={{ fontSize: 24, fontWeight: "bold", marginTop: 10, color: "white" }}>
          {isPass ? "🎉 합격입니다!" : "😢 불합격입니다."}
        </div>
        <p style={{ marginTop: 15, color: "#ddd" }}>
          ⏱️ 소요 시간: <strong>{timeTaken}</strong> <br/>
          총 {questions.length}문제 중 {questions.length - wrongCount}문제 정답
        </p>
      </div>

      {wrongCount > 0 && (
        <div style={{ marginTop: 40 }}>
          <h2 style={{ borderBottom: "2px solid #555", paddingBottom: 10, color: "#fff" }}>📝 오답 노트</h2>
          
          {questions.map((q, index) => {
            const myAnswer = userAnswers[index];
            const isWrong = myAnswer !== q.answer;
            if (!isWrong) return null;

            return (
              <div key={q.id} style={{ 
                borderRadius: 10, padding: 20, marginBottom: 20, 
                backgroundColor: "white", color: "black", border: "1px solid #ddd"
              }}>
                <h4 style={{ margin: "0 0 10px 0", color: "#d32f2f" }}>
                  문제 {index + 1}번 (내가 쓴 답: {myAnswer || "미입력"}번)
                </h4>
                <div style={{ fontWeight: "bold", marginBottom: "10px", fontSize: "1.1rem" }}>{q.question}</div>
                {q.image && (<div style={{marginBottom:10, border:"1px solid #eee", padding:5, display:"inline-block"}}><img src={q.image} alt="문제" style={{maxWidth:"200px"}}/></div>)}
                <div style={{ marginTop: 10 }}>
                  <div style={{ fontSize: 16, fontWeight: "bold", color: "green", marginBottom: 5 }}>✅ 정답: {q.answer}번</div>
                  <div style={{ backgroundColor: "#f0f0f0", padding: 10, borderRadius: 5, fontSize: 15, lineHeight: "1.5" }}><strong>[해설]</strong> {q.explanation}</div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div style={{ display: "flex", gap: 10, justifyContent: "center", marginTop: 40, paddingBottom: 50 }}>
        <button onClick={() => router.push("/")} style={{ padding: "15px 30px", fontSize: 18, borderRadius: 8, border: "none", background: "#333", color: "white", cursor: "pointer" }}>🏠 메인으로</button>
      </div>
    </div>
  );
}