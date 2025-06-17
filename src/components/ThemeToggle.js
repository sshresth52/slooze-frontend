import { useEffect, useState } from "react";

/**
 * ThemeToggle allows the user to switch between Light and Dark modes.
 * The selected theme is saved in localStorage and applied to the document root.
 */
export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // 🌓 Apply theme changes to the <html> element and persist in localStorage
  useEffect(() => {
    const rootElement = document.documentElement;

    if (isDarkMode) {
      rootElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      rootElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <button
      onClick={() => setIsDarkMode((prev) => !prev)}
      className="bg-gray-300 dark:bg-gray-700 text-sm px-3 py-1 rounded-md text-black dark:text-white"
    >
      {isDarkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}
