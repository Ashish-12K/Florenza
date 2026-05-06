import { useNavigate } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";

export default function FeaturedSection() {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const featured = products.slice(0, 2);

  return (
    <section className="px-4 md:px-6 py-10 md:py-12">

      {/* Heading */}
      <h2 className="text-2xl md:text-4xl font-serif text-center tracking-wide">
        FEATURED COLLECTION
      </h2>

      <p className="text-center text-sm text-gray-600 mt-2 mb-8 md:mb-10">
        Discover our most loved and bestselling pieces
      </p>

      {/* 🔹 ROW 1 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:h-[420px]">

        {/* LEFT - Banner */}
        <div className="relative rounded-lg overflow-hidden md:col-span-2 group cursor-pointer">
          <img
            src="/images/Earring/e1.webp"
            alt="Bestseller"
            className="w-full h-[200px] md:h-full object-cover group-hover:scale-105 transition duration-500"
          />

          <div className="absolute inset-0 bg-black/30 flex flex-col justify-end px-6 pb-6 text-white">
            <h3 className="text-2xl md:text-4xl font-serif">
              BESTSELLER
            </h3>

            <p className="text-xs md:text-sm mt-2">
              Jewelry that everyone is loving right now
            </p>

            <button
              onClick={() => navigate("/new-arrivals")}
              className="mt-3 md:mt-4 bg-white text-black px-4 py-2 rounded-full text-xs md:text-sm"
            >
              DISCOVER NOW
            </button>
          </div>
        </div>

        {/* RIGHT - Products */}
        <div className="md:col-span-2 grid grid-cols-2 gap-4">
          {featured.map((item) => (
            <div
              key={item.id}
              className="bg-white p-3 md:p-4 rounded-lg shadow-sm flex flex-col h-full"
            >
              <img
                src={item.image}
                alt={item.name}
                onClick={() => navigate(`/product/${item.id}`)}
                className="w-full h-[140px] md:h-full object-cover rounded cursor-pointer flex-1"
              />

              <div className="mt-2 md:mt-3">
                <p className="text-xs md:text-sm text-center">
                  {item.name}
                </p>

                <p className="text-xs md:text-sm text-gray-600 text-center">
                  Rs. {item.price}.00
                </p>

                <button
                  onClick={() => addToCart(item)}
                  className="mt-2 md:mt-3 w-full bg-[#a97142] text-white py-2 rounded-full text-xs md:text-sm"
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* 🔹 ROW 2 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8 md:mt-10 md:h-[420px]">

        {/* LEFT - responsive */}
        <div className="md:col-span-2 grid grid-cols-2 gap-3 md:gap-6 md:h-full">

          {/* Wedding */}
          <div
            onClick={() => navigate("/category/wedding")}
            className="relative rounded-lg overflow-hidden cursor-pointer group h-[140px] md:h-full"
          >
            <img
              src="/images/Wedding/W1.jpeg"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 flex items-end px-3 pb-3 text-white">
              <h3 className="text-xs md:text-lg font-serif">
                Wedding Essentials
              </h3>
            </div>
          </div>

          {/* Under ₹99 */}
          <div
            onClick={() => navigate("/category/under-99")}
            className="relative rounded-lg overflow-hidden cursor-pointer group h-[140px] md:h-full"
          >
            <img
              src="/images/Under99/u13.jpeg"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 flex items-end px-3 pb-3 text-white">
              <h3 className="text-xs md:text-lg font-serif">
                Under ₹99
              </h3>
            </div>
          </div>

        </div>
        {/* RIGHT - Big Banner */}
        <div className="md:col-span-2 relative rounded-lg overflow-hidden group cursor-pointer">
          <img
            src="/images/Hampers/h3.jpeg"
            alt="Trending"
            className="w-full h-[200px] md:h-full object-cover group-hover:scale-105 transition duration-500"
          />

          <div className="absolute inset-0 bg-black/20 flex flex-col justify-end items-end px-6 pb-6 text-white">
            <h3 className="text-xl md:text-3xl font-serif text-right">
              TRENDING NOW
            </h3>

            <button
              onClick={() => navigate("/new-arrivals")}
              className="mt-3 bg-white text-black px-4 py-2 rounded-full text-xs"
            >
              DISCOVER NOW
            </button>
          </div>
        </div>

      </div>

    </section>
  );
}