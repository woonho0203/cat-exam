"use client";

import { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
// ✅ 데이터 경로를 다시 한 번 확인하세요. (소방은 /data/fire 였지만 산업안전은 /data 인지 확인)
import allQuestions from "../../../data";

export default function ResultPage() {
  const router = useRouter();
  const [data, setData] = useState<any>(null);
  const [fontSize, setFontSize] = useState(1.0);

  useEffect(() => {
    // 1. 산업안전용 로컬스토리지 키값 확인
    const savedAnswers = localStorage.getItem("cbt-answers");
    const savedTime = localStorage.getItem("cbt-time") || "00:00";
    const savedId = localStorage.getItem("cbt-id") || ""; // 예: "2025-1"
    
    const savedFontSize = localStorage.getItem("cbt-font-size");
    if (savedFontSize) setFontSize(parseFloat(savedFontSize));

    let questions = [];
    const questionsRepo = (allQuestions as any).default || allQuestions;

    // 2. 데이터 매칭 로직 (언더바/하이픈 모두 대응)
    if (savedId === "랜덤 모의고사") {
      const mockData = localStorage.getItem("cbt-mock-questions");
      if (mockData) questions = JSON.parse(mockData);
    } else if (questionsRepo && savedId) {
      // ✅ 하이픈(-)을 언더바(_)로 변환하여 '2025_1' 형식으로 매칭 시도
      const fixedId = savedId.replace("-", "_"); 
      questions = questionsRepo[fixedId] || questionsRepo[savedId] || [];
    }

    // 3. 데이터가 있을 때만 상태 업데이트
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

  // ✅ 산업안전기사 전용: 6과목 분석 (20문제씩)
  const subjectAnalysis = useMemo(() => {
    if (!data) return [];
    const subjectNames = ["안전관리론", "인간공학/시스템", "기계위험방지", "전기위험방지", "화학설비위험", "건설위험방지"];
    
    return [0, 1, 2, 3, 4, 5].map(i => {
      const subAns = data.answers.slice(i * 20, (i + 1) * 20);
      const subQue = data.questions.slice(i * 20, (i + 1) * 20);
      
      // 타입 차이 방지를 위해 String으로 변환 후 비교
      const corrects = subAns.filter((ans: any, idx: number) => 
        subQue[idx] && String(ans) === String(subQue[idx].answer)
      ).length;
      
      const score = corrects * 5; 
      return { subject: i + 1, name: subjectNames[i], score, isFail: score < 40 };
    });
  }, [data]);

  const totalScore = useMemo(() => {
    if (subjectAnalysis.length === 0) return 0;
    const sum = subjectAnalysis.reduce((acc, cur) => acc + cur.score, 0);
    return Math.round(sum / 6); // 산업안전은 6과목 평균
  }, [subjectAnalysis]);

  const isPass = useMemo(() => {
    if (subjectAnalysis.length === 0) return false;
    // 평균 60점 이상 및 모든 과목 40점 이상(과락 없음)
    return totalScore >= 60 && subjectAnalysis.every(s => !s.isFail);
  }, [totalScore, subjectAnalysis]);

  const wrongQuestions = useMemo(() => {
    if (!data) return [];
    return data.questions.filter((q: any, idx: number) => String(data.answers[idx]) !== String(q.answer));
  }, [data]);

  if (!data) return (
    <div style={{ minHeight: "100vh", backgroundColor: "#121212", color: "white", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "20px" }}>
      <p style={{ color: "#FF5252" }}>데이터를 불러오지 못했습니다. (회차 ID: {localStorage.getItem("cbt-id")})</p>
      <button onClick={() => router.push("/")} style={{ padding: "10px 20px", background: "#4FC3F7", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "bold" }}>메인으로 돌아가기</button>
    </div>
  );

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#121212", color: "white", padding: "40px 20px" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <h1 style={{ textAlign: "center", marginBottom: 30, fontWeight: "bold", color: "#4FC3F7" }}>👷 산업안전기사 결과 보고서</h1>
        
        <div style={{ 
          textAlign: "center", padding: 40, borderRadius: 20, marginBottom: 30,
          backgroundColor: "#1E1E1E", border: `3px solid ${isPass ? "#4CAF50" : "#FF5252"}`,
          boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
        }}>
          <div style={{ fontSize: 20, color: "#aaa", marginBottom: 10 }}>평균 점수</div>
          <div style={{ fontSize: 72, fontWeight: "bold", color: isPass ? "#4CAF50" : "#FF5252", lineHeight: 1 }}>{totalScore}점</div>
          <div style={{ fontSize: 28, fontWeight: "bold", marginTop: 20 }}>
            {isPass ? "🎉 최종 합격권입니다!" : "😢 불합격입니다."}
          </div>
          <p style={{ marginTop: 20, color: "#aaa" }}>
            ⏱️ 소요 시간: <strong style={{color: "white"}}>{data.time}</strong> | 회차: {data.id}
          </p>
        </div>

        {/* 6과목 성적 리스트 */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: "12px", marginBottom: 40 }}>
          {subjectAnalysis.map((s) => (
            <div key={s.subject} style={{ padding: "15px", backgroundColor: "#1E1E1E", borderRadius: "12px", textAlign: "center", border: `1px solid ${s.isFail ? "#FF5252" : "#333"}` }}>
              <div style={{ fontSize: "0.7rem", color: "#aaa", marginBottom: "5px" }}>{s.name}</div>
              <div style={{ fontSize: "1.4rem", fontWeight: "bold", color: s.isFail ? "#FF5252" : "white" }}>{s.score}점</div>
              {s.isFail && <div style={{ fontSize: "0.7rem", color: "#FF5252", marginTop: "3px" }}>과락</div>}
            </div>
          ))}
        </div>

        {/* 오답 리스트 */}
        {wrongQuestions.length > 0 && (
          <div style={{ marginTop: 50 }}>
            <h2 style={{ color: "#FFD54F", marginBottom: 30 }}>📝 틀린 문제 ({wrongQuestions.length}문항)</h2>
            {data.questions.map((q: any, index: number) => {
              if (String(data.answers[index]) === String(q.answer)) return null;
              return (
                <div key={index} style={{ borderRadius: 15, padding: 25, marginBottom: 25, backgroundColor: "#1E1E1E", border: "1px solid #333" }}>
                  <div style={{ color: "#FF5252", fontSize: "0.9rem", marginBottom: 10 }}>문제 {index + 1}번 (선택: {data.answers[index] || "미입력"})</div>
                  <div style={{ fontWeight: "bold", marginBottom: 20, fontSize: `${1.1 * fontSize}rem`, lineHeight: "1.6" }}>{q.question}</div>
                  {q.image && <img src={q.image} alt="문제이미지" style={{ maxWidth: "100%", borderRadius: 8, marginBottom: 15 }} />}
                  <div style={{ borderTop: "1px dashed #444", paddingTop: 20 }}>
                    <div style={{ fontSize: `${1.1 * fontSize}rem`, fontWeight: "bold", color: "#4CAF50", marginBottom: 10 }}>✅ 정답: {q.answer}번</div>
                    <div style={{ backgroundColor: "#2C1A1A", padding: 15, borderRadius: 10, fontSize: `${fontSize}rem`, color: "#FFAB91" }}>
                      <strong>[해설]</strong> {q.explanation || "해설 준비 중"}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <div style={{ display: "flex", gap: 15, marginTop: 50, paddingBottom: 80 }}>
          <button onClick={() => router.push("/")} style={{ flex: 1, padding: "18px", borderRadius: "12px", border: "1px solid #444", background: "#333", color: "white", cursor: "pointer", fontWeight: "bold" }}>🏠 홈으로</button>
          <button onClick={() => router.push("/industrial/wrong-notes")} style={{ flex: 1, padding: "18px", borderRadius: "12px", border: "none", background: "#4FC3F7", color: "black", fontWeight: "bold", cursor: "pointer" }}>📝 오답 노트</button>
        </div>
      </div>
    </div>
  );
}