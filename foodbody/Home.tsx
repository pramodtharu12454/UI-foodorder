export default function UserHome() {
  const userName = "Pramod";

  const products = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    image: `https://res.cloudinary.com/demo/image/upload/sample.jpg`,
    price: (10 + i).toFixed(2),
    quantity: 10 + i * 2,
    category: i % 2 === 0 ? "Veg" : "Non-Veg",
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
              <img
                src={product.image}
                alt={product.name}
                className="h-32 w-full object-cover rounded mb-2"
              />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-500">💰 ${product.price}</p>
              <p className="text-sm text-gray-500">
                📦 Qty: {product.quantity}
              </p>
              <p className="text-sm text-gray-500">🍽️ {product.category}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
