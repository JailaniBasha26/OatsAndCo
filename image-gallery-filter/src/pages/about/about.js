import React from "react";
import Logo from "../../Assests/logo.svg";
import CircleImage from "../../Assests/pattern1.svg";
import Leafs from "../../Assests/leafs.svg";
import SingleStem from "../../Assests/singlestem.svg";
import doubleStem from "../../Assests/doublestem.svg";
import Header from "../header/header";
import Footer from "../footer/footer";
import healthyFood from "../../Assests/healthyFood.svg";
import dairyFree from "../../Assests/dairyFree.svg";
import glutenFree from "../../Assests/glutenFree.svg";
import vegetarian from "../../Assests/vegetarian.svg";
import naturallySweetened from "../../Assests/naturallySweetened.svg";
import serving from "../../Assests/serving.svg";
import i01 from "../../Assests/menuItems/01.jpeg";
import i02 from "../../Assests/menuItems/02.jpeg";
import i03 from "../../Assests/menuItems/03.jpeg";
import i04 from "../../Assests/menuItems/04.jpeg";
import i05 from "../../Assests/menuItems/05.jpeg";
import i06 from "../../Assests/menuItems/06.jpeg";
import aboutUsImg from "../../Assests/aboutUsImg.jpeg";

import headerBottomImg1 from "../../Assests/headerBottomImg1.jpg";
import headerBottomImg2 from "../../Assests/headerBottomImg2.jpg";
import headerBottomImg3 from "../../Assests/headerBottomImg3.jpg";
import headerBottomImg4 from "../../Assests/headerBottomImg4.png";

