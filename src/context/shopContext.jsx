import { createContext } from "react";
import { products } from "../assets/assets";
export const shopContext = createContext();
const shopContextProvider = (props) => {
  const currency = "₹";
  const delivery_fees = 10;

  const value = {
    products,
    currency,
    delivery_fees,
  };

  return (
    <shopContext.Provider value={value}>{props.children}</shopContext.Provider>
  );
};

export default shopContextProvider;
