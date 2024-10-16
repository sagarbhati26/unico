import { createContext, useEffect, useMemo, useState } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "Rs.";
  const delivery_fees = 69;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false); // Set to Boolean true
const[cartItems,setCartItems]=useState({})

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
    delivery_fees,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    cartItemCount,increaseCartItem,decreaseCartItem
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
