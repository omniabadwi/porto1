import React, { useState } from "react";
import { IoMdArrowDropright } from 'react-icons/io'

export default function SideBar() {
    return (
      <>
      <div className='sidebar'>
          <ul>
              <li><IoMdArrowDropright />my account</li>
              <li><IoMdArrowDropright />my orders</li>
              <li><IoMdArrowDropright />my downloadable products</li>
              <li className='active'><IoMdArrowDropright />my wish list</li>
              <li><IoMdArrowDropright />address book</li>
              <li><IoMdArrowDropright />account information</li>
              <li><IoMdArrowDropright />stored payment method</li>
              <li><IoMdArrowDropright />my product reviews</li>
              <li><IoMdArrowDropright />newsletter subscripitions</li>
              
          </ul>
            </div>
  
      </>
  )
}
