import React from "react";
import { IoIosClose } from "react-icons/io";


export default function ItemCart({ product, removeFromCart }) {
    return (
      <>
    <div className="cart-item">
      <div className="details">
        <div className="item-name">
          <p>{product.name}</p>
        </div>
        <div className="item-price">
          <p>{product.price}</p>
        </div>
      </div>
      <div className="item-img">
        <img
          src={product.image ? `http://localhost:1337/${product.image[0].url}` : ""}
          alt={product.name}
          />
        <div className="close-icon">
          <IoIosClose onClick={() => removeFromCart(product.slug)}/>
        </div>
      </div>
      </div>
      
          </>
  );
}
