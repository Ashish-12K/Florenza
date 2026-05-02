import { useNavigate } from "react-router-dom";

const categories = [
  { name: "Resin", image: "/images/Resin/ResinBG.png", slug: "necklace" },
  { name: "Earring", image: "/images/Earring/EarringBG.png", slug: "earring" },
  { name: "Bangles", image: "/images/Bangles/BangleBG.png", slug: "bracelets" },
  { name: "Potli Bag", image: "/images/Potli/PotliBG.jpeg", slug: "rings" },
  { name: "Candles", image: "/images/Candle/CandleBG2.jpg", slug: "nosepin" },
  { name: "Hamper", image: "/images/Hampers/HamperBG.jpg", slug: "anklet" },
  { name: "Tiffin Box", image: "/images/Tiffin/TiffinBG.png", slug: "nosepin" },
  { name: "Wedding Bell", image: "/images/WeddingBell/WeddingBellBG.png", slug: "nosepin" },
];

export default function Categories() {
  const navigate = useNavigate();

  return (
    <section className="px-4 py-10">
      <h2 className="text-xl font-semibold mb-6">
        Shop by collection
      </h2>

      <div className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
        {categories.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(`/category/${item.slug}`)}
            className="relative group cursor-pointer overflow-hidden rounded"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[140px] md:h-[300px] object-cover transition duration-300 group-hover:scale-105"
            />

            <span className="absolute bottom-2 right-2 bg-white text-xs px-2 py-1 rounded shadow">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}