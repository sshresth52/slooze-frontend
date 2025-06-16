import { Link, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";


export default function Sidebar() {
  const role = localStorage.getItem("userRole");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    navigate("/");
  };

  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-4 space-y-4">
      <h2 className="text-2xl font-bold mb-4">Slooze</h2>

      {role === "manager" && (
        <Link
          to="/dashboard"
          className="block py-2 px-4 rounded hover:bg-gray-700"
        >
          Dashboard
        </Link>
      )}

      <Link
        to="/products"
        className="block py-2 px-4 rounded hover:bg-gray-700"
      >
        Products
      </Link>

      <button
        onClick={handleLogout}
        className="w-full text-left py-2 px-4 bg-red-600 rounded hover:bg-red-700 mt-8"
      >
        Logout
      </button>
      <div className="mt-6">
        <ThemeToggle />
      </div>
    </div>
  );
}
