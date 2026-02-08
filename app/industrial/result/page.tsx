"use client";

import { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
// ✅ 경로 주의: app/industrial/result/page.tsx 기준 (3번 나가서 root의 data 폴더)
import allQuestions from "../../../data";

export default function ResultPage() {
  const router = useRouter();
  const [data, setData] = useState<any>(null);
  const [fontSize, setFontSize] = useState(1.0);

  useEffect(() => {
    // MockExamPage에서 저장한 키값(cbt-)과 동일하게 가져오기
    const savedAnswers = localStorage.getItem("cbt-answers");
    const savedTime = localStorage.getItem("cbt-time") || "00:00";
    const savedId = localStorage.getItem("cbt-id") || "";
    
    const savedFontSize = localStorage.getItem("cbt-font-size");
    if (savedFontSize) setFontSize(parseFloat(savedFontSize));

    let questions = [];
    if (savedId === "랜덤 모의고사") {
      questions = JSON.parse(localStorage.getItem("cbt-mock-questions") || "[]");
    } else if (allQuestions && savedId) {
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

  // ✅ 산업안전기사 6과목 분석 로직 (120문제 / 20문제씩 6그룹)
  const subjectAnalysis = useMemo(() => {
    if (!data) return [];
    return [0, 1, 2, 3, 4, 5].map(i => {
      const subAns = data.answers.slice(i * 20, (i + 1) * 20);
      const subQue = data.questions.slice(i * 20, (i + 1) * 20);
      const corrects = subAns.filter((ans: any, idx: number) => subQue[idx] && ans === subQue[idx].answer).length;
      const score = corrects * 5; // 20문제 * 5점 = 100점
      return { subject: i + 1, score, isFail: score < 40 };
    });
  }, [data]);

  const totalScore = useMemo(() => {
    if (subjectAnalysis.length === 0) return 0;
    const sum = subjectAnalysis.reduce((acc, cur) => acc + cur.score, 0);
    return Math.round(sum / 6); // 6과목 평균
  }, [subjectAnalysis]);

  const isPass = useMemo(() => {
    if (subjectAnalysis.length === 0) return false;
    // 평균 60점 이상 & 과락(40점 미만) 없음
    return totalScore >= 60 && subjectAnalysis.every(s => !s.isFail);
  }, [totalScore, subjectAnalysis]);

  const wrongQuestions = useMemo(() => {
    if (!data) return [];
    return data.questions.filter((q: any, idx: number) => data.answers[idx] !== q.answer);
  }, [data]);

  if (!data) return (
    <div style={{ minHeight: "100vh", backgroundColor: "#121212", color: "white", display: "flex", justifyContent: "center", alignItems: "center" }}>
      결과 데이터를 불러오는 중...
    </div>
  );

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#121212", color: "white", padding: "40px 20px" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <h1 style={{ textAlign: "center", marginBottom: 30, fontWeight: "bold", color: "#4FC3F7" }}>👷 산업안전기사 결과 보고서</h1>
        
        {/* 점수 요약 섹션 */}
        <div style={{ 
          textAlign: "center", padding: "40px 20px", borderRadius: 20, marginBottom: 30,
          backgroundColor: "#1E1E1E", border: `3px solid ${isPass ? "#4CAF50" : "#FF5252"}`,
          boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
        }}>
          <div style={{ fontSize: 18, color: "#aaa", marginBottom: 10 }}>평균 점수</div>
          <div style={{ fontSize: 80, fontWeight: "bold", color: isPass ? "#4CAF50" : "#FF5252", lineHeight: 1 }}>{totalScore}점</div>
          <div style={{ fontSize: 24, fontWeight: "bold", marginTop: 20 }}>
            {isPass ? "🎉 축하합니다! 합격권입니다." : "😢 아쉽지만 불합격입니다."}
          </div>
          <p style={{ marginTop: 15, color: "#888" }}>
            ⏱️ 소요 시간: {data.time} | 📝 {data.id}
          </p>
        </div>

        {/* 과목별 성적 (6과목 2열/3열 그리드) */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", 
          gap: "12px", marginBottom: 40 
        }}>
          {subjectAnalysis.map((s) => (
            <div key={s.subject} style={{ 
              padding: "20px 10px", backgroundColor: "#1E1E1E", borderRadius: "12px", textAlign: "center",
              border: `1px solid ${s.isFail ? "#FF5252" : "#333"}`,
              boxShadow: s.isFail ? "inset 0 0 10px rgba(255,82,82,0.1)" : "none"
            }}>
              <div style={{ fontSize: "0.75rem", color: "#aaa", marginBottom: "8px" }}>제 {s.subject}과목</div>
              <div style={{ fontSize: "1.6rem", fontWeight: "bold", color: s.isFail ? "#FF5252" : "white" }}>{s.score}점</div>
              {s.isFail && <div style={{ fontSize: "0.7rem", color: "#FF5252", marginTop: "5px", fontWeight: "bold" }}>과락 경고</div>}
            </div>
          ))}
        </div>

        {/* 오답 보기 영역 */}
        {wrongQuestions.length > 0 && (
          <div style={{ marginTop: 50 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #333", paddingBottom: 15, marginBottom: 30 }}>
              <h2 style={{ color: "#FFD54F", margin: 0, fontSize: "1.3rem" }}>📝 틀린 문제 다시보기 ({wrongQuestions.length})</h2>
              
              <div style={{ display: "flex", gap: "8px", alignItems: "center", backgroundColor: "#333", padding: "6px 12px", borderRadius: "20px" }}>
                <button onClick={() => handleFontSize(-0.1)} style={{ background: "none", border: "none", color: "white", cursor: "pointer", fontSize: "1.1rem" }}>-</button>
                <span style={{ fontSize: "0.8rem", color: "#4FC3F7", minWidth: "40px", textAlign: "center" }}>{Math.round(fontSize * 100)}%</span>
                <button onClick={() => handleFontSize(0.1)} style={{ background: "none", border: "none", color: "white", cursor: "pointer", fontSize: "1.1rem" }}>+</button>
              </div>
            </div>
            
            {/* 오답 리스트 반복 */}
            {data.questions.map((q: any, index: number) => {
              const myAnswer = data.answers[index];
              const isWrong = myAnswer !== q.answer;
              if (!isWrong) return null;

              return (
                <div key={index} style={{ 
                  borderRadius: 15, padding: 25, marginBottom: 25, 
                  backgroundColor: "#1E1E1E", border: "1px solid #333"
                }}>
                  <div style={{ color: "#FF5252", fontSize: "0.9rem", marginBottom: 10 }}>문제 {index + 1}번 (선택: {myAnswer || "미입력"})</div>
                  <div style={{ fontWeight: "bold", marginBottom: 20, fontSize: `${1.1 * fontSize}rem`, lineHeight: "1.6" }}>{q.question}</div>
                  
                  {q.image && (
                    <div style={{ marginBottom: 20, background: "#000", padding: 10, borderRadius: 8 }}>
                      <img src={q.image} alt="문제 이미지" style={{ maxWidth: "100%", maxHeight: "250px" }}/>
                    </div>
                  )}

                  <div style={{ borderTop: "1px dashed #444", paddingTop: 20 }}>
                    <div style={{ fontSize: `${1.1 * fontSize}rem`, fontWeight: "bold", color: "#4CAF50", marginBottom: 10 }}>✅ 정답: {q.answer}번</div>
                    <div style={{ backgroundColor: "#2C1A1A", padding: 15, borderRadius: 10, fontSize: `${fontSize}rem`, color: "#FFAB91", lineHeight: "1.5" }}>
                      <strong>[해설]</strong> {q.explanation}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* 푸터 버튼 */}
        <div style={{ display: "flex", gap: 15, marginTop: 50, paddingBottom: 80 }}>
          <button onClick={() => router.push("/")} style={{ flex: 1, padding: "18px", borderRadius: "12px", border: "1px solid #444", background: "#333", color: "white", cursor: "pointer", fontWeight: "bold" }}>🏠 메인으로</button>
          <button onClick={() => router.push("/industrial/wrong-notes")} style={{ flex: 1, padding: "18px", borderRadius: "12px", border: "none", background: "#4FC3F7", color: "#000", cursor: "pointer", fontWeight: "bold" }}>📝 오답노트</button>
        </div>
      </div>
    </div>
  );
}