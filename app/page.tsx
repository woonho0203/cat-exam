"use client";

import Link from "next/link";

export default function Home() {
  const years = [2025, 2024, 2023, 2022, 2021];
  const sessions = [1, 2, 3];

  return (
    <div style={{ 
      minHeight: "100vh", 
      backgroundColor: "#121212", 
      color: "white", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      padding: "clamp(20px, 5vw, 40px) 15px" // 상하 패딩 유동적 조절
    }}>
      
      {/* 1. 제목 및 설명 */}
      <h1 style={{ 
        fontSize: "clamp(1.5rem, 7vw, 2.5rem)", // 모바일 1.5rem ~ 데스크탑 2.5rem
        marginBottom: "10px", 
        fontWeight: "bold", 
        color: "#4FC3F7",
        textAlign: "center"
      }}>
        🚦 산업안전기사 CBT
      </h1>
      <p style={{ 
        fontSize: "clamp(0.9rem, 3vw, 1rem)", 
        color: "#aaa", 
        marginBottom: "30px",
        textAlign: "center"
      }}>
        실전처럼 연습하고 합격하세요!
      </p>

      {/* 2. 모의고사 & 오답노트 버튼 영역 */}
      <div style={{ 
        display: "flex", 
        gap: "10px", 
        marginBottom: "40px", 
        flexWrap: "wrap", 
        justifyContent: "center",
        width: "100%" 
      }}>
        {[
          { label: "🎯 실전 모의고사 (랜덤)", color: "#4CAF50", shadow: "rgba(76, 175, 80, 0.4)", href: "/mock-exam" },
          { label: "📝 오답노트", color: "#FF5252", shadow: "rgba(255, 82, 82, 0.4)", href: "/wrong-notes" }
        ].map((btn, idx) => (
          <Link key={idx} href={btn.href} style={{ flex: "1 1 160px", maxWidth: "300px" }}>
            <button style={{
              width: "100%",
              padding: "clamp(12px, 3vw, 18px) 10px", 
              backgroundColor: btn.color, 
              color: "white", 
              border: "none", 
              borderRadius: "50px", 
              fontWeight: "bold", 
              fontSize: "clamp(0.9rem, 3.5vw, 1.1rem)", // 글자 크기 유동적
              cursor: "pointer", 
              boxShadow: `0 4px 20px ${btn.shadow}`,
              transition: "transform 0.2s"
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.02)"}
            onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
            >
              {btn.label}
            </button>
          </Link>
        ))}
      </div>

      {/* 3. 기출문제 리스트 영역 */}
      <div style={{ width: "100%", maxWidth: "800px" }}>
        {years.map((year) => (
          <div key={year} style={{ marginBottom: "30px" }}>
            <h2 style={{ 
              borderBottom: "1px solid #333", 
              paddingBottom: "10px", 
              marginBottom: "15px", 
              fontSize: "clamp(1.1rem, 4vw, 1.5rem)", 
              color: "#ddd" 
            }}>
              📅 {year}년 기출문제
            </h2>
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))", // 모바일에서 더 촘촘하게
              gap: "10px" 
            }}>
              {sessions.map((session) => (
                <Link key={`${year}-${session}`} href={`/exam/${year}-${session}`}>
                  <button style={{
                    width: "100%", 
                    padding: "15px 10px", 
                    backgroundColor: "#1E1E1E", 
                    color: "white", 
                    border: "1px solid #333",
                    borderRadius: "12px", 
                    cursor: "pointer", 
                    display: "flex", 
                    flexDirection: "column", 
                    alignItems: "center", 
                    gap: "5px"
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#333"}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#1E1E1E"}
                  >
                    <span style={{color: "#4FC3F7", fontSize: "clamp(0.9rem, 3vw, 1.1rem)"}}>{session}회차</span>
                    <span style={{fontSize: "0.8rem", color: "#666"}}>Go ➡️</span>
                  </button>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}