import React, { useState, useEffect, useRef } from "react";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import emailjs from "emailjs-com";
import { InputNumber } from "primereact/inputnumber";
// import { ToastContainer, toast } from "react-toastify";
import { Toast } from "primereact/toast";

import { css } from "glamor";
import Header from "../header/header";
import Footer from "../footer/footer";
import Aos from "aos";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";
import HeaderTest from "../header/headerTest";
import "./bookTable.css";
//emailjs.send("service_a4w0dpm","template_f1po38w");
import { Container, Row, Col } from "react-bootstrap";

let num = "";
const noOfGuestOption = [
  { name: "1", code: "1" },
  { name: "2", code: "2" },
  { name: "3", code: "3" },
  { name: "4", code: "4" },
  { name: "5", code: "5" },
  { name: "5+", code: "6+" },
];

const BookTable = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhomeNumber] = useState("");
  const [noOfGuest, setNoOfGuest] = useState(noOfGuestOption[0]);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const toast = useRef(null);

  Aos.init({ duration: 1000 });
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  function sendEmail(e) {
    e.preventDefault();

    if (name == "" || phoneNumber == "" || date == null || time == null) {
      toast.current.show({
        severity: "error",
        detail: "Please fill the mandatory fields",
        life: 3000,
      });
    } else {
      emailjs
        .sendForm(
          "service_c8fdowb",
          "template_bdyikgq",
          e.target,
          "5Tr96XVNe21QxLxmO"
        )
        .then((res) => {
          toast.current.show({
            severity: "success",
            detail: "Request for book a table is successfully sent!",
            life: 3000,
          });
        })
        .catch((err) => console.log(err, ">> ERR"));
    }
  }

  return (
    <div>
      {/* <Header /> */}
      <HeaderTest />
      <Toast ref={toast} />
      <div data-aos="fade-up">
        <section className="section bookTable wf-section">
          <div className="container">
            <div className="_12-columns slide-up">
              <div className="column desktop-6 tablet-8 mobile-12">
                <div className="text-center">
                  <h1 className="heading xl" id="bookATablePageTitle">
                    Book A Table
                  </h1>
                  {/* <div className="bookTable-underline"></div> */}
                  <div className="underline"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section no-top-padding wf-section">
          <div className="container">
            <div className="_12-columns align-top slide-up">
              {/* <div className="column desktop-5 tablet-6 mobile-12">
                <div className="contact-wrapper">
                  <h2 className="heading xs">Get in touch</h2>
                  <div className="contact-item">
                    <p className="contact-subhead">Phone</p>
                    <a href="tel:+971505359409">(971) 505-359409</a>
                  </div>

                  <div className="contact-item">
                    <p className="contact-subhead">Timings</p>
                    <a>Eveyday from 8:00AM to 1:00AM</a>
                  </div>

                  <div className="contact-item">
                    <p className="contact-subhead">Location</p>
                    <a>Orra Marina Tower, Shop 3, Dubai Marina</a>
                  </div>

                  <div className="contact-item">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d903.4826628999771!2d55.1329434!3d25.0703395!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f1338d5c3c243%3A0x347c43dec1db3c14!2sOats%20%26%20CO.DUBAI!5e0!3m2!1sar!2sin!4v1678520284902!5m2!1sar!2sin"
                      width="100%"
                      height="auto"
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                      className="googleMap"
                    ></iframe>
                  </div>

                  <div className="contact-item">
                    <p className="contact-parkingAvailable">
                      Parking Available
                    </p>
                  </div>
                </div>
              </div> */}
              <div className="column desktop-1 tablet-0"></div>
              <div className="column desktop-6 mobile-12">
                <div className="w-form">
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
                        style={{
                          display: "flex",
                          marginBottom: "-11px",
                          fontFamily: "MyriadProRegular",
                        }}
                      >
                        Guest Name <p style={{ color: "red" }}>*</p>
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
                      <label
                        for="Email"
                        className="field-label"
                        style={{
                          display: "flex",
                          marginBottom: "-11px",
                          fontFamily: "MyriadProRegular",
                        }}
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
                    </div>
                    {/* <div className="bookTable-GuestCount-VisitingDateTime">
                      <div className="bookTable-GuestCount">
                        <label for="NoOfGuest" className="field-label">
                          No. of Guest
                        </label>
                        <div className="bookTable-GuestCountDropDown">
                          <Dropdown
                            value={noOfGuest}
                            onChange={(e) => setNoOfGuest(e.value)}
                            options={noOfGuestOption}
                            optionLabel="name"
                            placeholder="Select No. of Guest"
                            className="w-full md:w-14rem"
                            name="guestCount"
                          />
                        </div>
                      </div>
                      <div className="bookTable-Calendar">
                        <label
                          for="Date"
                          className="field-label"
                          style={{ display: "flex", marginBottom: "-11px" }}
                        >
                          Visiting Date <p style={{ color: "red" }}>*</p>
                        </label>
                        <div className="bookTable-GuestCountCalendar">
                          <Calendar
                            value={date}
                            onChange={(e) => setDate(e.value)}
                            name="visitingDate"
                          />
                        </div>
                      </div>

                      <div className="bookTable-Time">
                        <label
                          for="Date"
                          className="field-label"
                          style={{ display: "flex", marginBottom: "-11px" }}
                        >
                          Visiting Time <p style={{ color: "red" }}>*</p>
                        </label>
                        <div className="bookTable-GuestCountTime">
                          <Calendar
                            id="calendar-timeonly"
                            value={time}
                            onChange={(e) => setTime(e.value)}
                            timeOnly
                            hourFormat="12"
                            name="visitingTime"
                          />
                        </div>
                      </div>
                    </div> */}
                    <Row>
                      <Col xl={4} lg={4} md={4} sm={4} xs={4}>
                        <label
                          for="NoOfGuest"
                          className="field-label"
                          style={{ fontFamily: "MyriadProRegular" }}
                        >
                          No. of Guest
                        </label>
                        <div className="bookTable-GuestCountDropDown">
                          <Dropdown
                            value={noOfGuest}
                            onChange={(e) => setNoOfGuest(e.value)}
                            options={noOfGuestOption}
                            optionLabel="name"
                            placeholder="Select No. of Guest"
                            className="w-full md:w-14rem"
                            name="guestCount"
                          />
                        </div>
                      </Col>
                      <Col xl={4} lg={4} md={4} sm={4} xs={4}>
                        <label
                          for="Date"
                          className="field-label"
                          style={{
                            display: "flex",
                            marginBottom: "-11px",
                            fontFamily: "MyriadProRegular",
                          }}
                        >
                          Visiting Date <p style={{ color: "red" }}>*</p>
                        </label>
                        <div className="bookTable-GuestCountCalendar">
                          <Calendar
                            value={date}
                            onChange={(e) => setDate(e.value)}
                            name="visitingDate"
                          />
                        </div>
                      </Col>
                      <Col xl={4} lg={4} md={4} sm={4} xs={4}>
                        <label
                          for="Date"
                          className="field-label"
                          style={{
                            display: "flex",
                            marginBottom: "-11px",
                            fontFamily: "MyriadProRegular",
                          }}
                        >
                          Visiting Time <p style={{ color: "red" }}>*</p>
                        </label>
                        <div className="bookTable-GuestCountTime">
                          <Calendar
                            id="calendar-timeonly"
                            value={time}
                            onChange={(e) => setTime(e.value)}
                            timeOnly
                            hourFormat="12"
                            name="visitingTime"
                          />
                        </div>
                      </Col>
                    </Row>
                    <div className="field-block" id="bookATableNpteMainDiv">
                      <label
                        for="Message"
                        className="field-label"
                        style={{ fontFamily: "MyriadProRegular" }}
                      >
                        Note
                      </label>
                      <textarea
                        id="Message"
                        name="note"
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
        {/* <ToastContainer /> */}
      </div>
    </div>
  );
};

export default BookTable;
