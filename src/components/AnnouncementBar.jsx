export default function AnnouncementBar() {
  return (
    <div className="bg-[#eb8495] text-white py-2 overflow-hidden text-[15px] md:text-sm">
      <div className="marquee gap-10">

        <div className="flex gap-15 px-4">
          <span>Handcrafted with love </span>
          <span>Custom orders available </span>
          <span>PAN India delivery </span>
        </div>

        <div className="flex gap-10 px-4">
          <span>Handcrafted with love </span>
          <span>Custom orders available </span>
          <span>PAN India delivery </span>
        </div>

      </div>
    </div>
  );
}