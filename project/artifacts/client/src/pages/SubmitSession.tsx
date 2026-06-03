import { useState } from "react";

const splitDays = ["Push", "Pull", "Legs", "Upper", "Lower"];

export default function SubmitSession() {
  const [selectedDay, setSelectedDay] = useState("");

  return (
    <div className="min-h-screen bg-cream p-8 md:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="uppercase tracking-[0.25em] text-xs text-black/50 mb-4">Fitness</p>
          <h1 className="text-5xl font-semibold mb-4">Submit Gym Session</h1>
          <p className="text-black/60 text-lg">Select the workout day you completed.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {splitDays.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`p-8 rounded-[2rem] text-left border transition ${
                selectedDay === day ? "bg-dark text-white border-dark" : "bg-white border-black/5 hover:border-black"
              }`}
            >
              <h2 className="text-3xl font-semibold mb-3">{day}</h2>
              <p className={selectedDay === day ? "text-white/70" : "text-black/60"}>
                Log your workout performance and progression.
              </p>
            </button>
          ))}
        </div>

        {selectedDay && (
          <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-black/5">
            <h2 className="text-3xl font-semibold mb-8">{selectedDay} Session</h2>
            <div className="grid gap-5 mb-8">
              {["Exercise Name", "Weight", "Reps", "Sets"].map((placeholder, index) => (
                <input
                  key={index}
                  type="text"
                  placeholder={placeholder}
                  className="border border-black/10 rounded-2xl px-5 py-4 outline-none focus:border-black"
                />
              ))}
            </div>
            <button className="bg-dark text-white px-8 py-4 rounded-full hover:scale-105 transition">
              Submit Session
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
