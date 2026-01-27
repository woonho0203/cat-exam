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

// 🔴 1. 메타데이터 부분을 PWA 설정에 맞게 수정했습니다.
export const metadata: Metadata = {
  title: "나의 CBT 학습 도구",
  description: "아이패드에서 공부하기 위한 나만의 앱",
  manifest: "/manifest.json", // public 폴더의 manifest.json 연결
  appleWebApp: {
    capable: true, // 아이패드에서 주소창 없이 실행되게 함
    statusBarStyle: "default",
    title: "나의 CBT",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        
        {/* 🔴 2. 서비스 워커(sw.js)를 등록하는 스크립트를 추가했습니다. */}
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