export default function BrandIntro() {
  return (
    <section className="bg-[#f5f3f0] px-6 py-10 md:py-16 text-center">

      {/* Heading */}
      <h2 className="text-xl md:text-4xl font-serif tracking-wide">
        WELCOME TO FLORENZA
      </h2>

      {/* Description */}
      <p className="mt-4 md:mt-6 max-w-2xl mx-auto text-sm md:text-base text-gray-700 leading-relaxed">
        Welcome to Florenza, where elegance meets craftsmanship. We create
        beautifully handcrafted pieces designed to add charm, warmth, and
        meaning to your special moments. Each product reflects creativity,
        care, and timeless style — made to be cherished forever.
      </p>

      {/* Decorative element */}
      <div className="flex justify-center mt-6 md:mt-8">
        <div className="w-12 md:w-16 h-[2px] bg-[#a97142] rounded-full"></div>
      </div>

    </section>
  );
}