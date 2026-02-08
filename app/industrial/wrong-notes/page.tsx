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

  // 🔥 [추가] 글씨 크기 상태 관리 (기본값 1.0)
  const [fontSize, setFontSize] = useState(1.0);

  useEffect(() => {
    const data = localStorage.getItem("cbt-wrong-list");
    if (data) {
      const parsed = JSON.parse(data);
      const sorted = parsed.sort((a: any, b: any) => a.addedAt - b.addedAt);
      setWrongList(sorted);
    }
    // 로컬 스토리지에 저장된 선호 글꼴 크기가 있다면 불러오기
    const savedFontSize = localStorage.getItem("cbt-font-size");
    if (savedFontSize) setFontSize(parseFloat(savedFontSize));
  }, []);

  // 글씨 크기 변경 함수
  const handleFontSize = (delta: number) => {
    setFontSize(prev => {
      const newSize = Math.min(Math.max(prev + delta, 0.8), 1.5); // 0.8배 ~ 1.5배 제한
      localStorage.setItem("cbt-font-size", newSize.toString());
      return newSize;
    });
  };

  // ... (기본 로직: groupedData, solvingQuestions, currentQ, currentCorrectNum 동일)
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
    if (currentQ.shuffledOptions) {
      return currentQ.shuffledOptions.findIndex((opt: any) => opt.originalNum === currentQ.answer) + 1;
    }
    return currentQ.answer;
  }, [currentQ]);

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
  }, [isSolving, currentQ, showExplanation]);

  const handleSelect = (num: number) => {
    if (showExplanation) return;
    setSelectedAnswer(num);
    setShowExplanation(true);
  };

  const nextWrong = () => {
    if (selectedAnswer === currentCorrectNum) {
      const updated = wrongList.filter(item => !(item.id === currentQ.id && item.examId === currentQ.examId));
      setWrongList(updated);
      localStorage.setItem("cbt-wrong-list", JSON.stringify(updated));
      if (solvingQuestions.length <= 1) {
        alert("해당 섹션의 모든 오답을 정복했습니다! 🎉");
        setIsSolving(false);
      }
    } else {
      if (currentIndex < solvingQuestions.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        alert("마지막 문제입니다. 오답 노트를 다시 확인해보세요.");
        setIsSolving(false);
      }
    }
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  // 📝 [풀기 모드 UI]
  if (isSolving && currentQ) {
    const displayOptions = currentQ.shuffledOptions || currentQ.options;

    return (
      <div style={{ minHeight: "100vh", backgroundColor: "#121212", color: "white", padding: "20px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          
          {/* 상단 컨트롤바: 글씨 조절 버튼 추가 */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 15 }}>
            <span style={{ color: "#aaa", fontSize: "0.85rem" }}>📂 {selectedSession}</span>
            <div style={{ display: "flex", gap: "8px", alignItems: "center", backgroundColor: "#333", padding: "4px 8px", borderRadius: "20px" }}>
              <button onClick={() => handleFontSize(-0.1)} style={{ background: "none", border: "none", color: "white", cursor: "pointer", padding: "0 5px", fontWeight: "bold" }}>A-</button>
              <span style={{ fontSize: "0.75rem", color: "#4FC3F7" }}>{Math.round(fontSize * 100)}%</span>
              <button onClick={() => handleFontSize(0.1)} style={{ background: "none", border: "none", color: "white", cursor: "pointer", padding: "0 5px", fontWeight: "bold" }}>A+</button>
            </div>
            <span style={{ fontSize: "0.85rem", color: "#aaa" }}>{currentIndex + 1} / {solvingQuestions.length}</span>
          </div>

          {/* 질문 영역 (fontSize 적용) */}
          <h2 style={{ 
            backgroundColor: "#1E1E1E", padding: 25, borderRadius: 15, border: "1px solid #333", marginBottom: 20, 
            lineHeight: 1.5, fontSize: `${1.2 * fontSize}rem`, wordBreak: "keep-all" 
          }}>
            <span style={{ color: "#4FC3F7", marginRight: 10 }}>Q.</span>{currentQ.question}
          </h2>

          {currentQ.image && (
            <div style={{ marginBottom: 20, textAlign: "center", background: "#000", padding: 10, borderRadius: 12, border: "1px solid #333" }}>
              <img src={currentQ.image} alt="문제 이미지" style={{ maxWidth: "100%", maxHeight: "250px", objectFit: "contain" }} />
            </div>
          )}

          {/* 보기 영역 (fontSize 적용) */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {displayOptions.map((opt: any, i: number) => {
              const num = i + 1;
              const optText = typeof opt === 'string' ? opt : opt.text;
              let bgColor = "#2C2C2C";
              let borderColor = "#333";
              if (showExplanation) {
                if (num === currentCorrectNum) { bgColor = "#1B5E20"; borderColor = "#4CAF50"; }
                else if (selectedAnswer === num) { bgColor = "#3E2723"; borderColor = "#FF5252"; }
              }
              return (
                <div key={i} onClick={() => (showExplanation ? nextWrong() : handleSelect(num))} style={{ 
                  padding: 18, borderRadius: 12, cursor: "pointer", 
                  backgroundColor: bgColor, border: `2px solid ${borderColor}`, 
                  fontSize: `${1.05 * fontSize}rem` 
                }}>
                  {num}. {optText}
                </div>
              );
            })}
          </div>

          {/* 해설 영역 (fontSize 적용) */}
          {showExplanation && (
            <div style={{ marginTop: 25, padding: 25, backgroundColor: "#1E1E1E", borderRadius: 15, border: "1px solid #4FC3F7" }}>
              <h3 style={{ margin: "0 0 10px 0", color: selectedAnswer === currentCorrectNum ? "#81C784" : "#FF5252", fontSize: `${1.1 * fontSize}rem` }}>
                {selectedAnswer === currentCorrectNum ? "✅ 정답! 리스트에서 제거됩니다." : `❌ 오답 (정답: ${currentCorrectNum}번)`}
              </h3>
              <div style={{ lineHeight: 1.6, color: "#ddd", fontSize: `${0.95 * fontSize}rem` }}><strong>[해설]</strong> {currentQ.explanation}</div>
              <p style={{ textAlign: "center", color: "#666", marginTop: 15, fontSize: "0.8rem" }}>번호키를 누르면 다음 문제로</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  // ... (목록 모드 UI 생략 - 기존 코드와 동일)
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#121212", color: "white", padding: "40px 20px" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 30 }}>
          <h1 style={{ fontSize: "1.8rem", fontWeight: "bold", color: "#4FC3F7" }}>
            {selectedDate ? `📅 ${selectedDate}` : "📂 오답 노트 폴더"}
          </h1>
          <Link href="/"><button style={{ padding: "10px 20px", background: "#333", color: "white", borderRadius: 8, border: "none", cursor: "pointer" }}>🏠 홈으로</button></Link>
        </div>

        {!selectedDate ? (
          <div style={{ display: "grid", gap: 15 }}>
            {Object.keys(groupedData).length === 0 ? (
              <div style={{ textAlign: "center", padding: "100px 0", color: "#666" }}>틀린 문제가 없습니다. 완벽해요! 🌟</div>
            ) : (
              Object.keys(groupedData).reverse().map(date => (
                <div key={date} onClick={() => setSelectedDate(date)} style={{ padding: 25, backgroundColor: "#1E1E1E", borderRadius: 15, cursor: "pointer", border: "1px solid #333", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <div style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: 5 }}>📁 {date}</div>
                    <div style={{ fontSize: "0.9rem", color: "#888" }}>{Object.keys(groupedData[date]).length}개 시험 기록</div>
                  </div>
                  <span style={{ color: "#4FC3F7" }}>열기 ➡️</span>
                </div>
              ))
            )}
          </div>
        ) : (
          <div style={{ display: "grid", gap: 12 }}>
            <button onClick={() => setSelectedDate(null)} style={{ color: "#4FC3F7", background: "none", border: "none", cursor: "pointer", textAlign: "left", marginBottom: 10 }}>⬅️ 뒤로가기</button>
            {Object.keys(groupedData[selectedDate]).map(examId => (
              <div key={examId} style={{ padding: 20, backgroundColor: "#1E1E1E", borderRadius: 12, display: "flex", justifyContent: "space-between", alignItems: "center", border: "1px solid #333" }}>
                <span style={{ fontSize: "1.1rem" }}>📄 {examId}</span>
                <button onClick={() => { setSelectedSession(examId); setIsSolving(true); setCurrentIndex(0); }} style={{ padding: "10px 20px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: 8, fontWeight: "bold", cursor: "pointer" }}>다시 풀기</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}