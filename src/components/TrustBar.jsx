import { FiHeadphones, FiTruck, FiShield, FiCheckCircle } from "react-icons/fi";

export default function TrustBar() {
  return (
    <section className="bg-[#f3f1ee] px-6 py-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">

        {/* Item 1 */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
          <FiHeadphones size={30} />
          <div>
            <h3 className="font-semibold tracking-wide">CUSTOMER SUPPORT</h3>
            <p className="text-sm text-gray-600 mt-1">
              Dedicated support for anytime you need.
            </p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
          <FiCheckCircle size={30} />
          <div>
            <h3 className="font-semibold tracking-wide">HIGH QUALITY BRAND</h3>
            <p className="text-sm text-gray-600 mt-1">
              Effortless quality for your peace of mind.
            </p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
          <FiTruck size={30} />
          <div>
            <h3 className="font-semibold tracking-wide">FAST SHIPPING</h3>
            <p className="text-sm text-gray-600 mt-1">
              Quick and reliable shipping, every time.
            </p>
          </div>
        </div>

        {/* Item 4 */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
          <FiShield size={30} />
          <div>
            <h3 className="font-semibold tracking-wide">SECURE PAYMENT</h3>
            <p className="text-sm text-gray-600 mt-1">
              Safe and secure payments, guaranteed.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}