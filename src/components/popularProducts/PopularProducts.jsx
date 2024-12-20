import React, { useState } from "react";
import { CgInsights } from "react-icons/cg";
import { MdFavoriteBorder, MdOutlineShoppingBag } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { AiOutlineShopping } from "react-icons/ai";
import { IoIosClose } from "react-icons/io";
import { addToWishlistAPI } from "../../api/FetchAPI";
import { addToCartAPI } from "../../api/FetchAPI";

export default function PopularProducts({
  name,
  image,
  price,
  slug,
  body,
  avalibality,
  sku,
  originalPrice,
  email,
}) {
  const userId = sessionStorage.getItem("identifier");
  const [showPopup, setShowPopup] = useState(false);
  const { mutate: addToCart } = addToCartAPI();
  const { mutate: addToWishlist } = addToWishlistAPI();

  const handleAddToCart = () => {
  const product = { name, image, price, slug };
  const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
  const productExists = storedCart.some((item) => item.slug === product.slug);
  if (!productExists) {
    storedCart.push(product);
    localStorage.setItem("cart", JSON.stringify(storedCart));
    window.dispatchEvent(new Event("cartUpdated"));
    addToCart({ productId: slug, userId: userId });
  // } else {
  //   console.log("Product is already in the cart!");
  }
};
  const handleAddToWishlist = () => {
    const product = { name, image, price, slug };
    const storedWishlist = JSON.parse(sessionStorage.getItem("wishlist")) || [];
    storedWishlist.push(product);
    sessionStorage.setItem("wishlist", JSON.stringify(storedWishlist));
    addToWishlist({ productId: slug, userId: userId });
    // console.log("Product ID:", slug);
    // console.log("User ID:", userId);
    // console.log("Product:", product);
    // console.log("Stored Wishlist Before:", storedWishlist);
  };
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <div className="product">
        <div className="App">
          {/* <button onClick={togglePopup}>Toggle Pop-up</button> */}

          {showPopup && (
            <div className="popup">
              <div className="singlepost">
                <button onClick={togglePopup} className="close">
                  <IoIosClose />
                </button>
                <div className="popup_content">
                  <div className="imaggee">
                    <img
                      src={image ? `http://localhost:1337/${image[0].url}` : ""}
                      alt=""
                    />
                  </div>
                  <div className="info">
                    <h2>{name}</h2>
                    <div className="price-container">
                      <span className="discounted-price">{price}</span>
                      <span className="original-price">{originalPrice}</span>
                    </div>
                    <div className="desc">
                      <p>{body}</p>
                    </div>
                    <div className="available">
                      <p>
                        Availability:
                        <span>{avalibality}</span>
                      </p>
                    </div>
                    <div className="sku">
                      <p>
                        SKU:
                        <span>{sku}</span>
                      </p>
                    </div>
                    <div className="size">
                      <p>SIZE:</p>
                      <div className="boxes">
                        <div className="size1">
                          <p>S</p>
                        </div>
                        <div className="size2">
                          <p>M</p>
                        </div>
                        <div className="size3">
                          <p>L</p>
                        </div>
                        <div className="size4">
                          <p>XL</p>
                        </div>
                      </div>
                    </div>
                    <div className="color">
                      <p>COLOR:</p>
                      <div className="colors">
                        <div className="color1"></div>
                        <div className="color2"></div>
                        <div className="color3"></div>
                        <div className="color4"></div>
                      </div>
                    </div>

                    <div className="cart">
                      <button type="submit">
                        <AiOutlineShopping />
                        Add To Cart
                      </button>
                    </div>

                    <div className="go_to">
                      <button type="submit">Go To Product</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="image">
          <NavLink to={`${slug}`}>
            <div className="product_img">
              <img
                src={image ? `http://localhost:1337/${image[0].url}` : ""}
                alt=""
              />
            </div>
          </NavLink>
          <div className="product_imgg_layer">
            <div className="icons">
              <div className="bag" onClick={handleAddToCart}>
                <AiOutlineShopping />
              </div>
              <div className="insight">
                <CgInsights />
              </div>
            </div>

            <div className="btn">
              <button onClick={togglePopup}>QuickView</button>
            </div>
          </div>
        </div>
        <div className="containn">
        <div className="detail">
          <strong>
            <NavLink to={`${slug}`}>{name}</NavLink>
          </strong>
          <span>{price}</span>
        </div>
          <div className="fav-icon">
            <MdFavoriteBorder onClick={handleAddToWishlist} />
          </div>
</div>
      </div>
    </>
  );
}
