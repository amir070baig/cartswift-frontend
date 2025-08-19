"use client";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try{
        const res = await fetch("http://localhost:5000/api/products");
        const data = await res.json();
        setProducts(data);
      }catch(err){
        console.error("Error fetching products:", err);
      } finally{
        setLoading(false)
      }
    }
    fetchProducts()
  }, []);

  if (loading) return <p className="text-center mt-10">Loading products...</p>;

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
