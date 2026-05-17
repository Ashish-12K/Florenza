import { useNavigate } from "react-router-dom";

const categories = [
  { name: "Resin", image: "/images/Resin/PPT1.jpeg", slug: "resin" },
  { name: "Earring", image: "/images/Earring/EarringBG.webp", slug: "earring" },
  { name: "Bangles", image: "/images/Bangles/BangleBG.webp", slug: "bangle" },
  { name: "Potli Bag", image: "/images/Potli/PotliBG.jpeg", slug: "potli" },
  { name: "Candles", image: "/images/Candle/CandleBG2.jpg", slug: "candle" },
  { name: "Hamper", image: "/images/Hampers/HamperBG.webp", slug: "hamper" },
  { name: "Decorative Box", image: "/images/Tiffin/BoxBG.webp", slug: "box" },
  { name: "Stand", image: "/images/Stand/StandBG.webp", slug: "stands" },
];

export default function Categories() {
  const navigate = useNavigate();

  return (
    <section id="collections" className="px-4 py-10">
      
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-semibold text-center tracking-wide">
        SHOP BY COLLECTION
      </h2>
      <p className="text-sm text-gray-600 text-center mt-1">
   Discover timeless handcrafted creations.
</p>

      {/* Pink underline */}
      <div className="flex justify-center mt-2 mb-8">
        <div className="w-12 h-[2px] bg-rose-400 rounded-full"></div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
        {categories.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(`/category/${item.slug}`)}
            className="relative group cursor-pointer overflow-hidden rounded-lg"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[140px] md:h-[300px] object-cover transition duration-300 group-hover:scale-105"
            />

            {/* Label */}
            <span className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur text-xs px-3 py-1 rounded-full shadow-sm">
              {item.name}
            </span>
          </div>
        ))}
      </div>

    </section>
  );
}