// import Contact from "../contact/contact";
import { HashRouter, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Aos from "aos";
import "aos/dist/aos.css";
import "./about.css";
import HeaderTest from "../header/headerTest";

class About extends React.Component {
  componentDidMount() {
    Aos.init({ duration: 1000 });
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  render() {
    return (
      <div>
        <i class="fa fa-cutlery" aria-hidden="true"></i>
        <HeaderTest />
        <div data-aos="fade-up">
          <section class="section m wf-section">
            <div class="container">
              <div class="_12-columns slide-up">
                <div
                  class="column desktop-6 tablet-8 mobile-12"
                  style={{ width: "74%" }}
                >
                  <div class="text-center">
                    <h1 class="heading xl" id="aboutUsPageTitle">
                      About us
                    </h1>
                    <div className="underline"></div>
                    {/* <div className="underline"></div>
                    <br />
                    <p className="callout">About the founder</p>
                    <p class="paragraph">
                      Our founder Eman Zouari has over ten years experience in
                      the world of food and beverage. In 2023, driven by her
                      passion for healthy living, she wanted to open a healthy
                      food and drink destination with a focus on fineness that
                      were not only stunning but delicious too.
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            class="section l small-top-padding wf-section"
            style={{ marginTop: "-2em" }}
          >
            <div class="container">
              <div class="_12-columns reverse slide-up">
                <div class="column desktop-5 mobile-12">
                  {/* <p className="callout">About the founder</p> */}
                  <p class="paragraph">
                    Our founder{" "}
                    <b>
                      <i>Eman Zouari</i>
                    </b>{" "}
                    has over ten years experience in the world of food and
                    beverage. In 2023, driven by her passion for healthy living,
                    she wanted to open a healthy food and drink destination with
                    a focus on fineness that were not only stunning but
                    delicious too.
                  </p>
                </div>
                <div class="column desktop-2 mobile-0"></div>
                <div class="column desktop-5 mobile-12">
                  {/* <div class="photo-container"> */}
                  <img
                    src={aboutUsImg}
                    loading="lazy"
                    sizes="(max-width: 767px) 4vw, (max-width: 991px) 2vw, 4vw"
                    alt="Plantify food"
                    // class="photo tall left"
                  />
                  {/* <div class="photo-shadow reverse"></div> */}
                  {/* </div> */}
                  {/* <div className="hover-rotate"> */}
                  {/* <img
                    src={CircleImage}
                    loading="lazy"
                    alt=""
                    class="shape dots top-right"
                  /> */}
                  {/* </div>
                  <div className="hover-rotate"> */}
                  {/* <img
                    src={Leafs}
                    loading="lazy"
                    alt=""
                    class="shape squiggle bottom-left-image"
                  /> */}
                  {/* </div> */}
                </div>
              </div>
            </div>
          </section>
          {/* <section class="section m wf-section">
            <div class="container">
              <div class="_12-columns slide-up">
                <div class="column desktop-8 tablet-12">
                  <div class="text-center">
                    <p class="callout dark">Our Mission</p>
                    <p class="quote">
                      We believe making <span class="italic">delicious</span>{" "}
                      and nourishing <span class="italic">plant-based</span>{" "}
                      food will help to create a{" "}
                      <span class="italic">healthier</span> and{" "}
                      <span class="italic">happier</span> planet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          {/* <section class="section m wf-section">
            <div class="container">
              <div class="_12-columns slide-up">
                <div class="column desktop-4 mobile-12">
                  <h2 class="heading l">
                    How it all <span class="italic">started</span>
                  </h2>
                  <p class="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Dolor consequat netus tristique at sem ipsum fames. Sed a
                    molestie enim ac sed.
                  </p>
                </div>
                <div class="column desktop-1 mobile-0"></div>
                <div class="column desktop-7 mobile-12">
                  <div class="image-wrapper">
                    <img
                      src={i02}
                      loading="lazy"
                      sizes="(max-width: 479px) 90vw, (max-width: 767px) 92vw, (max-width: 991px) 53vw, 51vw"
                      alt="Cooking together"
                      class="image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          {/* <section class="section m wf-section">
            <div class="container slide-up">
              <div class="_12-columns align-top">
                <div class="column desktop-6 tablet-8 mobile-12">
                  <div class="text-center">
                    <h2 class="heading l">
                      Our <span class="italic">values</span>
                    </h2>
                    <p class="paragraph">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Dolor consequat netus tristique at sem ipsum fames.
                    </p>
                  </div>
                  <div class="spacer _24"></div>
                </div>
              </div>
              <div class="_12-columns align-top">
                <div class="column desktop-4 mobile-12">
                  <img
                    src={i03}
                    loading="lazy"
                    alt="Cooking together"
                    className="aboutRowImage"
                  />
                  <div class="spacer _24"></div>
                  <div class="text-center">
                    <h3 class="heading xs">
                      Make good <span class="italic">food</span>
                    </h3>
                    <p class="paragraph">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      dolor consequat.
                    </p>
                  </div>
                </div>
                <div class="column desktop-4 mobile-12">
                  <img
                    src={i03}
                    loading="lazy"
                    alt="Vegetables"
                    className="aboutRowImage"
                  />
                  <div class="spacer _24"></div>
                  <div class="text-center">
                    <h3 class="heading xs">
                      Use 100% <span class="italic">plants</span>
                    </h3>
                    <p class="paragraph">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      dolor consequat.
                    </p>
                  </div>
                </div>
                <div class="column desktop-4 mobile-12">
                  <img
                    src={i03}
                    loading="lazy"
                    alt="Happy friends"
                    className="aboutRowImage"
                  />
                  <div class="spacer _24"></div>
                  <div class="text-center">
                    <h3 class="heading xs">
                      Be <span class="italic">kind</span>
                    </h3>
                    <p class="paragraph">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      dolor consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          {/* <section class="section m wf-section">
            <div class="container">
              <div class="_12-columns reverse slide-up">
                <div class="column desktop-4 mobile-12">
                  <h2 class="heading l">
                    Based in <span class="italic">sunny</span> Dubai
                  </h2>
                  <p class="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Dolor consequat netus tristique at sem ipsum fames. Sed a
                    molestie enim ac sed.
                  </p>
                </div>
                <div class="column desktop-1 mobile-0"></div>
                <div class="column desktop-7 mobile-12">
                  <div class="image-wrapper">
                    <img
                      src={i06}
                      loading="lazy"
                      sizes="(max-width: 479px) 90vw, (max-width: 767px) 92vw, (max-width: 991px) 53vw, 51vw"
                      alt="Duabi skyline"
                      class="image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          <Footer />
        </div>
      </div>
    );
  }
}

export default About;
