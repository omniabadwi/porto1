import React from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
import {
  FaCircleCheck,
  FaFacebookF,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { TiSocialLinkedinCircular } from "react-icons/ti";

export default function SingleProduct({ name, image, price, sku, avalibality, originalPrice, body }) {
  
  return (
    <div className="single_product_page">
      <div className="singlepost">
              <div className="popup_content">
                  
          <div className="image">
            <img 
              src={image ? `http://localhost:1337/${image[0].url}` : ""}
              alt=""
            />
          </div>
          <div className="info">
            <h2>{name}</h2>
            <div className="price-container">
              <span className="discounted-price">
                {price}
              </span>
              <span className="original-price">{originalPrice}</span>
            </div>
            <div className="desc">
              <p>
                {body}
              </p>
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

            <div className="icons_2">
              <div className="face">
                <FaFacebookF />
              </div>
              <div className="twitter">
                <FaXTwitter />
              </div>
              <div className="linkd">
                <TiSocialLinkedinCircular />
              </div>
              <div className="whatsapp">
                <FaWhatsapp />
              </div>
              <div className="mail">
                <IoMail />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="details">
        <div className="head">
          <h3 className="active">Details</h3>
          <h3>Reviews</h3>
          <h3>Custom Tab</h3>
        </div>
        <div className="value">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat.
          </p>
          <ul>
            <li>
              
              <FaCircleCheck />
              Any Product types that You want - Simple, Configurable
            </li>
            <li>
              <FaCircleCheck />
              Downloadable/Digital Products, Virtual Products
            </li>
            <li>
              {" "}
              <FaCircleCheck />
              Inventory Management with Backordered items
            </li>
          </ul>
          <p>
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
      </div>
    </div>
  );
}
