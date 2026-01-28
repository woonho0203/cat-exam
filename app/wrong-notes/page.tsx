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

    // 🚀 [자동 삭제] 맞혔을 경우 로컬 스토리지에서 즉시 삭제
    if (num === currentQ.answer) {
      const updated = wrongList.filter(item => !(item.id === currentQ.id && item.examId === currentQ.examId));
      localStorage.setItem("cbt-wrong-list", JSON.stringify(updated));
    }
  };

  const nextWrong = () => {
    // 맞혔던 문제라면 리스트 상태를 갱신 (인덱스는 그대로 두면 다음 문제가 밀려옴)
    if (selectedAnswer === currentQ.answer) {
      const updated = wrongList.filter(item => !(item.id === currentQ.id && item.examId === currentQ.examId));
      setWrongList(updated);
      
      // 만약 해당 섹션의 마지막 문제였다면 종료
      const remainingInSession = updated.filter(item => 
        new Date(item.addedAt).toLocaleDateString() === selectedDate && item.examId === selectedSession
      );
      
      if (currentIndex >= remainingInSession.length) {
        alert("해당 폴더의 오답을 모두 정복했습니다! 🎉");
        setIsSolving(false);
      }
    } else {
      // 틀렸다면 다음 문제로 인덱스 이동
      if (currentIndex < solvingQuestions.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setIsSolving(false);
      }
    }
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  const removeItem = (id: number, examId: string) => {
    const updated = wrongList.filter(item => !(item.id === id && item.examId === examId));
    localStorage.setItem("cbt-wrong-list", JSON.stringify(updated));
    setWrongList(updated);
  };

  if (isSolving && currentQ) {
    return (
      <div style={{ minHeight: "100vh", backgroundColor: "#121212", color: "white", padding: "40px 20px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20, color: "#aaa" }}>
            <span>📂 {selectedDate} ＞ {selectedSession}</span>
            <span>{currentIndex + 1} / {solvingQuestions.length}</span>
          </div>
          <h2 style={{ backgroundColor: "#1E1E1E", padding: "20px", borderRadius: "12px", border: "1px solid #333", marginBottom: 20 }}>{currentQ.question}</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {currentQ.options.map((opt: string, i: number) => {
              const num = i + 1;
              let bgColor = "#2C2C2C";
              if (showExplanation) {
                if (num === currentQ.answer) bgColor = "#1B5E20";
                else if (selectedAnswer === num) bgColor = "#3E2723";
              }
              return (
                <div key={i} onClick={() => (showExplanation ? nextWrong() : handleSelect(num))} style={{ padding: "15px", borderRadius: "10px", cursor: "pointer", backgroundColor: bgColor, border: "2px solid #333" }}>
                  {num}. {opt}
                </div>
              );
            })}
          </div>
          {showExplanation && (
            <div style={{ marginTop: 25, padding: 25, backgroundColor: "#1E1E1E", borderRadius: 15, border: "1px solid #4FC3F7" }}>
              <p style={{ color: "#4FC3F7", fontWeight: "bold", marginBottom: 5 }}>💡 해설</p>
              <p>{currentQ.explanation}</p>
              <p style={{ color: "#666", fontSize: "0.8rem", marginTop: 15 }}>맞히면 오답노트에서 자동으로 삭제됩니다.</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#121212", color: "white", padding: "40px 20px" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 30 }}>
          <h1 style={{ fontSize: "1.8rem", fontWeight: "bold" }}>{selectedDate ? `📂 ${selectedDate}` : "📅 오답 기록"}</h1>
          <Link href="/"><button style={{ padding: "8px 16px", backgroundColor: "#333", color: "white", border: "none", borderRadius: 8 }}>홈으로</button></Link>
        </div>
        {!selectedDate && (
          <div style={{ display: "grid", gap: 15 }}>
            {Object.keys(groupedData).length === 0 ? <p style={{ textAlign: "center", marginTop: 50, color: "#666" }}>오답 노트가 비어있습니다. 아주 훌륭합니다! 👏</p> : 
              Object.keys(groupedData).reverse().map(date => (
                <div key={date} onClick={() => setSelectedDate(date)} style={{ padding: "20px", backgroundColor: "#1E1E1E", borderRadius: 12, cursor: "pointer", border: "1px solid #333" }}>
                  📁 <span style={{ fontWeight: "bold", marginLeft: 10 }}>{date}</span>
                  <div style={{ fontSize: "0.8rem", color: "#666", marginLeft: 35 }}>{Object.keys(groupedData[date]).length}개 회차 기록됨</div>
                </div>
            ))}
          </div>
        )}
        {selectedDate && !isSolving && (
          <div style={{ display: "grid", gap: 15 }}>
            <button onClick={() => setSelectedDate(null)} style={{ color: "#4FC3F7", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>⬅️ 뒤로가기</button>
            {Object.keys(groupedData[selectedDate]).map(examId => (
              <div key={examId} style={{ padding: "20px", backgroundColor: "#1E1E1E", borderRadius: 12, display: "flex", justifyContent: "space-between", alignItems: "center", border: "1px solid #333" }}>
                <div>📄 {examId}회차 ({groupedData[selectedDate][examId].length}문제)</div>
                <button onClick={() => { setSelectedSession(examId); setIsSolving(true); setCurrentIndex(0); setShowExplanation(false); }} style={{ padding: "10px 20px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: 8, fontWeight: "bold" }}>다시 풀기</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}