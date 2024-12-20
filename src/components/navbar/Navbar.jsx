import React, { useState, useEffect, useRef } from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { IoSearchSharp } from "react-icons/io5";
import { MdArrowDropUp, MdFavoriteBorder } from "react-icons/md";
import { SlArrowDown } from "react-icons/sl";
import { NavLink } from "react-router-dom";
import "react-dropdown/style.css";
import { IoMdMenu } from "react-icons/io";
import ItemCart from "../itemCart/ItemCart";
export default function Navbar({ menuOpen, toggleMenu }) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    // const storedCart =[];
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
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
  const removeFromCart = (slug) => {
    const updatedCart = cartItems.filter((item) => item.slug !== slug);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    setCartItems(updatedCart);
  };
  const toggleDropdown = () => {
    setIsDropdownVisible((prev) => !prev);
  };
  const closeDropdown = (event) => {
    if (!event.target.closest(".cart-icon")) {
      setIsDropdownVisible(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", closeDropdown);
    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, []);

  return (
    <nav className="">
      <div className={`navbar  px ${menuOpen ? "shifted" : ""}`}>
        <div className="container-fluid">
          <div className="logo">
            <img
              src="https://m2.portotheme.com/media/logo/stores/29/logo_ecomblack_lg.png"
              alt=""
            ></img>
          </div>

          <ul className="menu">
            <li className="home">
              <NavLink to={""}>HOME</NavLink>
            </li>
            <div className="categories-drop">
              <li>
                <NavLink to={"/books"}>
                  CATEGORIES
                  <SlArrowDown />
                  <div className="arrrow">
                    <MdArrowDropUp />
                  </div>
                  <div className="categories-dropdown">
                    <ul className="first">
                      <li>Fullwidth Banner</li>
                      <li>Boxed Image Banner</li>
                      <li>Boxed Slider Banner</li>
                      <li>Left Sidebar</li>
                      <li>Right Sidebar</li>
                      <li>Product Flex Grid</li>
                      <li>Product List Item Types</li>
                    </ul>
                    <ul className="second">
                      <li>Ajax Infinite Scroll</li>
                      <li>3 Columns Products</li>
                      <li>4 Columns Products</li>
                      <li>5 Columns Products</li>
                      <li>6 Columns Products</li>
                      <li>7 Columns Products</li>
                      <li>8 Columns Products</li>
                    </ul>
                    <ul
                      className="third"
                      style={{
                        backgroundImage:
                          "url(https://m2.portotheme.com/media/wysiwyg/smartwave/porto/megamenu/menu-banner.jpg)",
                      }}
                    ></ul>
                  </div>
                </NavLink>
              </li>
            </div>
            <li>
              <NavLink to={"healthy"}>
                PRODUCTS
                <SlArrowDown />
              </NavLink>
            </li>
            <li>
              <NavLink to={"/islami"}>
                PAGES
                <SlArrowDown />
              </NavLink>
            </li>
            <li>
              <NavLink to={"/islami"}>
                FEATURES
                <SlArrowDown />
              </NavLink>
            </li>
            <li>
              <NavLink to={"/islami"}>BLOG</NavLink>
            </li>
          </ul>
        </div>

        <ul className="icons">
          <li className="menu-icon" onClick={toggleMenu}>
            <NavLink>
              <IoMdMenu />
            </NavLink>
          </li>
          <li>
            <NavLink to={"/search"}>
              <IoSearchSharp />
            </NavLink>
          </li>
          <li>
            <NavLink to={"login"}>
              <CiUser />
            </NavLink>
          </li>
          <li>
            <NavLink to={"fav"}>
              <MdFavoriteBorder />
            </NavLink>
          </li>
          <li className="cart-icon" onClick={toggleDropdown}>
            <NavLink className={"cart-icon-click"}>
              <AiOutlineShopping className="cart" />
              <span>{cartItems.length}</span>

              <SlArrowDown className="arrow" />
            </NavLink>
            {isDropdownVisible && (
              <div className="cart-drop">
                <div className="arrow-down">
                  <MdArrowDropUp />
                </div>

                <div className="cart-dropdown">
                  {cartItems.length === 0 ? (
                    <h6 className="cart-empty">
                      You have no items in your shopping cart.
                    </h6>
                  ) : (
                    <ul>
                      <li className="cart-fill">
                        <div className="head">
                          <p>{cartItems.length} Items</p>
                          <button>
                            <NavLink to={"cart"}>view cart</NavLink>
                          </button>
                        </div>
                        {cartItems.map((item, index) => (
                          <ItemCart
                            product={item}
                            key={index}
                            removeFromCart={removeFromCart}
                          />
                        ))}
                        <div className="btn-check">
                          <button>Check Out</button>
                        </div>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
