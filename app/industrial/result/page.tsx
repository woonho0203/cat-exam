"use client";

import { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
// ✅ 데이터 경로 확인
import allQuestionsData from "../../../data";

export default function ResultPage() {
  const router = useRouter();
  const [data, setData] = useState<any>(null);
  const [fontSize, setFontSize] = useState(1.0);
  const [errorInfo, setErrorInfo] = useState<string | null>(null);

  useEffect(() => {
    const savedAnswersStr = localStorage.getItem("cbt-answers");
    const savedTime = localStorage.getItem("cbt-time") || "00:00";
    const savedId = localStorage.getItem("cbt-id") || ""; // 예: "2025-1"
    const savedFontSize = localStorage.getItem("cbt-font-size");
    
    if (savedFontSize) setFontSize(parseFloat(savedFontSize));

    if (!savedAnswersStr || !savedId) {
      setErrorInfo("시험 응시 기록을 찾을 수 없습니다.");
      return;
    }

    const savedAnswers = JSON.parse(savedAnswersStr);
    const questionsRepo = (allQuestionsData as any).default || allQuestionsData;
    let questions = [];

    if (savedId === "랜덤 모의고사") {
      questions = JSON.parse(localStorage.getItem("cbt-mock-questions") || "[]");
    } else {
      // ✅ [핵심 수정] 하이픈(-)을 언더바(_)로 변환하여 매칭 시도
      const normalizedId = savedId.replace("-", "_"); 
      questions = questionsRepo[normalizedId] || questionsRepo[savedId] || [];

      // 만약 그래도 없다면 모든 특수문자를 제거하고 숫자만으로 매칭 시도
      if (questions.length === 0) {
        const pureId = savedId.replace(/[^0-9]/g, "");
        const matchedKey = Object.keys(questionsRepo).find(key => key.replace(/[^0-9]/g, "") === pureId);
        if (matchedKey) questions = questionsRepo[matchedKey];
      }
    }

    if (questions.length > 0) {
      setData({
        id: savedId,
        answers: savedAnswers,
        questions: questions,
        time: savedTime
      });
    } else {
      setErrorInfo(`'${savedId}'에 해당하는 데이터를 찾을 수 없습니다. (데이터 파일의 키값을 확인해주세요: 예: 2024_1)`);
    }
  }, []);

  // ✅ 6과목 분석 및 점수 계산 로직 (기능 유지)
  const subjectAnalysis = useMemo(() => {
    if (!data) return [];
    return [0, 1, 2, 3, 4, 5].map(i => {
      const subAns = data.answers.slice(i * 20, (i + 1) * 20);
      const subQue = data.questions.slice(i * 20, (i + 1) * 20);
      const corrects = subAns.filter((ans: any, idx: number) => 
        subQue[idx] && String(ans) === String(subQue[idx].answer)
      ).length;
      const score = corrects * 5;
      return { subject: i + 1, score, isFail: score < 40 };
    });
  }, [data]);

  const totalScore = useMemo(() => {
    if (subjectAnalysis.length === 0) return 0;
    const sum = subjectAnalysis.reduce((acc, cur) => acc + cur.score, 0);
    return Math.round(sum / 6);
  }, [subjectAnalysis]);

  const isPass = useMemo(() => {
    if (subjectAnalysis.length === 0) return false;
    return totalScore >= 60 && subjectAnalysis.every(s => !s.isFail);
  }, [totalScore, subjectAnalysis]);

  const handleFontSize = (delta: number) => {
    setFontSize(prev => {
      const newSize = Math.min(Math.max(prev + delta, 0.8), 1.5);
      localStorage.setItem("cbt-font-size", newSize.toString());
      return newSize;
    });
  };

  if (errorInfo) return (
    <div style={{ minHeight: "100vh", backgroundColor: "#121212", color: "white", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 20 }}>
      <p style={{ color: "#FF5252" }}>{errorInfo}</p>
      <button onClick={() => router.push("/")} style={{ padding: "10px 20px", background: "#4FC3F7", border: "none", borderRadius: 8, cursor: "pointer" }}>메인으로 돌아가기</button>
    </div>
  );

  if (!data) return (
    <div style={{ minHeight: "100vh", backgroundColor: "#121212", color: "white", display: "flex", justifyContent: "center", alignItems: "center" }}>
      결과를 불러오는 중...
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

        {/* 과목별 성적 그리드 */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: "12px", marginBottom: 40 }}>
          {subjectAnalysis.map((s) => (
            <div key={s.subject} style={{ padding: "20px 10px", backgroundColor: "#1E1E1E", borderRadius: "12px", textAlign: "center", border: `1px solid ${s.isFail ? "#FF5252" : "#333"}` }}>
              <div style={{ fontSize: "0.75rem", color: "#aaa", marginBottom: "8px" }}>제 {s.subject}과목</div>
              <div style={{ fontSize: "1.6rem", fontWeight: "bold", color: s.isFail ? "#FF5252" : "white" }}>{s.score}점</div>
              {s.isFail && <div style={{ fontSize: "0.7rem", color: "#FF5252", marginTop: "5px", fontWeight: "bold" }}>과락</div>}
            </div>
          ))}
        </div>

        {/* 오답 보기 */}
        <div style={{ marginTop: 50 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #333", paddingBottom: 15, marginBottom: 30 }}>
            <h2 style={{ color: "#FFD54F", margin: 0, fontSize: "1.3rem" }}>📝 틀린 문제 다시보기</h2>
            <div style={{ display: "flex", gap: "8px", alignItems: "center", backgroundColor: "#333", padding: "6px 12px", borderRadius: "20px" }}>
              <button onClick={() => handleFontSize(-0.1)} style={{ background: "none", border: "none", color: "white", cursor: "pointer" }}>-</button>
              <span style={{ fontSize: "0.8rem", color: "#4FC3F7" }}>{Math.round(fontSize * 100)}%</span>
              <button onClick={() => handleFontSize(0.1)} style={{ background: "none", border: "none", color: "white", cursor: "pointer" }}>+</button>
            </div>
          </div>
          
          {data.questions.map((q: any, index: number) => {
            if (String(data.answers[index]) === String(q.answer)) return null;
            return (
              <div key={index} style={{ borderRadius: 15, padding: 25, marginBottom: 25, backgroundColor: "#1E1E1E", border: "1px solid #333" }}>
                <div style={{ color: "#FF5252", fontSize: "0.9rem", marginBottom: 10 }}>문제 {index + 1}번 (선택: {data.answers[index] || "미입력"})</div>
                <div style={{ fontWeight: "bold", marginBottom: 20, fontSize: `${1.1 * fontSize}rem`, lineHeight: "1.6" }}>{q.question}</div>
                {q.image && <img src={q.image} alt="문제 이미지" style={{ maxWidth: "100%", borderRadius: 8, marginBottom: 15 }} />}
                <div style={{ borderTop: "1px dashed #444", paddingTop: 20 }}>
                  <div style={{ fontSize: `${1.1 * fontSize}rem`, fontWeight: "bold", color: "#4CAF50", marginBottom: 10 }}>✅ 정답: {q.answer}번</div>
                  <div style={{ backgroundColor: "#2C1A1A", padding: 15, borderRadius: 10, fontSize: `${fontSize}rem`, color: "#FFAB91" }}>
                    <strong>[해설]</strong> {q.explanation}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 푸터 버튼 */}
        <div style={{ display: "flex", gap: 15, marginTop: 50, paddingBottom: 80 }}>
          <button onClick={() => router.push("/")} style={{ flex: 1, padding: "18px", borderRadius: "12px", border: "1px solid #444", background: "#333", color: "white", cursor: "pointer", fontWeight: "bold" }}>🏠 메인으로</button>
          <button onClick={() => router.push("/industrial/wrong-notes")} style={{ flex: 1, padding: "18px", borderRadius: "12px", border: "none", background: "#4FC3F7", color: "#000", cursor: "pointer", fontWeight: "bold" }}>📝 오답노트</button>
        </div>
      </div>
    </div>
  );
}