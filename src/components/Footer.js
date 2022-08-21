import React from "react";
import { Link } from "react-router-dom";
import ytIcon from "../assets/imgs/icons/youtube.svg";
import fbIcon from "../assets/imgs/icons/facebook.svg";
import igIcon from "../assets/imgs/icons/instagram.svg";
import "./Footer.css";

function Footer() {
  return (
    <div>
      {" "}
      <footer class="footer">
        <div class="footer-logo">
          <img
            id="footer-log"
            src={require("../assets/imgs/logo_green.png")}
            alt=""
          />
          <div class="footer-socials">
            <p>Follow us on</p>
            <div class="icons-cont">
              <a href="https://www.facebook.com/houndelectric/" target="_blank" rel="noreferrer">
                <img src={fbIcon} alt="" />
              </a>
              <a href="https://www.instagram.com/hound.mobility/" target="_blank" rel="noreferrer">
                <img src={igIcon} alt="" />
              </a>
            </div>
          </div>
        </div>
        {/* <!-- <div class="footer-item-container"> --> */}
        <div class="footer-item">
          <h1>Company</h1>
          <Link to="/about">About Us</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
        <div class="footer-item">
          <h1>Products</h1>
          <Link to="/citysport">N1</Link>
          <Link to="/citybike">N2</Link>
        </div>
        {/* <!-- </div> --> */}
      </footer>
    </div>
  );
}

export default Footer;
