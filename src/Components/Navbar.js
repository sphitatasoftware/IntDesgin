import React, { useState } from "react";
import "./Navbar.css";
import{Link} from"react-router-dom"
import { GiTrophyCup } from "react-icons/gi";
function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <>
   
    
    <nav className="nav">
   
      
      <h1 className="logodesgin"> Sidx Desgin Solutions<GiTrophyCup/></h1>
      
      <ul className={active}>
        <li className="nav__item">
          <Link to="/" className="nav__link">
            Home
          </Link>
        </li>
        <li className="nav__item">
          <Link to="aboutus" className="nav__link">
            AboutUs
          </Link>
        </li>
        <li className="nav__item">
        <Link to="portfolio" className="nav__link">
            Portfolio
          </Link>
        </li>
        <li className="nav__item">
          <Link to="test" className="nav__link">
            Testimonials
          </Link>
        </li>
        <li className="nav__item">
          <Link to="contact" className="nav__link">
            ContactUs
          </Link>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
   
    </>
    
  );
}

export default Navbar;