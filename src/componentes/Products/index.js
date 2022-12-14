import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import "./Productss.css";

const Products = () => {
  const { addItemToCart, products } = useContext(CartContext);

  return (
    <div className="productsContainer">
      {products &&
        products.map((product, i) => (
          <div key={i} className="product">
            <img src={product.img} alt={product.name} />
            <div>
              <p>
                {product.name} - ${product.price}
              </p>
            </div>
            {!product.inCart ? (
              <button onClick={() => addItemToCart(product)}>
                Add to Cart
              </button>
            ) : (
              <button>En el carrito</button>
            )}
          </div>
        ))}
    </div>
  );
};

export default Products;
