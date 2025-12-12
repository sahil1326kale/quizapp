import { useEffect, useState } from "react";

export default function ThemeToggle() {

  const getDefault = () => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved) return saved === "dark";
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch {
      return false;
    }
  };

  const [isDark, setIsDark] = useState<boolean>(getDefault);

  useEffect(() => {
    const clsTarget = document.documentElement; 
    if (isDark) clsTarget.classList.add("dark");
    else clsTarget.classList.remove("dark");
    try { localStorage.setItem("theme", isDark ? "dark" : "light"); } catch {}
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      aria-pressed={isDark}
      className="px-3 py-2 rounded-md border bg-white/10"
      title="Toggle dark mode"
    >
      {isDark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
