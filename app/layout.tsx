import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 1. 메타데이터 (PWA 및 앱 정보 설정)
export const metadata: Metadata = {
  title: "산업안전기사 CBT", // 제목 수정
  description: "아이패드에서 공부하기 위한 나만의 학습 도구",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true, // 주소창 없이 실행 (전체 화면 모드)
    statusBarStyle: "black-translucent", // 상단 바 색상 다크모드 대응
    title: "산업안전CBT",
  },
  themeColor: "#121212", // PWA 테마 색상 고정
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // html 태그에도 배경색을 주어 로딩 시 깜빡임을 방지합니다.
    <html lang="ko" style={{ backgroundColor: "#121212" }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ 
          backgroundColor: "#121212", // 배경색 강제 고정
          color: "#ffffff", 
          margin: 0, 
          minHeight: "100vh" 
        }}
      >
        {children}
        
        {/* 2. 서비스 워커 등록 스크립트 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js');
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}