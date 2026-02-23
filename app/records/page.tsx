"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function RecordsPage() {
  const [allLogs, setAllLogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // 로컬 스토리지에서 모든 기록 가져오기
  useEffect(() => {
    try {
      const savedRecords = localStorage.getItem("studyRecords");
      if (savedRecords) {
        setAllLogs(JSON.parse(savedRecords));
      }
    } catch (error) {
      console.error("기록을 불러오는데 실패했습니다:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div style={{ 
      minHeight: "100vh", 
      backgroundColor: "#121212", 
      color: "white", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      padding: "40px 20px"
    }}>
      
      {/* 📱 모바일 반응형 스타일 */}
      <style jsx global>{`
        @media (max-width: 600px) {
          .record-grid {
            grid-template-columns: 1fr !important;
            gap: 8px !important;
            text-align: center;
          }
          .record-time {
            text-align: center !important;
          }
          .record-score {
            margin: 0 auto;
            width: 80px;
          }
        }
      `}</style>

      {/* 상단 네비게이션 (뒤로 가기) */}
      <div style={{ width: "100%", maxWidth: "800px", marginBottom: "20px" }}>
        <Link href="/" style={{ 
          color: "#aaa", 
          textDecoration: "none", 
          display: "inline-flex", 
          alignItems: "center", 
          gap: "8px",
          padding: "8px 12px",
          backgroundColor: "#1E1E1E",
          borderRadius: "8px",
          border: "1px solid #333",
          transition: "all 0.2s"
        }}
        onMouseOver={(e) => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "#555"; }}
        onMouseOut={(e) => { e.currentTarget.style.color = "#aaa"; e.currentTarget.style.borderColor = "#333"; }}
        >
          &larr; 메인으로 돌아가기
        </Link>
      </div>

      <h1 style={{ fontSize: "clamp(1.8rem, 6vw, 2.5rem)", fontWeight: "bold", marginBottom: "10px", textAlign: "center" }}>
        📂 나의 전체 학습 기록
      </h1>
      <p style={{ color: "#aaa", marginBottom: "40px" }}>
        지금까지 완료한 총 <span style={{ color: "#FFD54F", fontWeight: "bold" }}>{allLogs.length}</span>번의 모의고사 및 기출문제 풀이 내역입니다.
      </p>

      {/* 전체 기록 리스트 창 */}
      <div style={{
        width: "100%",
        maxWidth: "800px",
        backgroundColor: "#1E1E1E",
        borderRadius: "24px",
        border: "1px solid #333",
        padding: "20px",
        boxShadow: "0 10px 40px rgba(0,0,0,0.4)"
      }}>
        
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {isLoading ? (
            <div style={{ textAlign: "center", padding: "60px 20px", color: "#aaa" }}>
              전체 기록을 불러오고 있습니다... ⏳
            </div>
          ) : allLogs.length === 0 ? (
            <div style={{ textAlign: "center", padding: "60px 20px", color: "#aaa" }}>
              학습 기록이 없습니다. <br/><br/>
              <Link href="/" style={{ color: "#4FC3F7", textDecoration: "none", fontWeight: "bold" }}>
                문제를 풀러 가볼까요? 🚀
              </Link>
            </div>
          ) : (
            allLogs.map((log: any) => (
              <div key={log.id} className="record-grid" style={{
                display: "grid",
                gridTemplateColumns: "100px 1fr 100px 80px", // 날짜 | 과목정보 | 시간 | 점수
                alignItems: "center",
                padding: "15px 20px",
                backgroundColor: "#2A2A2A",
                borderRadius: "16px",
                fontSize: "0.95rem",
                border: "1px solid transparent",
                transition: "border 0.2s",
              }}
              onMouseOver={(e) => e.currentTarget.style.border = `1px solid ${log.color || "#555"}`}
              onMouseOut={(e) => e.currentTarget.style.border = "1px solid transparent"}
              >
                {/* 1. 날짜 */}
                <div style={{ color: "#888", fontSize: "0.85rem" }}>
                  {log.date}
                </div>

                {/* 2. 과목 및 회차 정보 */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", justifyContent: "center" }}>
                  <span style={{ fontSize: "1.5rem" }}>{log.icon || "📝"}</span>
                  <div style={{ textAlign: "left" }}>
                    <div style={{ fontWeight: "bold", color: "#eee" }}>{log.subject}</div>
                    <div style={{ fontSize: "0.75rem", color: "#aaa", marginTop: "2px" }}>
                      {log.year} {log.round}
                    </div>
                  </div>
                </div>

                {/* 3. 공부 시간 */}
                <div className="record-time" style={{ color: "#aaa", textAlign: "right", paddingRight: "15px", fontSize: "0.85rem" }}>
                  ⏱ {log.time}
                </div>

                {/* 4. 점수 */}
                <div className="record-score" style={{ 
                  textAlign: "center", 
                  fontWeight: "bold", 
                  color: log.score === "중단" ? "#aaa" : (log.color || "#fff"),
                  backgroundColor: "#1a1a1a",
                  padding: "6px 0",
                  borderRadius: "8px",
                  border: `1px solid ${log.score === "중단" ? "#444" : (log.color || "#444")}`
                }}>
                  {log.score}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}