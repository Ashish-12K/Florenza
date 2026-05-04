import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";
import { useEffect } from "react";

export default function CategoryPage() {
  const { category } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  // 🔥 Improved filtering logic
  const filteredProducts = products.filter((item) => {
    if (category === "under-99") return item.price <= 99;

    if (category === "wedding")
      return item.tags?.includes("wedding") || item.isWedding;

    return item.category?.includes(category);
  });

  // 🔥 Better heading format
  const formatTitle = (text) => {
    if (text === "under-99") return "Under ₹99";
    if (text === "wedding") return "Wedding Essentials";

    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  return (
    <div className="px-3 md:px-6 py-10">

      {/* Heading */}
      <h1 className="text-lg md:text-2xl font-semibold mb-8 text-center">
        {formatTitle(category)}
      </h1>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No products found in this category
        </p>
      )}

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {filteredProducts.map((item) => (
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
                e.stopPropagation();
                addToCart(item);
              }}
              className="mt-3 w-full bg-[#a97142] text-white py-2 rounded-full text-xs hover:opacity-90"
            >
              ADD TO CART
            </button>

          </div>
        ))}
      </div>

    </div>
  );
}