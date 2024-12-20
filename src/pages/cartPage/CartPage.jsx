import React, { useState, useEffect, useRef } from "react";
import Item from "../../components/item/Item";
import { SlArrowDown } from "react-icons/sl";
import { HiMiniArrowSmallRight } from "react-icons/hi2";
export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
    console.log("Stored Cart:", storedCart);

  }, []);
  useEffect(() => {
    const handleCartUpdate = () => {
      const updatedCart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartItems(updatedCart);
    };
    window.addEventListener("cartUpdated", handleCartUpdate);

    return () => {
      window.removeEventListener("cartUpdated", handleCartUpdate);
    };
  }, []);
  return (
    <>
      <div className="cartPage">
        <h1>Shopping Cart</h1>
      </div>
      <div className="contain">
        <div className="cartItems">
          {cartItems?.map((item, index) => (
            <Item
              key={index}
              image={item?.image}                                
              name={item?.name}
              price={item?.price}
              slug={item?.documentId}
              
            />
          ))}
        </div>
        <div className="summary">
          <h3>Summary</h3>
          <div className="shipping">
            <strong>Estimate Shipping and Tax</strong>
            <SlArrowDown />
          </div>
          <table className="totals">
            <tr className="totals sub">
              <th className="mark" scope="row">
                Subtotal
              </th>
              <td className="amount">
                <span
                  className="price"
                  data-bind="text: getValue(), attr: {'data-th': title}"
                  data-th="Subtotal"
                >
                  $49.00
                </span>
              </td>
            </tr>
            <tr className="totals shipping excl">
              <th className="mark" scope="row">
                <span className="label" data-bind="i18n: title">
                  Shipping
                </span>

                <span
                  className="value"
                  data-bind="text: getShippingMethodTitle()"
                >
                  (Free Shipping - Free)
                </span>
              </th>
              <td className="amount">
                <span
                  className="price"
                  data-bind="text: getValue(), attr: {'data-th': title}"
                  data-th="Shipping"
                >
                  $0.00
                </span>
              </td>
            </tr>
            <tr className="grand totals">
              <th className="mark" scope="row">
                <strong data-bind="i18n: title">Order Total</strong>
              </th>
              <td
                data-bind="attr: {'data-th': title}"
                className="amount"
                data-th="Order Total"
              >
                <strong>
                  <span className="price" data-bind="text: getValue()">
                    $49.00
                  </span>
                </strong>
              </td>
            </tr>
          </table>
          <div className="checkout">
            <button>
              go to checkout
              <HiMiniArrowSmallRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
