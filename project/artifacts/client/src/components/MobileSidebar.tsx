import { useState } from "react";
import { Menu, X } from "lucide-react";

const mainMenu = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Workouts", href: "/workouts" },
  { label: "Golf", href: "/golf" },
  { label: "Analytics", href: "/analytics" },
  { label: "Nutrition", href: "/nutrition" },
  { label: "Practice", href: "/practice" },
];

const bottomMenu = [
  { label: "Profile", href: "/profile" },
  { label: "Settings", href: "/profile" },
];

export default function MobileSidebar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* TOP BAR */}
      <div className="w-full flex items-center justify-between px-6 py-5 bg-dark text-white lg:hidden">
        <a href="/dashboard" className="text-2xl font-semibold">AthletiGolf</a>
        <button onClick={() => setMenuOpen(true)}>
          <Menu size={32} />
        </button>
      </div>

      {/* OVERLAY */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/40 z-40" onClick={() => setMenuOpen(false)} />
      )}

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 right-0 h-screen w-[320px] bg-dark text-white z-50 transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-8 py-7 border-b border-white/10">
          <h1 className="text-3xl font-semibold">AthletiGolf</h1>
          <button onClick={() => setMenuOpen(false)}>
            <X size={30} />
          </button>
        </div>

        <div className="px-8 pt-10">
          <p className="uppercase tracking-[0.25em] text-xs text-white/40 mb-6">Navigation</p>
          <div className="space-y-3">
            {mainMenu.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`block w-full text-left px-5 py-4 rounded-2xl transition text-lg font-medium hover:bg-white/10`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="absolute bottom-10 left-0 w-full px-8">
          <div className="border-t border-white/10 pt-6 space-y-4">
            {bottomMenu.map((item, index) => (
              <a key={index} href={item.href} onClick={() => setMenuOpen(false)} className="block text-sm text-white/60 hover:text-white transition">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
