export default function FeatureBar() {
  return (
    
    <div className="bg-[#f3f1ee] py-3 overflow-hidden">
      <div className="flex whitespace-nowrap animate-scroll gap-10 px-4 text-sm md:text-base">

        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center gap-10">
            <span>• LIGHT WEIGHT</span>
            <span>• TARNISH-FREE</span>
            <span>• WATERPROOF</span>
            <span>• SKIN FRIENDLY</span>
            <span>• PREMIUM QUALITY</span>
          </div>
        ))}

      </div>
    </div>
  );
}