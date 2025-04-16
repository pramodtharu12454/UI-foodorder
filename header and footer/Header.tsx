"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-red-500 to-yellow-400 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold tracking-wide">
          🍕 FoodieExpress
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 font-medium">
          {["Home", "Menu", "Offers", "About", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="hover:text-black transition duration-200"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <Link
          href="/cart"
          className="hidden md:inline-block bg-white text-red-600 px-4 py-2 rounded-full font-semibold hover:bg-black hover:text-white transition"
        >
          🛒 Cart
        </Link>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-lg font-medium bg-red-400">
          {["Home", "Menu", "Offers", "About", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="block hover:text-black"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <Link
            href="/cart"
            className="block mt-2 bg-white text-red-600 px-4 py-2 rounded-full text-center hover:bg-black hover:text-white transition"
            onClick={() => setMenuOpen(false)}
          >
            🛒 Cart
          </Link>
        </div>
      )}
    </header>
  );
}
