"use client";

import Link from "next/link";

export default function MainSelection() {
  const certifications = [
    {
      title: "산업안전기사",
      subTitle: "Industrial Safety Engineer",
      icon: "🚦",
      color: "#4FC3F7",
      description: "안전관리의 시작, 산업안전기사 CBT",
      path: "/industrial", // 산업안전 페이지 경로
    },
    // ✅ 전기기사 데이터 추가됨
    {
      title: "전기기사",
      subTitle: "Electrical Engineer",
      icon: "⚡",
      color: "#FFD54F",
      description: "전기 분야 최고의 전문가, 전기기사 CBT",
      path: "/electric", // 전기기사 페이지 경로
    },
    {
      title: "소방설비기사",
      subTitle: "Fire Protection Facilities Engineer",
      icon: "🚒",
      color: "#FF5252",
      description: "화재예방의 전문가, 소방설비기사 CBT",
      path: "/fire", // 소방설비 페이지 경로
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
      justifyContent: "center",
      padding: "20px"
    }}>
      
      <h1 style={{ 
        fontSize: "clamp(2rem, 8vw, 3rem)", 
        fontWeight: "bold", 
        marginBottom: "10px",
        textAlign: "center" 
      }}>
        CBT 자격증 선택
      </h1>
      <p style={{ 
        color: "#aaa", 
        marginBottom: "50px", 
        fontSize: "clamp(0.9rem, 3vw, 1.1rem)" 
      }}>
        학습하실 자격증을 선택해 주세요.
      </p>

      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
        gap: "20px", 
        width: "100%", 
        maxWidth: "1000px" // 카드 3개가 나란히 들어갈 수 있도록 최대 너비를 조금 늘렸습니다. (800px -> 1000px)
      }}>
        {certifications.map((cert, idx) => (
          <Link href={cert.path} key={idx} style={{ textDecoration: "none" }}>
            <div 
              style={{
                backgroundColor: "#1E1E1E",
                padding: "40px 20px",
                height: "100%", // 카드 높이를 균일하게 맞춤
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

      <footer style={{ marginTop: "60px", color: "#555", fontSize: "0.85rem" }}>
        © 2026 CBT Prep System. All rights reserved.
      </footer>
    </div>
  );
}