import React, { useContext } from "react";
import Title from "../components/Title";
import { ShopContext } from "../context/shopContext";

const PlaceOrder = () => {
  const { calculateTotal, currency,shipping } = useContext(ShopContext); // Access calculateTotal and currency

  return (
    <div className="flex flex-col lg:flex-row max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md space-y-4 lg:space-y-0 lg:space-x-6">
      {/* Left Side - Customer Info */}
      <div className="flex-1">
        <Title text1="Customer" text2="Information" />
        <div className="flex flex-col space-y-4 mt-4">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
            />
          </div>
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
          />
          <input
            type="text"
            placeholder="Enter City"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
          />
          <input
            type="text"
            placeholder="Enter Street"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
          />
          <input
            type="text"
            placeholder="Landmark"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
          />
          <input
            type="number"
            placeholder="Enter Your Phone Number"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
          />
          <input
            type="number"
            placeholder="Enter Your Pincode"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
          />
        </div>
      </div>

      {/* Right Side - Order Summary & Payment */}
      <div className="flex-1 bg-gray-100 p-6 rounded-lg shadow-inner">
        <Title text1="Order" text2="Summary & Payment" />
        <div className="space-y-4 mt-4">
          <h3 className="text-lg font-semibold">Order Details</h3>
          <div className="flex justify-between border-b pb-2">
            <span>Subtotal</span>
            <span>{currency}{calculateTotal()}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span>{currency}</span>
            <span>{shipping}</span> 
          </div>
          <div className="flex justify-between font-bold text-xl mt-4">
            <span>Total</span>
            <span>{currency}{(parseFloat(calculateTotal()) + parseFloat(shipping)).toFixed(2)}</span>
          </div>
        </div>

        {/* Payment Section */}
        <div className="mt-8 space-y-4">
          <h3 className="text-lg font-semibold">Payment Method</h3>
          <div className="flex items-center gap-3">
            <input type="radio" id="creditCard" name="paymentMethod" className="focus:ring-green-500" />
            <label htmlFor="creditCard" className="text-gray-700">Credit Card</label>
          </div>
          <div className="flex items-center gap-3">
            <input type="radio" id="paypal" name="paymentMethod" className="focus:ring-green-500" />
            <label htmlFor="paypal" className="text-gray-700">PayPal</label>
          </div>
          <div className="flex items-center gap-3">
            <input type="radio" id="cod" name="paymentMethod" className="focus:ring-green-500" />
            <label htmlFor="cod" className="text-gray-700">Cash on Delivery</label>
          </div>
        </div>

        {/* Place Order Button */}
        <button className="w-full mt-8 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default PlaceOrder;
