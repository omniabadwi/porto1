import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="footer px">
      <div className="subscribe">
        <div className="content">
          <h5>Subscribe newsletter</h5>
          <p>Get all the latest information on Events, Sales and Offers</p>
        </div>
        <div className="email">
          <input type="email" placeholder="Email Address" />
          <button type="submit">Subscribe</button>
        </div>
        <div className="icons">
          <FaFacebookF className="facebook"/>
          <FaTwitter className="twitter"/>
          <FaInstagram className="instagram"/>
        </div>
      </div>
      <div className="info">
              <div className="contact">
                  <h3>CONTACT INFO</h3>
          <ul className="contact-details">
      <li><strong>ADDRESS:</strong> <span>123 Street Name, City, England</span></li>
      <li> <strong>PHONE:</strong> <span>(123) 456-7890</span></li>
      <li>
         <strong>EMAIL:</strong> <span><a href="mailto:mail@example.com">mail@example.com</a></span>
      </li>
      <li> <strong>WORKING DAYS/HOURS:</strong> <span>Mon - Sun / 9:00 AM - 8:00 PM</span></li>
    </ul>
        </div>
        <div className="account">
          <h3>My Account</h3>
          <div className="para">
            <div className="col1">
              
          <p>About Us</p>
          <p>Contact Us</p>
          <p>My Account</p>
            </div>
            <div className="col2">

          <p>Order History</p>
          <p>Advanced Search</p>
            </div>
          </div>
        </div>
        <div className="features">
          <h3>Main Features</h3>
          <div className="features-list">
            <div className="list1">
<p>Super Fast WordPress Theme</p>
          <p>1st Fully working Ajax Theme</p>
          <p>36 Unique Shop Layouts</p>
          </div>
          <div className="list2">
<p>Powerful Admin Panel</p>
          <p>Mobile & Retina Optimized</p>
          </div>
         </div>
          
          
          
        </div>
      </div>

      <div className="footer_bottom">
        <p>
          ©Copyright 2024 by OMNIABADWI. All Rights Reserved.
              </p>
              
              <div className="visa">
                  <img src="https://m2.portotheme.com/media/wysiwyg/smartwave/porto/footer/shop2_payment_logo.png" alt="" />

              </div>
        
      </div>
    </footer>
  );
}
