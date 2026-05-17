import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function FooterSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How to place an order?",
      answer:
        "Browse products, select your item, click on 'Add to Cart', proceed to checkout and then download the order details image and Send Via WhatsApp. You can also place an order directly via WhatsApp.",
    },
    {
      question: "How do I request a return or replacement?",
      answer:
        "You can contact us via WhatsApp or email for any return or replacement query.",
    },
    {
      question: "When will I get my order?",
      answer: "Orders are delivered within 18-21 business days.",
    },
    {
      question: "Do you take custom orders?",
      answer:
        "Yes, we accept custom orders. You can contact us via WhatsApp to discuss your requirements.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section className="px-6 pt-16 pb-0 bg-gray-50">

        {/* FAQ */}
        <h2 className="text-2xl font-semibold mb-8">
          Frequently asked questions
        </h2>

        <div className="space-y-4">

          {faqs.map((item, index) => (
            <div
              key={index}
              className="border-b border-b-gray-300 pb-3 cursor-pointer"
            >

              <div
                className="flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >

                <p>{item.question}</p>

                <span
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <FaChevronDown size={14} />
                </span>

              </div>

              {openIndex === index && (
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  {item.answer}
                </p>
              )}

            </div>
          ))}

        </div>

      </section>

      {/* Colored Footer Area */}
      <div className="bg-gradient-to-br from-[#fff7f8] via-[#fff0f5] to-[#fdebf3] mt-6">

        {/* Newsletter */}
        <div className="px-6 py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-8">

          <div>
            <h3 className="text-lg font-semibold tracking-wide text-gray-900">
              FOR NEW UPDATES
            </h3>

            <p className="text-sm text-gray-600 mt-2 leading-relaxed max-w-md">
              Get exclusive deals, premium collections, and early access to new arrivals.
            </p>
          </div>

          <div className="flex items-center bg-white/80 backdrop-blur-md border border-white rounded-full px-5 py-3 w-full md:w-[400px] shadow-md">

            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 outline-none bg-transparent text-sm text-gray-700 placeholder:text-gray-400"
            />

            <button className="text-lg hover:translate-x-1 transition duration-300 text-gray-700">
              →
            </button>

          </div>

        </div>

        {/* Footer Bottom */}
        <div className="px-6 py-6 border-t border-white/60 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">

          <p className="tracking-wide">
            © 2026 Florenza. All rights reserved.
          </p>

          <div className="flex gap-6">

            <Link
              to="/terms-and-conditions"
              className="hover:text-black transition duration-300"
            >
              Terms & Conditions
            </Link>

            <Link
              to="/privacy-policy"
              className="hover:text-black transition duration-300"
            >
              Privacy Policy
            </Link>

          </div>

        </div>

      </div>

      {/* Bottom Credit Bar */}
      <div className="bg-black py-3 text-center border-t border-gray-800">

        <a
          href="https://ashish-portfolio-bay.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 text-xs tracking-[0.2em] hover:text-white transition duration-300"
        >
          Designed & Developed by{" "}
          <span className="underline underline-offset-4 decoration-gray-500">
            Ashish
          </span>
        </a>

      </div>
    </>
  );
}