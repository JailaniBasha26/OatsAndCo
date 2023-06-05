import React from "react";
import Logo from "../../Assests/logo.svg";
import CircleImage from "../../Assests/pattern1.svg";
import Leafs from "../../Assests/leafs.svg";
import SingleStem from "../../Assests/singlestem.svg";
import doubleStem from "../../Assests/doublestem.svg";
import Header from "../header/header";
// import HeaderClass from "../header/headerClass";
import Footer from "../footer/footer";
import { Carousel } from "primereact/carousel";
// import healthyFood from "../../Assests/healthyFood.svg";
// import dairyFree from "../../Assests/dairyFree.svg";
// import glutenFree from "../../Assests/glutenFree.svg";
// import vegetarian from "../../Assests/vegetarian.svg";
// import naturallySweetened from "../../Assests/naturallySweetened.svg";
import Gluten from "../../Assests/Gluten.svg";
import HealthyOrganic from "../../Assests/Healthy -Organic.svg";
import Vegan from "../../Assests/Vegan.svg";
import NaturallySweetend from "../../Assests/Naturally sweetend.svg";
import serving from "../../Assests/serving.svg";
import i01 from "../../Assests/menuItems/01.jpeg";
import i02 from "../../Assests/menuItems/02.jpeg";
import i03 from "../../Assests/menuItems/03.jpeg";
import i04 from "../../Assests/menuItems/04.jpeg";
import i05 from "../../Assests/menuItems/05.jpeg";
import i06 from "../../Assests/menuItems/06.jpeg";
import i07 from "../../Assests/menuItems/07.jpeg";
import i08 from "../../Assests/menuItems/08.jpeg";
import i12 from "../../Assests/menuItems/12.jpeg";
import bannerTest from "../../Assests/BannerTest.jpeg";

import banner2 from "../../Assests/banner2.jpeg";
import banner3 from "../../Assests/banner3.jpeg";

import healthIsWealth from "../../Assests/healthIsWealth.png";
// import SignatureBread1 from "../../Assests/menuItems/SignatureBreadUpdated1.jpg";
// import SignatureBread2 from "../../Assests/menuItems/SignatureBreadUpdated2.jpg";
// import SignatureBread3 from "../../Assests/menuItems/SignatureBreadUpdated3.jpg";

import SignatureBread1 from "../../Assests/menuItems/25.jpeg";
import SignatureBread2 from "../../Assests/menuItems/22.jpeg";
import SignatureBread3 from "../../Assests/menuItems/29.jpeg";

import Keywords from "../../Assests/keywords.jpeg";

// import images from "../../menuImagesData";
import { ProductService } from "../../menuImagesData";
import { Tooltip } from "primereact/tooltip";

import headerBottomImg1 from "../../Assests/headerBottomImg1.jpg";
import headerBottomImg2 from "../../Assests/headerBottomImg2.jpg";
import headerBottomImg3 from "../../Assests/headerBottomImg3.jpg";
import headerBottomImg4 from "../../Assests/headerBottomImg4.png";

import visitUsImage from "../../Assests/visitus.png";

