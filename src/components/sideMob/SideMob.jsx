// import React, { useState, useEffect, useRef } from "react";
// import { NavLink } from "react-router-dom";

// import "react-dropdown/style.css";
// import { IoIosArrowDown, IoMdMenu } from "react-icons/io";
// export default function SideMob({ menuOpen, toggleMenu, setMenuOpen ,menuRef }) {
  
//     return (
//         <div className="sidemob">import React, { useState, useEffect, useRef } from "react";
// {menuOpen && (
//                 <div className="mobile-menu">
//                   <ul className={`mobile-active ${menuOpen ? "activeee" : ""}`}>
//                     <div className="head">
//                       <div className="Menu">
//                         <button onClick={toggleMenu}>
//                           <NavLink to={""}>
//                             <IoMdMenu />
//                             <p>Menu</p>
//                           </NavLink>
//                         </button>
//                       </div>
//                       <div className="Acco">
//                         <button>
//                           <NavLink to={"/login"}>Account</NavLink>
//                         </button>
//                       </div>
//                       <div className="setting">
//                         <button>
//                           <NavLink to={""}>Settings</NavLink>
//                         </button>
//                       </div>
//                     </div>
//                     <li>
//                             <NavLink to={""}>HOME</NavLink>
//                             <IoIosArrowDown/>
//                     </li>
//                     <li>
//                             <NavLink to={""}>CATEGORIES</NavLink>
//                             <IoIosArrowDown />
//                     </li>
//                     <li>
//                             <NavLink to={""}>PRODUCTS</NavLink>
//                             <IoIosArrowDown />
//                     </li>
//                     <li>
//                             <NavLink to={""}>PAGES</NavLink>
//                             <IoIosArrowDown />
//                     </li>
//                     <li>
//                             <NavLink to={""}>FEATURES</NavLink>
//                             <IoIosArrowDown />
//                     </li>
//                     <li>
//                             <NavLink to={""}>BLOG</NavLink>
                            
//                     </li>
//                   </ul>
//                 </div>
//               )}
//   </div> );}

import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

import "react-dropdown/style.css";
import { IoIosArrowDown, IoMdMenu } from "react-icons/io";

export default function SideMob({ menuOpen, toggleMenu, setMenuOpen, menuRef }) {
  const menuItems = [
    { name: "HOME", link: "" },
    { name: "CATEGORIES", link: "" },
    { name: "PRODUCTS", link: "" },
    { name: "PAGES", link: "" },
    { name: "FEATURES", link: "" },
    { name: "BLOG", link: "" },
  ];

  return (
    <div className="sidemob">
      {menuOpen && (
        <div className="mobile-menu">
          <ul className={`mobile-active ${menuOpen ? "activeee" : ""}`}>
            <div className="head">
              <div className="Menu">
                <button onClick={toggleMenu}>
                  <NavLink to={""}>
                    <IoMdMenu />
                    <p>Menu</p>
                  </NavLink>
                </button>
              </div>
              <div className="Acco">
                <button>
                  <NavLink to={"/login"}>Account</NavLink>
                </button>
              </div>
              <div className="setting">
                <button>
                  <NavLink to={""}>Settings</NavLink>
                </button>
              </div>
            </div>
            {menuItems.map((item, index) => (
              <li key={index}>
                <NavLink to={item.link}>{item.name}</NavLink>
                {index < menuItems.length - 1 && <IoIosArrowDown />}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
            
            