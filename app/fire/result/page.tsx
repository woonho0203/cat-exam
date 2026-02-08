"use client";

import { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
// ✅ 메인 페이지와 동일한 경로로 수정 (Vercel 빌드 에러 해결 핵심)
import allQuestions from "../../../data/fire";

export default function ResultPage() {
  const router = useRouter();
  const [data, setData] = useState<any>(null);
  const [fontSize, setFontSize] = useState(1.0);

  useEffect(() => {
    // ✅ 메인 페이지의 submit() 로직에서 사용하는 키값으로 변경 (fire-)
    const savedAnswers = localStorage.getItem("fire-answers");
    const savedTime = localStorage.getItem("fire-time") || "00:00";
    const savedId = localStorage.getItem("fire-id") || "";
    
    const savedFontSize = localStorage.getItem("cbt-font-size");
    if (savedFontSize) setFontSize(parseFloat(savedFontSize));

    let questions = [];
    // ✅ 데이터 로드 로직: allQuestions 가 존재하고 savedId 가 있을 때 매칭
    if (allQuestions && savedId) {
      questions = allQuestions[savedId] || [];
    }

    if (savedAnswers && questions.length > 0) {
      setData({
        id: savedId,
        answers: JSON.parse(savedAnswers),
        questions: questions,
        time: savedTime
      });
    }
  }, []);

  const handleFontSize = (delta: number) => {
    setFontSize(prev => {
      const newSize = Math.min(Math.max(prev + delta, 0.8), 1.5);
      localStorage.setItem("cbt-font-size", newSize.toString());
      return newSize;
    });
  };

  // ✅ 과목별 분석: 소방설비기사 기준 (4과목, 과목당 20문제)
  const subjectAnalysis = useMemo(() => {
    if (!data) return [];
    return [0, 1, 2, 3].map(i => {
      const subAns = data.answers.slice(i * 20, (i + 1) * 20);
      const subQue = data.questions.slice(i * 20, (i + 1) * 20);
      const corrects = subAns.filter((ans: any, idx: number) => subQue[idx] && ans === subQue[idx].answer).length;
      const score = corrects * 5; 
      return { subject: i + 1, score, isFail: score < 40 };
    });
  }, [data]);

  const totalScore = useMemo(() => {
    if (subjectAnalysis.length === 0) return 0;
    const sum = subjectAnalysis.reduce((acc, cur) => acc + cur.score, 0);
    return Math.round(sum / 4); // 4과목 평균
  }, [subjectAnalysis]);

  const isPass = useMemo(() => {
    if (subjectAnalysis.length === 0) return false;
    return totalScore >= 60 && subjectAnalysis.every(s => !s.isFail);
  }, [totalScore, subjectAnalysis]);

  const wrongQuestions = useMemo(() => {
    if (!data) return [];
    return data.questions.filter((q: any, idx: number) => data.answers[idx] !== q.answer);
  }, [data]);

  if (!data) return (
    <div style={{ minHeight: "100vh", backgroundColor: "#121212", color: "white", display: "flex", justifyContent: "center", alignItems: "center" }}>
      결과를 분석하는 중...
    </div>
  );

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#121212", color: "white", padding: "40px 20px" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <h1 style={{ textAlign: "center", marginBottom: 30, fontWeight: "bold", color: "#4FC3F7" }}>시험 결과 보고서</h1>
        
        {/* 상단 총점 박스 */}
        <div style={{ 
          textAlign: "center", padding: 40, borderRadius: 20, marginBottom: 30,
          backgroundColor: "#1E1E1E", border: `3px solid ${isPass ? "#4CAF50" : "#FF5252"}`,
          boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
        }}>
          <div style={{ fontSize: 20, color: "#aaa", marginBottom: 10 }}>평균 점수</div>
          <div style={{ fontSize: 72, fontWeight: "bold", color: isPass ? "#4CAF50" : "#FF5252", lineHeight: 1 }}>{totalScore}점</div>
          <div style={{ fontSize: 28, fontWeight: "bold", marginTop: 20 }}>
            {isPass ? "🎉 최종 합격입니다!" : "😢 불합격입니다."}
          </div>
          <p style={{ marginTop: 20, color: "#aaa" }}>
            ⏱️ 소요 시간: <strong style={{color: "white"}}>{data.time}</strong> | 회차: {data.id}
          </p>
        </div>

        {/* 과목별 성적 타일 (4과목 배치) */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px", marginBottom: 40 }}>
          {subjectAnalysis.map((s) => (
            <div key={s.subject} style={{ 
              padding: "15px", backgroundColor: "#1E1E1E", borderRadius: "12px", textAlign: "center",
              border: `1px solid ${s.isFail ? "#FF5252" : "#333"}`
            }}>
              <div style={{ fontSize: "0.8rem", color: "#aaa", marginBottom: "5px" }}>{s.subject}과목</div>
              <div style={{ fontSize: "1.4rem", fontWeight: "bold", color: s.isFail ? "#FF5252" : "white" }}>{s.score}점</div>
              {s.isFail && <div style={{ fontSize: "0.7rem", color: "#FF5252", marginTop: "3px" }}>과락</div>}
            </div>
          ))}
        </div>

        {/* 오답 리스트 영역 */}
        {wrongQuestions.length > 0 && (
          <div style={{ marginTop: 50 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #333", paddingBottom: 15, marginBottom: 30 }}>
              <h2 style={{ color: "#FFD54F", margin: 0 }}>📝 틀린 문제 다시보기 ({wrongQuestions.length}문항)</h2>
              
              <div style={{ display: "flex", gap: "8px", alignItems: "center", backgroundColor: "#333", padding: "6px 12px", borderRadius: "20px" }}>
                <button onClick={() => handleFontSize(-0.1)} style={{ background: "none", border: "none", color: "white", cursor: "pointer", padding: "0 5px", fontWeight: "bold", fontSize: "1rem" }}>A-</button>
                <span style={{ fontSize: "0.8rem", color: "#4FC3F7", minWidth: "40px", textAlign: "center" }}>{Math.round(fontSize * 100)}%</span>
                <button onClick={() => handleFontSize(0.1)} style={{ background: "none", border: "none", color: "white", cursor: "pointer", padding: "0 5px", fontWeight: "bold", fontSize: "1rem" }}>A+</button>
              </div>
            </div>
            
            {data.questions.map((q: any, index: number) => {
              const myAnswer = data.answers[index];
              const isWrong = myAnswer !== q.answer;
              if (!isWrong) return null;

              return (
                <div key={index} style={{ 
                  borderRadius: 15, padding: 25, marginBottom: 25, 
                  backgroundColor: "#1E1E1E", border: "1px solid #333"
                }}>
                  <h4 style={{ margin: "0 0 15px 0", color: "#FF5252", fontSize: `${1.1 * fontSize}rem` }}>
                    문제 {index + 1}번 (내가 선택한 답: {myAnswer || "미입력"}번)
                  </h4>
                  <div style={{ fontWeight: "bold", marginBottom: 20, fontSize: `${1.2 * fontSize}rem`, lineHeight: "1.6", wordBreak: "keep-all" }}>{q.question}</div>
                  
                  {q.image && (
                    <div style={{ marginBottom: 20, border: "1px solid #444", borderRadius: 8, padding: 10, display: "inline-block", background: "#000" }}>
                      <img src={q.image} alt="문제 이미지" style={{ maxWidth: "100%", maxHeight: "300px" }}/>
                    </div>
                  )}

                  <div style={{ marginTop: 20 }}>
                    <div style={{ fontSize: `${1.1 * fontSize}rem`, fontWeight: "bold", color: "#4CAF50", marginBottom: 10 }}>✅ 정답: {q.answer}번</div>
                    <div style={{ backgroundColor: "#2C1A1A", padding: 20, borderRadius: 10, fontSize: `${1.0 * fontSize}rem`, lineHeight: "1.6", color: "#FFAB91", border: "1px solid #4D2C2C" }}>
                      <strong>[해설]</strong> {q.explanation}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <div style={{ display: "flex", gap: 15, justifyContent: "center", marginTop: 50, paddingBottom: 80 }}>
          <button onClick={() => router.push("/")} style={{ flex: 1, maxWidth: "200px", padding: "18px", fontSize: "1.1rem", fontWeight: "bold", borderRadius: "12px", border: "1px solid #444", background: "#333", color: "white", cursor: "pointer" }}>🏠 홈으로</button>
          <button onClick={() => router.push("/fire/wrong-notes")} style={{ flex: 1, maxWidth: "200px", padding: "18px", fontSize: "1.1rem", fontWeight: "bold", borderRadius: "12px", border: "none", background: "#FF5252", color: "white", cursor: "pointer" }}>📝 오답 노트</button>
        </div>
      </div>
    </div>
  );
}