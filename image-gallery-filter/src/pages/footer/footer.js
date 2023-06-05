import React from "react";
import { Col, Row } from "react-bootstrap";
import Logo from "../../Assests/logo.svg";
import LinedInLogo from "../../Assests/linkedin.svg";
import locationIcon from "../../Assests/locationicon.svg";
import phoneIconWhite from "../../Assests/phoneiconwhite.svg";
import emailIcon from "../../Assests/emailicon.svg";
import instagramIcon from "../../Assests/instagramicon.svg";
import facebookIcon from "../../Assests/facebookicon.svg";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import "./footer.css";
import emailjs from "emailjs-com";
import Newsletter from "../newsletter/newsletter";
// import { Toast } from "primereact/toast";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newLetterEmailId: "",
    };
  }

  newLetterSubmit() {
    emailjs
      .sendForm(
        "service_c8fdowb",
        "template_4a5zhbf",
        this.state.newLetterEmailId,
        "5Tr96XVNe21QxLxmO"
      )
      .then((res) => {
        //  toast.current.show({
        //     severity: "success",
        //     //   summary: "Info",
        //     detail: "Request for book a table is successfully sent!",
        //     life: 3000,
        //   });
        alert("YOYO");
      })
      .catch((err) => console.log(err, ">> ERR"));
  }

  render() {
    return (
      <div>
        {/* <Toast ref={toast} /> */}
        {/* <footer className="wf-section">
          <div className="green" id="customFooter">
            <div className="container">
              <Row style={{ width: "100%", display: "flex" }}>
                <Col
                  xl="5"
                  lg="5"
                  md="5"
                  sm="5"
                  xs="5"
                  style={{ width: "100%", marginTop: "11px" }}
                >
                  <a href="#" className="footer-logo w-inline-block">
                    <img src={Logo} loading="lazy" alt="Plantify logo" />
                  </a>
                </Col>
                <Col
                  xl="5"
                  lg="5"
                  md="5"
                  sm="5"
                  xs="5"
                  style={{ width: "100%", marginTop: "38px" }}
                >
                  <div className="social-links">
                    <a
                      href="https://www.facebook.com/profile.php?id=100089611772658"
                      target="_blank"
                      className="social-link w-inline-block"
                    >
                      <img
                        src="https://uploads-ssl.webflow.com/623a639d34ee04adef0721f8/623b3b2098ae817314ef5c5e_25-icon-facebook.svg"
                        loading="lazy"
                        alt="Facebook"
                        style={{ marginTop: "-6px" }}
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/oats-and-co-dubai-15877a248/"
                      target="_blank"
                      className="social-link w-inline-block"
                    >
                      <h2 className="linkedIn">in</h2>
                    </a>

                    <a
                      href="https://www.instagram.com/oatsandcodubai/"
                      target="_blank"
                      className="social-link w-inline-block"
                    >
                      <img
                        src="https://uploads-ssl.webflow.com/623a639d34ee04adef0721f8/623b3b2098ae81b5e6ef5c5d_27-icon-instagram.svg"
                        loading="lazy"
                        alt="Instagram"
                        style={{ marginTop: "-6px" }}
                      />
                    </a>
                  </div>
                </Col>
                <Col
                  xl="5"
                  lg="5"
                  md="5"
                  sm="5"
                  xs="5"
                  style={{ width: "100%", display: "flex", marginTop: "11px" }}
                >
                  <div className="footer-links">
                    <a href="/" className="footer-link">
                      Home
                    </a>
                  </div>
                  <div className="footer-links">
                    <a href="/menu" className="footer-link">
                      Menu
                    </a>
                  </div>
                  <div className="footer-links">
                    <a href="/menu" className="footer-link">
                      About
                    </a>
                  </div>
                  <div className="footer-links">
                    <a href="/contact" className="footer-link">
                      Contact
                    </a>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </footer> */}

        <footer class="wf-sectionFooter">
          <Newsletter />
          {/* <div class="section green no-padding">
            <div class="container">
              <div class="footer-cta text-light">
                <h2 class="heading l no-margin">
                  Come say <span class="italic">hello</span>
                </h2>
                <a
                  href="schedule.html"
                  class="button-wrapper primary no-margin w-inline-block"
                >
                  <div class="button peach">
                    <div>View weekly schedule</div>
                  </div>
                  <div class="button-shadow peach"></div>
                </a>
              </div>
              <div class="horizontal-line light no-margin"></div>
            </div>
          </div> */}
          <div
            class="section gray"
            style={{ paddingTop: "41px", paddingBottom: "75px" }}
          >
            <div class="container">
              <div class="_12-columns align-top">
                <div class="column desktop-4 tablet-12">
                  <a href="#" class="footer-logo w-inline-block">
                    <img src={Logo} loading="lazy" alt="Plantify logo" />
                  </a>
                  <div class="spacer _24"></div>
                  <div class="social-links">
                    <a
                      href="https://www.facebook.com/profile.php?id=100089611772658"
                      target="_blank"
                      class="social-link w-inline-block"
                    >
                      <img
                        src={facebookIcon}
                        loading="lazy"
                        alt="Facebook"
                        width="30px"
                        height="30px"
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/oats-and-co-dubai-15877a248/"
                      target="_blank"
                      className="social-link w-inline-block"
                    >
                      <img
                        src={LinedInLogo}
                        loading="lazy"
                        alt="Facebook"
                        // className="linkedIn"
                        width="30px"
                        height="30px"
                      />
                    </a>
                    <a
                      href="https://www.instagram.com/oatsandcodubai/"
                      target="_blank"
                      class="social-link w-inline-block"
                    >
                      <img
                        src={instagramIcon}
                        loading="lazy"
                        alt="Instagram"
                        width="30px"
                        height="30px"
                      />
                    </a>
                  </div>
                </div>

                {/* <div> */}
                <div
                  class="column desktop-0 tablet-4 mobile-12"
                  id="footerMenusDiv"
                >
                  <div class="footer-links">
                    <a href="#" class="footer-link" id="footerMenus">
                      Home
                    </a>
                  </div>
                </div>
                <div
                  class="column desktop-0 tablet-4 mobile-12"
                  id="footerMenusDiv"
                >
                  <div class="footer-links">
                    <a href="#about" class="footer-link" id="footerMenus">
                      About us
                    </a>
                  </div>
                </div>
                <div
                  class="column desktop-0 tablet-4 mobile-12"
                  id="footerMenusDiv"
                >
                  <div class="footer-links">
                    <a href="#menu" class="footer-link" id="footerMenus">
                      Menu
                    </a>
                  </div>
                </div>
                <div
                  class="column desktop-0 tablet-4 mobile-12"
                  id="footerMenusDiv"
                >
                  <div class="footer-links">
                    <a href="#gallery" class="footer-link" id="footerMenus">
                      Gallery
                    </a>
                  </div>
                </div>

                <div
                  class="column desktop-0 tablet-4 mobile-12"
                  id="footerMenusDiv"
                >
                  <div class="footer-links">
                    <a href="#contact" class="footer-link" id="footerMenus">
                      Contact us
                    </a>
                  </div>
                </div>

                <div
                  class="column desktop-0 tablet-4 mobile-12"
                  id="footerMenusDiv"
                >
                  <div class="footer-links">
                    <a href="#booktable" class="footer-link" id="footerMenus">
                      Book A Table
                    </a>
                  </div>
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
          <div class="sectionFooter gray">
            <div class="container">
              <div class="_12-columns align-top">
                <div class="column desktop-12 tablet-12">
                  <div className="footerDetailsWithMap">
                    <div
                      class="sectionFooter xs gray"
                      // style={{
                      //   marginTop: "-3%",
                      //   width: "100%",
                      // }}
                      id="footerContactDetails"
                    >
                      <div class="container" id="footerContactDetailsMainDiv">
                        <div class="_12-columns mobile-text-center">
                          <div class="column desktop-12 tablet-12 mobile-12">
                            <div class="column desktop-12 tablet-12 mobile-12">
                              <div class="footer-links">
                                <div className="footerContactDetails">
                                  <img
                                    src={phoneIconWhite}
                                    loading="lazy"
                                    alt="Facebook"
                                    className="linkedIn"
                                  />
                                  <a
                                    href="tel:+971505359409"
                                    class="footer-link"
                                  >
                                    (971) 505-359409
                                  </a>
                                </div>
                              </div>
                            </div>

                            <div class="column desktop-12 tablet-12 mobile-12">
                              <div class="footer-links">
                                <div className="footerContactDetails">
                                  <img
                                    src={emailIcon}
                                    loading="lazy"
                                    alt="Facebook"
                                    className="linkedIn"
                                  />
                                  <a class="footer-link">
                                    oatsandcodubai@gmail.com
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div class="column desktop-12 tablet-12 mobile-12">
                              <div class="footer-links">
                                <div className="footerContactDetails">
                                  <img
                                    src={locationIcon}
                                    loading="lazy"
                                    alt="Facebook"
                                    className="linkedIn"
                                  />
                                  <a class="footer-link">
                                    Orra Marina Tower, Shop 3, Dubai Marina
                                  </a>
                                </div>
                              </div>
                            </div>

                            {/* <div class="column desktop-12 tablet-12 mobile-12">
                              <div class="footer-links">
                                <div className="footerContactDetails">
                                  <h5>Subscribe to our Newsletter</h5>
                                  <p>Get 10% discount</p>
                                  <InputText
                                    value={this.state.newLetterEmailId}
                                    onChange={(e) =>
                                      this.setState({
                                        newLetterEmailId: e.target.value,
                                      })
                                    }
                                  />

                                  <Button
                                    icon="pi pi-check"
                                    className="newsLetterSubmitBtn"
                                  />
                                </div>
                              </div>
                            </div> */}

                            <input
                              type="text"
                              name="subscriptionCheck"
                              value="Newsletter subscription"
                              data-wait="Please wait..."
                              className="subscription"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="footerMap">
                      <div className="contact-item" style={{ height: "100%" }}>
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d903.4826628999771!2d55.1329434!3d25.0703395!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f1338d5c3c243%3A0x347c43dec1db3c14!2sOats%20%26%20CO.DUBAI!5e0!3m2!1sar!2sin!4v1678520284902!5m2!1sar!2sin"
                          width="100%"
                          height="auto"
                          loading="lazy"
                          referrerpolicy="no-referrer-when-downgrade"
                          className="googleMap"
                          style={{ height: "10em" }}
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="sectionFooter xs gray text-light"
            style={{ position: "relative" }}
          >
            {/* <div class="container"> */}
            {/* <div class="_12-columns mobile-text-center"> */}
            {/* <div class="column desktop-8 tablet-6 mobile-12"> */}
            {/* <div class="paragraph s"> */}
            {/* <center>© Oats & Co. 2023. All Rights Reserved.</center>
                    <p>
                      Designed and Developer by <b>Sprintcx</b>
                    </p> */}
            <Row style={{ width: "100%" }}>
              <Col xl={8} lg={8} md={8} sm={8} xs={8}>
                <p className="footerCopyRightsP">
                  © Oats & Co. 2023. All Rights Reserved.
                </p>
              </Col>
              <Col xl={4} lg={4} md={4} sm={4} xs={4}>
                <p className="footerSprintcxP">
                  Designed and Developer by <b>Sprintcx</b>
                </p>
              </Col>
            </Row>
            {/* </div> */}
            {/* </div> */}
            {/* </div> */}
            {/* </div> */}
          </div>
        </footer>
      </div>
    );
  }
}
export default Footer;
