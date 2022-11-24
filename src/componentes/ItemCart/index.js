import React, { useContext } from "react";
import CartContext from "../context/CartContext";

export const ItemCart = ({ item }) => {
  const { editItemToCart } = useContext(CartContext);

  const { amount } = item;

  return (
    <div className="cartItem">
      <img style={{height:65, borderRadius:5}} src={item.img} alt={item.name} />
      <div className="dataContainer">
        <div className="left">
          <p style={{fontWeight:"bold", fontSize:13}}>{item.name}</p>
          <div className="buttons">
            <button style={{border:"none", cursor:"pointer",fontSize:12, padding:4, borderRadius:5, fontWeight:"bold", color:'#222222'}} onClick={() => editItemToCart(item._id, "add", amount)}>
              AGREGAR
            </button>
            <button style={{border:"none", cursor:"pointer",fontSize:12, padding:4, borderRadius:5, fontWeight:"bold", color:'#222222'}} onClick={() => editItemToCart(item._id, "del", amount)}>
              SACAR
            </button>
          </div>
        </div>
        <div className="right">
          <div style={{backgroundColor:'#FB3939', width:20, height:20, borderRadius:999,display:"flex", alignItems:"center",justifyContent:"center",fontSize:12, fontWeight:"bold"}}>{item.amount}</div>
          <p style={{fontWeight:'bold'}}>Total: ${item.amount * item.price}</p>
        </div>
      </div>
    </div>
  );
};
