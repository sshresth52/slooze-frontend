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
    <div className="w-64 h-screen bg-gray-800 text-white p-4 space-y-6">
      {/* 📛 App Branding */}
      <h2 className="text-2xl font-bold mb-4">Slooze CMS</h2>

      {/* 📂 Navigation Links */}
      <nav className="space-y-2">
        {role === "manager" && (
          <Link
            to="/dashboard"
            className="block py-2 px-4 rounded hover:bg-gray-700 transition"
          >
            Manager Dashboard
          </Link>
        )}

        <Link
          to="/products"
          className="block py-2 px-4 rounded hover:bg-gray-700 transition"
        >
          View Inventory
        </Link>
      </nav>

      {/* 🚪 Sign Out */}
      <button
        onClick={handleLogout}
        className="w-full text-left py-2 px-4 bg-red-600 hover:bg-red-700 transition rounded mt-6"
      >
        Sign Out
      </button>

      {/* 🎨 Theme Toggle */}
      <div className="mt-6">
        <ThemeToggle />
      </div>
    </div>
  );
}
