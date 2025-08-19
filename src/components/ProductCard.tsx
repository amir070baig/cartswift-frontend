import React from "react";
import Link from "next/link";

type ProductProps = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

export default function ProductCard({ id, name, description, price, image }: ProductProps) {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-lg transition">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-gray-600 text-sm">{description}</p>
      <p className="text-xl font-bold mt-2">₹{price}</p>
      <Link
        href={`/product/${id}`}
        className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        View Details
      </Link>
    </div>
  );
}