// import Contact from "../contact/contact";
import { HashRouter, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";

import { Container, Row, Col } from "react-bootstrap";

import Aos from "aos";
import "aos/dist/aos.css";
import "./home.css";
import HeaderTest from "../header/headerTest";

let imagesArr = [],
  testArr = [],
  vv = "";

let tooltipVisible = false;
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselUrls: [i01, i02, i03, i04, i05],
      carouselMenuImgaes: [],
      testAttState: [],
      hoveredImg: "",
      banner2_3mobile: [banner2, banner3],
      // width: 0,
      // height: 0,
    };
    // this.tt = this.tt.bind(this);
    // this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount() {
    Aos.init({ duration: 2000 });
    // this.updateWindowDimensions();
    // window.addEventListener("resize", this.updateWindowDimensions);
  }

  // componentWillUnmount() {
  //   window.removeEventListener("resize", this.updateWindowDimensions);
  // }

  // updateWindowDimensions() {
  //   this.setState({ width: window.innerWidth, height: window.innerHeight });
  // }

  focus() {
    console.log(window.location.href, "%%");
  }

  bannerCarouselRender(banner) {
    return (
      <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
        <div className="mb-3">
          <img src={banner} alt={banner} className="w-6 shadow-2" />
        </div>
      </div>
    );
  }

  carouselRender(product) {
    // let hoveredImg = "";
    const { hoveredImg } = this.state;

    let imgName = hoveredImg.split("/");
    console.log(product, "*****", imgName);

    // let descCapitalize = product.title;
    // descCapitalize = descCapitalize.toLowerCase();
    // descCapitalize = descCapitalize
    //   .toLowerCase()
    //   .split(" ")
    //   .map((word) => {
    //     return word.charAt(0).toUpperCase() + word.slice(1);
    //   });
    // descCapitalize = descCapitalize.join(" ");

    let itemName = product.title;

    return (
      <div className="product-item">
        {product.img == imgName[4] && (
          <Tooltip target=".homePageCarouselImg" className="homePageTooltip">
            <div id="divheight">
              <div
                class="row row-equal"
                style={{ width: "200%", background: "white", padding: "6px" }}
              >
                <div
                  class="col-lg-8 col-md-4 col-sm-4 col-xs-12 col-equal"
                  style={{ position: "relative" }}
                >
                  <p className="homePageTooltipTitleP">
                    {itemName.toUpperCase()}
                  </p>
                </div>
                <div
                  class="col-lg-4 col-md-4 col-sm-4 col-xs-12 col-equal"
                  style={{ position: "relative" }}
                >
                  <img
                    src={`./images/${imgName[4]}`}
                    alt={product.img}
                    className="homePageCarouselImgTooltip"
                  />
                </div>
              </div>
            </div>
          </Tooltip>
        )}

        <div className="product-item-content">
          <div className="mb-3">
            <img
              src={`./images/${product.img}`}
              alt={product.img}
              className="homePageCarouselImg"
              onMouseOver={(e) => {
                this.setState({
                  hoveredImg: e.currentTarget.src,
                });
              }}
            />
          </div>
        </div>
      </div>
    );
  }

  componentWillMount() {
    const { carouselMenuImgaes } = this.state;
    imagesArr = [];
    // carouselMenuImgaes.map((i, idx) => {
    //   imagesArr.push(`./images/${i.imageName}`);
    // });

    ProductService.getProducts().then((data) => {
      // testArr.push(data.slice(0,7)]
      this.setState({
        testAttState: data,
      });
    });
  }

  render() {
    // console.log(imagesArr, "++");
    // imagesArr.sort();
    const { testAttState, hoveredImg, banner2_3mobile } = this.state;
    // console.log(width, "$$ STATE", height);

    let mgr = hoveredImg.split("/")[4];
    // let carouselScrollAndVisible = 4;
    // if (width <= 773) {
    //   console.log("$$ INSIDE -", width);
    //   carouselScrollAndVisible = 1;
    // }
    // console.log("$$ OUTSIDE -", width, "***", carouselScrollAndVisible);

    return (
      <div>
        <i class="fa fa-cutlery" aria-hidden="true"></i>
        <HeaderTest />
        <section className="section m wf-section">
          <div className="container">
            <div className="_12-columns">
              <div
                className="column desktop-5 mobile-12"
                style={{ marginTop: "-5%" }}
              >
                <center>
                  <img
                    src={healthIsWealth}
                    className="homePageHealthIsWealth"
                  />
                </center>
                <br />
                <p className="bannerText">
                  Welcome to our corner of the web, we share our passion for
                  delicious food that happens to be healthy organic,
                  gluten-free, naturally sweetened and nutrients.
                </p>

                <p className="bannerText">
                  Our food philosophy is to eat seasonal, whole foods and
                  maintain good portion control (everything in moderation). Here
                  you will find healthy food tasty and full of flavor.
                </p>
              </div>
              <div className="column desktop-2 mobile-0"></div>
              <div className="column desktop-5 mobile-12">
                <img
                  data-aos="zoon-in"
                  src={i01}
                  loading="lazy"
                  sizes="(max-width: 767px) 4vw, (max-width: 991px) 2vw, 4vw"
                  alt="Baja Cali Tacos"
                  className="bannerImg"
                />
                <img
                  src={doubleStem}
                  loading="lazy"
                  alt=""
                  className="shape squiggle bottom-left"
                  id="homeKeywordsBannerDoubleStem"
                />
                <img
                  src={Leafs}
                  loading="lazy"
                  alt=""
                  className="shape squiggle top-right"
                />
              </div>
            </div>
          </div>
        </section>

        <section class="section m wf-section" id="banner2_3web">
          <div class="container slide-up">
            <Row>
              <Col>
                <img
                  src={banner2}
                  loading="lazy"
                  alt="Cooking together"
                  data-aos="fade-right"
                />
              </Col>
              <Col>
                <img
                  src={banner3}
                  loading="lazy"
                  alt="Cooking together"
                  data-aos="fade-left"
                />
              </Col>
            </Row>
          </div>
        </section>

        <div className="homePageBannerCarouselMobile">
          <Carousel
            value={banner2_3mobile}
            numVisible={1}
            numScroll={1}
            circular
            itemTemplate={this.bannerCarouselRender.bind(this)}
          />
        </div>

        <section
          className="section wf-section"
          data-aos="fade-up"
          id="homeAboutUsSection"
        >
          <div className="container">
            <div className="_12-columns reverse slide-up">
              <div className="column desktop-5 mobile-12">
                <h2 className="heading l" id="homeAboutUsTitle">
                  WE BELIEVE HEALTH IS YOUR WEALTH
                </h2>
                <p className="paragraph">
                  All that we create is informed by these guiding touch points :
                  the most delightful food and drink offering a stylish life and
                  positive goals to Nourish your soul.
                </p>
                <center>
                  <a
                    href="#about"
                    className="button-wrapper small no-margin w-inline-block"
                    id="aboutInHomeUp"
                  >
                    <div className="panel pink">
                      <button>Read More</button>
                    </div>
                  </a>
                </center>
              </div>
              {/* <div className="column desktop-2 mobile-0"></div> */}
              <div
                className="column desktop-5 mobile-12"
                style={{ marginTop: "57px" }}
              >
                <img
                  src={i12}
                  loading="lazy"
                  // sizes="(max-width: 767px) 4vw, (max-width: 991px) 2vw, 4vw"
                  // alt="Jack Fruit tacos"
                  // style={{ height: "32em" }}
                  // className="healthIsOurWealthImg"
                  // data-aos="fade-left"
                  className="homePageHealthIsOurWealthImg"
                />
                <img
                  src={SingleStem}
                  loading="lazy"
                  alt=""
                  className="shape dots top-right"
                  id="homeAoutUsSingleStem"
                />
                <img
                  src={doubleStem}
                  loading="lazy"
                  alt=""
                  className="shape squiggle bottom-left-image"
                  id="homeAoutUsDoubleStem"
                />
              </div>
            </div>
          </div>
        </section>

        <section class="section no-padding wf-section" data-aos="fade-up">
          <div class="container wide" id="homePageGalleryMainDiv">
            <div className="homePageCarouselBrowser">
              <Carousel
                value={testAttState}
                numVisible={4}
                numScroll={4}
                circular
                itemTemplate={this.carouselRender.bind(this)}
                className="homePageMenuCarousel"
              />
            </div>

            <div className="homePageCarouselMobile">
              <Carousel
                value={testAttState}
                numVisible={1}
                numScroll={1}
                circular
                itemTemplate={this.carouselRender.bind(this)}
                className="homePageMenuCarousel"
              />
            </div>

            <center>
              <a
                href="#gallery"
                className="button-wrapper small no-margin w-inline-block"
                id="viewMenu"
              >
                <div className="panel pink" id="homePageViewGalleryBtnDiv">
                  <button>View Gallery</button>
                </div>
              </a>
            </center>
          </div>
        </section>

        <section class="section m wf-section" id="signatureBreadParentSection">
          <div class="container slide-up" id="signatureBreadParentDiv">
            <div class="_12-columns align-top">
              <div class="column desktop-4 mobile-12">
                <img
                  src={SignatureBread1}
                  loading="lazy"
                  alt="Cooking together"
                  className="signatureBread1RowImage"
                  data-aos="flip-left"
                />
                <div class="spacer _24"></div>
                <div class="text-center" id="signatureBreadTitleDiv">
                  <h2 className="signatureBreadTitle">
                    ORGANIC & GLUTEN-FREE ACAI BOWL
                  </h2>
                </div>
              </div>
              <div class="column desktop-4 mobile-12">
                <img
                  src={SignatureBread2}
                  loading="lazy"
                  alt="Vegetables"
                  className="signatureBread2RowImage"
                  data-aos="flip-up"
                />
                <div class="spacer _24"></div>
                <div class="text-center" id="signatureBreadTitleDiv">
                  <h2 className="signatureBread2Title">GRANOLA PARFAIT</h2>
                </div>
              </div>
              <div class="column desktop-4 mobile-12">
                <img
                  src={SignatureBread3}
                  loading="lazy"
                  alt="Happy friends"
                  className="signatureBreadRowImage"
                  data-aos="flip-right"
                />
                <div class="spacer _24"></div>
                <div class="text-center" id="signatureBreadTitleDiv">
                  <h2 className="signatureBread3Title">
                    POST WORKOUT SMOOTHIE BOWL
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}

export default Home;
