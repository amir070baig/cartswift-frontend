"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try{
      const res = await fetch(`http://localhost:5000/api/products/${id}`)
      const data = await res.json()
      setProduct(data)
      }catch(err){
        console.error(err)
      }finally{
        setLoading(false)
      }
    }
    fetchProduct(); // ✅ Call the function
  }, [id]);


  // ADD to cart function
  const addToCart = () => {
    if (!product) return;

    let cart = JSON.parse(localStorage.getItem("cart") || "[]");

    const existingItemIndex = cart.findIndex((item: Product) => item.id === product.id);
    if (existingItemIndex > -1) {
      cart[existingItemIndex].quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Item added to cart!");
  };

  if (loading) return <p className="text-center mt-10">Loading product...</p>;
  if (!product) return <p className="text-center mt-10">Product not found</p>;

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-8">
        <img src={product.image} alt={product.name} className="w-full rounded-lg" />
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-600 mt-4">{product.description}</p>
          <p className="text-2xl font-bold mt-6">₹{product.price}</p>
          <button
            onClick={addToCart}
            className="mt-6 px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
