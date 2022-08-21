import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires Link loader
import { Carousel } from "react-responsive-carousel";
import "./Home.css";
import Footer from "../components/Footer";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import "./Contact.css";

function Home() {
  return (
    <div>
      <div className="homeLanding">
        <Navbar logoColor="black" />
        <div className="carousel-landing">
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            interval={3000}
            showArrows={false}
            showThumbs={false}
            showStatus={false}
          >
            <div>
              <img src={require("../assets/imgs/bg1.png")} alt="" />
            </div>
            <div>
              <img src={require("../assets/imgs/bg2.png")} alt="" />
            </div>
          </Carousel>
        </div>
        <div class="sideline">
          <p>Powered by Human Sense</p>
        </div>
        <div class="messageBox">
          <div class="messageBoxContainer" id="msg1">
            <p>
              Be a part of the future of urban mobility and the first to 
              get your hands on a feature-loaded Hound e-bike.
            </p>

             <Popup
    trigger={<button className="button" class="btn"> <Link to="#"> Join the list now </Link> </button>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>

       <div class="contact-right-cont">
          <div class="form-containter">
            <h3>Reach out to us</h3>
            <div class="message_box"></div>
            <form name="contactForm" netlify netlify-honeypot="bot-field" method="post" action="">
              <div id="contact_name">
                <div id="firstN">
                  <label for="first_name">
                    First Name <span></span>
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    name="firstname"
                    required
                  />
                </div>
                <div>
                  <label for="second_name">
                    Last Name <span></span>{" "}
                  </label>
                  <input
                    type="text"
                    id="second_name"
                    name="secondname"
                    required
                  />
                </div>
              </div>
              <div>
                <label for="email">
                  Business Email <span></span>
                </label>
                <input type="email" id="email" name="email" required />
              </div>

              <br />

              <label for="number">
                Phone Number <span></span>
              </label>
              <input type="tel" id="number" name="number" required />
          
         <div className="actions">
          <button type="submit" class="btn contact-btn"
            className="button"
            onClick={() => {
              console.log('modal closed ');
              close();
            }}
          >
            <p>Enter</p>
          </button>
        </div>

            </form>
          </div>
        </div>

        
      </div>
    )}
  </Popup>
          </div>
        </div>
      </div>

      <div class="bikesMain">
        <div class="bikesTitle">
          <h1>
            Powered by <br />
            Human Sense
          </h1>
        </div>
        <div class="bikeSplitContainer">
          <div class="bikeCard" id="citybike">
            <div class="cardImg">
              <Link to="">
                <img src={require("../assets/imgs/rb_bg.png")} alt="" />
              </Link>
            </div>
            <div class="cardContent">
              <h1>N1</h1>
              <p>
                Hound N1 is an extremely lightweight race-inspired e-bike. Built
                over an aerodynamically superior aerospace grade aluminum frame, it’s
                packed with high-performance parts powered by a single-speed carbon belt drive system. The
                perfect ride for thrill seekers.
              </p>
              <button class="btn bikes-btn">
                <Link to="/citysport"> know more </Link>
              </button>
            </div>
          </div>
          <div class="bikeCard" id="citybike">
            <div class="cardImg">
              <Link to="">
                <img src={require("../assets/imgs/cb_bg.png")} alt="" />
              </Link>
            </div>
            <div class="cardContent">
              <h1>N2</h1>
              <p>
                Hound N2 is a lightweight e-bike that’s effortlessly
                maneuverable through the city. Its ergonomic designed seat and
                handle-bar offers comfort for the long haul. The aluminium alloy
                frame and high-torque rear hub motor with a single-speed
                carbon belt drive system make it perfect for everyday urban
                commute.
              </p>
              <button class="btn bikes-btn">
                <Link to="/citybike"> know more </Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- indicator --> */}


      <div class="indicator">
        <div class="indicator-img">
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            interval={3000}
            showArrows={false}
            showThumbs={false}
            showStatus={false}
          >
            <div>
              <img src={require("../assets/imgs/Indicator both sides 3 2.png")} alt="" />
            </div>
             <div>
              <img src={require("../assets/imgs/bg2.png")} alt="" />
            </div>
            <div>
              <img src={require("../assets/imgs/bg3.png")} alt="" />
            </div>
          </Carousel>
        </div>
        <div class="indicator-content">
          <h1>Navigate with ease</h1>
                        <br/>
          <h2>Built-in turn indicators</h2>
          <div id="indicator-text">
            The high density of traffic leaves no room for hand signals. So it
            only made Human Sense to design built-in turn indicators to make
            city navigation easier and safer.
          </div>
        </div>
      </div>

      {/* <!-- Image Gallery --> */}

      <div class="galleryContainer">
        <div class="galleryItem">
          <img src={require("../assets/imgs/gallery/gallery_01.jpg")} className="gallery1" alt="" />
        </div>
        <div class="galleryItem">
          <img src={require("../assets/imgs/gallery/gallery_02.jpg")} className="gallery2" alt="" />
        </div>
        <div class="galleryItem">
          <img src={require("../assets/imgs/gallery/gallery_03.jpg")} alt="" />
        </div>
        <div class="galleryItem">
          <img src={require("../assets/imgs/gallery/gallery_04.jpg")} alt="" />
        </div>
        <div class="galleryItem">
          <img src={require("../assets/imgs/gallery/gallery_05.jpg")} alt="" />
        </div>
        <div class="galleryItem">
          <img src={require("../assets/imgs/gallery/gallery_06.jpg")} alt="" />
        </div>
        <div class="galleryItem">
          <img src={require("../assets/imgs/gallery/gallery_07.jpg")} alt="" />
        </div>
        <div class="galleryItem">
          <img src={require("../assets/imgs/gallery/gallery_08.png")} alt="" />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
