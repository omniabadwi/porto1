import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import Navbar from "../navbar/Navbar";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Swipe({ menuOpen, toggleMenu }) {
  
  return (
    <>
      <div className={`nav_homee ${menuOpen ? "shifted" : ""}`}>
        
        <Swiper
          loop={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="img_1">
              <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} />
              <img
                className="img_11"
                src="https://m2.portotheme.com/media/wysiwyg/smartwave/porto/homepage/03/shop3_banner2.jpg"
                alt=""
              />
            </div>
            <div className="img_layer">
              <h2>New Season Hats</h2>
              <h3>
                <small>UP TO</small>20% OFF
              </h3>
              <div className="line">
                <hr></hr>
              </div>

              <div className="shop_now">
                <h5>
                  Starting At $<em>19</em>99
                </h5>

                <button>Shop Now <FaLongArrowAltRight /></button> 
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img_2" >
              <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} />
              <img
                className="img_22"
                src="https://m2.portotheme.com/media/wysiwyg/smartwave/porto/homepage/03/shop3_banner1.jpg"
                alt=""
              />
            </div>
            <div className="img_2_layer">
              <h2>Winter Fashion Trendss</h2>
              <h3 className="off">
                get up to 30% off
              </h3>
              <h3 className="onjackets">on Jackets</h3>
             

              <div className="shop_now">
                <h5 className="starting">
                  Starting At 
                </h5>
                <h5 className="price">
                  <sup>$</sup>199
                  <sup>99</sup>
                </h5>

              </div>
                <button>Shop Now</button> 
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
