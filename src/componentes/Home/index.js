import React from "react";
import Cart from "../Cart";
import Products from "../Products";
import './HomeC.css'

const HomeC = () => {
  return (
    <div className="home_c">
      <Cart />
      <Products />
    </div>
  );
};

export default HomeC;
