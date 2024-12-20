import React, { useState, useEffect, useRef } from "react";
import Swipe from "../../components/swiper/Swipe";
import Footer from "../../components/footer/Footer";
import Banner from "../../components/banner/Banner";
import FooterBottom from "../../components/footerBottom/FooterBottom";
import Header from "../../components/header/Header";
import Categories from "../../components/categories/Categories";
import SideMob from "../../components/sideMob/SideMob";
import Navbar from "../../components/navbar/Navbar";
export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  // const { data, isFetching } = getAllProducts();
  
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      setMenuOpen
    ) {
      setMenuOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  
  const [showNavbar, setShowNavbar] = useState(false);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPosition = 200;

      if (scrollPosition >= triggerPosition) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);

 
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
  // if (isFetching) return <Loader />;
  return (
      <div className="home_page ">
      <SideMob menuOpen={menuOpen} menuRef={menuRef} setMenuOpen={setMenuOpen} toggleMenu={toggleMenu} />
      {showNavbar && (
        <div className="navy">
          <Navbar />
        </div>
      )}
      <div className="nav_homevv">
        <Swipe menuOpen={menuOpen} toggleMenu={toggleMenu}  />
      </div>
      <Categories />
      <Banner />
      <Header  />
      <FooterBottom />
      <Footer />
    </div>
  );
}
