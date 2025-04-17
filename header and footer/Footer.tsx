"use client";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            🍽 FoodieExpress
          </h3>
          <p>
            Your favorite meals, delivered hot and fresh to your doorstep. Taste
            the love in every bite!
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "Menu", "Offers", "About", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`/${item.toLowerCase()}`}
                  className="hover:text-white transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">
              <Facebook />
            </a>
            <a href="#" className="hover:text-white">
              <Instagram />
            </a>
            <a href="#" className="hover:text-white">
              <Twitter />
            </a>
          </div>
        </div>
      </div>
      <p className="text-center text-sm text-gray-500 mt-8">
        © {new Date().getFullYear()} FoodieExpress. All rights reserved.
      </p>
    </footer>
  );
}
