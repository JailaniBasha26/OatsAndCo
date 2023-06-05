import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./headerTest.css";
import phoneIconBlack from "../../Assests/phoneIconBlack.svg";
import Logo from "../../Assests/logo.svg";
import LineMenuIcon from "../../Assests/LineMenuIcon.png";
import { TabMenu } from "primereact/tabmenu";
import { useNavigate } from "react-router-dom";

let headerMenus = ["Home", "About us", "Menu", "Gallery", "Contact us"];
let tabView = [
  { label: "Home" },
  { label: "About us" },
  { label: "Menu" },
  { label: "Gallery" },
  { label: "Contact us" },
];
let activeMenuName = "Home";
let cc = "";
function HeaderTest() {
  // let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [activeIndex, setActiveIndex] = useState(3);

  const myFunction = () => {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  };

  const menuOnClick = (activeMenuName) => {
    console.log(activeMenuName, ">>");
  };

  const tabOnChange = (e) => {
    setActiveIndex(e, ">> 123");
    // this.props.history.push("/");
    return <Link to="https://react.semantic-ui.com/" />;
  };

  // console.log(username, ">> CC");
  return (
    <nav>
      <a href="#" aria-current="page" id="headerLogoWeb">
        <img src={Logo} className="headerLogo" />
      </a>
      <div className="topnav" id="myTopnav">
        <div className="navBarInsideWrapper">
          <a
            href="#"
            aria-current="page"
            className="logo w-nav-brand w--current"
            id="headerLogoMobile"
          >
            <img src={Logo} className="headerLogo" />
          </a>
          <div className="headerMenus">
            <a
              href="#"
              className="nav-link w-nav-link"
              id="headerMenu"
              onClick={(e) => menuOnClick("Home")}
            >
              Home
            </a>
            <a
              href="#about"
              className="nav-link w-nav-link"
              onClick={(e) => menuOnClick("About")}
            >
              About us
            </a>
            <a
              href="#menu"
              className="nav-link w-nav-link"
              onClick={(e) => menuOnClick("Menu")}
            >
              Menu
            </a>
            <a
              href="#gallery"
              className="nav-link w-nav-link"
              onClick={(e) => menuOnClick("Gallery")}
            >
              Gallery
            </a>
            <a
              href="#contact"
              className="nav-link w-nav-link"
              onClick={(e) => menuOnClick("Contact")}
            >
              Contact us
            </a>
            <a
              href="#bookTable"
              className="nav-link w-nav-link"
              onClick={(e) => menuOnClick("bookTable")}
            >
              Book A Table
            </a>
          </div>
          {/* <a
            href="tel:+971505359409"
            className="nav-link w-nav-link"
            id="headerPhoneTag"
          >
            <img
              src={phoneIconBlack}
              loading="lazy"
              alt="Facebook"
              className="linkedIn"
            />{" "}
            (971) 505-359409
          </a> */}

          <a href="javascript:void(0);" className="icon" onClick={myFunction}>
            <img src={LineMenuIcon} loading="lazy" alt="Facebook" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default HeaderTest;
