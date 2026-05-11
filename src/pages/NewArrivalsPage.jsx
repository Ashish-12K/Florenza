import products from "../data/products";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useEffect } from "react";

export default function NewArrivalsPage() {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className="px-3 md:px-6 py-10">

      {/* Heading */}
      <h1 className="text-lg md:text-2xl font-semibold mb-8 text-center">
        New Arrivals
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {products.map((item) => (
          <div
            key={item.id}
           className="p-2 transition duration-300 hover:-translate-y-1"
          >

            {/* Image */}
            <img
              src={item.image}
              alt={item.name}
              onClick={() => navigate(`/product/${item.id}`)}
              className="w-full h-[200px] md:h-[240px] object-cover rounded cursor-pointer"
            />

            {/* Info */}
            <div className="mt-3 text-center">
              <p
                onClick={() => navigate(`/product/${item.id}`)}
                className="text-xs cursor-pointer"
              >
                {item.name}
              </p>

              <p className="text-xs text-gray-600">
                Rs. {item.price}.00
              </p>
            </div>

            {/* Add to Cart */}
            <button
              onClick={(e) => {
                e.stopPropagation(); // 🔥 prevents navigation
                addToCart(item);
              }}
              className="mt-3 w-full bg-[#de8f8f] text-white py-2 rounded-full text-xs hover:bg-[#d67d7d] transition"
            >
              ADD TO CART
            </button>

          </div>
        ))}
      </div>

    </div>
  );
}