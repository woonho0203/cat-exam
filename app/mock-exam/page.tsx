"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import allQuestions from "@/data"; // 경로가 다를 경우 "../../data"로 수정하세요.

const shuffle = (array: any[]) => [...array].sort(() => Math.random() - 0.5);
const getRandom = (pool: any[], count: number) => shuffle(pool).slice(0, count);

export default function MockExamPage() {
  const router = useRouter();
  
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

  useEffect(() => {
    setAnswers(Array(mockQuestions.length).fill(0));
    const timer = setInterval(() => setSeconds(p => p + 1), 1000);
    return () => clearInterval(timer);
  }, [mockQuestions]);

  const stats = useMemo(() => {
    const subjectDetails = [0, 1, 2, 3, 4, 5].map(sIdx => {
      const subAns = answers.slice(sIdx * 20, (sIdx + 1) * 20);
      const subQue = mockQuestions.slice(sIdx * 20, (sIdx + 1) * 20);
      const corrects = subAns.filter((ans, i) => subQue[i] && ans === subQue[i].answer).length;
      return { corrects, score: corrects * 5 };
    });
    const totalCorrect = subjectDetails.reduce((acc, cur) => acc + cur.corrects, 0);
    const totalSolved = answers.filter(a => a !== 0).length;
    const totalScore = Math.round((totalCorrect / 120) * 100);
    return { subjectDetails, totalCorrect, totalSolved, totalScore };
  }, [answers, mockQuestions]);

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
    if (index < 119) { setIndex(index + 1); setResult(null); } 
    else { submit(); }
  };

  const submit = () => {
    localStorage.setItem("cbt-answers", JSON.stringify(answers));
    localStorage.setItem("cbt-mock-questions", JSON.stringify(mockQuestions));
    localStorage.setItem("cbt-id", "랜덤 모의고사");
    localStorage.setItem("cbt-time", `${Math.floor(seconds/60)}:${(seconds%60).toString().padStart(2,'0')}`);
    router.push("/result");
  };

  // 키보드 이벤트 생략 (기존과 동일)

  if (!q) return <div style={{ minHeight: "100vh", backgroundColor: "#121212", color: "white", display: "flex", justifyContent: "center", alignItems: "center" }}>로딩 중...</div>;

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#121212", color: "white", padding: "clamp(10px, 3vw, 20px)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        
        {/* 🏆 1. 메인 현황판 */}
        <div style={{ 
          backgroundColor: "#1E1E1E", padding: "clamp(12px, 4vw, 20px)", borderRadius: "15px", border: "1px solid #333", 
          marginBottom: "15px", display: "flex", justifyContent: "space-around", alignItems: "center" 
        }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "0.7rem", color: "#aaa" }}>푼 문제</div>
            <div style={{ fontSize: "clamp(0.9rem, 4vw, 1.2rem)", fontWeight: "bold" }}>{stats.totalSolved}/120</div>
          </div>
          <div style={{ width: "1px", height: "25px", backgroundColor: "#333" }}></div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "0.7rem", color: "#aaa" }}>총 정답</div>
            <div style={{ fontSize: "clamp(0.9rem, 4vw, 1.2rem)", fontWeight: "bold", color: "#4CAF50" }}>{stats.totalCorrect}개</div>
          </div>
          <div style={{ width: "1px", height: "25px", backgroundColor: "#333" }}></div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "0.7rem", color: "#aaa" }}>현재 점수</div>
            <div style={{ fontSize: "clamp(1.1rem, 5vw, 1.5rem)", fontWeight: "bold", color: stats.totalScore >= 60 ? "#4FC3F7" : "#FF5252" }}>{stats.totalScore}점</div>
          </div>
        </div>

        {/* 📊 2. 과목별 상세 현황판 (모바일 대응 그리드) */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(65px, 1fr))", 
          gap: "6px", marginBottom: "20px" 
        }}>
          {stats.subjectDetails.map((item, i) => (
            <div key={i} style={{ 
              backgroundColor: "#1E1E1E", padding: "8px 2px", borderRadius: "10px", textAlign: "center",
              border: `1px solid ${Math.floor(index/20) === i ? "#4FC3F7" : "#333"}`,
            }}>
              <div style={{ fontSize: "0.6rem", color: "#aaa" }}>{i+1}과목</div>
              <div style={{ fontSize: "0.8rem", fontWeight: "bold", color: item.score >= 40 ? "#4CAF50" : "#FF5252" }}>{item.corrects}/20</div>
              <div style={{ fontSize: "0.65rem", color: item.score >= 40 ? "#4CAF50" : "#FF5252" }}>{item.score}점</div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12, color: "#aaa", fontSize: "clamp(0.75rem, 3.5vw, 0.9rem)" }}>
          <span style={{ color: "#FFD54F", fontWeight: "bold" }}>⏳ {Math.floor(seconds/60)}:{(seconds%60).toString().padStart(2,'0')}</span>
          <span>{Math.floor(index/20) + 1}과목 ({(index % 20) + 1}/20)</span>
        </div>

        {/* 3. 문제 영역 */}
        <h2 style={{ 
          backgroundColor: "#1E1E1E", padding: "clamp(15px, 5vw, 25px)", borderRadius: "15px", border: "1px solid #333", 
          marginBottom: 20, lineHeight: "1.5", fontSize: "clamp(1rem, 4.5vw, 1.25rem)", wordBreak: "keep-all" 
        }}>
          <span style={{ color: "#4FC3F7", marginRight: 8 }}>Q{index + 1}.</span> {q.question}
        </h2>

        {q.image && (
          <div style={{ marginBottom: 20, textAlign: "center", background: "#000", padding: 10, borderRadius: "12px", border: "1px solid #333" }}>
            <img src={q.image} alt="문제 이미지" style={{ maxWidth: "100%", maxHeight: "250px", objectFit: "contain" }} />
          </div>
        )}

        {/* 4. 보기 영역 */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 30 }}>
          {q.shuffledOptions.map((opt: any, i: number) => {
            const num = i + 1;
            const isSelected = answers[index] === opt.originalNum;
            let bgColor = "#2C2C2C";
            if (result) {
              if (opt.originalNum === q.answer) bgColor = "#1B5E20";
              else if (isSelected) bgColor = "#3E2723";
            } else if (isSelected) bgColor = "#1565C0";
            
            return (
              <div key={i} onClick={() => handleSelect(num)} style={{ 
                padding: "clamp(14px, 4vw, 18px) 15px", borderRadius: "12px", cursor: "pointer", 
                backgroundColor: bgColor, border: "1px solid #333", fontSize: "clamp(0.9rem, 4vw, 1.1rem)",
                lineHeight: "1.4"
              }}>
                <span style={{ fontWeight: "bold", marginRight: 8 }}>{num}.</span> {opt.text}
              </div>
            );
          })}
        </div>

        {/* 5. 해설창 */}
        {result && (
          <div style={{ 
            backgroundColor: "#1E1E1E", padding: "clamp(15px, 5vw, 25px)", borderRadius: 15, 
            border: `1px solid ${result === "correct" ? "#4CAF50" : "#FF5252"}`, marginBottom: 30 
          }}>
             <h3 style={{ margin: "0 0 10px 0", color: result === "correct" ? "#81C784" : "#FF5252", fontSize: "clamp(1rem, 4vw, 1.2rem)" }}>
              {result === "correct" ? "✅ 정답!" : `❌ 정답: ${currentCorrectNum}번`}
            </h3>
            <div style={{ lineHeight: "1.6", color: "#ddd", fontSize: "clamp(0.85rem, 3.5vw, 1rem)" }}><strong>[해설]</strong> {q.explanation}</div>
          </div>
        )}

        {/* 6. 네비게이션 */}
        <div style={{ display: "flex", gap: 10, justifyContent: "center", paddingBottom: 50 }}>
          <button onClick={() => index > 0 && setIndex(index - 1)} disabled={index === 0} style={{ flex: 1, padding: "14px 0", background: "#333", color: "white", borderRadius: "10px", border: "none", opacity: index === 0 ? 0.5 : 1 }}>⬅️ 이전</button>
          <button onClick={next} style={{ flex: 2, padding: "14px 0", backgroundColor: index === 119 ? "#4CAF50" : "#2196F3", color: "white", border: "none", borderRadius: "10px", fontWeight: "bold" }}>
            {index === 119 ? "최종 제출 🏁" : "다음 문제 ➡️"}
          </button>
        </div>
      </div>
    </div>
  );
}