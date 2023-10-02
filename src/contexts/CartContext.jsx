import useLocalStorage from "@/lib/hooks/useLocalStorage";
import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [storage, setStorage] = useLocalStorage("products");

  return (
    <CartContext.Provider
      value={{
        storage,
        setStorage,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
