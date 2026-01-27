"use client";

import Link from "next/link";

export default function Home() {
  const years = [2021, 2022, 2023, 2024, 2025];
  const sessions = [1, 2, 3];

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#121212", color: "white", display: "flex", flexDirection: "column", alignItems: "center", padding: "40px 20px" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "10px", fontWeight: "bold", color: "#4FC3F7" }}>
        🚦 산업안전기사 CBT
      </h1>
      <p style={{ color: "#aaa", marginBottom: "40px" }}>실전처럼 연습하고 합격하세요!</p>

      <div style={{ width: "100%", maxWidth: "800px" }}>
        {years.map((year) => (
          <div key={year} style={{ marginBottom: "30px" }}>
            <h2 style={{ borderBottom: "1px solid #333", paddingBottom: "10px", marginBottom: "15px", fontSize: "1.5rem", color: "#ddd" }}>
              📅 {year}년 기출문제
            </h2>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: "15px" }}>
              {sessions.map((session) => (
                // 🚀 링크 주소를 동적으로 변경 (/exam/2021-1)
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