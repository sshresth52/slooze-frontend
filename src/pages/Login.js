import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("manager");

  // 🌙 Theme toggle
  const toggleDarkMode = () => {
    const current = localStorage.theme;
    if (current === "dark") {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
    } else {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    }
  };

  // 🚀 Guest Login Shortcuts
  const loginAs = (quickRole) => {
    localStorage.setItem("userRole", quickRole);
    if (quickRole === "manager") navigate("/dashboard");
    else navigate("/products");
  };

  // Set initial dark mode if preferred
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!localStorage.theme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("userRole", role);
    if (role === "manager") navigate("/dashboard");
    else navigate("/products");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white relative">
      {/* 🌙 Theme Toggle */}
      <button
        onClick={toggleDarkMode}
        className="absolute top-4 right-4 text-sm text-gray-600 dark:text-gray-300 hover:underline"
      >
        Toggle Theme
      </button>

      <form
        onSubmit={handleLogin}
        className="bg-white dark:bg-gray-800 shadow-lg p-8 rounded-md w-full max-w-sm space-y-4 border dark:border-gray-700"
      >
        {/* 🔥 Hero / Branding */}
        <h1 className="text-3xl font-bold text-center mb-1">Slooze CMS</h1>
        <p className="text-sm text-center text-gray-500 dark:text-gray-400 mb-2">
          Empowering Managers. Supporting Storekeepers.
        </p>

        {/* Inputs */}
        <input
          type="email"
          placeholder="Email"
          required
          className="w-full border border-gray-300 p-2 rounded bg-white dark:bg-gray-700 dark:border-gray-600"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          required
          className="w-full border border-gray-300 p-2 rounded bg-white dark:bg-gray-700 dark:border-gray-600"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <select
          className="w-full border border-gray-300 p-2 rounded bg-white dark:bg-gray-700 dark:border-gray-600"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="manager">Manager</option>
          <option value="storekeeper">Store Keeper</option>
        </select>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 transition text-white p-2 rounded"
        >
          Login
        </button>

        {/* ✨ Guest Login Shortcut */}
        <div className="flex justify-between text-xs mt-2 text-blue-500 dark:text-blue-300">
          <button
            type="button"
            onClick={() => loginAs("manager")}
            className="hover:underline"
          >
            Try as Manager
          </button>
          <button
            type="button"
            onClick={() => loginAs("storekeeper")}
            className="hover:underline"
          >
            Try as Storekeeper
          </button>
        </div>
      </form>
    </div>
  );
}
