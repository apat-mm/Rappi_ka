import React from "react";
import Home from "../Home/index";
import { CartProvider } from "../context/CartContext";

const AppC = () => {
  return (
    <CartProvider>
      <Home />
    </CartProvider>
  );
};

export default AppC;
