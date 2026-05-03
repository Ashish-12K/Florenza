export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/916399075136"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-4 z-50 bg-green-500 p-3 rounded-full shadow-lg hover:scale-110 transition"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
        alt="WhatsApp"
        className="w-6 h-6"
      />
    </a>
  );
}