export default function AdminDashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <div className="flex justify-between">
        <div>
          <h2 className="text-xl font-semibold mb-2">Manage Products</h2>
          {/* Product list with edit/delete actions here */}
        </div>
        <a href="/addfood">
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            ➕ Add Food
          </button>
        </a>
      </div>
    </div>
  );
}
