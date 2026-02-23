"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function MainSelection() {
  const [weeklyLogs, setWeeklyLogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // ✅ 브라우저(로컬 스토리지)에서 실제 저장된 데이터 가져오기
  useEffect(() => {
    try {
      const savedRecords = localStorage.getItem("studyRecords");
      
      if (savedRecords) {
        // 저장된 문자열 데이터를 배열로 변환해서 상태에 넣기
        const parsedRecords = JSON.parse(savedRecords);
        setWeeklyLogs(parsedRecords);
      }
    } catch (error) {
      console.error("기록을 불러오는데 실패했습니다:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const certifications = [
    {
      title: "산업안전기사",
      subTitle: "Industrial Safety Engineer",
      icon: "🚦",
      color: "#4FC3F7",
      description: "안전관리의 시작, 산업안전기사 CBT",
      path: "/industrial",
    },
    {
      title: "전기기사",
      subTitle: "Electrical Engineer",
      icon: "⚡",
      color: "#FFD54F",
      description: "전기 분야 최고의 전문가, 전기기사 CBT",
      path: "/electric",
    },
    {
      title: "소방설비기사",
      subTitle: "Fire Protection Facilities Engineer",
      icon: "🚒",
      color: "#FF5252",
      description: "화재예방의 전문가, 소방설비기사 CBT",
      path: "/fire",
    },
  ];

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
      
      {/* 헤더 부분 */}
      <h1 style={{ fontSize: "clamp(2rem, 8vw, 3rem)", fontWeight: "bold", marginBottom: "10px", textAlign: "center" }}>
        CBT Dashboard
      </h1>
      <p style={{ color: "#aaa", marginBottom: "40px" }}>가장 최근에 학습한 기록입니다.</p>

      {/* --- 실제 학습 리포트 창 --- */}
      <div style={{
        width: "100%",
        maxWidth: "1000px",
        backgroundColor: "#1E1E1E",
        borderRadius: "28px",
        border: "1px solid #333",
        overflow: "hidden",
        marginBottom: "50px",
        boxShadow: "0 10px 40px rgba(0,0,0,0.4)"
      }}>
        {/* 상단 요약 바 */}
        <div style={{ 
          display: "flex", 
          justifyContent: "space-around", 
          padding: "20px", 
          backgroundColor: "#252525",
          borderBottom: "1px solid #333"
        }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "0.8rem", color: "#aaa", marginBottom: "5px" }}>총 풀이 횟수</div>
            {/* 전체 배열 길이를 보여주므로 횟수는 정확히 유지됨 */}
            <div style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#4FC3F7" }}>{weeklyLogs.length}회</div>
          </div>
          <div style={{ width: "1px", backgroundColor: "#444" }}></div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "0.8rem", color: "#aaa", marginBottom: "5px" }}>데이터 연동 상태</div>
            <div style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#FFD54F" }}>
              {isLoading ? "불러오는 중..." : "로컬 연동 완료"}
            </div>
          </div>
        </div>

        {/* 상세 리스트 (최근 3개만 표시) */}
        <div style={{ 
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "10px"
        }}>
          {isLoading ? (
            <div style={{ textAlign: "center", padding: "40px", color: "#aaa" }}>
              학습 기록을 불러오고 있습니다... ⏳
            </div>
          ) : weeklyLogs.length === 0 ? (
            <div style={{ textAlign: "center", padding: "40px", color: "#aaa" }}>
              아직 학습 기록이 없습니다. <br/>아래에서 기출문제를 선택해 풀어보세요! 📚
            </div>
          ) : (
            // ✅ 배열을 앞에서 3개만 잘라서(.slice(0, 3)) 화면에 출력
            weeklyLogs.slice(0, 3).map((log: any) => (
              <div key={log.id} style={{
                display: "grid",
                gridTemplateColumns: "100px 1fr 100px 80px",
                alignItems: "center",
                padding: "15px",
                backgroundColor: "#2A2A2A",
                borderRadius: "16px",
                fontSize: "0.9rem"
              }}>
                <div style={{ color: "#777", fontSize: "0.85rem" }}>
                  {log.date.split("-").slice(1).join("/")}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ fontSize: "1.2rem" }}>{log.icon || "📝"}</span>
                  <div>
                    <div style={{ fontWeight: "bold" }}>{log.subject}</div>
                    <div style={{ fontSize: "0.75rem", color: "#555" }}>{log.year} {log.round}</div>
                  </div>
                </div>
                <div style={{ color: "#aaa", textAlign: "right", paddingRight: "10px" }}>
                  ⏱ {log.time}
                </div>
                <div style={{ 
                  textAlign: "center", 
                  fontWeight: "bold", 
                  color: log.score === "중단" ? "#555" : (log.color || "#fff"),
                  backgroundColor: "#1e1e1e",
                  padding: "4px 0",
                  borderRadius: "8px"
                }}>
                  {log.score}
                </div>
              </div>
            ))
          )}

          {/* ✅ 전체보기 버튼 추가 */}
          {weeklyLogs.length > 3 && (
            <div style={{ textAlign: "right", marginTop: "10px" }}>
              <Link href="/records" style={{ 
                fontSize: "0.9rem", 
                color: "#bbb", 
                textDecoration: "none", 
                padding: "5px 10px", 
                backgroundColor: "#333", 
                borderRadius: "8px",
                transition: "all 0.2s ease"
              }}>
                전체 기록 보기 &rarr;
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* --- 자격증 선택(기출문제 버튼) 섹션 --- */}
      <h2 style={{ fontSize: "1.5rem", marginBottom: "20px", color: "#fff" }}>기출문제 풀기</h2>
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
        gap: "20px", 
        width: "100%", 
        maxWidth: "1000px" 
      }}>
        {certifications.map((cert, idx) => (
          <Link href={cert.path} key={idx} style={{ textDecoration: "none" }}>
            <div 
              style={{
                backgroundColor: "#1E1E1E",
                padding: "40px 20px",
                height: "100%",
                borderRadius: "24px",
                border: "1px solid #333",
                textAlign: "center",
                cursor: "pointer",
                transition: "all 0.3s ease",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.borderColor = cert.color;
                e.currentTarget.style.boxShadow = `0 10px 30px ${cert.color}33`;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "#333";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{ fontSize: "50px", marginBottom: "15px" }}>{cert.icon}</div>
              <h2 style={{ fontSize: "1.8rem", color: cert.color, marginBottom: "5px" }}>
                {cert.title}
              </h2>
              <p style={{ fontSize: "0.8rem", color: "#777", marginBottom: "15px", textTransform: "uppercase" }}>
                {cert.subTitle}
              </p>
              <p style={{ fontSize: "1rem", color: "#bbb" }}>
                {cert.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <footer style={{ marginTop: "60px", paddingBottom: "20px", color: "#555", fontSize: "0.85rem" }}>
        © 2026 CBT Prep System. All rights reserved.
      </footer>
    </div>
  );
}