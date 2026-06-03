export default function RoundHistory() {
  const rounds = [
    { course: "Wentworth", score: "78 (+6)", gir: "58%", fir: "64%", putts: 31, comp: true, date: "May 12, 2026" },
    { course: "St Andrews", score: "82 (+10)", gir: "44%", fir: "61%", putts: 35, comp: false, date: "May 8, 2026" },
    { course: "Royal Birkdale", score: "76 (+4)", gir: "67%", fir: "71%", putts: 29, comp: true, date: "May 1, 2026" },
  ];

  return (
    <div className="min-h-screen bg-cream p-8 md:p-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="uppercase tracking-[0.25em] text-xs text-black/50 mb-4">Golf</p>
          <h1 className="text-5xl font-semibold mb-4">Round History</h1>
          <p className="text-black/60 text-lg">Review previous rounds and track performance trends over time.</p>
        </div>

        <div className="grid gap-6">
          {rounds.map((round, index) => (
            <div key={index} className="bg-white rounded-[2rem] p-8 shadow-sm border border-black/5">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                <div>
                  <p className="text-sm text-black/50 mb-2">{round.date}</p>
                  <h2 className="text-3xl font-semibold mb-3">{round.course}</h2>
                  <div className="inline-block px-4 py-2 rounded-full bg-dark text-white text-sm">
                    {round.comp ? "Competition Round" : "Casual Round"}
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[["Score", round.score], ["GIR", round.gir], ["FIR", round.fir], ["Putts", round.putts]].map(([label, value], i) => (
                    <div key={i} className="bg-cream rounded-2xl px-6 py-5 min-w-[120px]">
                      <p className="text-sm text-black/50 mb-2">{label}</p>
                      <h3 className="text-2xl font-semibold">{value}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
