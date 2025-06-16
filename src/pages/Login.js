import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("manager");

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulated auth: save role to localStorage
    localStorage.setItem("userRole", role);

    // Redirect
    if (role === "manager") {
      navigate("/dashboard");
    } else {
      navigate("/products");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 dark:text-white">
      <form
        onSubmit={handleLogin}
        className="bg-white dark:bg-gray-800 shadow-md p-8 rounded-md w-full max-w-sm space-y-4"
      >
        <h2 className="text-xl font-bold text-center">Login</h2>

        <input
          type="email"
          placeholder="Email"
          required
          className="w-full border border-gray-300 dark:border-gray-600 p-2 rounded bg-transparent"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          required
          className="w-full border border-gray-300 dark:border-gray-600 p-2 rounded bg-transparent"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <select
          className="w-full border border-gray-300 dark:border-gray-600 p-2 rounded bg-transparent"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="manager">Manager</option>
          <option value="storekeeper">Store Keeper</option>
        </select>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
}
