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
      padding: "clamp(30px, 8vw, 60px) 16px" // 상단 여백을 조금 더 시원하게 조절
    }}>
      
      {/* 1. 제목 및 설명 */}
      <h1 style={{ 
        fontSize: "clamp(1.8rem, 8vw, 2.8rem)", // 모바일에서 조금 더 존재감 있게
        marginBottom: "12px", 
        fontWeight: "bold", 
        color: "#4FC3F7",
        textAlign: "center",
        letterSpacing: "-0.02em"
      }}>
        🚦 산업안전기사 CBT
      </h1>
      <p style={{ 
        fontSize: "clamp(0.85rem, 3vw, 1.05rem)", 
        color: "#aaa", 
        marginBottom: "40px",
        textAlign: "center",
        opacity: 0.8
      }}>
        실전처럼 연습하고 합격하세요!
      </p>

      {/* 2. 모의고사 & 오답노트 버튼 영역 */}
      <div style={{ 
        display: "flex", 
        gap: "12px", 
        marginBottom: "50px", 
        flexWrap: "wrap", 
        justifyContent: "center",
        width: "100%",
        maxWidth: "600px" 
      }}>
        {[
          { label: "🎯 실전 모의고사 (랜덤)", color: "#4CAF50", shadow: "rgba(76, 175, 80, 0.3)", href: "/mock-exam" },
          { label: "📝 오답노트", color: "#FF5252", shadow: "rgba(255, 82, 82, 0.3)", href: "/wrong-notes" }
        ].map((btn, idx) => (
          <Link key={idx} href={btn.href} style={{ flex: "1 1 140px" }}>
            <button style={{
              width: "100%",
              padding: "clamp(14px, 4vw, 20px) 10px", 
              backgroundColor: btn.color, 
              color: "white", 
              border: "none", 
              borderRadius: "16px", // 너무 둥근 것보다 세련된 라운드
              fontWeight: "bold", 
              fontSize: "clamp(0.95rem, 4vw, 1.1rem)", 
              cursor: "pointer", 
              boxShadow: `0 8px 15px ${btn.shadow}`,
              transition: "all 0.2s"
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
            onMouseOut={(e) => e.currentTarget.style.transform = "translateY(0)"}
            >
              {btn.label}
            </button>
          </Link>
        ))}
      </div>

      {/* 3. 기출문제 리스트 영역 */}
      <div style={{ width: "100%", maxWidth: "800px" }}>
        {years.map((year) => (
          <div key={year} style={{ marginBottom: "35px" }}>
            <h2 style={{ 
              borderBottom: "1px solid #333", 
              paddingBottom: "12px", 
              marginBottom: "18px", 
              fontSize: "clamp(1.2rem, 5vw, 1.6rem)", 
              color: "#eee",
              display: "flex",
              alignItems: "center",
              gap: "8px"
            }}>
              📅 {year}년 기출문제
            </h2>
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fill, minmax(110px, 1fr))", 
              gap: "12px" 
            }}>
              {sessions.map((session) => (
                <Link key={`${year}-${session}`} href={`/exam/${year}-${session}`}>
                  <button style={{
                    width: "100%", 
                    padding: "20px 10px", 
                    backgroundColor: "#1E1E1E", 
                    color: "white", 
                    border: "1px solid #333",
                    borderRadius: "14px", 
                    cursor: "pointer", 
                    display: "flex", 
                    flexDirection: "column", 
                    alignItems: "center", 
                    gap: "6px",
                    transition: "all 0.2s"
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "#252525";
                    e.currentTarget.style.borderColor = "#4FC3F7";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = "#1E1E1E";
                    e.currentTarget.style.borderColor = "#333";
                  }}
                  >
                    <span style={{ 
                      color: "#4FC3F7", 
                      fontSize: "clamp(1rem, 4vw, 1.15rem)", 
                      fontWeight: "bold" 
                    }}>
                      {session}회차
                    </span>
                    <span style={{ 
                      fontSize: "0.8rem", 
                      color: "#777",
                      fontWeight: "normal"
                    }}>
                      풀기 Go ➡️
                    </span>
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