export default function AnnouncementBar() {
  return (
    <div className="bg-[#a97142] text-white py-2 overflow-hidden">
      <div className="marquee gap-10">

        {/* Duplicate content for smooth loop */}
        <div className="flex gap-10 px-4">
          <span>Buy above Rs1000, GET 5% OFF </span>
          <span>Buy above Rs2000, GET 10% OFF </span>
          <span>Buy above Rs3000, GET 20% OFF </span>
        </div>

        <div className="flex gap-10 px-4">
          <span>Buy above Rs1000, GET 5% OFF </span>
          <span>Buy above Rs2000, GET 10% OFF </span>
          <span>Buy above Rs3000, GET 20% OFF </span>
        </div>

      </div>
    </div>
  );
}