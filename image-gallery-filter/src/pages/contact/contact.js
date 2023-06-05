import React, { useState, useEffect, useRef } from "react";

import emailjs from "emailjs-com";
import { InputNumber } from "primereact/inputnumber";
// import { ToastContainer, toast } from "react-toastify";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { css } from "glamor";
import Header from "../header/header";
import Footer from "../footer/footer";
import Aos from "aos";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";
import HeaderTest from "../header/headerTest";
import "./contact.css";
//emailjs.send("service_a4w0dpm","template_f1po38w");
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import "primeicons/primeicons.css";

let num = "";
const Mailer = () => {
  const toast = useRef(null);
  const [name, setName] = useState("");
  const [phoneNumber, setPhomeNumber] = useState("");

  Aos.init({ duration: 1000 });
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  function sendEmail(e) {
    e.preventDefault();
    if (name == "" || phoneNumber == "") {
      toast.current.show({
        severity: "error",
        detail: "Please fill Name and Contact No.",
        life: 3000,
      });
    } else {
      emailjs
        .sendForm(
          "service_c8fdowb",
          "template_4a5zhbf",
          e.target,
          "5Tr96XVNe21QxLxmO"
        )
        .then((res) => {
          toast.current.show({
            severity: "success",
            detail: "Email send successfully!",
            life: 3000,
          });
        })
        .catch((err) => console.log(err, ">> ERR"));
    }
  }

  return (
    <div>
      {/* <Header /> */}
      <Toast ref={toast} />
      <HeaderTest />
      <div data-aos="fade-up">
        <section className="section m wf-section">
          <div className="container">
            <div className="_12-columns slide-up">
              <div className="column desktop-6 tablet-8 mobile-12">
                <div className="text-center">
                  <h1 className="heading xl" id="contactUsPageTitle">
                    Contact us
                  </h1>
                  <div className="underline"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section no-top-padding wf-section">
          <div className="container">
            <div className="_12-columns align-top slide-up">
              <div className="column desktop-5 tablet-6 mobile-12">
                <div className="contact-wrapper">
                  <center>
                    <h4 className="contactUsPageGetInTouch">GET IN TOUCH</h4>
                  </center>
                  <p>
                    <center className="conatcUsPageGetInTouchPara">
                      Have a question or comment?{" "}
                    </center>
                    Send us a message using the button below.
                  </p>

                  <div className="contact-item">
                    <p className="contact-parkingAvailable">
                      Parking Available
                    </p>
                  </div>

                  <div className="contact-item">
                    <p className="contact-contactUsBtn">
                      <Link
                        activeClass="active"
                        className="test9"
                        to="contactPageContactForm"
                        spy={true}
                        smooth={true}
                        duration={500}
                      >
                        Contact us
                      </Link>
                    </p>
                  </div>

                  <div className="contact-item" style={{ width: "100%" }}>
                    <a href="tel:+971505359409" className="contactUsPageTxt">
                      <i
                        className="pi pi-mobile"
                        style={{
                          fontSize: "1.5rem",
                          marginRight: "16px",
                          color: "#00dac2",
                        }}
                      ></i>
                      <div style={{ marginTop: "-3px" }}>(971) 505-359-409</div>
                    </a>
                  </div>

                  <div className="contact-item" style={{ width: "100%" }}>
                    <a href="tel:+04259795" className="contactUsPageTxt">
                      <i
                        className="pi pi-phone"
                        style={{
                          fontSize: "1.5rem",
                          marginRight: "16px",
                          color: "#00dac2",
                        }}
                      ></i>
                      <div style={{ marginTop: "-3px" }}>0 4 2 5 9 7 9 5</div>
                    </a>
                  </div>

                  <div className="contact-item" style={{ width: "100%" }}>
                    <a href="tel:+971504318678" className="contactUsPageTxt">
                      <i
                        className="pi pi-whatsapp"
                        style={{
                          fontSize: "1.5rem",
                          marginRight: "16px",
                          color: "#00dac2",
                        }}
                      ></i>
                      <div style={{ marginTop: "-3px" }}>(971) 50-431-8678</div>
                    </a>
                  </div>

                  <div className="contact-item" style={{ width: "100%" }}>
                    <a
                      className="contactUsPageTxt"
                      href="https://www.instagram.com/oatsandcodubai/"
                    >
                      <i
                        className="pi pi-instagram"
                        style={{
                          fontSize: "1.5rem",
                          marginRight: "16px",
                          color: "#00dac2",
                        }}
                      ></i>
                      <div style={{ marginTop: "-3px" }}>oatsandcodubai</div>
                    </a>
                  </div>

                  <div className="contact-item" style={{ width: "100%" }}>
                    <a
                      className="contactUsPageTxt"
                      href="https://www.facebook.com/profile.php?id=100089611772658"
                    >
                      <i
                        className="pi pi-facebook"
                        style={{
                          fontSize: "1.5rem",
                          marginRight: "16px",
                          color: "#00dac2",
                        }}
                      ></i>
                      <div style={{ marginTop: "-3px" }}>oatsandcodubai</div>
                    </a>
                  </div>

                  <div className="contact-item" style={{ width: "100%" }}>
                    <a className="contactUsPageTxt">
                      <i
                        className="pi pi-clock"
                        style={{
                          fontSize: "1.5rem",
                          marginRight: "16px",
                          color: "#00dac2",
                        }}
                      ></i>
                      <div style={{ marginTop: "-3px" }}>
                        Eveyday from 8:00AM to 1:00AM
                      </div>
                    </a>
                  </div>

                  <div className="contact-item" style={{ width: "100%" }}>
                    <a className="contactUsPageTxt">
                      <i
                        className="pi pi-map-marker"
                        style={{
                          fontSize: "1.5rem",
                          marginRight: "16px",
                          color: "#00dac2",
                        }}
                      ></i>
                      <div style={{ marginTop: "-3px", textAlign: "initial" }}>
                        Orra Marina Tower, Shop 3, Dubai Marina
                      </div>
                    </a>
                  </div>

                  {/* ////// */}

                  {/* <div className="contact-item">
                    <p className="contact-subhead">Timings</p>
                    <a className="contactUsPageTxt">
                      Eveyday from 8:00AM to 1:00AM
                    </a>
                  </div>

                  <div className="contact-item">
                    <p className="contact-subhead">Location</p>
                    <a className="contactUsPageTxt">
                      Orra Marina Tower, Shop 3, Dubai Marina
                    </a>
                  </div> */}

                  {/* <div className="contact-item">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d903.4826628999771!2d55.1329434!3d25.0703395!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f1338d5c3c243%3A0x347c43dec1db3c14!2sOats%20%26%20CO.DUBAI!5e0!3m2!1sar!2sin!4v1678520284902!5m2!1sar!2sin"
                      width="100%"
                      height="auto"
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                      className="googleMap"
                    ></iframe>
                  </div> */}

                  {/* <div className="contact-item">
                <p className="contact-subhead">Email</p>
                <a href="mailto:hola@plantbased.com">hola@plantify.com</a>
              </div> */}

                  {/* <div className="contact-item">
                <p className="contact-subhead">Social</p>
                <a href="https://www.instagram.com/" target="_blank">
                  @plantify
                </a>
              </div> */}
                </div>
              </div>
              <div className="column desktop-1 tablet-0"></div>
              <div
                className="column desktop-6 mobile-12"
                id="contactPageContactForm"
              >
                <div className="w-form" style={{ marginTop: "62px" }}>
                  <form
                    id="wf-form-Contact-Form"
                    name="wf-form-Contact-Form"
                    data-name="Contact Form"
                    method="get"
                    onSubmit={sendEmail}
                  >
                    <div className="field-block">
                      <label
                        for="field"
                        className="field-label"
                        style={{ display: "flex", marginBottom: "-11px" }}
                      >
                        Name <p style={{ color: "red" }}>*</p>
                      </label>
                      <input
                        type="text"
                        className="form-input w-input"
                        maxlength="256"
                        name="name"
                        data-name="Name"
                        placeholder=""
                        id="field"
                        required=""
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="field-block">
                      <label for="Email" className="field-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-input w-input"
                        maxlength="256"
                        name="email"
                        data-name="Email"
                        placeholder=""
                        id="Email"
                        required=""
                      />
                    </div>
                    <div className="field-block">
                      <label
                        for="Email"
                        className="field-label"
                        style={{ display: "flex", marginBottom: "-11px" }}
                      >
                        Contact No. <p style={{ color: "red" }}>*</p>
                      </label>
                      <input
                        type="tel"
                        className="form-input w-input"
                        name="number"
                        data-name="number"
                        placeholder=""
                        id="number"
                        required=""
                        onChange={(e) => setPhomeNumber(e.target.value)}
                      />
                      {/* <InputNumber
                      id="withoutgrouping"
                      className="numberTextBox"
                      value={num}
                      onValueChange={(e) => (num = e.value)}
                      mode="decimal"
                      useGrouping={false}
                      name="number"
                    /> */}
                    </div>
                    <div className="field-block">
                      <label for="Message" className="field-label">
                        Message
                      </label>
                      <textarea
                        id="Message"
                        name="message"
                        maxlength="5000"
                        data-name="Message"
                        placeholder=""
                        className="form-input text-area w-input"
                      ></textarea>
                    </div>

                    <center>
                      <input
                        type="submit"
                        value="Submit"
                        data-wait="Please wait..."
                        className="button small form w-button"
                      />
                    </center>

                    {/* <input
                      type="text"
                      name="new"
                      value="Newsletter subscription"
                      data-wait="Please wait..."
                      className="subscription"
                    /> */}

                    <input
                      name="subscriptionCheck"
                      value="contact request"
                      className="subscriptionInputHidden"
                    />
                  </form>
                  <div className="form-success w-form-done">
                    <div>Thank you! Your submission has been received!</div>
                  </div>
                  <div className="form-error w-form-fail">
                    <div>
                      Oops! Something went wrong while submitting the form.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
        {/* <script
        src="../d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c814f2.js?site=623a639d34ee04adef0721f8"
        type="text/javascript"
        integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
        crossorigin="anonymous"
      ></script>
      <script
        src="../uploads-ssl.webflow.com/623a639d34ee04adef0721f8/js/webflow.1b007a19c.js"
        type="text/javascript"
      ></script> */}
      </div>
    </div>
  );
};

export default Mailer;
