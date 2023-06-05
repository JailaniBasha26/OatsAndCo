import React, { useState, useEffect, useRef } from "react";

import emailjs from "emailjs-com";
import { InputNumber } from "primereact/inputnumber";
import { ToastContainer, toast } from "react-toastify";
import { css } from "glamor";
import Header from "../header/header";
import Footer from "../footer/footer";
import Aos from "aos";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";
import HeaderTest from "../header/headerTest";
import "./newsletter.css";
import { Toast } from "primereact/toast";
//emailjs.send("service_a4w0dpm","template_f1po38w");

let num = "";
const Newsletter = () => {
  const toast = useRef(null);
  const [emailId, setEmailId] = useState("");

  Aos.init({ duration: 1000 });
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  function sendEmail(e) {
    e.preventDefault();

    // console.log(emailId, "++");

    if (emailId == "") {
      toast.current.show({
        severity: "error",
        detail: "Please fill Email ID",
        life: 3000,
        position: "bottom",
      });
    } else {
      emailjs
        .sendForm(
          // "service_a4w0dpm",
          "service_c8fdowb",
          "template_4a5zhbf",
          e.target,
          "5Tr96XVNe21QxLxmO"
        )
        .then((res) => {
          toast.current.show({
            severity: "success",
            detail: "Newsletter subscription request is successfully sent!",
            life: 3000,
          });
        })
        .catch((err) => console.log(err, ">> ERR"));
      // const config = {
      //   SecureToken: "5d3fe060-2b33-49e0-9fc9-4a64742d1c6d",
      //   To: "info@oatsandco.ae",
      //   From: emailId,
      //   Subject: "Newsletter Subscription",
      //   Body: `${emailId} subscribed for Newsletter `,
      // };
      // if (window.Email) {
      //   window.Email.send(config).then(() => alert("email sent"));
      // }
    }
  }

  return (
    <div>
      <Toast ref={toast} position="bottom-right" />
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Subscribe for our Newsletter and get 10% discount on first order
        </p>
        <div className="input-areas">
          <form
            id="wf-form-Contact-Form"
            name="wf-form-Contact-Form"
            data-name="Contact Form"
            method="get"
            onSubmit={sendEmail}
          >
            <center className="newsLetterInputBtn">
              <input
                type="email"
                className="form-input w-input"
                maxlength="256"
                name="email"
                data-name="Email"
                placeholder="Email ID"
                id="Email"
                required=""
                onChange={(e) => setEmailId(e.target.value)}
              />
              {/* <center> */}

              <input
                name="subscriptionCheck"
                value="newsletter subscription request"
                className="subscriptionInputHidden"
              />

              <input
                type="submit"
                value="Submit"
                data-wait="Please wait..."
                // className="button small form w-button"
                className="newsLetterSubmitBtn"
              />

              {/* </center> */}
            </center>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Newsletter;
