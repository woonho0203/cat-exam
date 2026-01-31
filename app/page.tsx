"use client";

import Link from "next/link";

export default function Home() {
  const years = [2025, 2024, 2023, 2022, 2021]; 
  const sessions = [1, 2, 3];

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#121212", color: "white", display: "flex", flexDirection: "column", alignItems: "center", padding: "40px 20px" }}>
      
      {/* 1. 제목 및 설명 */}
      <h1 style={{ fontSize: "2.5rem", marginBottom: "10px", fontWeight: "bold", color: "#4FC3F7" }}>
        🚦 산업안전기사 CBT
      </h1>
      <p style={{ color: "#aaa", marginBottom: "30px" }}>실전처럼 연습하고 합격하세요!</p>

      {/* 2. 🔥 [여기에 추가됨] 모의고사 & 오답노트 버튼 영역 */}
      <div style={{ display: "flex", gap: "15px", marginBottom: "40px", flexWrap: "wrap", justifyContent: "center" }}>
        <Link href="/mock-exam">
          <button style={{
            padding: "18px 40px", backgroundColor: "#4CAF50", color: "white", 
            border: "none", borderRadius: "50px", fontWeight: "bold", fontSize: "1.2rem", 
            cursor: "pointer", boxShadow: "0 4px 20px rgba(76, 175, 80, 0.4)",
            transition: "transform 0.2s"
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
          onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            🎯 실전 모의고사 (랜덤)
          </button>
        </Link>
        <Link href="/wrong-notes">
          <button style={{
            padding: "18px 40px", backgroundColor: "#FF5252", color: "white", 
            border: "none", borderRadius: "50px", fontWeight: "bold", fontSize: "1.2rem", 
            cursor: "pointer", boxShadow: "0 4px 20px rgba(255, 82, 82, 0.4)",
            transition: "transform 0.2s"
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
          onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            📝 오답노트
          </button>
        </Link>
      </div>

      {/* 3. 기출문제 리스트 영역 */}
      <div style={{ width: "100%", maxWidth: "800px" }}>
        {years.map((year) => (
          <div key={year} style={{ marginBottom: "30px" }}>
            <h2 style={{ borderBottom: "1px solid #333", paddingBottom: "10px", marginBottom: "15px", fontSize: "1.5rem", color: "#ddd" }}>
              📅 {year}년 기출문제
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: "15px" }}>
              {sessions.map((session) => (
                <Link key={`${year}-${session}`} href={`/exam/${year}-${session}`}>
                  <button style={{
                    width: "100%", padding: "20px", fontSize: "1.1rem", fontWeight: "bold",
                    backgroundColor: "#1E1E1E", color: "white", border: "1px solid #333",
                    borderRadius: "12px", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: "5px"
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#333"}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#1E1E1E"}
                  >
                    <span style={{color: "#4FC3F7"}}>{session}회차</span>
                    <span style={{fontSize: "0.9rem", color: "#666"}}>풀기 Go ➡️</span>
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