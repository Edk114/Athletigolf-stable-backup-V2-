import { useAuth } from "@/hooks/useAuth";

export default function Dashboard() {
  const { user } = useAuth();
  const firstName = user?.user_metadata?.username || user?.email?.split("@")[0] || "Athlete";

  return (
    <div className="min-h-screen bg-cream flex">
      {/* SIDEBAR */}
      <aside className="w-72 bg-dark text-white p-8 hidden lg:flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-semibold mb-12">AthletiGolf</h1>
          <nav className="space-y-4">
            {["Dashboard", "Workouts", "Nutrition", "Golf", "Practice", "Profile"].map((item, index) => (
              <a
                key={index}
                href={index === 0 ? "/dashboard" : `/${item.toLowerCase()}`}
                className={`block w-full text-left px-5 py-4 rounded-2xl transition ${index === 0 ? "bg-white text-black" : "hover:bg-white/10"}`}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        <div className="bg-white/10 rounded-3xl p-6">
          <p className="text-sm text-white/60 mb-2">Current Plan</p>
          <h3 className="text-2xl font-semibold mb-3">Complete</h3>
          <p className="text-white/70 text-sm leading-relaxed">
            Full access to fitness tracking and golf performance insights.
          </p>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        {/* TOP BAR */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <p className="uppercase tracking-[0.25em] text-xs text-black/50 mb-3">Dashboard</p>
            <h1 className="text-5xl font-semibold mb-3">Welcome Back, {firstName}</h1>
            <p className="text-black/60 text-lg">Consistency builds performance.</p>
          </div>

          <div className="mt-6 md:mt-0 bg-white rounded-3xl px-6 py-4 shadow-sm border border-black/5">
            <p className="text-sm text-black/50 mb-1">Today</p>
            <h3 className="text-2xl font-semibold">
              {new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
            </h3>
          </div>
        </div>

        {/* OVERVIEW CARDS */}
        <section className="grid lg:grid-cols-4 gap-6 mb-12">
          {[
            { title: "Calories", value: "2,140", sub: "Daily intake" },
            { title: "Water", value: "2.7L", sub: "Hydration today" },
            { title: "Workouts", value: "5", sub: "This week" },
            { title: "Rounds", value: "2", sub: "Played this month" },
          ].map((card, index) => (
            <div key={index} className="bg-white rounded-[2rem] p-6 shadow-sm border border-black/5">
              <p className="text-black/50 text-sm mb-3">{card.title}</p>
              <h3 className="text-4xl font-semibold mb-2">{card.value}</h3>
              <p className="text-black/60">{card.sub}</p>
            </div>
          ))}
        </section>

        {/* MAIN GRID */}
        <section className="grid xl:grid-cols-3 gap-8 mb-12">
          {/* WORKOUT CARD */}
          <div className="xl:col-span-2 bg-white rounded-[2rem] p-8 shadow-sm border border-black/5">
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-sm text-black/50 mb-2">Latest Workout</p>
                <h2 className="text-3xl font-semibold">Push Session</h2>
              </div>
              <a href="/workouts" className="bg-dark text-white px-5 py-3 rounded-full hover:scale-105 transition">
                View All
              </a>
            </div>

            <div className="space-y-6">
              {[["Bench Press", "75kg x 5"], ["Incline Dumbbell Press", "32kg x 8"], ["Shoulder Press", "55kg x 6"], ["Cable Flyes", "45kg x 12"]].map(([exercise, result], index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{exercise}</span>
                    <span className="text-black/60">{result}</span>
                  </div>
                  <div className="h-3 bg-black/10 rounded-full overflow-hidden">
                    <div className="h-full bg-dark rounded-full" style={{ width: `${75 - index * 10}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* TODAY FOCUS */}
          <div className="bg-dark text-white rounded-[2rem] p-8 shadow-2xl">
            <p className="uppercase tracking-[0.25em] text-xs text-white/50 mb-5">Today&apos;s Focus</p>
            <h2 className="text-3xl font-semibold leading-tight mb-6">Improve Mid-Iron Consistency</h2>
            <p className="text-white/70 leading-relaxed mb-8">
              Your putting performance has improved, but greens in regulation remain below target. Focus on rotational mobility and controlled iron practice this week.
            </p>
            <div className="bg-white/10 rounded-3xl p-5">
              <p className="text-sm text-white/50 mb-2">Suggested Session</p>
              <h3 className="text-xl font-semibold mb-2">45 Minute Practice</h3>
              <p className="text-white/70 text-sm">20 min mobility / 15 min range work / 10 min putting</p>
            </div>
          </div>
        </section>

        {/* GOLF + NUTRITION */}
        <section className="grid xl:grid-cols-2 gap-8">
          {/* GOLF CARD */}
          <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-black/5">
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-sm text-black/50 mb-2">Last Round</p>
                <h2 className="text-3xl font-semibold">78 (+6)</h2>
              </div>
              <div className="bg-cream px-5 py-3 rounded-2xl">
                <p className="text-sm text-black/50">Handicap</p>
                <h3 className="text-xl font-semibold">12.4</h3>
              </div>
            </div>

            <div className="space-y-6">
              {[["Fairways Hit", "64%"], ["Greens in Regulation", "58%"], ["Scramble Rate", "47%"], ["Putting Average", "1.9"]].map(([label, value], index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span>{label}</span>
                    <span className="font-medium">{value}</span>
                  </div>
                  <div className="h-3 bg-black/10 rounded-full overflow-hidden">
                    <div className="h-full bg-dark rounded-full" style={{ width: value }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* NUTRITION CARD */}
          <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-black/5">
            <div className="mb-8">
              <p className="text-sm text-black/50 mb-2">Nutrition &amp; Hydration</p>
              <h2 className="text-3xl font-semibold">Daily Targets</h2>
            </div>

            <div className="space-y-7">
              {[["Calories", "2140 / 2500", "85%"], ["Protein", "172g / 190g", "90%"], ["Water", "2.7L / 3L", "80%"]].map(([label, value, width], index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span>{label}</span>
                    <span className="text-black/60">{value}</span>
                  </div>
                  <div className="h-3 bg-black/10 rounded-full overflow-hidden">
                    <div className="h-full bg-dark rounded-full" style={{ width }} />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-cream rounded-3xl p-6">
              <p className="text-sm text-black/50 mb-2">Reminder</p>
              <h3 className="text-2xl font-semibold mb-2">Stay Consistent</h3>
              <p className="text-black/60 leading-relaxed">Small daily habits create long-term athletic performance.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
