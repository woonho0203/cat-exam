"use client";

import Link from "next/link";

export default function Home() {
  // 나중에 데이터가 늘어나면 이 배열만 수정하면 됩니다.
  const years = [2025, 2024, 2023, 2022, 2021]; // 최신순 정렬
  const sessions = [1, 2, 3];

  return (
    // 배경색: bg-slate-950 (문제풀이 화면과 동일한 진한 남색)
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center padding-basic p-6">
      
      {/* 제목 섹션 */}
      <header className="mt-8 mb-10 text-center">
        <h1 className="text-4xl font-black text-blue-400 mb-3 tracking-tight">
          🚦 산업안전기사 CBT
        </h1>
        <p className="text-slate-400 font-medium">
          실전처럼 연습하고 한방에 합격하세요!
        </p>
      </header>

      {/* 연도별 리스트 영역 */}
      <div className="w-full max-w-3xl">
        {years.map((year) => (
          <div key={year} className="mb-10">
            {/* 연도 제목 */}
            <h2 className="flex items-center text-2xl font-bold text-slate-200 mb-4 border-b border-slate-800 pb-2">
              <span className="mr-2">📅</span> {year}년 기출
            </h2>
            
            {/* 회차 버튼 그리드 (모바일 2열, PC 3열) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {sessions.map((session) => (
                <Link key={`${year}-${session}`} href={`/exam/${year}-${session}`}>
                  <button className="w-full group relative overflow-hidden bg-slate-900 border-2 border-slate-800 hover:border-blue-500 hover:bg-slate-800 rounded-xl p-5 transition-all duration-200 shadow-lg">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {session}회차
                      </span>
                      <span className="text-xs font-medium text-slate-500 bg-slate-950 px-2 py-1 rounded-full group-hover:text-slate-300">
                        문제 풀기 ➡️
                      </span>
                    </div>
                  </button>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 하단 푸터 */}
      <footer className="mt-10 mb-6 text-slate-600 text-sm">
        © 2025 Safety Master Project
      </footer>
    </div>
  );
}