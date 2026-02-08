"use client";

import { useState, useEffect, useMemo, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
// ✅ 경로 수정: app/industrial/mock-exam/page.tsx 기준 (3번 나가서 data 폴더)
// 만약 파일명이 industrial.ts라면 ../../../data/industrial 로 수정하세요.
import allQuestions from "../../../data"; 

const shuffleArray = (array: any[]) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

function MockExamContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // 1. 산업안전기사 6과목 데이터 생성 로직
  const mockQuestions = useMemo(() => {
    if (!allQuestions) return [];
    
    // 산업안전기사: 6개 과목 리스트
    const subjects: any[][] = [[], [], [], [], [], []];
    
    Object.entries(allQuestions).forEach(([sessionKey, qList]: [string, any]) => {
      if (Array.isArray(qList)) {
        qList.forEach((q: any, idx: number) => {
          const sIdx = Math.floor(idx / 20); // 20문제씩 과목 구분
          if (sIdx < 6) {
            subjects[sIdx].push({ ...q, origin: sessionKey });
          }
        });
      }
    });

    const getRandom = (pool: any[], count: number) => 
      [...pool].sort(() => Math.random() - 0.5).slice(0, Math.min(count, pool.length));

    // 과목당 20문제씩 랜덤 추출 (총 120문제)
    const selected = subjects.flatMap((pool) => getRandom(pool, 20));
    
    return selected.map((q: any) => ({
      ...q,
      shuffledOptions: shuffleArray((q.options || []).map((text: string, i: number) => ({ 
        text, 
        originalNum: i + 1 
      })))
    }));
  }, []);

  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [result, setResult] = useState<"correct" | "wrong" | null>(null);
  const [seconds, setSeconds] = useState(0);
  const [isExamMode, setIsExamMode] = useState(true); // 실전모드 기본값

  const q = mockQuestions[index];
  const currentCorrectNum = useMemo(() => q ? q.shuffledOptions.findIndex((opt: any) => opt.originalNum === q.answer) + 1 : 0, [q]);

  useEffect(() => {
    if (mockQuestions.length > 0) setAnswers(Array(mockQuestions.length).fill(0));
    const timer = setInterval(() => setSeconds((prev) => prev + 1), 1000);
    return () => clearInterval(timer);
  }, [mockQuestions]);

  // 2. 통계 로직 (6과목 기준)
  const stats = useMemo(() => {
    if (mockQuestions.length === 0) return null;
    const totalCorrect = answers.filter((ans, idx) => mockQuestions[idx] && ans === mockQuestions[idx].answer).length;
    const totalSolved = answers.filter(a => a !== 0).length;
    
    // 산업안전기사 점수 계산: (맞은 개수 / 120) * 100
    const currentTotalScore = Math.round((totalCorrect / mockQuestions.length) * 100);
    
    const subjectDetails = [0, 1, 2, 3, 4, 5].map(sIdx => {
      const subAns = answers.slice(sIdx * 20, (sIdx + 1) * 20);
      const subQue = mockQuestions.slice(sIdx * 20, (sIdx + 1) * 20);
      const corrects = subAns.filter((ans, i) => subQue[i] && ans === subQue[i].answer).length;
      return { corrects, score: corrects * 5 }; // 과목당 100점 만점 (문제당 5점)
    });
    return { subjectDetails, totalCorrect, totalSolved, currentTotalScore };
  }, [answers, mockQuestions]);

  const next = () => { if (index < mockQuestions.length - 1) { setIndex(index + 1); setResult(null); } };
  const prev = () => { if (index > 0) { setIndex(index - 1); setResult(null); } };

  const handleSelectAnswer = (originalNum: number) => {
    const newAnswers = [...answers];
    newAnswers[index] = originalNum;
    setAnswers(newAnswers);
    if (isExamMode) {
      if (index < mockQuestions.length - 1) setTimeout(() => next(), 150);
    } else {
      setResult(originalNum === q.answer ? "correct" : "wrong");
    }
  };

  // 3. 제출 로직 (산업안전기사 결과 페이지로 이동)
  const submit = () => {
    localStorage.setItem("cbt-answers", JSON.stringify(answers));
    localStorage.setItem("cbt-mock-questions", JSON.stringify(mockQuestions));
    localStorage.setItem("cbt-id", "랜덤 모의고사");
    localStorage.setItem("cbt-time", `${Math.floor(seconds/60)}:${(seconds%60).toString().padStart(2,'0')}`);
    router.push("/industrial/result"); // 경로 확인 필요
  };

  if (!q || !stats) return <div style={{ minHeight: "100vh", backgroundColor: "#121212", color: "white", display: "flex", justifyContent: "center", alignItems: "center" }}>산업안전기사 문제를 생성 중입니다...</div>;

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#121212", color: "white", padding: "20px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        
        {/* 헤더 */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 15 }}>
          <div>
            <h1 style={{ margin: 0, fontSize: "1.2rem", fontWeight: "bold" }}>👷 산업안전기사 모의고사</h1>
            <span style={{ fontSize: "0.7rem", color: "#4FC3F7" }}>출처: {q.origin}</span>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ color: "#FFD54F", fontWeight: "bold", marginBottom: 5 }}>⏳ {Math.floor(seconds/60)}:{(seconds%60).toString().padStart(2,'0')}</div>
            <button onClick={() => setIsExamMode(!isExamMode)} style={{ padding: "4px 10px", borderRadius: 8, fontSize: "0.7rem", cursor: "pointer" }}>
              {isExamMode ? "🔥 실전 모드" : "📚 학습 모드"}
            </button>
          </div>
        </div>

        {/* 종합 현황판 */}
        <div style={{ backgroundColor: "#1E1E1E", padding: "15px", borderRadius: "15px", marginBottom: "15px", display: "flex", justifyContent: "space-around" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "0.7rem", color: "#aaa" }}>진행도</div>
            <div style={{ fontSize: "1.1rem", fontWeight: "bold" }}>{stats.totalSolved} / 120</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "0.7rem", color: "#aaa" }}>평균 점수</div>
            <div style={{ fontSize: "1.4rem", fontWeight: "bold", color: stats.currentTotalScore >= 60 ? "#4FC3F7" : "#FF5252" }}>{stats.currentTotalScore}점</div>
          </div>
        </div>

        {/* 과목별 타일 (6과목) */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "6px", marginBottom: "25px" }}>
          {stats.subjectDetails.map((item, i) => (
            <div key={i} style={{ 
              backgroundColor: "#1E1E1E", padding: "8px 2px", borderRadius: "10px", textAlign: "center",
              border: `1px solid ${Math.floor(index/20) === i ? "#4FC3F7" : "#333"}`
            }}>
              <div style={{ fontSize: "0.55rem", color: "#aaa" }}>{i+1}과목</div>
              <div style={{ fontSize: "0.8rem", fontWeight: "bold", color: item.score >= 40 ? "#4CAF50" : "#FF5252" }}>{item.corrects}/20</div>
            </div>
          ))}
        </div>

        {/* 문제 및 보기 (생략 - 기존 스타일 유지) */}
        {/* ... (기존 JSX 구조와 동일) ... */}

        <div style={{ display: "flex", gap: 12, justifyContent: "center", paddingBottom: 60 }}>
          <button onClick={prev} disabled={index === 0} style={{ padding: "14px 28px", background: "#333", color: "white", borderRadius: 10, border: "none" }}>이전</button>
          <button onClick={index === mockQuestions.length - 1 ? submit : next} style={{ padding: "14px 35px", background: index === mockQuestions.length - 1 ? "#4CAF50" : "#2196F3", color: "white", borderRadius: 10, border: "none", fontWeight: "bold" }}>
            {index === mockQuestions.length - 1 ? "최종 제출 🏁" : "다음 문제 ➡️"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function MockExamPage() {
  return (
    <Suspense fallback={<div>로딩 중...</div>}>
      <MockExamContent />
    </Suspense>
  );
}