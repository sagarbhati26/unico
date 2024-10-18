import { createContext, useEffect, useMemo, useState } from "react";
import { products } from "../assets/assets";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = " MRP Rs.";
  const shipping="50"
  const [cartItems, setCartItems] = useState({});
  const navigate=useNavigate()
  const [search, setSearch] = useState(""); // Added search state
  const [showSearch, setShowSearch] = useState(false);

  const addToCart = (itemId, selectSize) => {
    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      if (cartData[itemId][selectSize]) {
        cartData[itemId][selectSize] += 1;
      } else {
        cartData[itemId][selectSize] = 1;
      }
    } else {
      cartData[itemId] = { [selectSize]: 1 };
    }

    setCartItems(cartData);
  };

  const increaseCartItem = (itemId, selectSize) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId] && cartData[itemId][selectSize]) {
      cartData[itemId][selectSize] += 1;
      setCartItems(cartData);
    }
  };

  const decreaseCartItem = (itemId, selectSize) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId] && cartData[itemId][selectSize] > 1) {
      cartData[itemId][selectSize] -= 1;
    } else if (cartData[itemId]) {
      delete cartData[itemId][selectSize];
      if (Object.keys(cartData[itemId]).length === 0) {
        delete cartData[itemId];
      }
    }
    setCartItems(cartData);
  };

  const deleteCartItem = (productId, size) => {
    setCartItems((prevCartItems) => {
      const updatedItems = { ...prevCartItems };
      delete updatedItems[productId][size];
      if (Object.keys(updatedItems[productId]).length === 0) {
        delete updatedItems[productId];
      }
      return updatedItems;
    });
  };

  // Calculate the total for all items in the cart
  const calculateTotal = () => {
    return Object.keys(cartItems).reduce((total, productId) => {
      const product = products.find((item) => item._id === productId);
      if (product) {
        return (
          total +
          Object.keys(cartItems[productId]).reduce(
            (sum, size) => sum + product.price * cartItems[productId][size],
            0
          )
        );
      }
      return total;
    }, 0).toFixed(2);
  };
  const cartItemCount = useMemo(() => {
    return Object.values(cartItems).reduce((total, item) => {
      return total + Object.values(item).reduce((acc, qty) => acc + qty, 0);
    }, 0);
  }, [cartItems]);

  const value = {
    products,
    currency,
    cartItems,
    addToCart,
    increaseCartItem,
    decreaseCartItem,
    deleteCartItem,
    calculateTotal,
    shipping,
    navigate,
    cartItemCount,
    search,
    setSearch,
    showSearch,   // Ensure showSearch is passed here
    setShowSearch // Ensure setShowSearch is passed here
    
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
