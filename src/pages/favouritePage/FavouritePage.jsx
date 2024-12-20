import React from 'react'
import SideBar from '../../components/sideBar/SideBar'
import { AiOutlineShopping } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'

export default function FavouritePage() {
    return (
      <div className='favourite'>
            <SideBar />
            <div className="container">
                <h3>my wish list</h3>
                <div className="contain">
                    <div className="image">
                    <img
              src="https://m2.portotheme.com/media/catalog/product/cache/11458dcde882ed1dfb2833d935bf9253/s/h/shoes-16-2_2.jpeg"
              alt=""
            />
                </div>
                <div className="des">
                    <h6>Porto Left Sidebar</h6>
                    <p>$259.00</p>
                </div>
                </div>
                
                <textarea name="" id=""  rows="2" placeholder='Comment'></textarea>
            <div className="cart">
              <button type="submit">
                <AiOutlineShopping/>
                Add To Cart
              </button>
                </div>
                <div className="edits">
                <NavLink>Edit</NavLink>

                <NavLink>Remove</NavLink>
                </div>
                <div className="buttonss">
                    <button type="submit">update wishlist</button>
                    <button type="submit">share wishlist</button>
                    <button type="submit">add all to cart</button>

                </div>
            </div>
      </div>
      
  )
}
