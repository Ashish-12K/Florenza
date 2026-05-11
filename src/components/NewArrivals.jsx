import products from "../data/products";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function NewArrivals() {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  return (
    <section className="px-3 md:px-6 py-10">

      {/* Header */}
      <div className="relative mb-8">

        {/* Center Heading */}
        <h2 className="text-lg md:text-2xl font-semibold tracking-wide text-center">
          NEW ARRIVALS
        </h2>

        {/* Underline */}
        <div className="flex justify-center mt-2">
          <div className="w-10 h-[2px] bg-[#a97142] rounded-full"></div>
        </div>

        {/* View All (Right Side) */}
        <p
          onClick={() => navigate("/new-arrivals")}
          className="absolute right-0 top-1 md:top-0 text-xs cursor-pointer text-gray-600 hover:underline"
        >
          VIEW ALL
        </p>

      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {products
          .filter((item) => item.isNew)
          .slice(0, 4)
          .map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-sm p-3 hover:shadow-md transition duration-300"
            >

              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                onClick={() => navigate(`/product/${item.id}`)}
                className="w-full h-[200px] md:h-[260px] object-cover rounded cursor-pointer"
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
                className="mt-3 w-full bg-[#de8f8f] text-white py-2 rounded-full text-xs hover:bg-[#d67d7d] transition"
              >
                ADD TO CART
              </button>

            </div>
          ))}
      </div>

    </section>
  );
}