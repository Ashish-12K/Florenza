import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";

export default function CategoryPage() {
  const { category } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const filteredProducts = products.filter(
    (item) => item.category === category
  );

  return (
    <div className="px-3 md:px-6 py-10">

      {/* Heading */}
      <h1 className="text-lg md:text-2xl font-semibold mb-8 capitalize text-center">
        {category}
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {filteredProducts.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-sm p-3 hover:shadow-md transition duration-300"
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
                e.stopPropagation(); // 🔥 prevent navigation
                addToCart(item);
              }}
              className="mt-3 w-full bg-[#a97142] text-white py-2 rounded-full text-xs hover:opacity-90 transition"
            >
              ADD TO CART
            </button>

          </div>
        ))}
      </div>

    </div>
  );
}