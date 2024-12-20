import React from "react";

export default function Item({
  name,
  image,
  price,
  slug,
  key
}) {
  let quantity = 0;
  const quantityDisplay = document.getElementById("quantity");
  const incrementButton = document.getElementById("increment");
  const decrementButton = document.getElementById("decrement");
  if (incrementButton && decrementButton && quantityDisplay) {
    incrementButton.addEventListener("click", () => {
      quantity++;
      quantityDisplay.textContent = quantity;
    });

    decrementButton.addEventListener("click", () => {
      if (quantity > 0) {
        quantity--;
        quantityDisplay.textContent = quantity;
      }
    });
  } else {
    console.error("One or more elements are missing from the DOM.");
  }
  return (
    <div className="item">
      <table border="0">
        <thead>
          <tr className="head">
            <th>Item</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <tr className="body">
            <td className="produuct">
              <div className="productImage">
                <img
                  src={image ? `http://localhost:1337/${image[0].url}` : ""}
                  alt=""
                />
              </div>
              <span>{name}</span>
            </td>
            <td className="price">{price}</td>
            <td className="quantity">
              <div className="counter-container">
                <button id="decrement">-</button>
                <div id="quantity" className="quantity">
                  0
                </div>
                <button id="increment">+</button>
              </div>
            </td>
            <td className="subtotal">{price}</td>
            {/* {price*quantity} */}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
