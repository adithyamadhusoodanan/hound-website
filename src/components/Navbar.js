import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo_black from "../assets/imgs/logo_black.png";
import logo_green from "../assets/imgs/logo_green.png";
import "./Navbar.css";

function Navbar(props) {
  var logoColor = props.logoColor;

  const [isOpen, setOpenCLose] = useState(false);

  useEffect(() => {
    // function openMenu(e) {
    console.log(isOpen);
    // e.preventDefault();
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector("nav");
    const menu = document.querySelector(".menu");
    const body = document.querySelector("body");
    // hamburger.classList.contains("close")
    // if (hamburger.classList.contains("close")) {
    //   setOpenCLose(true);
    // } else {
    //   setOpenCLose(false);
    // }

    if (isOpen == true) {
      hamburger.classList.add("close");
      nav.classList.add("reveal-nav");
      menu.classList.add("reveal-items");
      console.log("close");
      body.style.overflow = "hidden";
    } else {
      hamburger.classList.remove("close");
      nav.classList.remove("reveal-nav");
      menu.classList.remove("reveal-items");
      body.style.overflow = "auto";
    }
    // }
  }, [isOpen]);

  return (
    <header>
      <div className="nav-brand">
        <Link to="/">
          {logoColor === "black" ? (
            <img src={logo_black} alt="" />
          ) : (
            <img src={logo_green} alt="" />
          )}
        </Link>
      </div>
      <Link
        to="#"
        className="hamburger"
        onClick={(e) => {
          isOpen === true ? setOpenCLose(false) : setOpenCLose(true);
        }}
      ></Link>
      <nav>
        <ul className="menu">
          <li>
            <Link
              to="/"
              onClick={(e) => {
                isOpen === true ? setOpenCLose(false) : setOpenCLose(true);
              }}
              className="menu-item"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/citybike"
              onClick={(e) => {
                isOpen === true ? setOpenCLose(false) : setOpenCLose(true);
              }}
              className="menu-item"
            >
              E-Bikes
            </Link>
          </li>
          <li>
            <Link
              to="/comingsoon"
              onClick={(e) => {
                isOpen === true ? setOpenCLose(false) : setOpenCLose(true);
              }}
              className="menu-item"
            >
              Accessories
            </Link>
          </li>
          <li>
            <Link
              to="/comingsoon"
              onClick={(e) => {
                isOpen === true ? setOpenCLose(false) : setOpenCLose(true);
              }}
              className="menu-item"
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={(e) => {
                isOpen === true ? setOpenCLose(false) : setOpenCLose(true);
              }}
              className="menu-item"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={(e) => {
                isOpen === true ? setOpenCLose(false) : setOpenCLose(true);
              }}
              className="menu-item"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
    // <nav>
    //   <div className="nav-brand">
    //     <Link to="/">
    //       {logoColor === "black" ? (
    //         <img src={logo_black} alt="" />
    //       ) : (
    //         <img src={logo_green} alt="" />
    //       )}
    //     </Link>
    //   </div>
    //   <div className="hamburger-menu">
    //     <input id="menu__toggle" type="checkbox" />
    //     <label className="menu__btn" for="menu__toggle">
    //       <span></span>
    //     </label>

    //     <ul className="menu__box">
    //       <li>
    //         <Link className="menu__item" to="/">
    //           Home
    //         </Link>
    //       </li>
    //       <li>
    //         <Link className="menu__item" to="/about">
    //           E-Bikes
    //         </Link>
    //       </li>
    //       <li>
    //         <Link className="menu__item" to="/about">
    //           Accessories
    //         </Link>
    //       </li>
    //       <li>
    //         <Link className="menu__item" to="#">
    //           Blogs
    //         </Link>
    //       </li>
    //       <li>
    //         <Link className="menu__item" to="/about">
    //           About Us
    //         </Link>
    //       </li>
    //       <li>
    //         <Link className="menu__item" to="/team">
    //           Team
    //         </Link>
    //       </li>
    //       <li>
    //         <Link className="menu__item" to="contact">
    //           Contact Us
    //         </Link>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
  );
}

export default Navbar;
