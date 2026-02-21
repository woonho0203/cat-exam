"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter, useParams } from "next/navigation";
import allQuestions from "../../../../data/electric"; 

import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

interface Question {
  id: number;
  question: string;
  options: any[];
  answer: number;
  explanation: string;
  image?: string | null;
  shuffledOptions?: any[];
  origin?: string; 
}

const shuffleArray = (array: any[]) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const processQuestions = (rawQuestions: any[], defaultOrigin?: string) => {
  return rawQuestions.map((q: any) => ({
    ...q,
    origin: q.origin || defaultOrigin, 
    shuffledOptions: shuffleArray((q.options || []).map((opt: any, i: number) => {
      if (typeof opt === 'string') return { text: opt, originalNum: i + 1 };
      return { ...opt, originalNum: i + 1 };
    }))
  }));
};

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

export default function ExamPage() {
  const router = useRouter();
  const params = useParams();
  const rawId = params.id as string; 
  const isRandomMode = rawId === "random";

  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [result, setResult] = useState<"correct" | "wrong" | null>(null);
  const [isExamMode, setIsExamMode] = useState(false);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const loadQuestions = () => {
      if (isRandomMode) {
        const savedMock = localStorage.getItem("elec-mock-questions");
        const savedId = localStorage.getItem("elec-id");

        const subjects: any[][] = [[], [], [], [], []];
        Object.entries(allQuestions).forEach(([sessionKey, qList]: [string, any]) => {
          if (!Array.isArray(qList)) return;

          qList.forEach((q: any, idx: number) => {
            const sIdx = Math.floor(idx / 20); 
            if (sIdx < 5) { 
              subjects[sIdx].push({ ...q, origin: sessionKey });
            }
          });
        });

        const getRandom = (pool: any[], count: number) => 
          [...pool].sort(() => Math.random() - 0.5).slice(0, Math.min(count, pool.length));

        const selectedRaw = subjects.flatMap((pool) => getRandom(pool, 20));
        const finalQuestions = processQuestions(selectedRaw);

        localStorage.setItem("elec-mock-questions", JSON.stringify(finalQuestions));
        localStorage.setItem("elec-id", "랜덤 모의고사");
        
        setQuestions(finalQuestions);
        setIsExamMode(true);
      } else {
        const fixedId = rawId.replace("-", "_");
        const originalData = (allQuestions as any)[rawId] || (allQuestions as any)[fixedId] || [];
        
        if (originalData.length === 0) {
          alert("해당 회차 데이터를 찾을 수 없습니다.");
          router.push("/");
          return;
        }

        const finalQuestions = processQuestions(originalData, rawId);
        localStorage.setItem("elec-id", rawId);
        setQuestions(finalQuestions);
      }
      setLoading(false);
    };

    loadQuestions();
  }, [rawId, isRandomMode, router]);

  useEffect(() => {
    if (questions.length > 0) {
      setAnswers(Array(questions.length).fill(0));
    }
  }, [questions]);

  useEffect(() => {
    if (loading) return;
    const timer = setInterval(() => setSeconds((prev) => prev + 1), 1000);
    return () => clearInterval(timer);
  }, [loading]);

  const q = questions[index];

  const autoFontSize = useMemo(() => {
    if (!q) return "1.15rem";
    const len = q.question.length;
    if (len > 100) return "clamp(0.9rem, 4.5vw, 1.1rem)";
    if (len > 60) return "clamp(1rem, 4.8vw, 1.15rem)";
    return "clamp(1.1rem, 5vw, 1.25rem)";
  }, [q]);

  const currentCorrectNum = useMemo(() => 
    q ? q.shuffledOptions?.findIndex((opt: any) => opt.originalNum === q.answer)! + 1 : 0
  , [q]);

  const stats = useMemo(() => {
    if (questions.length === 0) return null;
    const totalCorrect = answers.filter((ans, idx) => questions[idx] && ans === questions[idx].answer).length;
    const totalSolved = answers.filter(a => a !== 0).length;
    const currentTotalScore = Math.round((totalCorrect / questions.length) * 100);
    
    const progressPercent = Math.round((totalSolved / questions.length) * 100);

    const subjectNames = ["전기자기학", "전력공학", "전기기기", "회로이론/제어공학", "전기설비기술기준"];

    const subjectDetails = [0, 1, 2, 3, 4].map((sIdx) => {
      const subAns = answers.slice(sIdx * 20, (sIdx + 1) * 20);
      const subQue = questions.slice(sIdx * 20, (sIdx + 1) * 20);
      const corrects = subAns.filter((ans, i) => subQue[i] && ans === subQue[i].answer).length;
      return { corrects, score: corrects * 5, name: subjectNames[sIdx] };
    });
    return { subjectDetails, totalCorrect, totalSolved, currentTotalScore, progressPercent };
  }, [answers, questions]);

  const next = () => { if (index < questions.length - 1) { setIndex(index + 1); setResult(null); } };
  const prev = () => { if (index > 0) { setIndex(index - 1); setResult(null); } };

  const handleSelectAnswer = (originalNum: number) => {
    if (!isExamMode && result) {
      next();
      return;
    }
    const newAnswers = [...answers];
    newAnswers[index] = originalNum;
    setAnswers(newAnswers);

    if (isExamMode) {
      if (index < questions.length - 1) setTimeout(() => next(), 150);
    } else {
      setResult(originalNum === q.answer ? "correct" : "wrong");
    }
  };

  const submit = () => {
    const savedWrongs = JSON.parse(localStorage.getItem("elec-wrong-list") || "[]");
    const currentWrongs = questions
      .filter((que: any, i: number) => answers[i] !== 0 && answers[i] !== que.answer)
      .map((que: any) => ({ ...que, examId: que.origin || rawId, addedAt: new Date().getTime() }));

    const correctIds = questions
      .filter((que: any, i: number) => answers[i] === que.answer)
      .map((que: any) => `${que.origin || rawId}-${que.id}`);

    const filteredSaved = savedWrongs.filter((v: any) => !correctIds.includes(`${v.examId}-${v.id}`));
    const uniqueWrongs = [...currentWrongs, ...filteredSaved].filter((v: any, i: number, a: any[]) => 
      a.findIndex((t) => t.id === v.id && t.examId === v.examId) === i
    );

    localStorage.setItem("elec-wrong-list", JSON.stringify(uniqueWrongs));
    localStorage.setItem("elec-answers", JSON.stringify(answers));
    localStorage.setItem("elec-time", `${Math.floor(seconds/60)}:${(seconds%60).toString().padStart(2,'0')}`);
    
    router.push("/electric/result");
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!q) return;
      if (['1', '2', '3', '4'].includes(e.key)) {
        if (!isExamMode && result) next();
        else {
          const opt = q.shuffledOptions?.[Number(e.key) - 1];
          if (opt) handleSelectAnswer(opt.originalNum);
        }
      }
      if (e.key === "Enter" || e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [index, isExamMode, result, q]);

  if (loading || !q || !stats) return (
    <div style={{ minHeight: "100vh", backgroundColor: "#121212", color: "white", display: "flex", justifyContent: "center", alignItems: "center" }}>
      문제를 불러오는 중입니다...
    </div>
  );

  return (
    <div className="exam-container" style={{ minHeight: "100vh", backgroundColor: "#121212", color: "white", padding: "clamp(10px, 4vw, 20px)" }}>
      
      <style jsx global>{`
        :root {
          --fs-header: 1.1rem;
          --fs-option: 1rem;
        }
        @media (max-width: 600px) {
          .exam-container { padding: 10px !important; }
          .stat-box { padding: 10px !important; }
          .stat-val { font-size: 1rem !important; }
          .subject-item { padding: 6px 2px !important; }
          .nav-btn { padding: 12px 20px !important; font-size: 0.9rem !important; }
          .option-item { padding: 14px 16px !important; font-size: 0.95rem !important; }
        }
      `}</style>

      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        
        {/* 상단 헤더 */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 15 }}>
          <div>
            {isRandomMode && <span style={{ display: "block", fontSize: "0.75rem", color: "#888", marginBottom: "2px" }}>전기기사</span>}
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <h1 style={{ margin: 0, fontSize: "clamp(1rem, 4vw, 1.2rem)", fontWeight: "bold", color: isRandomMode ? "#fff" : "#FFD54F" }}>
                {isRandomMode ? "🎯 랜덤 모의고사" : `📝 ${rawId}회차`}
              </h1>
              {isRandomMode && q.origin && (
                <span style={{ fontSize: "0.6rem", color: "#FFD54F", backgroundColor: "#333", padding: "2px 6px", borderRadius: "4px", fontWeight: "bold", whiteSpace: "nowrap" }}>
                  {q.origin} 기출
                </span>
              )}
            </div>
          </div>
          
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <span style={{ color: "#FFD54F", fontWeight: "bold", fontSize: "0.85rem" }}>⏳ {Math.floor(seconds/60)}:{(seconds%60).toString().padStart(2,'0')}</span>
            <button 
              onClick={() => {setIsExamMode(!isExamMode); setResult(null);}} 
              style={{ 
                padding: "6px 12px", borderRadius: 15, border: "none", cursor: "pointer",
                backgroundColor: isExamMode ? "#444" : "#eee", color: isExamMode ? "white" : "black",
                fontWeight: "bold", fontSize: "0.75rem"
              }}>
              {isExamMode ? "실전모드" : "학습모드"}
            </button>
          </div>
        </div>

        {/* 종합 현황판 */}
        <div className="stat-box" style={{ backgroundColor: "#1E1E1E", padding: "12px", borderRadius: "15px", border: "1px solid #333", marginBottom: "15px", display: "flex", justifyContent: "space-around" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "0.6rem", color: "#aaa" }}>진행도</div>
            <div className="stat-val" style={{ fontSize: "0.95rem", fontWeight: "bold" }}>
              {stats.totalSolved} / {questions.length} 
              <span style={{ fontSize: "0.8rem", color: "#aaa", marginLeft: "5px" }}>({stats.progressPercent}%)</span>
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "0.6rem", color: "#aaa" }}>평균 점수</div>
            <div className="stat-val" style={{ fontSize: "1.2rem", fontWeight: "bold", color: stats.currentTotalScore >= 60 ? "#4CAF50" : "#FF5252" }}>{stats.currentTotalScore}점</div>
          </div>
        </div>

        {/* 과목별 점수 타일 */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "4px", marginBottom: "20px" }}>
          {stats.subjectDetails.map((item, i) => (
            <div key={i} className="subject-item" style={{ 
              backgroundColor: "#1E1E1E", padding: "6px 2px", borderRadius: "8px", textAlign: "center",
              border: `1px solid ${Math.floor(index/20) === i ? "#FFD54F" : "#333"}`
            }}>
              <div style={{ fontSize: "0.5rem", color: "#aaa", letterSpacing: "-0.5px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{item.name}</div>
              <div style={{ fontSize: "0.7rem", fontWeight: "bold", color: item.score >= 40 ? "#4CAF50" : "#FF5252" }}>{item.corrects}/20</div>
              <div style={{ fontSize: "0.6rem", color: item.score >= 40 ? "#4CAF50" : "#FF5252", fontWeight: "bold" }}>{item.score}점</div>
            </div>
          ))}
        </div>

        {/* 문제 영역 */}
        <div style={{ backgroundColor: "#1E1E1E", padding: "clamp(15px, 5vw, 25px)", borderRadius: "12px", border: "1px solid #333", marginBottom: 15 }}>
          <h2 style={{ fontSize: autoFontSize, lineHeight: "1.5", margin: 0, fontWeight: "500", wordBreak: "keep-all" }}>
            <span style={{ color: "#FFD54F", marginRight: 10, fontWeight: "900" }}>Q{index + 1}.</span>
            {renderTextWithMath(q.question)}
          </h2>
          {q.image && <img src={q.image} alt="문제 이미지" style={{ maxWidth: "100%", maxHeight: "250px", marginTop: 15, borderRadius: 10, display: "block" }} />}
        </div>

        {/* 보기 영역 */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 25 }}>
          {q.shuffledOptions?.map((opt: any, i: number) => {
            const isSelected = answers[index] === opt.originalNum;
            let bgColor = "#2C2C2C";
            let borderColor = "#333";

            if (!isExamMode && result) {
              if (opt.originalNum === q.answer) { bgColor = "#1B5E20"; borderColor = "#4CAF50"; } 
              else if (isSelected) { bgColor = "#3E2723"; borderColor = "#FF5252"; }
            } else if (isSelected) {
              bgColor = "#4A3600"; borderColor = "#FFD54F";
            }

            return (
              <div 
                key={i} 
                className="option-item"
                onClick={() => handleSelectAnswer(opt.originalNum)} 
                style={{ 
                  padding: "clamp(12px, 4vw, 18px) clamp(15px, 5vw, 20px)", borderRadius: "10px", 
                  backgroundColor: bgColor, border: `2px solid ${borderColor}`, cursor: "pointer",
                  fontSize: "clamp(0.85rem, 4vw, 1rem)", lineHeight: "1.4", transition: "all 0.1s"
                }}>
                <span style={{ fontWeight: "bold", marginRight: "8px" }}>{i + 1}.</span> {renderTextWithMath(opt.text)}
                {opt.image && <img src={opt.image} alt="보기 이미지" style={{ maxWidth: "200px", marginTop: 10, borderRadius: 5, display: "block" }} />}
              </div>
            );
          })}
        </div>

        {/* 해설창 */}
        {!isExamMode && result && (
          <div style={{ backgroundColor: "#1E1E1E", padding: 20, borderRadius: 15, border: `1px solid ${result === "correct" ? "#4CAF50" : "#FF5252"}`, marginBottom: 30 }}>
            <h3 style={{ fontSize: "1rem", margin: "0 0 10px 0", color: result === "correct" ? "#81C784" : "#FF5252" }}>
              {result === "correct" ? "✅ 정답입니다!" : `❌ 오답 (정답: ${currentCorrectNum}번)`}
            </h3>
            <div style={{ lineHeight: "1.5", color: "#ddd", fontSize: "0.9rem" }}><strong>[해설]</strong> {renderTextWithMath(q.explanation)}</div>
            <p style={{ textAlign: "center", color: "#666", marginTop: 15, fontSize: "0.7rem" }}>보기를 다시 클릭하거나 [Enter]를 누르면 다음으로</p>
          </div>
        )}

        {/* 네비게이션 버튼 */}
        <div style={{ display: "flex", gap: 10, justifyContent: "center", marginBottom: 30 }}>
          <button 
            className="nav-btn"
            onClick={prev} 
            disabled={index === 0} 
            style={{ flex: 1, padding: "14px 0", background: "#333", color: "white", borderRadius: 10, border: "none", cursor: index === 0 ? "default" : "pointer", fontSize: "0.9rem", opacity: index === 0 ? 0.5 : 1 }}>
            이전
          </button>
          <button 
            className="nav-btn"
            onClick={index === questions.length - 1 ? submit : next} 
            style={{ flex: 2, padding: "14px 0", background: index === questions.length - 1 ? "#4CAF50" : "#FFD54F", color: index === questions.length - 1 ? "white" : "black", borderRadius: 10, border: "none", fontWeight: "bold", cursor: "pointer", fontSize: "0.9rem" }}>
            {index === questions.length - 1 ? "최종 제출 🏁" : "다음 문제 ➡️"}
          </button>
        </div>

        {/* 시험 중단 및 바로 결과 보기 버튼 */}
        <div style={{ textAlign: "center", paddingBottom: 60 }}>
          <button 
            onClick={() => {
              if (confirm("현재까지 푼 내용으로 시험을 종료하고 결과를 보시겠습니까?")) {
                submit();
              }
            }}
            style={{ 
              padding: "12px 20px", 
              backgroundColor: "transparent", 
              border: "1px solid #555", 
              color: "#aaa", 
              borderRadius: "8px", 
              fontSize: "0.8rem", 
              cursor: "pointer",
              transition: "all 0.2s"
            }}
            onMouseOver={(e) => { e.currentTarget.style.borderColor = "#FF5252"; e.currentTarget.style.color = "#FF5252"; }}
            onMouseOut={(e) => { e.currentTarget.style.borderColor = "#555"; e.currentTarget.style.color = "#aaa"; }}
          >
            ⏹️ 시험 종료 및 결과 보기
          </button>
        </div>

      </div>
    </div>
  );
}