"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter, useParams } from "next/navigation";
// ✅ 데이터 경로: 상위로 4번 나가서 data/fire 폴더의 index.ts를 찾습니다.
import allQuestions from "../../../../data/fire";

interface Question {
  id: number;
  question: string;
  options: any[];
  answer: number;
  explanation: string;
  image?: string | null;
  shuffledOptions?: any[];
}

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
  const examId = params.id as string;
  
  // 데이터 로드 (없을 경우 빈 배열)
  const originalQuestions = allQuestions ? allQuestions[examId] : [];

  // 문제 및 보기 섞기
  const questions = useMemo(() => {
    if (!originalQuestions || originalQuestions.length === 0) return [];
    return originalQuestions.map((q: Question) => ({
      ...q,
      shuffledOptions: shuffleArray(q.options.map((opt: any, i: number) => {
        if (typeof opt === 'string') return { text: opt, originalNum: i + 1 };
        return { ...opt, originalNum: i + 1 };
      }))
    }));
  }, [originalQuestions]);

  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [result, setResult] = useState<"correct" | "wrong" | null>(null);
  const [isExamMode, setIsExamMode] = useState(false);
  const [seconds, setSeconds] = useState(0);

  // 현재 문제 데이터
  const q = questions[index];
  const currentCorrectNum = useMemo(() => q ? q.shuffledOptions.findIndex((opt: any) => opt.originalNum === q.answer) + 1 : 0, [q]);

  // 초기화 및 타이머
  useEffect(() => {
    if (questions.length > 0) setAnswers(Array(questions.length).fill(0));
    const timer = setInterval(() => setSeconds((prev) => prev + 1), 1000);
    return () => clearInterval(timer);
  }, [questions]);

  // 통계 계산 (80문제 기준, 4과목 자동 계산)
  const stats = useMemo(() => {
    if (questions.length === 0) return null;
    const totalCorrect = answers.filter((ans: number, idx: number) => questions[idx] && ans === questions[idx].answer).length;
    const totalSolved = answers.filter((a: number) => a !== 0).length;
    const currentTotalScore = Math.round((totalCorrect / questions.length) * 100);
    
    // 20문제씩 끊어서 과목별 점수 계산 (소방 4과목 = 80문제)
    const subjectCount = Math.ceil(questions.length / 20); 
    const subjectDetails = Array.from({ length: subjectCount }, (_, i) => i).map((sIdx: number) => {
      const subAns = answers.slice(sIdx * 20, (sIdx + 1) * 20);
      const subQue = questions.slice(sIdx * 20, (sIdx + 1) * 20);
      
      // 해당 과목에서 푼 문제 수
      const solvedCount = subAns.filter(a => a !== 0).length;
      // 해당 과목 정답 수
      const corrects = subAns.filter((ans: number, i: number) => subQue[i] && ans === subQue[i].answer).length;
      
      return { corrects, solvedCount, score: corrects * 5 };
    });
    
    return { subjectDetails, totalCorrect, totalSolved, currentTotalScore };
  }, [answers, questions]);

  // 정답 선택 핸들러
  const handleSelectAnswer = (originalNum: number) => {
    if (!isExamMode && result) { next(); return; }
    const newAnswers = [...answers];
    newAnswers[index] = originalNum;
    setAnswers(newAnswers);
    if (isExamMode) {
      if (index < questions.length - 1) setTimeout(() => next(), 150);
    } else {
      setResult(originalNum === q.answer ? "correct" : "wrong");
    }
  };

  const next = () => { if (index < questions.length - 1) { setIndex(index + 1); setResult(null); } };
  const prev = () => { if (index > 0) { setIndex(index - 1); setResult(null); } };

  // 최종 제출 로직
  const submit = () => {
    const savedWrongs = JSON.parse(localStorage.getItem("fire-wrong-list") || "[]");
    const currentWrongs = questions
      .filter((que: any, i: number) => answers[i] !== 0 && answers[i] !== que.answer)
      .map((que: any) => ({ ...que, examId, addedAt: new Date().getTime() }));

    const correctIds = questions
      .filter((que: any, i: number) => answers[i] === que.answer)
      .map((que: any) => `${examId}-${que.id}`);

    const filteredSaved = savedWrongs.filter((v: any) => !correctIds.includes(`${v.examId}-${v.id}`));
    const combined = [...currentWrongs, ...filteredSaved];
    const uniqueWrongs = combined.filter((v: any, i: number, a: any[]) => 
      a.findIndex((t: any) => t.id === v.id && t.examId === v.examId) === i
    );

    localStorage.setItem("fire-wrong-list", JSON.stringify(uniqueWrongs));
    localStorage.setItem("fire-answers", JSON.stringify(answers));
    localStorage.setItem("fire-id", examId);
    localStorage.setItem("fire-time", `${Math.floor(seconds/60)}:${(seconds%60).toString().padStart(2,'0')}`);
    
    router.push("/fire/result"); 
  };

  // 키보드 이벤트
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

  if (!q) return <div style={{ minHeight: "100vh", backgroundColor: "#121212", color: "white", display: "flex", justifyContent: "center", alignItems: "center" }}>데이터를 불러오는 중입니다... (ID: {examId})</div>;

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#121212", color: "#e0e0e0", fontFamily: "sans-serif" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
        
        {/* 1. 상단 헤더 & 모드 전환 */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
          <div>
             <span style={{ display: "block", fontSize: "0.8rem", color: "#888", marginBottom: "4px" }}>소방설비기사 (전기)</span>
             <h1 style={{ margin: 0, fontSize: "1.2rem", fontWeight: "bold", color: "#fff" }}>
               🚒 {examId}회차 기출
             </h1>
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "5px" }}>
             <div style={{ fontSize: "1rem", color: "#FFD54F", fontWeight: "bold", fontFamily: "monospace" }}>
                ⏱ {Math.floor(seconds/60)}:{(seconds%60).toString().padStart(2,'0')}
             </div>
             <button 
              onClick={() => {setIsExamMode(!isExamMode); setResult(null);}} 
              style={{ 
                padding: "6px 12px", borderRadius: "20px", border: "none", 
                backgroundColor: isExamMode ? "#FF5252" : "#444", 
                color: "white", fontSize: "0.8rem", cursor: "pointer", transition: "all 0.3s"
              }}>
              {isExamMode ? "🔥 실전 모드 ON" : "📚 학습 모드"}
            </button>
          </div>
        </div>

        {/* 2. 종합 현황판 (카드 스타일) */}
        <div style={{ 
          display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px", 
          backgroundColor: "#1E1E1E", padding: "15px", borderRadius: "15px", marginBottom: "15px",
          boxShadow: "0 4px 6px rgba(0,0,0,0.3)"
        }}>
          <div style={{ textAlign: "center", borderRight: "1px solid #333" }}>
            <div style={{ fontSize: "0.7rem", color: "#aaa", marginBottom: "5px" }}>진행률</div>
            <div style={{ fontSize: "1.1rem", fontWeight: "bold" }}>
              {Math.round((stats?.totalSolved || 0) / questions.length * 100)}%
              <span style={{ fontSize: "0.7rem", color: "#666", marginLeft: "5px" }}>({stats?.totalSolved}/{questions.length})</span>
            </div>
          </div>
          <div style={{ textAlign: "center", borderRight: "1px solid #333" }}>
            <div style={{ fontSize: "0.7rem", color: "#aaa", marginBottom: "5px" }}>맞은 개수</div>
            <div style={{ fontSize: "1.1rem", fontWeight: "bold", color: "#69F0AE" }}>
               {stats?.totalCorrect} <span style={{ fontSize: "0.8rem" }}>개</span>
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "0.7rem", color: "#aaa", marginBottom: "5px" }}>예상 점수</div>
            <div style={{ fontSize: "1.1rem", fontWeight: "bold", color: (stats?.currentTotalScore || 0) >= 60 ? "#69F0AE" : "#FF5252" }}>
              {stats?.currentTotalScore} <span style={{ fontSize: "0.8rem" }}>점</span>
            </div>
          </div>
        </div>

        {/* 3. 과목별 타일 (4열 배치로 수정) */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(4, 1fr)", // 4과목이므로 4열로 고정
          gap: "8px", marginBottom: "30px" 
        }}>
          {stats?.subjectDetails.map((item, i) => {
             const isCurrentSubject = Math.floor(index/20) === i;
             const isPass = item.score >= 40; // 과락 기준(40점)
             
             return (
              <div key={i} style={{ 
                backgroundColor: isCurrentSubject ? "#2c2c2c" : "#1E1E1E", 
                padding: "10px 5px", borderRadius: "8px", textAlign: "center",
                border: isCurrentSubject ? "1px solid #FF5252" : "1px solid transparent",
                opacity: item.solvedCount > 0 ? 1 : 0.5, // 안 푼 과목은 흐리게
                transition: "all 0.3s"
              }}>
                <div style={{ fontSize: "0.7rem", color: "#aaa", marginBottom: "2px" }}>
                  {i+1}과목
                </div>
                <div style={{ fontWeight: "bold", color: isPass ? "#69F0AE" : "#FF5252", fontSize: "0.9rem" }}>
                  {item.corrects}/20
                </div>
                {item.solvedCount > 0 && (
                   <div style={{ fontSize: "0.6rem", color: isPass ? "#69F0AE" : "#FF5252" }}>
                     ({item.score}점)
                   </div>
                )}
              </div>
            );
          })}
        </div>

        {/* 4. 문제 영역 */}
        <div style={{ marginBottom: "20px" }}>
          <div style={{ 
            backgroundColor: "#1E1E1E", padding: "20px", borderRadius: "12px", 
            borderLeft: "5px solid #FF5252", boxShadow: "0 2px 4px rgba(0,0,0,0.2)"
          }}>
            <h2 style={{ fontSize: "1.1rem", lineHeight: "1.6", margin: 0 }}>
              <span style={{ color: "#FF5252", marginRight: "8px", fontWeight: "900" }}>Q{index + 1}.</span>
              {q.question}
            </h2>
          </div>
        </div>

        {q.image && (
          <div style={{ marginBottom: 20, textAlign: "center", background: "#000", padding: "10px", borderRadius: "10px", border: "1px solid #333" }}>
            <img src={q.image} alt="문제 이미지" style={{ maxWidth: "100%", maxHeight: "300px", objectFit: "contain" }} />
          </div>
        )}

        {/* 5. 보기 버튼 영역 */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "30px" }}>
          {q.shuffledOptions?.map((opt: any, i: number) => {
            const isSelected = answers[index] === opt.originalNum;
            let bgColor = "#2C2C2C";
            let borderColor = "transparent";
            let textColor = "#e0e0e0";

            if (!isExamMode && result) {
              // 결과 확인 모드
              if (opt.originalNum === q.answer) { 
                bgColor = "rgba(27, 94, 32, 0.4)"; borderColor = "#4CAF50"; textColor = "#81C784";
              } else if (isSelected) { 
                bgColor = "rgba(183, 28, 28, 0.4)"; borderColor = "#FF5252"; 
              }
            } else if (isSelected) {
              // 선택 중 (소방 테마)
              bgColor = "#D32F2F"; borderColor = "#FF5252"; textColor = "#fff";
            }

            return (
              <button 
                key={i} 
                onClick={() => handleSelectAnswer(opt.originalNum)} 
                style={{ 
                  padding: "16px 20px", borderRadius: "12px", 
                  backgroundColor: bgColor, border: `2px solid ${borderColor}`, 
                  color: textColor, textAlign: "left", fontSize: "1rem", cursor: "pointer",
                  transition: "all 0.2s ease", display: "flex", flexDirection: "column"
                }}
              >
                <span><span style={{ fontWeight: "bold", marginRight: "8px" }}>{i + 1}.</span> {opt.text}</span>
                {opt.image && <img src={opt.image} alt="보기 이미지" style={{ maxWidth: "100%", marginTop: "10px", borderRadius: "5px" }} />}
              </button>
            );
          })}
        </div>

        {/* 6. 해설창 (학습 모드 전용) */}
        {!isExamMode && result && (
          <div style={{ 
            backgroundColor: "#263238", padding: "20px", borderRadius: "12px", 
            border: `1px solid ${result === "correct" ? "#4CAF50" : "#FF5252"}`, marginBottom: "30px",
            animation: "fadeIn 0.3s ease-in-out"
          }}>
            <h3 style={{ margin: "0 0 10px 0", color: result === "correct" ? "#81C784" : "#FF5252", display: "flex", alignItems: "center", gap: "5px" }}>
              {result === "correct" ? "✅ 정답입니다!" : "❌ 오답입니다"}
              {result !== "correct" && <span style={{ fontSize: "0.9rem", color: "#fff", marginLeft: "auto" }}>정답: {currentCorrectNum}번</span>}
            </h3>
            <div style={{ lineHeight: "1.6", color: "#eceff1", fontSize: "0.95rem" }}>
              <strong>[해설]</strong><br/>
              {q.explanation}
            </div>
          </div>
        )}

        {/* 7. 하단 네비게이션 */}
        <div style={{ display: "flex", gap: "15px", justifyContent: "center", paddingBottom: "80px" }}>
          <button onClick={prev} disabled={index === 0} style={{ 
            padding: "14px 24px", background: "#333", color: "white", borderRadius: "12px", 
            border: "none", cursor: index === 0 ? "not-allowed" : "pointer", fontWeight: "bold", opacity: index === 0 ? 0.5 : 1
          }}>
            ⬅️ 이전
          </button>
          
          <button onClick={index === questions.length - 1 ? submit : next} style={{ 
            padding: "14px 40px", 
            background: index === questions.length - 1 ? "linear-gradient(45deg, #4CAF50, #81C784)" : "linear-gradient(45deg, #FF5252, #FF8A80)", 
            color: "white", borderRadius: "12px", border: "none", fontWeight: "bold", cursor: "pointer",
            boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
          }}>
            {index === questions.length - 1 ? "결과 제출 🏁" : "다음 문제 ➡️"}
          </button>
        </div>

        <style jsx global>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </div>
    </div>
  );
}