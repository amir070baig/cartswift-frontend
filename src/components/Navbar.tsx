"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo / Brand */}
        <Link href="/" className="text-xl font-bold">
          CartSwift
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-6">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/" className="hover:text-gray-300">
            Products
          </Link>
          <Link href="/cart" className="hover:text-gray-300">
            Cart
          </Link>
          <Link href="/admin" className="ml-4 text-blue-600">
            Admin
          </Link>

        </div>
      </div>
    </nav>
  );
}
