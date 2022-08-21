import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./ComingSoon.css";

function ComingSoon() {
  return (
    <div>
      <div class="comingSoon">
        <Navbar />
        {/* <!-- <img src="./assets//vids/Hound-2.gisf" alt="Hound Mobility Coming Soon" /> --> */}
        <p className="underConstruction">
          Sorry for the inconvienience! This page is under construction. &nbsp;
          <Link to="/">Click </Link> &nbsp; to go back home
        </p>
        <div class="form_container">
          <form name="submit-to-google-sheet">
            <p for="">Get in touch</p>
            <div class="inputField">
              <input
                autocomplete="off"
                name="email"
                id="emailID"
                type="email"
                placeholder="Email"
                required
              />
              <button class="f-btn" type="submit" onclick="ValidateEmail()">
                <img src={require("../assets/imgs/icons/sub.png")} alt="" />
              </button>
            </div>
          </form>
          <div class="thanks" style={{ display: "none" }}>
            <p>Thank you. We will be in touch with you.</p>
          </div>
          <div class="error" style={{ display: "none" }}>
            <p>Enter a valid email ID</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComingSoon;
