"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import allQuestions from "../../data";

// [도우미] 배열 섞기 및 랜덤 추출
const shuffle = (array: any[]) => [...array].sort(() => Math.random() - 0.5);
const getRandom = (pool: any[], count: number) => shuffle(pool).slice(0, count);

export default function MockExamPage() {
  const router = useRouter();
  
  // 1. 과목별 랜덤 문제 세트 생성 (120문제)
  const mockQuestions = useMemo(() => {
    const subjects: any[][] = [[], [], [], [], [], []];
    Object.values(allQuestions).forEach((session: any) => {
      session.forEach((q: any, idx: number) => {
        const sIdx = Math.floor(idx / 20);
        if (sIdx < 6) subjects[sIdx].push(q);
      });
    });

    const selected = subjects.flatMap((pool) => getRandom(pool, 20));
    return selected.map((q: any) => ({
      ...q,
      shuffledOptions: shuffle(q.options.map((text: string, i: number) => ({ text, originalNum: i + 1 })))
    }));
  }, []);

  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [result, setResult] = useState<"correct" | "wrong" | null>(null);
  const [seconds, setSeconds] = useState(0);

  const q = mockQuestions[index];
  const currentCorrectNum = useMemo(() => q ? q.shuffledOptions.findIndex((o: any) => o.originalNum === q.answer) + 1 : 0, [q]);

  // 초기화 및 타이머
  useEffect(() => {
    setAnswers(Array(mockQuestions.length).fill(0));
    const timer = setInterval(() => setSeconds(p => p + 1), 1000);
    return () => clearInterval(timer);
  }, [mockQuestions]);

  // 📊 현재 과목 실시간 성적 계산 (👍/👎)
  const currentSubStats = useMemo(() => {
    const sIdx = Math.floor(index / 20);
    const start = sIdx * 20;
    const end = start + 20;
    const subAnswers = answers.slice(start, end);
    const subQuestions = mockQuestions.slice(start, end);
    
    const corrects = subAnswers.filter((ans, i) => subQuestions[i] && ans === subQuestions[i].answer).length;
    const attempted = subAnswers.filter(a => a !== 0).length;
    return { 
      num: sIdx + 1, 
      corrects, 
      wrongs: attempted - corrects,
      totalScore: corrects * 5 
    };
  }, [index, answers, mockQuestions]);

  const handleSelect = (num: number) => {
    if (result) return;
    const selected = q.shuffledOptions[num - 1];
    if (!selected) return;
    const newAnswers = [...answers];
    newAnswers[index] = selected.originalNum;
    setAnswers(newAnswers);
    setResult(selected.originalNum === q.answer ? "correct" : "wrong");
  };

  const next = () => {
    if (index < mockQuestions.length - 1) {
      setIndex(index + 1);
      setResult(null);
    } else {
      submit();
    }
  };

  // ⌨️ 키보드 제어
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!q) return;
      if (['1', '2', '3', '4'].includes(e.key)) {
        if (result) next(); else handleSelect(Number(e.key));
      }
      if (e.key === "Enter" || e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft" && index > 0) { setIndex(index - 1); setResult(null); }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [q, result, index]);

  const submit = () => {
    localStorage.setItem("cbt-answers", JSON.stringify(answers));
    localStorage.setItem("cbt-mock-questions", JSON.stringify(mockQuestions));
    localStorage.setItem("cbt-id", "랜덤 모의고사");
    localStorage.setItem("cbt-time", `${Math.floor(seconds/60)}:${(seconds%60).toString().padStart(2,'0')}`);
    router.push("/result");
  };

  if (!q) return <div style={{ minHeight: "100vh", backgroundColor: "#121212", color: "white", display: "flex", justifyContent: "center", alignItems: "center" }}>문제 생성 중...</div>;

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#121212", color: "white", padding: "20px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        
        {/* 상단바: 과목 정보와 타이머 */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
          <div>
            <span style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#4FC3F7" }}>🎯 랜덤 모의고사</span>
            <span style={{ marginLeft: 15, color: "#aaa" }}>{currentSubStats.num}과목 ({(index % 20) + 1}/20)</span>
          </div>
          <span style={{ fontSize: "1.2rem", color: "#FFD54F", fontWeight: "bold" }}>⏳ {Math.floor(seconds/60)}:{(seconds%60).toString().padStart(2,'0')}</span>
        </div>

        {/* 전체 진행도 게이지 (선택사항) */}
        <div style={{ width: "100%", height: "4px", backgroundColor: "#333", borderRadius: "2px", marginBottom: "30px" }}>
          <div style={{ width: `${((index + 1) / 120) * 100}%`, height: "100%", backgroundColor: "#4FC3F7", borderRadius: "2px", transition: "0.3s" }}></div>
        </div>

        {/* 문제 카드 */}
        <h2 style={{ backgroundColor: "#1E1E1E", padding: "25px", borderRadius: "15px", border: "1px solid #333", marginBottom: 25, lineHeight: "1.6" }}>
          <span style={{ color: "#4FC3F7", marginRight: 10 }}>Q{index + 1}.</span> {q.question}
        </h2>

        {q.image && (
          <div style={{ marginBottom: 25, textAlign: "center", background: "#000", padding: 15, borderRadius: "12px", border: "1px solid #333" }}>
            <img src={q.image} alt="문제 이미지" style={{ maxWidth: "100%", maxHeight: "350px", borderRadius: "8px" }} />
          </div>
        )}

        {/* 보기 버튼 */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 30 }}>
          {q.shuffledOptions.map((opt: any, i: number) => {
            const num = i + 1;
            const isSelected = answers[index] === opt.originalNum;
            let bgColor = "#2C2C2C";
            let borderColor = "#333";
            if (result) {
              if (opt.originalNum === q.answer) { bgColor = "#1B5E20"; borderColor = "#4CAF50"; }
              else if (isSelected) { bgColor = "#3E2723"; borderColor = "#FF5252"; }
            } else if (isSelected) {
              bgColor = "#1565C0"; borderColor = "#64B5F6";
            }
            return (
              <div key={i} onClick={() => handleSelect(num)} style={{ padding: "18px 25px", borderRadius: "12px", cursor: "pointer", backgroundColor: bgColor, border: `2px solid ${borderColor}`, fontSize: "1.1rem", transition: "0.2s" }}>
                {num}. {opt.text}
              </div>
            );
          })}
        </div>

        {/* 🔥 정답 해설창 + 실시간 과목 성적 배지 */}
        {result && (
          <div style={{ backgroundColor: "#1E1E1E", padding: 25, borderRadius: 15, border: `1px solid ${result === "correct" ? "#4CAF50" : "#FF5252"}`, marginBottom: 30 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 15 }}>
              <h3 style={{ margin: 0, color: result === "correct" ? "#81C784" : "#FF5252" }}>
                {result === "correct" ? "✅ 정답입니다!" : `❌ 오답 (정답: ${currentCorrectNum}번)`}
              </h3>
              
              {/* 우측 성적 배지 */}
              <div style={{ textAlign: "right", backgroundColor: "#121212", padding: "10px 15px", borderRadius: "10px", border: "1px solid #333" }}>
                <div style={{ fontSize: "0.7rem", color: "#888", marginBottom: 3 }}>{currentSubStats.num}과목 성적</div>
                <div style={{ fontWeight: "bold", fontSize: "1rem" }}>
                  <span style={{ color: "#4CAF50" }}>👍 {currentSubStats.corrects}</span>
                  <span style={{ margin: "0 8px", color: "#444" }}>|</span>
                  <span style={{ color: "#FF5252" }}>👎 {currentSubStats.wrongs}</span>
                </div>
              </div>
            </div>
            
            <div style={{ lineHeight: "1.7", color: "#ddd" }}><strong>[해설]</strong> {q.explanation}</div>
            <p style={{ textAlign: "center", color: "#666", marginTop: 20, fontSize: "0.85rem" }}>[Enter] 또는 [아무 번호]를 눌러 다음으로</p>
          </div>
        )}

        {/* 하단 네비게이션 */}
        <div style={{ display: "flex", gap: 12, justifyContent: "center", paddingBottom: 50 }}>
          <button onClick={() => { if (index > 0) { setIndex(index - 1); setResult(null); } }} disabled={index === 0} style={{ padding: "15px 30px", background: "#333", color: "white", borderRadius: "10px", border: "none", cursor: index === 0 ? "default" : "pointer", opacity: index === 0 ? 0.5 : 1 }}>⬅️ 이전</button>
          <button onClick={next} style={{ padding: "15px 40px", backgroundColor: index === 119 ? "#4CAF50" : "#2196F3", color: "white", border: "none", borderRadius: "10px", fontWeight: "bold", cursor: "pointer" }}>
            {index === 119 ? "최종 제출 🏁" : "다음 문제 ➡️"}
          </button>
        </div>
      </div>
    </div>
  );
}