import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <span className="text-2xl font-bold text-red-500">
          🍔 FoodieExpress
        </span>

        {/* Navigation */}
        <nav className="flex items-center space-x-6 text-gray-700 font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/orders">Order Details</Link>
          <Link href="/cart">Cart</Link>
          <Link
            href="/Login"
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}
