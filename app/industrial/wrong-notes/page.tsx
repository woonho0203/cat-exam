"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";

export default function WrongNotesPage() {
  const router = useRouter();
  const [wrongList, setWrongList] = useState<any[]>([]);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedSession, setSelectedSession] = useState<string | null>(null);
  const [isSolving, setIsSolving] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [fontSize, setFontSize] = useState(1.0);

  useEffect(() => {
    // 산업안전기사 전용 키값 확인
    const data = localStorage.getItem("cbt-wrong-list");
    if (data) {
      const parsed = JSON.parse(data);
      // 최근에 틀린 문제가 위로 오도록 정렬
      const sorted = parsed.sort((a: any, b: any) => b.addedAt - a.addedAt);
      setWrongList(sorted);
    }
    const savedFontSize = localStorage.getItem("cbt-font-size");
    if (savedFontSize) setFontSize(parseFloat(savedFontSize));
  }, []);

  const handleFontSize = (delta: number) => {
    setFontSize(prev => {
      const newSize = Math.min(Math.max(prev + delta, 0.8), 1.5);
      localStorage.setItem("cbt-font-size", newSize.toString());
      return newSize;
    });
  };

  // 날짜별/회차별 그룹화 로직
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
    // 섞인 보기 중 정답 번호 찾기
    if (currentQ.shuffledOptions) {
      return currentQ.shuffledOptions.findIndex((opt: any) => opt.originalNum === currentQ.answer) + 1;
    }
    return currentQ.answer;
  }, [currentQ]);

  // 정답 선택 및 리스트 제거 로직
  const handleSelect = (num: number) => {
    if (showExplanation) return;
    setSelectedAnswer(num);
    setShowExplanation(true);
  };

  const nextWrong = () => {
    if (selectedAnswer === currentCorrectNum) {
      // 맞췄을 경우 전체 리스트에서 해당 문제 제거 (정복 완료)
      const updated = wrongList.filter(item => !(item.id === currentQ.id && item.examId === currentQ.examId));
      setWrongList(updated);
      localStorage.setItem("cbt-wrong-list", JSON.stringify(updated));
      
      if (solvingQuestions.length <= 1) {
        alert("🎉 해당 섹션의 모든 오답을 정복했습니다!");
        setIsSolving(false);
      }
    } else {
      // 틀렸을 경우 다음 문제로 그냥 이동
      if (currentIndex < solvingQuestions.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        alert("마지막 문제입니다. 다시 처음부터 복습해보세요.");
        setIsSolving(false);
      }
    }
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  // 📝 [1] 문제 풀기 모드 UI
  if (isSolving && currentQ) {
    const displayOptions = currentQ.shuffledOptions || currentQ.options;

    return (
      <div style={{ minHeight: "100vh", backgroundColor: "#121212", color: "white", padding: "20px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
            <button onClick={() => setIsSolving(false)} style={{ background: "none", border: "none", color: "#4FC3F7", cursor: "pointer" }}>⬅️ 목록으로</button>
            <div style={{ display: "flex", gap: "8px", alignItems: "center", backgroundColor: "#333", padding: "4px 12px", borderRadius: "20px" }}>
              <button onClick={() => handleFontSize(-0.1)} style={{ background: "none", border: "none", color: "white", cursor: "pointer" }}>-</button>
              <span style={{ fontSize: "0.8rem", color: "#4FC3F7" }}>{Math.round(fontSize * 100)}%</span>
              <button onClick={() => handleFontSize(0.1)} style={{ background: "none", border: "none", color: "white", cursor: "pointer" }}>+</button>
            </div>
          </div>

          <div style={{ marginBottom: 15, fontSize: "0.9rem", color: "#888" }}>{selectedSession} | {currentIndex + 1} / {solvingQuestions.length}</div>
          
          <h2 style={{ 
            backgroundColor: "#1E1E1E", padding: 25, borderRadius: 15, border: "1px solid #333", marginBottom: 20, 
            lineHeight: 1.6, fontSize: `${1.1 * fontSize}rem`, wordBreak: "keep-all" 
          }}>
            <span style={{ color: "#FF5252", marginRight: 10 }}>Q.</span>{currentQ.question}
          </h2>

          {currentQ.image && (
            <div style={{ marginBottom: 20, textAlign: "center", background: "#000", padding: 10, borderRadius: 12 }}>
              <img src={currentQ.image} alt="문제 이미지" style={{ maxWidth: "100%", maxHeight: "250px" }} />
            </div>
          )}

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
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
                  padding: "18px 22px", borderRadius: 12, cursor: "pointer", 
                  backgroundColor: bgColor, border: `2px solid ${borderColor}`, 
                  fontSize: `${1 * fontSize}rem`, transition: "all 0.2s"
                }}>
                  {num}. {optText}
                </div>
              );
            })}
          </div>

          {showExplanation && (
            <div style={{ marginTop: 30, padding: 25, backgroundColor: "#1E1E1E", borderRadius: 15, border: "1px solid #4FC3F7", animation: "fadeIn 0.3s" }}>
              <h3 style={{ margin: "0 0 10px 0", color: selectedAnswer === currentCorrectNum ? "#81C784" : "#FF5252" }}>
                {selectedAnswer === currentCorrectNum ? "✅ 정답! 리스트에서 제거됩니다." : `❌ 오답 (정답: ${currentCorrectNum}번)`}
              </h3>
              <div style={{ lineHeight: 1.6, color: "#ddd", fontSize: `${0.95 * fontSize}rem` }}><strong>[해설]</strong> {currentQ.explanation}</div>
              <button onClick={nextWrong} style={{ width: "100%", marginTop: 20, padding: "12px", borderRadius: "8px", border: "none", background: "#4FC3F7", color: "#000", fontWeight: "bold", cursor: "pointer" }}>다음 문제</button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // 📂 [2] 목록 모드 UI
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#121212", color: "white", padding: "40px 20px" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 40 }}>
          <h1 style={{ fontSize: "1.8rem", fontWeight: "bold", color: "#4FC3F7" }}>
            {selectedDate ? `📅 ${selectedDate}` : "👷 오답 노트"}
          </h1>
          <button onClick={() => router.push("/")} style={{ padding: "10px 20px", background: "#333", borderRadius: 8, border: "none", color: "white", cursor: "pointer" }}>🏠 홈으로</button>
        </div>

        {!selectedDate ? (
          <div style={{ display: "grid", gap: 15 }}>
            {Object.keys(groupedData).length === 0 ? (
              <div style={{ textAlign: "center", padding: "100px 0", color: "#666" }}>
                <div style={{ fontSize: "3rem", marginBottom: 20 }}>🌟</div>
                틀린 문제가 없습니다. 완벽합니다!
              </div>
            ) : (
              Object.keys(groupedData).reverse().map(date => (
                <div key={date} onClick={() => setSelectedDate(date)} style={{ 
                  padding: 25, backgroundColor: "#1E1E1E", borderRadius: 15, cursor: "pointer", 
                  border: "1px solid #333", display: "flex", justifyContent: "space-between", alignItems: "center",
                  transition: "transform 0.2s"
                }}>
                  <div>
                    <div style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: 5 }}>📂 {date}</div>
                    <div style={{ fontSize: "0.85rem", color: "#888" }}>{Object.keys(groupedData[date]).length}개의 기록</div>
                  </div>
                  <span style={{ color: "#4FC3F7" }}>보기 ➡️</span>
                </div>
              ))
            )}
          </div>
        ) : (
          <div style={{ display: "grid", gap: 15 }}>
            <button onClick={() => setSelectedDate(null)} style={{ color: "#4FC3F7", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>⬅️ 날짜 목록으로</button>
            {Object.keys(groupedData[selectedDate]).map(examId => (
              <div key={examId} style={{ 
                padding: 20, backgroundColor: "#1E1E1E", borderRadius: 12, 
                display: "flex", justifyContent: "space-between", alignItems: "center", border: "1px solid #333" 
              }}>
                <div>
                  <div style={{ fontWeight: "bold" }}>📄 {examId}</div>
                  <div style={{ fontSize: "0.8rem", color: "#FF5252" }}>틀린 문제: {groupedData[selectedDate][examId].length}개</div>
                </div>
                <button 
                  onClick={() => { setSelectedSession(examId); setIsSolving(true); setCurrentIndex(0); }} 
                  style={{ padding: "10px 20px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: 8, fontWeight: "bold", cursor: "pointer" }}
                >
                  복습하기
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}