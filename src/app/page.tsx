"use client";
import { useState } from "react";

export default function Home() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  async function askAI() {
    if (!question.trim()) return;
    setLoading(true);
    setAnswer("");
    try {
      const res = await fetch(`http://localhost:8000/ask?q=${encodeURIComponent(question)}`);
      const data = await res.json();
      setAnswer(data.answer);
    } catch (e) {
      setAnswer("Backend is not running! Check VS Code terminal - is uvicorn running?");
    }
    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white p-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold mt-10">DevOps AI <span className="text-blue-500">by Aathi</span></h1>
      <p className="text-slate-400 mt-2">Ask Docker, Jenkins, Kubernetes...</p>

      <div className="w-full max-w-2xl mt-8 bg-slate-900 rounded-2xl p-4">
        <div className="flex gap-2">
          <input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && askAI()}
            placeholder="What is Docker?"
            className="flex-1 bg-slate-800 rounded-xl px-4 py-3 outline-none"
          />
          <button onClick={askAI} className="bg-blue-600 px-6 rounded-xl font-bold">
            {loading ? "..." : "Ask"}
          </button>
        </div>

        {answer && (
          <div className="mt-4 bg-slate-800 rounded-xl p-4">
            <p className="text-sm text-blue-400 font-bold">DevOps AI:</p>
            <p className="mt-1 leading-relaxed">{answer}</p>
          </div>
        )}
      </div>

      <div className="flex gap-2 mt-4 flex-wrap justify-center">
        {["What is Docker?", "What is Jenkins?", "What is Kubernetes?"].map((q) => (
          <button key={q} onClick={() => { setQuestion(q); }} className="bg-slate-800 px-3 py-1 rounded-full text-sm">
            {q}
          </button>
        ))}
      </div>

      <a href="/admin" className="mt-8 text-slate-500 underline text-sm">Go to Admin - Add Questions</a>
    </main>
  );
}