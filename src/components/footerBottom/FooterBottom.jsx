import React from "react";
import { IoReturnUpBackOutline } from "react-icons/io5";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdOutlineHeadsetMic, MdPayment } from "react-icons/md";

export default function FooterBottom() {
  return (
    <div className="footer_bottom py">
      <div className="solid">

          <div className="customer">
              <MdOutlineHeadsetMic/>
        <h3>CUSTOMER SUPPORT</h3>
        <h6>Need Assistence?</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
          vestibulum magna, et dapib.
        </p>
      </div>
          <div className="payment">
              <MdPayment/>
        <h3>SECURED PAYMENT</h3>
        <h6>Safe & Fast</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
          vestibulum magna, et dapibus lacus. Lorem ipsum dolor sit amet.
        </p>
      </div>
          <div className="returns">
              <IoReturnUpBackOutline/>
        <h3>FREE RETURNS</h3>
        <h6>Easy & Free</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
          vestibulum magna, et dapib.
        </p>
      </div>
          <div className="shipping">
              <LiaShippingFastSolid/>
        <h3>FREE SHIPPING</h3>
        <h6>On Orders Over $50</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
          vestibulum magna, et dapib.
        </p>
      </div>
      </div>
    </div>
  );
}
