import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./Bike.css";

function CitySport() {
  return (
    <div>
      <div className="citysport">
        <div className="bikeLanding">
          <Navbar />
          <div className="bikeSwitch">
            <Link to="/citysport"> <strong>N1</strong></Link>
            <Link to="/citybike">N2</Link>
          </div>
          <div class="block1">
            <div class="text-container1">
              <h1 class="h-primary">
                N1 - Designed for the Urban thrill seeker
              </h1>
              <p class="text">
                Hound N1 is an extremely lightweight race-inspired e-bike. It
                features an intelligent pedal assist system and is built on an
                aerospace grade aluminum frame. It is packed with
                high-performance parts powered by a rear hub motor drive.
              </p>
            </div>
            <br/>
            <div class="image-container1">
              <img
                class="image1"
                src={require("../assets/imgs/n1/n1.png")}
                alt=""
              />
              <img
                src={require("../assets/imgs/n1/rb.png")}
                alt=""
                class="image2"
              />
            </div>
          </div>
        </div>

        {/* <div class="color-scroll">
          <p>
            <span class="swipe">Swipe</span> <span class="scroll">Scroll</span>{" "}
            for more colors
          </p>
        </div> */}
        {/* <!-- BLOCK 2 --> */}
        <div class="block1 block2">
          <div class="text-container1 text-container2">
            <h1 class="h-primary h2">Light up the road</h1>
            <h2 class="h-secondary">Integrated lighting system</h2>
            <p class="text text2">
              Hound bikes come with a powerful, dual beam headlight and
              taillight with break light, built in to make urban commute easier
              and safer.
            </p>
          </div>

          <div class="image-container1">
            <img
              class="image1 image3"
              src={require("../assets/imgs/n1/Headlights 1.png")}
              alt=""
            />
            {/* <div class="h-line"></div>
            <div class="v-line h-line">
              <div class="line-dot"></div>
            </div> */}
          </div>
        </div>

        {/* <!-- BLOCK 3 --> */}
        <div class="block3">
          <div class="text-container3">
            <h1 class="h-primary h3">Security at your fingertips</h1>
            <p class="h-secondary h3">24/7 Connected Anti -theft system</p>
            <p class="text h3 t1">
              The Hound IOT system in the bike allows it to be always connected
              to the internet, alerts you of any suspicious activity and lets
              you track the bike in real time.
            </p>
          </div>
          <div class="image-container-city">
            <img
              src={require("../assets/imgs/n1/Front and headlight 4 1.png")}
              alt=""
              class="battery1"
            />
            {/* <div class="h"></div>
            <div class="v1">
              <div class="d1"></div>
            </div> */}
          </div>
        </div>

        {/* <!-- BLOCK 4 --> */}
        <div class="block1 block4">
          <div class="image-container1">
            <img
              class="image4"
              src={require("../assets/imgs/n1/Battery-11 2.png")}
              alt=""
            />
            {/* <div class="h-line h-line2"></div>
            <div class="v-line h-line v-line2">
              <div class="line-dot line-dot2"></div>
            </div> */}
          </div>

          <div class="text-container1 text-container2 text-container4">
            <div class="h-primary">Power in your hands </div>
            <div class="h-secondary">Detachable battery pack </div>
            <div class="text t5">
              The hound designed removable battery pack is easy to charge, on
              your kitchen counter or your desk.
            </div>
          </div>
        </div>

        {/* <!-- BLOCK 5 --> */}
        <div class="block1 block5">
          <div class="image-container1 image-container5">
            <img
              src={require("../assets/imgs/n1/Belt drive 1 (2).png")}
              alt=""
              class="image5"
            />
            {/* <!-- <img src="./assets/imgs/n1/Handlebar 3.png" alt=""> --> */}
            {/* <div class="h-line h-line5"></div>
            <div class="v-line h-line v-line5">
              <div class="line-dot line-dot5"></div>
            </div> */}
          </div>
          <div class="text-container1 text-container5">
            <div class="h-primary h5">Shake off the rust </div>
            <div class="h-secondary">Long-lasting Carbon fibre belt drive</div>
            <div class="text t5">
              Hound uses carbon fibre belt drive to ensure a low maintenance,
              smooth and hassle free ride experience.
            </div>
          </div>
        </div>

        {/* <!-- BLOCK 6 --> */}
        <div class="block1 block6">
          <div class="image-container1">
            <img
              src={require("../assets/imgs/n1/Handlebar 3.png")}
              alt=""
              class="image3 image6"
            />
            {/* <div class="h-line h-line6"></div>
            <div class="v-line h-line v-line6">
              <div class="line-dot line-dot6"></div>
            </div> */}
          </div>
          <div class="text-container1 text-container6">
            <div class="h-primary h6">Internal Cable Routing </div>
            <div class="h-secondary">
              Concealed cables for a clean appearance{" "}
            </div>
            <div class="text t5">
              Hound internal cables extend cable life by minimizing the
              day-to-day hassles caused by wire interference – thus, increasing
              the efficiency of the bike.
            </div>
          </div>
        </div>

        {/* <!-- BLOCK 7 --> */}
        <div class="block1 block7">
          <div class="image-container1">
            <img
              src={require("../assets/imgs/n1/grip.png")}
              alt=""
              class="image3 image7"
            />
            {/* <div class="h-line h-line7"></div>
            <div class="v-line h-line v-line7">
              <div class="line-dot line-dot7"></div>
            </div> */}
          </div>
          <div class="text-container1 text-container2 text-container7">
            <div class="h-primary h2 h6 h7">Great grip for your feet</div>
            <div class="h-secondary">Clipless + Platform pedal system</div>
            <div class="text t5">
              The Hound pedals have removable studs, are broader offering a
              larger surface area, enhancing grip and reducing slippage.
            </div>
          </div>
        </div>

        {/* <!-- FULL DENT IMAGE --> */}
        <div class="full-dent">
          <img src={require("../assets/imgs/n1/full_det.png")} alt="" />
        </div>

        {/* <!--SPECS--> */}

        <div class="specs">
          <div class="h-primary s1">Specs</div>
          <div class="table">
            <table class="list">
              <tr>
                <td class="keys">Power</td>
                <td class="values">250 W</td>
              </tr>
              <tr>
                <td class="keys">Max Torque</td>
                <td class="values">45 Nm</td>
              </tr>
              <tr>
                <td class="keys">Max Speed</td>
                <td class="values">25 Kmph</td>
              </tr>
              <tr>
                <td class="keys">Lights</td>
                <td class="values">
                  Automobile grade Integrated with turn indicators
                </td>
              </tr>
              <tr>
                <td class="keys">Wheels</td>
                <td class="values">700 c</td>
              </tr>
              <tr>
                <td class="keys">Battery</td>
                <td class="values">Lithium Ion NMC 36V 10.5 ah</td>
              </tr>
              {/*
              <tr>
                <td class="keys">Suspension</td>
                <td class="values">Non</td>
              </tr>
              */}
              <tr>
                <td class="keys">Frame material</td>
                <td class="values">Alloy 6061</td>
              </tr>
              <tr>
                <td class="keys">Riding stance</td>
                <td class="values">Sports 45</td>
              </tr>
              <tr>
                <td class="keys">Drive system</td>
                <td class="values">Gates Carbon Belt Drive</td>
              </tr>
{/*
              <tr>
                <td class="keys">Gear Ratio</td>
                <td class="values">2.89</td>
              </tr>
*/}
              <tr>
                <td class="keys">Seats</td>
                <td class="values">Sports Short Nose (Light Weight)</td>
              </tr>
              <tr>
                <td class="keys">Seat Post</td>
                <td class="values">Rigid, Alloy and Aero Deisgn</td>
              </tr>
              <tr>
                <td class="keys">Cable Routing</td>
                <td class="values">Fully internal</td>
              </tr>
              <tr>
                <td class="keys">Brakes</td>
                <td class="values">Mechanical Disc</td>
              </tr>
              <tr>
                <td>Range</td>
                <td class="values">60 - 90 km</td>
              </tr>
              <tr>
                <td class="keys">Pedals</td>
                <td class="values">
                  Dual - one side clipless & Studded Platform Alloy
                </td>
              </tr>
{/*
              <tr>
                <td class="keys">Max Length</td>
                <td class="values">Max Torque</td>
              </tr>
              <tr>
                <td class="keys">Wheelbase</td>
                <td class="values">Max Torque</td>
              </tr>
              <tr>
                <td class="keys">Max Width</td>
                <td class="values">Max Torque</td>
              </tr>
              */}
              <tr>
                <td class="keys">Weight</td>
                <td class="values">16 KG</td>
              </tr>
            </table>
          </div>
        </div>

        {/* <!-- DISCOVER --> */}
        <div class="discover">
          <div class="discover-image">
            <img
              class="imageA"
              src={require("../assets/imgs/n1/Background (2).png")}
              alt=""
            />
            <img
              src={require("../assets/imgs/n1/Background (3).png")}
              alt=""
              class="imageB"
            />
          </div>
          <div class="text-container1 text-container8">
            <div class="h-primary h8">Discover the N1</div>
            <div class="text t5">
              Every bike we build is thoughtfully engineered with Human Sense at
              its core.
            </div>
            <button class="btn">
              <a href="#">Know More</a>
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default CitySport;
