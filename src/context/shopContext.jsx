import { createContext, useEffect, useMemo, useState } from "react";
import { products } from "../assets/assets";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "Rs.";
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false); // Set to Boolean true
const[cartItems,setCartItems]=useState({})
const navigate = useNavigate

const addToCart = async (itemId, selectSize) => {
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

const increaseCartItem=(itemId,selectSize)=>{
let cartData=structuredClone(cartItems)
if (cartData[itemId]&& cartData[itemId][selectSize]) {
  cartData[itemId][selectSize]+=1
  setCartItems(cartData)
  
}
}
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
  setCartItems(prevCartItems => {
    const updatedItems = { ...prevCartItems };
    // Remove the specific size of the product
    delete updatedItems[productId][size];
    // If there are no sizes left for the product, remove the product entirely
    if (Object.keys(updatedItems[productId]).length === 0) {
      delete updatedItems[productId];
    }
    return updatedItems;
  });
};


useEffect(()=>{
console.log(cartItems)
},[cartItems])

const cartItemCount = useMemo(() => {
  return Object.values(cartItems).reduce(
    (total, item) => total + Object.values(item).reduce((acc, qty) => acc + qty, 0),
    0
  );
}, [cartItems]);

  const value = {
    products,
    currency,
    navigate,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    cartItemCount,increaseCartItem,decreaseCartItem,deleteCartItem
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
