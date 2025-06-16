import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";

const dummyProducts = [
  { id: 1, name: "Wheat", category: "Grain", quantity: 100 },
  { id: 2, name: "Rice", category: "Grain", quantity: 250 },
  { id: 3, name: "Oil", category: "Liquid", quantity: 80 },
];

export default function Products() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const role = localStorage.getItem("userRole");

  useEffect(() => {
    setTimeout(() => {
      setProducts(dummyProducts);
    }, 500);
  }, []);

  const handleAddProduct = (e) => {
    e.preventDefault();
    const newProduct = {
      id: products.length + 1,
      name,
      category,
      quantity: parseInt(quantity),
    };
    setProducts([...products, newProduct]);
    setName("");
    setCategory("");
    setQuantity("");
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-10 bg-gray-100 dark:bg-gray-900 dark:text-white">
        <h1 className="text-3xl font-bold mb-6">Products</h1>

        {/* Manager-only Add Form */}
        {role === "manager" && (
          <form
            onSubmit={handleAddProduct}
            className="mb-6 p-4 border border-gray-300 dark:border-gray-700 rounded-md space-y-4 bg-white dark:bg-gray-800"
          >
            <h2 className="text-xl font-semibold">Add New Product</h2>

            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 dark:border-gray-600 p-2 rounded bg-transparent"
              required
            />

            <input
              type="text"
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-gray-300 dark:border-gray-600 p-2 rounded bg-transparent"
              required
            />

            <input
              type="number"
              placeholder="Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full border border-gray-300 dark:border-gray-600 p-2 rounded bg-transparent"
              required
            />

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add Product
            </button>
          </form>
        )}

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto border border-gray-300 dark:border-gray-700 text-center">
            <thead className="bg-gray-200 dark:bg-gray-700">
              <tr>
                <th className="border p-2">#</th>
                <th className="border p-2">Name</th>
                <th className="border p-2">Category</th>
                <th className="border p-2">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p, idx) => (
                <tr
                  key={p.id}
                  className="hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <td className="border p-2">{idx + 1}</td>
                  <td className="border p-2">{p.name}</td>
                  <td className="border p-2">{p.category}</td>
                  <td className="border p-2">{p.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
