"use client";

import { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import allQuestions from "../../../data/fire";

export default function ResultPage() {
  const router = useRouter();
  const [data, setData] = useState<any>(null);
  const [statusMessage, setStatusMessage] = useState("결과를 분석 중입니다...");

  useEffect(() => {
    // 1. 로컬스토리지에서 풀이 데이터 가져오기
    const savedAnswers = localStorage.getItem("fire-answers");
    const savedTime = localStorage.getItem("fire-time") || "00:00";
    const savedId = localStorage.getItem("fire-id") || ""; 

    if (!savedAnswers) {
      alert("풀이 기록이 없습니다.");
      router.push("/fire");
      return;
    }

    let questions = [];

    // ✅ [핵심 수정] "랜덤 모의고사"일 때 저장된 문제 데이터 불러오기
    if (savedId === "랜덤 모의고사") {
      const mockData = localStorage.getItem("fire-mock-questions");
      // 혹시 세션스토리지에 저장했을 경우도 대비
      const sessionMockData = sessionStorage.getItem("fire-mock-questions");
      
      if (mockData) {
        questions = JSON.parse(mockData);
      } else if (sessionMockData) {
        questions = JSON.parse(sessionMockData);
      }
    } 
    // ✅ 일반 회차일 때 (기존 데이터 파일에서 찾기)
    else {
      // "2024-1"과 "2024_1" 모두 호환되도록 처리
      const fixedId = savedId.replace("-", "_");
      questions = (allQuestions as any)[savedId] || (allQuestions as any)[fixedId] || [];
    }

    if (!questions || questions.length === 0) {
      setStatusMessage(`❌ 문제 데이터를 찾을 수 없습니다. (ID: ${savedId})`);
      return;
    }

    // 2. 상태 업데이트
    setData({
      id: savedId,
      answers: JSON.parse(savedAnswers),
      questions: questions,
      time: savedTime
    });
  }, [router]);

  // 3. 점수 계산 (소방설비기사: 4과목)
  const subjectAnalysis = useMemo(() => {
    if (!data) return [];
    
    // 과목명 정의
    const subjectNames = ["소방원론", "소방전기일반", "소방관계법규", "소방전기시설"];
    
    return [0, 1, 2, 3].map(i => {
      // 20문제씩 잘라서 채점
      const subAns = data.answers.slice(i * 20, (i + 1) * 20);
      const subQue = data.questions.slice(i * 20, (i + 1) * 20);
      
      const corrects = subAns.filter((ans: any, idx: number) => 
        subQue[idx] && String(ans) === String(subQue[idx].answer)
      ).length;
      
      const score = corrects * 5; // 문제당 5점
      return { subject: i + 1, name: subjectNames[i], score, isFail: score < 40 };
    });
  }, [data]);

  const totalScore = useMemo(() => {
    if (subjectAnalysis.length === 0) return 0;
    const sum = subjectAnalysis.reduce((acc, cur) => acc + cur.score, 0);
    return Math.round(sum / 4); // 4과목 평균
  }, [subjectAnalysis]);

  const isPass = useMemo(() => {
    if (subjectAnalysis.length === 0) return false;
    // 평균 60점 이상이고 모든 과목이 40점 이상(과락 없음)이어야 합격
    return totalScore >= 60 && subjectAnalysis.every(s => !s.isFail);
  }, [totalScore, subjectAnalysis]);

  const wrongQuestions = useMemo(() => {
    if (!data) return [];
    return data.questions.filter((q: any, idx: number) => String(data.answers[idx]) !== String(q.answer));
  }, [data]);

  if (!data) return (
    <div style={{ minHeight: "100vh", backgroundColor: "#121212", color: "white", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "20px" }}>
      <p style={{ color: "#FF5252", fontSize: "1.2rem", fontWeight: "bold" }}>{statusMessage}</p>
      <button onClick={() => router.push("/fire")} style={{ padding: "10px 20px", background: "#333", color: "white", border: "none", borderRadius: "8px", cursor: "pointer" }}>메인으로 돌아가기</button>
    </div>
  );

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#121212", color: "white", padding: "40px 20px" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <h1 style={{ textAlign: "center", marginBottom: 30, fontWeight: "bold", color: "#FF5252" }}>🚒 결과 보고서</h1>
        
        {/* 점수 카드 */}
        <div style={{ 
          textAlign: "center", padding: 40, borderRadius: 20, marginBottom: 30,
          backgroundColor: "#1E1E1E", border: `3px solid ${isPass ? "#4CAF50" : "#FF5252"}`,
          boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
        }}>
          <div style={{ fontSize: 20, color: "#aaa", marginBottom: 10 }}>평균 점수</div>
          <div style={{ fontSize: 72, fontWeight: "bold", color: isPass ? "#4CAF50" : "#FF5252", lineHeight: 1 }}>{totalScore}점</div>
          <div style={{ fontSize: 28, fontWeight: "bold", marginTop: 20 }}>
            {isPass ? "🎉 합격입니다!" : "😢 불합격입니다."}
          </div>
          <p style={{ marginTop: 20, color: "#aaa" }}>
            ⏱️ 소요 시간: <strong style={{color: "white"}}>{data.time}</strong> | {data.id}
          </p>
        </div>

        {/* 4과목 성적 리스트 */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px", marginBottom: 40 }}>
          {subjectAnalysis.map((s) => (
            <div key={s.subject} style={{ padding: "15px", backgroundColor: "#1E1E1E", borderRadius: "12px", textAlign: "center", border: `1px solid ${s.isFail ? "#FF5252" : "#333"}` }}>
              <div style={{ fontSize: "0.7rem", color: "#aaa", marginBottom: "5px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{s.name}</div>
              <div style={{ fontSize: "1.4rem", fontWeight: "bold", color: s.isFail ? "#FF5252" : "white" }}>{s.score}점</div>
              {s.isFail && <div style={{ fontSize: "0.7rem", color: "#FF5252", marginTop: "3px" }}>과락</div>}
            </div>
          ))}
        </div>

        {/* 오답 리스트 (선택 사항) */}
        {wrongQuestions.length > 0 && (
          <div style={{ marginTop: 50 }}>
            <h2 style={{ color: "#FFD54F", marginBottom: 30 }}>📝 틀린 문제 ({wrongQuestions.length}문항)</h2>
            {/* 오답 리스트 렌더링은 너무 길어질까봐 생략했지만 필요하면 추가 가능합니다 */}
            <p style={{ color: "#aaa", textAlign: "center" }}>오답 노트 메뉴에서 상세 해설을 확인하세요.</p>
          </div>
        )}

        {/* 하단 버튼 */}
        <div style={{ display: "flex", gap: 15, marginTop: 50, paddingBottom: 80 }}>
          <button onClick={() => router.push("/fire")} style={{ flex: 1, padding: "18px", borderRadius: "12px", border: "1px solid #444", background: "#333", color: "white", cursor: "pointer", fontWeight: "bold" }}>🏠 소방 홈으로</button>
          <button onClick={() => router.push("/fire/wrong-notes")} style={{ flex: 1, padding: "18px", borderRadius: "12px", border: "none", background: "#FF5252", color: "white", fontWeight: "bold", cursor: "pointer" }}>📝 오답 노트</button>
        </div>
      </div>
    </div>
  );
}