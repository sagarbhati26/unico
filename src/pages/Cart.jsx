import React, { useContext, useEffect, useState } from "react";
import Title from "../components/Title";
import { ShopContext } from "../context/shopContext";

const Cart = () => {
  const { products, currency, cartItems, increaseCartItem, decreaseCartItem,deleteCartItem } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const productId in cartItems) {
      for (const size in cartItems[productId]) {
        if (cartItems[productId][size] > 0) {
          const product = products.find(item => item._id === productId);
          if (product) {
            tempData.push({
              ...product,
              size,
              quantity: cartItems[productId][size],
            });
          }
        }
      }
    }
    setCartData(tempData);
  }, [cartItems, products]);

  const calculateTotal = () => {
    return cartData.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
  <div>
    <Title text1="Your" text2="Cart" />
    <hr />
    <div className="mt-6">
      {cartData.length > 0 ? (
        <div>
          {cartData.map((item) => (
            <div key={`${item._id}-${item.size}`} className="flex justify-between items-center mb-6 p-4 border rounded-lg">
              <div className="flex items-center gap-4">
                <img src={item.image[0]} alt={item.name} className="w-16 h-16 rounded-lg object-cover" />
                <div>
                  <h2 className="font-semibold text-lg">{item.name}</h2>
                  <p className="text-gray-600">Size: {item.size}</p>
                  <p className="text-green-600 font-semibold">{currency}{item.price}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button onClick={() => decreaseCartItem(item._id, item.size)} className="px-3 py-1 bg-gray-300 rounded-lg font-semibold hover:bg-gray-400 transition">
                  -
                </button>
                <span className="font-semibold">{item.quantity}</span>
                <button onClick={() => increaseCartItem(item._id, item.size)} className="px-3 py-1 bg-gray-300 rounded-lg font-semibold hover:bg-gray-400 transition">
                  +
                </button>
                <button onClick={() => deleteCartItem(item._id, item.size)} className="px-3 py-1 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition">
                  Delete
                </button>
              </div>
            </div>
          ))}
          <div className="mt-8 text-right">
            <h3 className="text-2xl font-bold">Total: {currency}{calculateTotal()}</h3>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      )}
    </div>
  </div>
);

};

export default Cart;
