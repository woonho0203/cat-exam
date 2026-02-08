"use client";

import Link from "next/link";

export default function FireFightingHome() {
  // ✅ 데이터에 맞춰 연도를 2025 ~ 2019년까지 확장
  const years = [2025, 2024, 2023, 2022, 2021, 2020, 2019];
  
  // ✅ 가지고 계신 데이터 파일명(2019_3.ts 등)에 맞춰 회차 설정
  // 만약 파일이 1, 2, 4회차로 되어 있다면 [1, 2, 4]로 변경하세요.
  const sessions = [1, 2, 3]; 

  return (
    <div style={{ 
      minHeight: "100vh", 
      backgroundColor: "#121212", 
      color: "white", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      padding: "clamp(30px, 8vw, 60px) 16px"
    }}>
      
      {/* 1. 제목 및 설명 (소방 컬러 적용) */}
      <h1 style={{ 
        fontSize: "clamp(1.8rem, 8vw, 2.8rem)", 
        marginBottom: "12px", 
        fontWeight: "bold", 
        color: "#FF5252", // 소방의 상징 레드 컬러
        textAlign: "center",
        letterSpacing: "-0.02em"
      }}>
        🚒 소방설비기사 CBT
      </h1>
      <p style={{ 
        fontSize: "clamp(0.85rem, 3vw, 1.05rem)", 
        color: "#aaa", 
        marginBottom: "40px",
        textAlign: "center",
        opacity: 0.8
      }}>
        화재예방의 전문가, 기출문제로 완벽 대비하세요!
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
          // ✅ 경로 수정: /fire-fighting -> /fire
          { label: "🎯 실전 모의고사 (랜덤)", color: "#FF5252", shadow: "rgba(255, 82, 82, 0.3)", href: "/fire/exam/random" },
          { label: "📝 오답노트", color: "#607D8B", shadow: "rgba(96, 125, 139, 0.3)", href: "/fire/wrong-notes" }
        ].map((btn, idx) => (
          <Link key={idx} href={btn.href} style={{ flex: "1 1 140px" }}>
            <button style={{
              width: "100%",
              padding: "clamp(14px, 4vw, 20px) 10px", 
              backgroundColor: btn.color, 
              color: "white", 
              border: "none", 
              borderRadius: "16px", 
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
                // ✅ 경로 수정: /fire-fighting -> /fire
                // ✅ 키값(URL) 생성: /fire/exam/2024-1 형식
                <Link key={`${year}-${session}`} href={`/fire/exam/${year}-${session}`}>
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
                    e.currentTarget.style.borderColor = "#FF5252";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = "#1E1E1E";
                    e.currentTarget.style.borderColor = "#333";
                  }}
                  >
                    <span style={{ 
                      color: "#FF5252", 
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

      {/* 메인으로 돌아가기 */}
      <Link href="/" style={{ marginTop: "40px", color: "#555", textDecoration: "none", fontSize: "0.9rem" }}>
        🏠 자격증 선택 화면으로
      </Link>
    </div>
  );
}