export default function Analytics() {
  const stats = [
    ["Average Score", "78.6"],
    ["Average GIR", "56%"],
    ["Average FIR", "65%"],
    ["Average Putts", "31.2"],
  ];

  return (
    <div className="min-h-screen bg-cream p-8 md:p-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="uppercase tracking-[0.25em] text-xs text-black/50 mb-4">Analytics</p>
          <h1 className="text-5xl font-semibold mb-4">Performance Insights</h1>
          <p className="text-black/60 text-lg">Analyse trends and identify areas for improvement.</p>
        </div>

        {/* TOP STATS */}
        <section className="grid md:grid-cols-4 gap-6 mb-12">
          {stats.map(([label, value], index) => (
            <div key={index} className="bg-white rounded-[2rem] p-6 shadow-sm border border-black/5">
              <p className="text-black/50 text-sm mb-3">{label}</p>
              <h2 className="text-4xl font-semibold">{value}</h2>
            </div>
          ))}
        </section>

        {/* PERFORMANCE BARS */}
        <section className="bg-white rounded-[2rem] p-8 shadow-sm border border-black/5 mb-10">
          <h2 className="text-3xl font-semibold mb-8">Performance Breakdown</h2>
          <div className="space-y-8">
            {[["Driving Accuracy", "65%"], ["Greens in Regulation", "56%"], ["Scrambling", "47%"], ["Putting", "72%"]].map(([label, value], index) => (
              <div key={index}>
                <div className="flex justify-between mb-3">
                  <span className="font-medium">{label}</span>
                  <span className="text-black/60">{value}</span>
                </div>
                <div className="h-4 bg-black/10 rounded-full overflow-hidden">
                  <div className="h-full bg-dark rounded-full" style={{ width: value }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* INSIGHTS */}
        <section className="bg-dark text-white rounded-[2rem] p-8 shadow-2xl">
          <p className="uppercase tracking-[0.25em] text-xs text-white/50 mb-4">AI Insights</p>
          <h2 className="text-4xl font-semibold mb-6">Key Focus Area</h2>
          <p className="text-white/70 text-lg leading-relaxed mb-8">
            Your driving accuracy is improving consistently, but GIR remains below your scoring potential. Improving approach shot consistency between 120-170 yards could significantly reduce scoring average.
          </p>
          <div className="bg-white/10 rounded-3xl p-6">
            <h3 className="text-2xl font-semibold mb-3">Suggested Practice Plan</h3>
            <p className="text-white/70">15 min mobility / 30 min mid-irons / 20 min short game / 10 min putting</p>
          </div>
        </section>
      </div>
    </div>
  );
}
