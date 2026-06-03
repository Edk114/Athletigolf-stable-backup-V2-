import { useState } from "react";

export default function RoundTracker() {
  const [course, setCourse] = useState("");
  const [comp, setComp] = useState(false);
  const [score, setScore] = useState("");
  const [fh, setFh] = useState("");
  const [gir, setGir] = useState("");
  const [putts, setPutts] = useState("");
  const [scramble, setScramble] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream p-6">
        <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-xl text-center">
          <h1 className="text-3xl font-semibold mb-4">Round Submitted</h1>
          <p className="text-black/60 mb-8">Your round at {course} has been logged.</p>
          <a href="/golf" className="bg-dark text-white px-6 py-3 rounded-xl hover:scale-105 transition inline-block">
            View Rounds
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-cream p-6">
      <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-xl">
        <h1 className="text-2xl mb-6">Submit Round</h1>

        <form onSubmit={submit} className="space-y-4">
          <input placeholder="Course" className="w-full border border-black/10 p-3 rounded-xl outline-none focus:border-black" value={course} onChange={(e) => setCourse(e.target.value)} required />

          <label className="flex items-center gap-3 mb-3">
            <input type="checkbox" checked={comp} onChange={(e) => setComp(e.target.checked)} className="w-4 h-4" />
            <span>Competition round?</span>
          </label>

          <input placeholder="Score" className="w-full border border-black/10 p-3 rounded-xl outline-none focus:border-black" value={score} onChange={(e) => setScore(e.target.value)} required />
          <input placeholder="Fairways Hit (0-14)" className="w-full border border-black/10 p-3 rounded-xl outline-none focus:border-black" value={fh} onChange={(e) => setFh(e.target.value)} />
          <input placeholder="GIR (0-18)" className="w-full border border-black/10 p-3 rounded-xl outline-none focus:border-black" value={gir} onChange={(e) => setGir(e.target.value)} />
          <input placeholder="Putts" className="w-full border border-black/10 p-3 rounded-xl outline-none focus:border-black" value={putts} onChange={(e) => setPutts(e.target.value)} />
          <input placeholder="Scramble saves" className="w-full border border-black/10 p-3 rounded-xl outline-none focus:border-black" value={scramble} onChange={(e) => setScramble(e.target.value)} />

          <button type="submit" className="w-full bg-dark text-white py-3 rounded-xl hover:scale-[1.01] transition">
            Submit Round
          </button>
        </form>
      </div>
    </div>
  );
}
