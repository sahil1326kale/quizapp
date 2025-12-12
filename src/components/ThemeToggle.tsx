import { useEffect, useState } from "react";

export default function ThemeToggle() {
  // Always start in LIGHT mode
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Force the app to load in LIGHT THEME every time
  useEffect(() => {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
  }, []);

  // Toggle theme manually when user clicks the button
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      setTheme("light");
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: "8px 14px",
        borderRadius: 8,
        background: theme === "light"
          ? "linear-gradient(90deg,#dff6fb,#e6fbff)"
          : "linear-gradient(90deg,#1c2b2f,#20363a)",
        color: theme === "light" ? "#063b42" : "#dff6f7",
        border: "1px solid rgba(0,0,0,0.08)"
      }}
    >
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
}
