"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";

export default function FireWrongNotesPage() {
  const [wrongList, setWrongList] = useState<any[]>([]);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedSession, setSelectedSession] = useState<string | null>(null);
  const [isSolving, setIsSolving] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  // 글씨 크기 상태 관리
  const [fontSize, setFontSize] = useState(1.0);

  useEffect(() => {
    // ✅ 소방 전용 오답 데이터 불러오기
    const data = localStorage.getItem("fire-wrong-list");
    if (data) {
      const parsed = JSON.parse(data);
      const sorted = parsed.sort((a: any, b: any) => b.addedAt - a.addedAt); // 최신순 정렬
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

  // 날짜별 > 회차별 그룹화 로직
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

  // 현재 선택된 시험의 오답 문제들
  const solvingQuestions = useMemo(() => {
    if (selectedDate && selectedSession && groupedData[selectedDate]) {
      return groupedData[selectedDate][selectedSession] || [];
    }
    return [];
  }, [selectedDate, selectedSession, groupedData]);

  const currentQ = solvingQuestions[currentIndex];

  const currentCorrectNum = useMemo(() => {
    if (!currentQ) return 0;
    // 오답노트 데이터에 shuffledOptions가 저장되어 있다면 그것을 사용 (없으면 원본 answer 사용)
    if (currentQ.shuffledOptions) {
      return currentQ.shuffledOptions.findIndex((opt: any) => opt.originalNum === currentQ.answer) + 1;
    }
    return currentQ.answer;
  }, [currentQ]);

  // 키보드 조작
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isSolving || !currentQ) return;
      if (['1', '2', '3', '4'].includes(e.key)) {
        if (showExplanation) nextWrong(); // 해설 보고 있을 땐 다음으로
        else handleSelect(Number(e.key)); // 안 보고 있을 땐 선택
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
    // 정답을 맞혔을 경우 리스트에서 제거
    if (selectedAnswer === currentCorrectNum) {
      const updated = wrongList.filter(item => !(item.id === currentQ.id && item.examId === currentQ.examId));
      setWrongList(updated);
      localStorage.setItem("fire-wrong-list", JSON.stringify(updated)); // ✅ 소방 데이터 갱신
      
      // 만약 해당 회차의 문제를 다 풀었으면 종료
      if (solvingQuestions.length <= 1) {
        alert("🎉 해당 오답들을 모두 정복했습니다!");
        setIsSolving(false);
        setSelectedSession(null); // 목록으로 복귀
      }
    } else {
      // 틀렸으면 다음 문제로 (삭제 안 함)
      if (currentIndex < solvingQuestions.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        alert("마지막 문제입니다. (오답은 계속 남아있습니다)");
        setIsSolving(false);
      }
    }
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  // 📝 [문제 풀이 화면]
  if (isSolving && currentQ) {
    const displayOptions = currentQ.shuffledOptions || currentQ.options;

    return (
      <div style={{ minHeight: "100vh", backgroundColor: "#121212", color: "white", padding: "20px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          
          {/* 상단 컨트롤바 */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 15 }}>
            <span style={{ color: "#aaa", fontSize: "0.85rem" }}>📂 {selectedSession} (오답 복습)</span>
            <div style={{ display: "flex", gap: "8px", alignItems: "center", backgroundColor: "#333", padding: "4px 8px", borderRadius: "20px" }}>
              <button onClick={() => handleFontSize(-0.1)} style={{ background: "none", border: "none", color: "white", cursor: "pointer", padding: "0 5px", fontWeight: "bold" }}>A-</button>
              {/* ✅ 소방 Red 컬러 적용 */}
              <span style={{ fontSize: "0.75rem", color: "#FF5252" }}>{Math.round(fontSize * 100)}%</span>
              <button onClick={() => handleFontSize(0.1)} style={{ background: "none", border: "none", color: "white", cursor: "pointer", padding: "0 5px", fontWeight: "bold" }}>A+</button>
            </div>
            <span style={{ fontSize: "0.85rem", color: "#aaa" }}>{currentIndex + 1} / {solvingQuestions.length}</span>
          </div>

          {/* 질문 */}
          <h2 style={{ 
            backgroundColor: "#1E1E1E", padding: 25, borderRadius: 15, border: "1px solid #333", marginBottom: 20, 
            lineHeight: 1.5, fontSize: `${1.2 * fontSize}rem`, wordBreak: "keep-all" 
          }}>
            <span style={{ color: "#FF5252", marginRight: 10 }}>Q.</span>{currentQ.question}
          </h2>

          {currentQ.image && (
            <div style={{ marginBottom: 20, textAlign: "center", background: "#000", padding: 10, borderRadius: 12, border: "1px solid #333" }}>
              <img src={currentQ.image} alt="문제 이미지" style={{ maxWidth: "100%", maxHeight: "250px", objectFit: "contain" }} />
            </div>
          )}

          {/* 보기 */}
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
                  fontSize: `${1.05 * fontSize}rem`, display: "flex", flexDirection: "column", gap: "8px", transition: "all 0.2s" 
                }}>
                  <div>{num}. {optText}</div>
                  {opt.image && <img src={opt.image} alt="보기 이미지" style={{ maxWidth: "200px", marginTop: "5px", borderRadius: "5px" }} />}
                </div>
              );
            })}
          </div>

          {/* 해설 */}
          {showExplanation && (
            <div style={{ marginTop: 25, padding: 25, backgroundColor: "#1E1E1E", borderRadius: 15, border: "1px solid #FF5252" }}>
              <h3 style={{ margin: "0 0 10px 0", color: selectedAnswer === currentCorrectNum ? "#81C784" : "#FF5252", fontSize: `${1.1 * fontSize}rem` }}>
                {selectedAnswer === currentCorrectNum ? "✅ 정답! 리스트에서 제거됩니다." : `❌ 오답 (정답: ${currentCorrectNum}번)`}
              </h3>
              <div style={{ lineHeight: 1.6, color: "#ddd", fontSize: `${0.95 * fontSize}rem` }}><strong>[해설]</strong> {currentQ.explanation}</div>
              <p style={{ textAlign: "center", color: "#666", marginTop: 15, fontSize: "0.8rem" }}>[Enter]키나 화면을 터치하여 다음 문제로</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  // 📂 [목록 화면 UI]
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#121212", color: "white", padding: "40px 20px" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        
        {/* 상단 헤더 */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 30 }}>
          {/* ✅ 소방 테마 적용 */}
          <h1 style={{ fontSize: "1.8rem", fontWeight: "bold", color: "#FF5252", display: "flex", alignItems: "center", gap: "10px" }}>
            <span>📝</span>
            {selectedDate ? `📅 ${selectedDate}` : "소방 오답 노트"}
          </h1>
          <Link href="/fire"><button style={{ padding: "10px 20px", background: "#333", color: "white", borderRadius: 8, border: "none", cursor: "pointer" }}>🏠 소방 홈</button></Link>
        </div>

        {/* 1. 날짜 선택 화면 */}
        {!selectedDate ? (
          <div style={{ display: "grid", gap: 15 }}>
            {Object.keys(groupedData).length === 0 ? (
              <div style={{ textAlign: "center", padding: "100px 0", color: "#666" }}>
                <div style={{ fontSize: "3rem", marginBottom: "20px" }}>🎉</div>
                틀린 문제가 없습니다. 완벽해요!
              </div>
            ) : (
              Object.keys(groupedData).map(date => (
                <div key={date} onClick={() => setSelectedDate(date)} style={{ 
                  padding: 25, backgroundColor: "#1E1E1E", borderRadius: 15, cursor: "pointer", 
                  border: "1px solid #333", display: "flex", justifyContent: "space-between", alignItems: "center",
                  transition: "transform 0.2s"
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = "translateX(5px)"}
                onMouseOut={(e) => e.currentTarget.style.transform = "translateX(0)"}
                >
                  <div>
                    <div style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: 5 }}>📁 {date}</div>
                    <div style={{ fontSize: "0.9rem", color: "#888" }}>총 {Object.values(groupedData[date]).flat().length}문제 보관 중</div>
                  </div>
                  <span style={{ color: "#FF5252", fontWeight: "bold" }}>열기 ➡️</span>
                </div>
              ))
            )}
          </div>
        ) : (
          /* 2. 회차 선택 화면 */
          <div style={{ display: "grid", gap: 12 }}>
            <button onClick={() => setSelectedDate(null)} style={{ color: "#FF5252", background: "none", border: "none", cursor: "pointer", textAlign: "left", marginBottom: 10, fontSize: "1rem" }}>⬅️ 날짜 목록으로</button>
            {Object.keys(groupedData[selectedDate]).map(examId => (
              <div key={examId} style={{ padding: 20, backgroundColor: "#1E1E1E", borderRadius: 12, display: "flex", justifyContent: "space-between", alignItems: "center", border: "1px solid #333" }}>
                <div>
                  <span style={{ fontSize: "1.1rem", fontWeight: "bold", color: "#eee" }}>📄 {examId}</span>
                  <span style={{ fontSize: "0.9rem", color: "#666", marginLeft: "10px" }}>({groupedData[selectedDate][examId].length}문제)</span>
                </div>
                <button onClick={() => { setSelectedSession(examId); setIsSolving(true); setCurrentIndex(0); }} style={{ 
                  padding: "10px 20px", backgroundColor: "#FF5252", color: "white", border: "none", borderRadius: 8, fontWeight: "bold", cursor: "pointer", boxShadow: "0 4px 6px rgba(255, 82, 82, 0.2)" 
                }}>
                  다시 풀기 ✍️
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}