"use client";

import { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
// ✅ 데이터 경로 확인: app/electric/result/page.tsx 기준으로 상위 3단계가 data 폴더인지 확인
import allQuestions from "../../../data/electric";

// ✅ 수식 렌더링을 위한 라이브러리 추가 (결과창 오답 확인용)
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

// ✅ 텍스트 내의 $...$ 수식을 찾아 변환해 주는 도우미 함수 추가
const renderTextWithMath = (text: string) => {
  if (!text || typeof text !== "string") return text;
  const parts = text.split(/(\$[\s\S]*?\$)/g);
  return parts.map((part, index) => {
    if (part.startsWith("$") && part.endsWith("$")) {
      const math = part.slice(1, -1);
      return <InlineMath key={index} math={math} />;
    }
    return <span key={index}>{part}</span>;
  });
};

export default function ResultPage() {
  const router = useRouter();
  const [data, setData] = useState<any>(null);
  const [fontSize, setFontSize] = useState(1.0);
  const [statusMessage, setStatusMessage] = useState("결과를 분석 중입니다...");

  useEffect(() => {
    // 1. 전기기사용 로컬스토리지 데이터 로드 (elec- 키 사용)
    const savedAnswers = localStorage.getItem("elec-answers");
    const savedTime = localStorage.getItem("elec-time") || "00:00";
    const savedId = localStorage.getItem("elec-id") || ""; 
    const savedFontSize = localStorage.getItem("elec-font-size");

    if (savedFontSize) setFontSize(parseFloat(savedFontSize));

    if (!savedAnswers) {
      alert("풀이 기록이 없습니다.");
      router.push("/electric"); // 전기기사 메인으로 이동
      return;
    }

    let questions = [];

    // ✅ 랜덤 모의고사일 경우 저장된 문제 데이터를 사용
    if (savedId === "랜덤 모의고사") {
      const mockData = localStorage.getItem("elec-mock-questions");
      const sessionMockData = sessionStorage.getItem("elec-mock-questions");

      if (mockData) {
        questions = JSON.parse(mockData);
      } else if (sessionMockData) {
        questions = JSON.parse(sessionMockData);
      }
    } 
    // ✅ 일반 기출문제일 경우 데이터 파일에서 가져오기
    else {
      const questionsRepo = (allQuestions as any).default || allQuestions;
      const fixedId = savedId.replace("-", "_");
      questions = questionsRepo[savedId] || questionsRepo[fixedId] || [];
    }

    if (!questions || questions.length === 0) {
      setStatusMessage(`❌ 문제 데이터를 찾을 수 없습니다. (ID: ${savedId})`);
      return;
    }

    // 2. 데이터 업데이트
    setData({
      id: savedId,
      answers: JSON.parse(savedAnswers),
      questions: questions,
      time: savedTime
    });
  }, [router]);

  // 글자 크기 조절
  const handleFontSize = (delta: number) => {
    setFontSize(prev => {
      const newSize = Math.min(Math.max(prev + delta, 0.8), 1.5);
      if (typeof window !== "undefined") {
        localStorage.setItem("elec-font-size", newSize.toString());
      }
      return newSize;
    });
  };

  // 3. 점수 분석 (전기기사는 총 5과목입니다)
  const subjectAnalysis = useMemo(() => {
    if (!data) return [];
    // ✅ 전기기사 5과목 이름으로 변경
    const subjectNames = ["전기자기학", "전력공학", "전기기기", "회로이론/제어공학", "전기설비기술기준"];
    
    // ✅ 5과목 기준 (0~4)으로 변경
    return [0, 1, 2, 3, 4].map(i => {
      const subAns = data.answers.slice(i * 20, (i + 1) * 20);
      const subQue = data.questions.slice(i * 20, (i + 1) * 20);
      
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
    // ✅ 5과목 평균으로 변경
    return Math.round(sum / 5); 
  }, [subjectAnalysis]);

  const isPass = useMemo(() => {
    if (subjectAnalysis.length === 0) return false;
    // 평균 60점 이상 & 과락 없음
    return totalScore >= 60 && subjectAnalysis.every(s => !s.isFail);
  }, [totalScore, subjectAnalysis]);

  const wrongQuestions = useMemo(() => {
    if (!data) return [];
    return data.questions.filter((q: any, idx: number) => String(data.answers[idx]) !== String(q.answer));
  }, [data]);

  if (!data) return (
    <div style={{ minHeight: "100vh", backgroundColor: "#121212", color: "white", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "20px" }}>
      <p style={{ color: "#FF5252", fontSize: "1.2rem", fontWeight: "bold" }}>{statusMessage}</p>
      <button onClick={() => router.push("/electric")} style={{ padding: "10px 20px", background: "#4FC3F7", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "bold" }}>메인으로 돌아가기</button>
    </div>
  );

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#121212", color: "white", padding: "40px 20px" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        {/* ✅ 제목 변경 */}
        <h1 style={{ textAlign: "center", marginBottom: 30, fontWeight: "bold", color: "#4FC3F7" }}>⚡ 전기기사 결과 보고서</h1>
        
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

        {/* 5과목 성적 리스트 (전기기사 과목 이름 반영) */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: "12px", marginBottom: 40 }}>
          {subjectAnalysis.map((s) => (
            <div key={s.subject} style={{ padding: "15px", backgroundColor: "#1E1E1E", borderRadius: "12px", textAlign: "center", border: `1px solid ${s.isFail ? "#FF5252" : "#333"}` }}>
              <div style={{ fontSize: "0.7rem", color: "#aaa", marginBottom: "5px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{s.name}</div>
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
                  {/* ✅ 오답노트 문제 텍스트에 수식 렌더링 적용 */}
                  <div style={{ fontWeight: "bold", marginBottom: 20, fontSize: `${1.1 * fontSize}rem`, lineHeight: "1.6" }}>{renderTextWithMath(q.question)}</div>
                  {q.image && <img src={q.image} alt="문제이미지" style={{ maxWidth: "100%", borderRadius: 8, marginBottom: 15 }} />}
                  <div style={{ borderTop: "1px dashed #444", paddingTop: 20 }}>
                    <div style={{ fontSize: `${1.1 * fontSize}rem`, fontWeight: "bold", color: "#4CAF50", marginBottom: 10 }}>✅ 정답: {q.answer}번</div>
                    <div style={{ backgroundColor: "#2C1A1A", padding: 15, borderRadius: 10, fontSize: `${fontSize}rem`, color: "#FFAB91" }}>
                      {/* ✅ 오답노트 해설 텍스트에 수식 렌더링 적용 */}
                      <strong>[해설]</strong> {renderTextWithMath(q.explanation || "해설 준비 중")}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <div style={{ display: "flex", gap: 15, marginTop: 50, paddingBottom: 80 }}>
          {/* ✅ 버튼 이동 경로를 전기기사(electric)로 변경 */}
          <button onClick={() => router.push("/electric")} style={{ flex: 1, padding: "18px", borderRadius: "12px", border: "1px solid #444", background: "#333", color: "white", cursor: "pointer", fontWeight: "bold" }}>🏠 홈으로</button>
          <button onClick={() => router.push("/electric/wrong-notes")} style={{ flex: 1, padding: "18px", borderRadius: "12px", border: "none", background: "#4FC3F7", color: "black", fontWeight: "bold", cursor: "pointer" }}>📝 오답 노트</button>
        </div>
      </div>
    </div>
  );
}