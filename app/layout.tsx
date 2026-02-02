import type { Metadata, Viewport } from "next"; // Viewport 타입 추가
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

// 1. 메타데이터 설정 (themeColor 삭제)
export const metadata: Metadata = {
  title: "산업안전기사 CBT",
  description: "아이패드에서 공부하기 위한 나만의 학습 도구",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "산업안전CBT",
  },
  // themeColor: "#121212", <--- 여기서 삭제!
};

// 2. 뷰포트 설정 추가 (themeColor를 여기로 이동)
export const viewport: Viewport = {
  themeColor: "#121212",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" style={{ backgroundColor: "#121212" }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ 
          backgroundColor: "#121212",
          color: "#ffffff", 
          margin: 0, 
          minHeight: "100vh" 
        }}
      >
        {children}
        
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
