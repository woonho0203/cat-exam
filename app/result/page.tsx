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
    const savedId = localStorage.getItem("cbt-id");

    if (savedTime) setTimeTaken(savedTime);
    
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

  if (questions.length === 0) return (
    <div style={{ minHeight: "100vh", backgroundColor: "#121212", color: "white", display: "flex", justifyContent: "center", alignItems: "center" }}>
      결과를 불러오는 중...
    </div>
  );

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#121212", color: "white", padding: "40px 20px" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <h1 style={{ textAlign: "center", marginBottom: 30, fontWeight: "bold", color: "#4FC3F7" }}>시험 결과</h1>
        
        {/* 상단 점수 박스 */}
        <div style={{ 
          textAlign: "center", padding: 40, borderRadius: 20, marginBottom: 40,
          backgroundColor: "#1E1E1E", border: `2px solid ${isPass ? "#4CAF50" : "#FF5252"}`,
          boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
        }}>
          <div style={{ fontSize: 20, color: "#aaa", marginBottom: 10 }}>최종 점수</div>
          <div style={{ fontSize: 72, fontBlack: "bold", color: isPass ? "#4CAF50" : "#FF5252", lineHeight: 1 }}>{score}점</div>
          <div style={{ fontSize: 28, fontWeight: "bold", marginTop: 20 }}>
            {isPass ? "🎉 합격입니다!" : "😢 불합격입니다."}
          </div>
          <p style={{ marginTop: 20, color: "#aaa", fontSize: "1.1rem" }}>
            ⏱️ 소요 시간: <strong style={{color: "#white"}}>{timeTaken}</strong> <br/>
            총 {questions.length}문제 중 <span style={{color: "#4CAF50"}}>{questions.length - wrongCount}</span>문제 정답
          </p>
        </div>

        {/* 오답 리스트 영역 */}
        {wrongCount > 0 && (
          <div style={{ marginTop: 50 }}>
            <h2 style={{ borderBottom: "1px solid #333", paddingBottom: 15, marginBottom: 30, color: "#FFD54F" }}>📝 틀린 문제 다시보기</h2>
            
            {questions.map((q, index) => {
              const myAnswer = userAnswers[index];
              const isWrong = myAnswer !== q.answer;
              if (!isWrong) return null;

              return (
                <div key={q.id} style={{ 
                  borderRadius: 15, padding: 25, marginBottom: 25, 
                  backgroundColor: "#1E1E1E", border: "1px solid #333"
                }}>
                  <h4 style={{ margin: "0 0 15px 0", color: "#FF5252", fontSize: "1.1rem" }}>
                    문제 {index + 1}번 (내가 선택한 답: {myAnswer || "미입력"}번)
                  </h4>
                  <div style={{ fontWeight: "bold", marginBottom: 20, fontSize: "1.2rem", lineHeight: "1.6" }}>{q.question}</div>
                  
                  {q.image && (
                    <div style={{ marginBottom: 20, border: "1px solid #444", borderRadius: 8, padding: 10, display: "inline-block", background: "#000" }}>
                      <img src={q.image} alt="문제 이미지" style={{ maxWidth: "100%", maxHeight: "300px" }}/>
                    </div>
                  )}

                  <div style={{ marginTop: 20 }}>
                    <div style={{ fontSize: "1.1rem", fontWeight: "bold", color: "#4CAF50", marginBottom: 10 }}>✅ 정답: {q.answer}번</div>
                    <div style={{ backgroundColor: "#2C1A1A", padding: 20, borderRadius: 10, fontSize: "1rem", lineHeight: "1.6", color: "#FFAB91", border: "1px solid #4D2C2C" }}>
                      <strong>[해설]</strong> {q.explanation}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* 하단 이동 버튼 */}
        <div style={{ display: "flex", gap: 15, justifyContent: "center", marginTop: 50, paddingBottom: 50 }}>
          <button onClick={() => router.push("/")} style={{ flex: 1, maxWidth: "200px", padding: "18px", fontSize: "1.1rem", fontWeight: "bold", borderRadius: "12px", border: "1px solid #444", background: "#333", color: "white", cursor: "pointer" }}>🏠 홈으로</button>
          <button onClick={() => router.push("/wrong-notes")} style={{ flex: 1, maxWidth: "200px", padding: "18px", fontSize: "1.1rem", fontWeight: "bold", borderRadius: "12px", border: "none", background: "#FF5252", color: "white", cursor: "pointer" }}>📝 오답 노트</button>
        </div>
      </div>
    </div>
  );
}