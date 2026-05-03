import { useNavigate } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";

export default function FeaturedSection() {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const featured = products.slice(0, 2);

  return (
    <section className="px-6 py-12">

      {/* Heading */}
      <h2 className="text-2xl md:text-4xl font-serif text-center tracking-wide">
        FEATURED COLLECTION
      </h2>

      <p className="text-center text-sm text-gray-600 mt-2 mb-10">
        Discover our most loved and bestselling pieces
      </p>

      <div className="grid md:grid-cols-4 gap-6">

        <div className="relative rounded-lg overflow-hidden md:col-span-2 group cursor-pointer">

  <img
    src="/images/BannerImg.png"
    className="w-full h-[200px] md:h-full object-cover group-hover:scale-105 transition duration-500"
  />

  <div className="absolute inset-0 bg-black/30 flex flex-col justify-end items-start px-6 pb-6 text-white">
    
    <h3 className="text-2xl md:text-4xl font-serif">
      BESTSELLER
    </h3>

    <p className="text-sm mt-2">
      Jewelry that everyone is loving right now
    </p>

    <button
      onClick={() => navigate("/new-arrivals")}
      className="mt-4 bg-white text-black px-5 py-2 rounded-full text-sm hover:bg-gray-200 transition"
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
                className="bg-white p-4 rounded-lg shadow-sm flex flex-col h-full"
                >

                {/* Image grows */}
                <img
                    src={item.image}
                    onClick={() => navigate(`/product/${item.id}`)}
                    className="w-full h-full min-h-[160px] object-cover rounded cursor-pointer flex-1"
                />

                {/* Content stays bottom */}
                <div className="mt-3">
                    <p className="text-sm text-center">{item.name}</p>
                    <p className="text-sm text-gray-600 text-center">
                    Rs. {item.price}.00
                    </p>

                    <button
                    onClick={() => addToCart(item)}
                    className="mt-3 w-full bg-[#a97142] text-white py-2 rounded-full text-sm hover:opacity-90"
                    >
                    ADD TO CART
                    </button>
                </div>

                </div>
            ))}

        </div>

      </div>

    </section>
  );
}