export default function UserHome() {
  const userName = "Pramod"; // Example, replace with dynamic data if needed

  const products = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    image: `https://res.cloudinary.com/demo/image/upload/sample.jpg`, // replace with real uploaded URLs
    price: (10 + i).toFixed(2),
  }));

  return (
    <main className="flex flex-col h-[calc(100vh-80px)] overflow-hidden">
      {/* User Info or Dashboard Banner */}
      <section className="bg-orange-100 px-6 py-4 shadow-sm">
        <h1 className="text-2xl font-bold text-orange-800">
          👋 Welcome, {userName}!
        </h1>
        <p className="text-gray-600 mt-1">
          Explore our most popular food items today.
        </p>
      </section>

      {/* Product Listing */}
      <section className="overflow-y-auto p-6 space-y-4">
        <h2 className="text-2xl font-bold mb-4">🍔 Popular Items</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition"
            >
              <div className="h-32 bg-gray-200 rounded mb-2" />
              <img src="/veg.jpg" alt="image" />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-500">$12.99</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
