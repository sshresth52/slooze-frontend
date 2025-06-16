import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";

const dummyProducts = [
  { id: 1, name: "Wheat", category: "Grain", quantity: 100 },
  { id: 2, name: "Rice", category: "Grain", quantity: 250 },
  { id: 3, name: "Oil", category: "Liquid", quantity: 80 },
  { id: 4, name: "Sugar", category: "Grain", quantity: 50 },
];

export default function Dashboard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulate fetch
    setTimeout(() => {
      setProducts(dummyProducts);
    }, 500);
  }, []);

  const total = products.length;
  const lowStock = products.filter((p) => p.quantity < 100).length;

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-10 bg-gray-100 dark:bg-gray-900 dark:text-white">
        <h1 className="text-3xl font-bold mb-6">Manager Dashboard</h1>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white p-6 shadow-md rounded-md text-center">
            <h2 className="text-xl font-semibold mb-2">Total Products</h2>
            <p className="text-4xl text-blue-600 font-bold">{total}</p>
          </div>

          <div className="bg-white p-6 shadow-md rounded-md text-center">
            <h2 className="text-xl font-semibold mb-2">Low Stock Products</h2>
            <p className="text-4xl text-red-600 font-bold">{lowStock}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
