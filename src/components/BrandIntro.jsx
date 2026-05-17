export default function BrandIntro() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fff7f8] via-[#fff3f5] to-[#fdf1f4] px-6 py-12 md:py-16 text-center">

      {/* Soft Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-pink-100/20 blur-3xl rounded-full"></div>

      <div className="relative z-10">

        {/* Small Label */}
        <p className="uppercase tracking-[0.3em] text-[11px] md:text-xs text-[#b07b91] font-medium">
          Luxury • Handcrafted • Timeless
        </p>

        {/* Heading */}
        <h2 className="mt-3 text-2xl md:text-4xl font-serif tracking-[0.08em] text-gray-900">
          Welcome to Florenza
        </h2>

        {/* Decorative Line */}
        <div className="flex justify-center mt-5">
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#c58ca0] to-transparent rounded-full"></div>
        </div>

        {/* Description */}
        <p className="mt-6 max-w-2xl mx-auto text-sm md:text-[17px] text-[#5f5f5f] leading-8 font-[300] tracking-[0.03em]">
  Welcome to Florenza, where elegance meets craftsmanship.
  We create beautifully handcrafted pieces designed to bring
  charm, warmth, and timeless beauty to your special moments.
</p>

      </div>

    </section>
  );
}