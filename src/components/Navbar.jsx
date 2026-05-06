import { useCart } from "../context/CartContext";
import { FiShoppingBag, FiMenu, FiX } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const { cart } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(true)}>
            <FiMenu size={22} />
          </button>
        </div>

        {/* Logo */}
        <h1
          onClick={() => navigate("/")}
          className="text-2xl font-semibold tracking-wide cursor-pointer"
        >
          FLORENZA
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm font-medium tracking-wide uppercase">

          <p
            onClick={() => navigate("/")}
            className="cursor-pointer hover:text-gray-500 transition"
          >
            Home
          </p>

          <p
            onClick={() => {
              const section = document.getElementById("collections");

              if (location.pathname !== "/") {
                navigate("/");

                setTimeout(() => {
                  document
                    .getElementById("collections")
                    ?.scrollIntoView({ behavior: "smooth" });
                }, 100);
              } else {
                section?.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="cursor-pointer hover:text-gray-500 transition"
          >
            Collections
          </p>

          <p
            onClick={() => navigate("/new-arrivals")}
            className="cursor-pointer hover:text-gray-500 transition"
          >
            New In
          </p>

          <p
            onClick={() => navigate("/contact")}
            className="cursor-pointer hover:text-gray-500 transition"
          >
            Contact
          </p>

        </nav>

        {/* Cart */}
        <div
          onClick={() => {
            if (location.pathname === "/cart") {
              navigate(-1);
            } else {
              navigate("/cart");
            }
          }}
          className="relative cursor-pointer group"
        >
          <FiShoppingBag size={20} />

          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs px-2 py-[2px] rounded-full">
              {totalItems}
            </span>
          )}
        </div>

      </div>

      {/* Mobile Sidebar */}
      {menuOpen && (
        <>
          {/* Overlay */}
          <div
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 bg-black/40 z-40"
          />

          {/* Sidebar */}
          <div className="fixed top-0 left-0 w-[250px] h-full bg-white z-50 p-6 flex flex-col gap-6">

            {/* Close Button */}
            <div className="flex justify-end">
              <button onClick={() => setMenuOpen(false)}>
                <FiX size={22} />
              </button>
            </div>

            {/* Links */}
            <p
              onClick={() => { navigate("/"); setMenuOpen(false); }}
              className="cursor-pointer uppercase tracking-wide"
            >
              Home
            </p>

            <p
              onClick={() => {
                setMenuOpen(false);
                const section = document.getElementById("collections");

                if (location.pathname !== "/") {
                  navigate("/");

                  setTimeout(() => {
                    document
                      .getElementById("collections")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }, 100);
                } else {
                  section?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="cursor-pointer hover:text-gray-500 transition"
            >
              Collections
            </p>

            <p
              onClick={() => { navigate("/new-arrivals"); setMenuOpen(false); }}
              className="cursor-pointer uppercase tracking-wide"
            >
              New In
            </p>

            <p
              onClick={() => { navigate("/contact"); setMenuOpen(false); }}
              className="cursor-pointer uppercase tracking-wide"
            >
              Contact
            </p>

          </div>
        </>
      )}

    </header>
  );
}