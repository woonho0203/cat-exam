"use client";

import { useEffect, useState } from "react";
import questions from "../../data/questions";

export default function WrongPage() {
  const [wrongIndexes, setWrongIndexes] = useState<number[]>([]);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("cbt-wrong");
    if (saved) {
      setWrongIndexes(JSON.parse(saved));
    }
  }, []);

  if (wrongIndexes.length === 0) {
    return <div>오답 문제가 없습니다.</div>;
  }

  const qIndex = wrongIndexes[index];
  const q = questions[qIndex];

  if (!q) return <div>문제 로딩 중...</div>;

  const setAnswer = (value: number) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const next = () => {
    if (index < wrongIndexes.length - 1) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: 20 }}>
      <h1>오답노트</h1>

      <h2>
        오답 문제 {index + 1} / {wrongIndexes.length}
        (원래 문제 번호: {qIndex + 1})
      </h2>

      <div style={{ marginBottom: 20 }}>
        <img
          src={q.image}
          alt={`question-${q.id}`}
          style={{ width: "100%", border: "1px solid #ccc" }}
        />
      </div>

      <div style={{ marginBottom: 20 }}>
        <label>
          답 입력 (1~4):{" "}
          <input
            type="number"
            min={1}
            max={4}
            value={answers[index] || ""}
            onChange={(e) => setAnswer(Number(e.target.value))}
            style={{ width: 60, fontSize: 18, marginLeft: 10 }}
          />
        </label>
      </div>

      {/* 끊겼던 부분을 아래와 같이 수정했습니다 */}
      <div style={{ display: "flex", gap: "10px" }}>
        <button 
          onClick={prev} 
          disabled={index === 0}
          style={{ padding: "10px 20px", fontSize: 16 }}
        >
          이전 문제
        </button>
        <button 
          onClick={next} 
          disabled={index === wrongIndexes.length - 1}
          style={{ padding: "10px 20px", fontSize: 16 }}
        >
          다음 문제
        </button>
      </div>
    </div>
  );
}