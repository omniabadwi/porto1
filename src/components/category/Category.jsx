import React from "react";

export default function Category({ name, image , slug , num }) {
  return (
    <>
      <div className="product">
        <div className="image">
          <div className="product_img">
            <img
              src={image ? `http://localhost:1337/${image.url}` : ""}
              alt={name}
            />  
          </div>
          <div className="product_img_layer"></div>
        </div>

        <div className="detail">
          <strong>
            <a>{name}</a>
          </strong>
          <span>{num}</span>
        </div>
      </div>
    </>
  );
}
