"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";

export default function WrongNotesPage() {
  const [wrongList, setWrongList] = useState<any[]>([]);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedSession, setSelectedSession] = useState<string | null>(null);
  const [isSolving, setIsSolving] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem("cbt-wrong-list");
    if (data) {
      const parsed = JSON.parse(data);
      const sorted = parsed.sort((a: any, b: any) => a.addedAt - b.addedAt);
      setWrongList(sorted);
    }
  }, []);

  const groupedData = useMemo(() => {
    const groups: any = {};
    wrongList.forEach((item) => {
      const date = new Date(item.addedAt).toLocaleDateString();
      if (!groups[date]) groups[date] = {};
      if (!groups[date][item.examId]) groups[date][item.examId] = [];
      groups[date][item.examId].push(item);
    });
    return groups;
  }, [wrongList]);

  const solvingQuestions = useMemo(() => {
    if (selectedDate && selectedSession && groupedData[selectedDate]) {
      return groupedData[selectedDate][selectedSession] || [];
    }
    return [];
  }, [selectedDate, selectedSession, groupedData]);

  const currentQ = solvingQuestions[currentIndex];

  const currentCorrectNum = useMemo(() => {
    if (!currentQ) return 0;
    const targetOptions = currentQ.shuffledOptions || currentQ.options;
    if (currentQ.shuffledOptions) {
      return currentQ.shuffledOptions.findIndex((opt: any) => opt.originalNum === currentQ.answer) + 1;
    }
    return currentQ.answer;
  }, [currentQ]);

  // 키보드 이벤트 로직 유지
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isSolving || !currentQ) return;
      if (['1', '2', '3', '4'].includes(e.key)) {
        if (showExplanation) nextWrong();
        else handleSelect(Number(e.key));
      }
      if (showExplanation && (e.key === "ArrowRight" || e.key === "Enter")) nextWrong();
      if (e.key === "Escape") setIsSolving(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isSolving, currentQ, currentIndex, showExplanation]);

  const handleSelect = (num: number) => {
    if (showExplanation) return;
    setSelectedAnswer(num);
    setShowExplanation(true);
    if (num === currentCorrectNum) {
      const updated = wrongList.filter(item => !(item.id === currentQ.id && item.examId === currentQ.examId));
      localStorage.setItem("cbt-wrong-list", JSON.stringify(updated));
    }
  };

  const nextWrong = () => {
    if (selectedAnswer === currentCorrectNum) {
      const updated = wrongList.filter(item => !(item.id === currentQ.id && item.examId === currentQ.examId));
      setWrongList(updated);
      const remainingInSession = updated.filter(item => 
        new Date(item.addedAt).toLocaleDateString() === selectedDate && item.examId === selectedSession
      );
      if (currentIndex >= remainingInSession.length) {
        alert("해당 폴더의 오답을 모두 정복했습니다! 🎉");
        setIsSolving(false);
      }
    } else {
      if (currentIndex < solvingQuestions.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setIsSolving(false);
      }
    }
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  // 문제 풀기 모드 (다시 풀기 화면)
  if (isSolving && currentQ) {
    const displayOptions = currentQ.shuffledOptions || currentQ.options;

    return (
      <div style={{ minHeight: "100vh", backgroundColor: "#121212", color: "white", padding: "clamp(15px, 5vw, 40px) 15px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 15, color: "#aaa", fontSize: "0.85rem" }}>
            <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: "70%" }}>📂 {selectedSession}</span>
            <span>{currentIndex + 1}/{solvingQuestions.length}</span>
          </div>
          <h2 style={{ 
            backgroundColor: "#1E1E1E", padding: "clamp(15px, 4vw, 25px)", borderRadius: "12px", border: "1px solid #333", 
            marginBottom: 20, fontSize: "clamp(1rem, 4.5vw, 1.2rem)", lineHeight: "1.5", wordBreak: "keep-all" 
          }}>
            {currentQ.question}
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {displayOptions.map((opt: any, i: number) => {
              const num = i + 1;
              const optText = typeof opt === 'string' ? opt : opt.text;
              let bgColor = "#2C2C2C";
              if (showExplanation) {
                if (num === currentCorrectNum) bgColor = "#1B5E20";
                else if (selectedAnswer === num) bgColor = "#3E2723";
              }
              return (
                <div key={i} onClick={() => (showExplanation ? nextWrong() : handleSelect(num))} style={{ 
                  padding: "clamp(12px, 4vw, 18px) 15px", borderRadius: "10px", cursor: "pointer", 
                  backgroundColor: bgColor, border: "2px solid #333", fontSize: "clamp(0.9rem, 4vw, 1.05rem)", lineHeight: "1.4"
                }}>
                  {num}. {optText}
                </div>
              );
            })}
          </div>
          {showExplanation && (
            <div style={{ marginTop: 20, padding: "clamp(15px, 5vw, 25px)", backgroundColor: "#1E1E1E", borderRadius: 15, border: "1px solid #4FC3F7" }}>
              <h3 style={{ margin: "0 0 10px 0", color: selectedAnswer === currentCorrectNum ? "#81C784" : "#FF5252", fontSize: "clamp(1rem, 4vw, 1.2rem)" }}>
                {selectedAnswer === currentCorrectNum ? "✅ 정답입니다!" : `❌ 정답: ${currentCorrectNum}번`}
              </h3>
              <p style={{ color: "#4FC3F7", fontWeight: "bold", marginBottom: 5, fontSize: "0.9rem" }}>💡 해설</p>
              <p style={{ fontSize: "clamp(0.85rem, 3.8vw, 1rem)", lineHeight: "1.6", color: "#ddd" }}>{currentQ.explanation}</p>
              <button onClick={nextWrong} style={{ width: "100%", marginTop: 15, padding: "12px", backgroundColor: "#333", color: "white", border: "none", borderRadius: "8px", fontWeight: "bold" }}>다음으로</button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // 기본 목록 화면
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#121212", color: "white", padding: "clamp(15px, 5vw, 40px) 15px" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 25 }}>
          <h1 style={{ fontSize: "clamp(1.3rem, 6vw, 1.8rem)", fontWeight: "bold" }}>
            {selectedDate ? `📂 ${selectedDate}` : "📅 오답 기록"}
          </h1>
          <Link href="/">
            <button style={{ padding: "8px 16px", backgroundColor: "#333", color: "white", border: "none", borderRadius: 8, fontSize: "0.85rem" }}>홈으로</button>
          </Link>
        </div>

        {!selectedDate && (
          <div style={{ display: "grid", gap: 12 }}>
            {Object.keys(groupedData).length === 0 ? (
              <p style={{ textAlign: "center", marginTop: 50, color: "#666", fontSize: "0.9rem" }}>오답 노트가 비어있습니다. 아주 훌륭합니다! 👏</p>
            ) : (
              Object.keys(groupedData).reverse().map(date => (
                <div key={date} onClick={() => setSelectedDate(date)} style={{ 
                  padding: "clamp(15px, 4vw, 20px)", backgroundColor: "#1E1E1E", borderRadius: 12, 
                  cursor: "pointer", border: "1px solid #333", display: "flex", flexDirection: "column", gap: 5 
                }}>
                  <div style={{ fontSize: "1.05rem", fontWeight: "bold" }}>📁 {date}</div>
                  <div style={{ fontSize: "0.8rem", color: "#666" }}>{Object.keys(groupedData[date]).length}개 회차 기록됨</div>
                </div>
              ))
            )}
          </div>
        )}

        {selectedDate && !isSolving && (
          <div style={{ display: "grid", gap: 12 }}>
            <button onClick={() => setSelectedDate(null)} style={{ color: "#4FC3F7", background: "none", border: "none", cursor: "pointer", textAlign: "left", marginBottom: 10, fontSize: "0.9rem" }}>⬅️ 날짜 선택으로 돌아가기</button>
            {Object.keys(groupedData[selectedDate]).map(examId => (
              <div key={examId} style={{ 
                padding: "15px 20px", backgroundColor: "#1E1E1E", borderRadius: 12, 
                display: "flex", justifyContent: "space-between", alignItems: "center", border: "1px solid #333", gap: 10
              }}>
                <div style={{ fontSize: "0.95rem", flex: 1, overflow: "hidden", textOverflow: "ellipsis" }}>📄 {examId}</div>
                <button onClick={() => { setSelectedSession(examId); setIsSolving(true); setCurrentIndex(0); setShowExplanation(false); }} style={{ 
                  padding: "10px 15px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: 8, 
                  fontWeight: "bold", fontSize: "0.85rem", whiteSpace: "nowrap" 
                }}>다시 풀기</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}