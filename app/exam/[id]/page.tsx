"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter, useParams } from "next/navigation";
import allQuestions from "../../../data";

const shuffleArray = (array: any[]) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export default function ExamPage() {
  const router = useRouter();
  const params = useParams();
  const originalQuestions = allQuestions[params.id as string];

  const questions = useMemo(() => {
    if (!originalQuestions) return [];
    return originalQuestions.map((q: any) => ({
      ...q,
      shuffledOptions: shuffleArray(q.options.map((text: string, i: number) => ({ text, originalNum: i + 1 })))
    }));
  }, [originalQuestions]);

  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [result, setResult] = useState<"correct" | "wrong" | null>(null);
  const [isExamMode, setIsExamMode] = useState(false);
  const [seconds, setSeconds] = useState(0);

  const q = questions[index];
  const currentCorrectNum = useMemo(() => q ? q.shuffledOptions.findIndex((opt: any) => opt.originalNum === q.answer) + 1 : 0, [q]);

  useEffect(() => {
    if (questions.length > 0) setAnswers(Array(questions.length).fill(0));
    const timer = setInterval(() => setSeconds((prev) => prev + 1), 1000);
    return () => clearInterval(timer);
  }, [questions]);

  // 📊 [실시간 종합 현황 데이터 계산]
  const stats = useMemo(() => {
    if (questions.length === 0) return null;

    // 1. 과목별 데이터 (20문제씩 6과목 기준)
    const subjectDetails = [0, 1, 2, 3, 4, 5].map(sIdx => {
      const subAns = answers.slice(sIdx * 20, (sIdx + 1) * 20);
      const subQue = questions.slice(sIdx * 20, (sIdx + 1) * 20);
      const corrects = subAns.filter((ans, i) => subQue[i] && ans === subQue[i].answer).length;
      return { corrects, score: corrects * 5 };
    });

    // 2. 전체 데이터
    const totalCorrect = answers.filter((ans, idx) => questions[idx] && ans === questions[idx].answer).length;
    const totalSolved = answers.filter(a => a !== 0).length;
    const currentTotalScore = Math.round((totalCorrect / questions.length) * 100);

    return { subjectDetails, totalCorrect, totalSolved, currentTotalScore };
  }, [answers, questions]);

  const handleSelectAnswer = (originalNum: number) => {
    const newAnswers = [...answers];
    newAnswers[index] = originalNum;
    setAnswers(newAnswers);
    if (isExamMode) {
      if (index < questions.length - 1) setTimeout(() => setIndex(index + 1), 150);
    } else {
      setResult(originalNum === q.answer ? "correct" : "wrong");
    }
  };

  const next = () => { if (index < questions.length - 1) { setIndex(index + 1); setResult(null); } };
  const prev = () => { if (index > 0) { setIndex(index - 1); setResult(null); } };

  const submit = () => {
    localStorage.setItem("cbt-answers", JSON.stringify(answers));
    localStorage.setItem("cbt-id", params.id as string);
    localStorage.setItem("cbt-time", `${Math.floor(seconds/60)}:${(seconds%60).toString().padStart(2,'0')}`);
    router.push("/result");
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!q) return;
      if (['1', '2', '3', '4'].includes(e.key)) {
        if (!isExamMode && result) next();
        else {
          const opt = q.shuffledOptions[Number(e.key) - 1];
          if (opt) handleSelectAnswer(opt.originalNum);
        }
      }
      if (e.key === "Enter" || e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [index, isExamMode, result, q]);

  if (!q || !stats) return <div style={{ minHeight: "100vh", backgroundColor: "#121212", color: "white", display: "flex", justifyContent: "center", alignItems: "center" }}>로딩 중...</div>;

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#121212", color: "white", padding: "20px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        
        {/* 1. 상단 타이머 및 모드 설정 */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 15 }}>
          <span style={{ fontWeight: "bold", fontSize: "1.1rem" }}>{params.id}회차 기출</span>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <span style={{ color: "#FFD54F", fontWeight: "bold" }}>⏳ {Math.floor(seconds/60)}:{(seconds%60).toString().padStart(2,'0')}</span>
            <button onClick={() => setIsExamMode(!isExamMode)} style={{ padding: "6px 15px", borderRadius: 20, border: "none", backgroundColor: isExamMode ? "#444" : "#eee", color: isExamMode ? "white" : "black", fontWeight: "bold", fontSize: "0.8rem", cursor: "pointer" }}>
              {isExamMode ? "실전모드" : "학습모드"}
            </button>
          </div>
        </div>

        {/* 🏆 2. 메인 종합 현황판 */}
        <div style={{ backgroundColor: "#1E1E1E", padding: "18px", borderRadius: "15px", border: "1px solid #333", marginBottom: "15px", display: "flex", justifyContent: "space-around", alignItems: "center" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "0.75rem", color: "#aaa", marginBottom: "4px" }}>진행도</div>
            <div style={{ fontSize: "1.1rem", fontWeight: "bold" }}>{stats.totalSolved} / {questions.length}</div>
          </div>
          <div style={{ width: "1px", height: "30px", backgroundColor: "#333" }}></div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "0.75rem", color: "#aaa", marginBottom: "4px" }}>현재 정답</div>
            <div style={{ fontSize: "1.1rem", fontWeight: "bold", color: "#4CAF50" }}>{stats.totalCorrect}개</div>
          </div>
          <div style={{ width: "1px", height: "30px", backgroundColor: "#333" }}></div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "0.75rem", color: "#aaa", marginBottom: "4px" }}>예상 점수</div>
            <div style={{ fontSize: "1.4rem", fontWeight: "bold", color: stats.currentTotalScore >= 60 ? "#4FC3F7" : "#FF5252" }}>{stats.currentTotalScore}점</div>
          </div>
        </div>

        {/* 📊 3. 과목별 상세 현황판 (타일 형태) */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "6px", marginBottom: "25px" }}>
          {stats.subjectDetails.map((item, i) => (
            <div key={i} style={{ 
              backgroundColor: "#1E1E1E", padding: "8px 4px", borderRadius: "10px", textAlign: "center",
              border: `1px solid ${Math.floor(index/20) === i ? "#4FC3F7" : "#333"}`,
              boxShadow: Math.floor(index/20) === i ? "0 0 8px rgba(79, 195, 247, 0.2)" : "none"
            }}>
              <div style={{ fontSize: "0.65rem", color: "#aaa" }}>{i+1}과목</div>
              <div style={{ fontSize: "0.85rem", fontWeight: "bold", color: item.score >= 40 ? "#4CAF50" : "#FF5252" }}>{item.corrects}/20</div>
              <div style={{ fontSize: "0.7rem", color: item.score >= 40 ? "#4CAF50" : "#FF5252" }}>{item.score}점</div>
            </div>
          ))}
        </div>

        {/* 4. 문제 영역 */}
        <h2 style={{ backgroundColor: "#1E1E1E", padding: "20px", borderRadius: "12px", border: "1px solid #333", marginBottom: 20, lineHeight: "1.6" }}>
          <span style={{ color: "#4FC3F7", marginRight: 10 }}>Q{index + 1}.</span>{q.question}
        </h2>

        {q.image && (
          <div style={{ marginBottom: 20, textAlign: "center", background: "#000", padding: 10, borderRadius: 10, border: "1px solid #333" }}>
            <img src={q.image} alt="문제 이미지" style={{ maxWidth: "100%", maxHeight: "300px" }} />
          </div>
        )}

        {/* 5. 보기 영역 */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 30 }}>
          {q.shuffledOptions.map((opt: any, i: number) => {
            const isSelected = answers[index] === opt.originalNum;
            let bgColor = "#2C2C2C";
            if (!isExamMode && result) {
              if (opt.originalNum === q.answer) bgColor = "#1B5E20";
              else if (isSelected) bgColor = "#3E2723";
            } else if (isSelected) bgColor = "#1565C0";
            return (
              <div key={i} onClick={() => handleSelectAnswer(opt.originalNum)} style={{ padding: "16px 20px", borderRadius: "10px", backgroundColor: bgColor, border: "1px solid #333", cursor: "pointer", fontSize: "1.05rem" }}>
                {i + 1}. {opt.text}
              </div>
            );
          })}
        </div>

        {/* 6. 정답 및 해설창 */}
        {!isExamMode && result && (
          <div style={{ backgroundColor: "#1E1E1E", padding: 25, borderRadius: 15, border: `1px solid ${result === "correct" ? "#4CAF50" : "#FF5252"}`, marginBottom: 30 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 15 }}>
              <h3 style={{ margin: 0, color: result === "correct" ? "#81C784" : "#FF5252" }}>
                {result === "correct" ? "✅ 정답입니다!" : `❌ 오답 (정답: ${currentCorrectNum}번)`}
              </h3>
              
              <div style={{ textAlign: "right", backgroundColor: "#121212", padding: "8px 12px", borderRadius: "10px", border: "1px solid #333" }}>
                <div style={{ color: "#888", fontSize: "0.7rem", marginBottom: 2 }}>현재 과목 성적</div>
                <div style={{ fontWeight: "bold", fontSize: "0.9rem" }}>
                  <span style={{ color: "#4CAF50" }}>👍 {stats.subjectDetails[Math.floor(index/20)].corrects}</span> / 
                  <span style={{ color: "#FF5252" }}> 👎 {Math.max(0, (index % 20 + 1) - stats.subjectDetails[Math.floor(index/20)].corrects - (answers[index] === 0 ? 1 : 0))}</span>
                </div>
              </div>
            </div>
            <div style={{ lineHeight: "1.6", color: "#ddd" }}><strong>[해설]</strong> {q.explanation}</div>
            <p style={{ textAlign: "center", color: "#666", marginTop: 15, fontSize: "0.8rem" }}>[Enter]를 눌러 다음 문제로</p>
          </div>
        )}

        {/* 7. 하단 네비게이션 */}
        <div style={{ display: "flex", gap: 12, justifyContent: "center", paddingBottom: 60 }}>
          <button onClick={prev} disabled={index === 0} style={{ padding: "14px 28px", background: "#333", color: "white", borderRadius: 10, border: "none", cursor: index === 0 ? "default" : "pointer", opacity: index === 0 ? 0.5 : 1 }}>⬅️ 이전</button>
          <button onClick={index === questions.length - 1 ? submit : next} style={{ padding: "14px 35px", background: index === questions.length - 1 ? "#4CAF50" : "#2196F3", color: "white", borderRadius: 10, border: "none", fontWeight: "bold", cursor: "pointer" }}>
            {index === questions.length - 1 ? "최종 제출 🏁" : "다음 문제 ➡️"}
          </button>
        </div>
      </div>
    </div>
  );
}