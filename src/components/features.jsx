import { FaTruck, FaCheckCircle, FaCreditCard, FaHeadphonesAlt } from "react-icons/fa";

const Features = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-10 px-8 max-w-7xl mx-auto my-28">
      {/* Feature 1 */}
      <div className="flex items-center gap-4">
        <FaTruck className="text-5xl text-red-500" />
        <div>
          <h3 className="text-lg font-semibold">Free Shipping</h3>
          <p className="text-gray-500 text-sm">Free Shipping On All Order</p>
        </div>
      </div>

      {/* Feature 2 */}
      <div className="flex items-center gap-4">
        <FaCheckCircle className="text-5xl text-red-500" />
        <div>
          <h3 className="text-lg font-semibold">Safe Money</h3>
          <p className="text-gray-500 text-sm">30 Days Money Back</p>
        </div>
      </div>

      {/* Feature 3 */}
      <div className="flex items-center gap-4">
        <FaCreditCard className="text-5xl text-red-500" />
        <div>
          <h3 className="text-lg font-semibold">Secure Payment</h3>
          <p className="text-gray-500 text-sm">All Payment Secure</p>
        </div>
      </div>

      {/* Feature 4 */}
      <div className="flex items-center gap-4">
        <FaHeadphonesAlt className="text-5xl text-red-500" />
        <div>
          <h3 className="text-lg font-semibold">Online Support 24/7</h3>
          <p className="text-gray-500 text-sm">Technical Support 24/7</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
