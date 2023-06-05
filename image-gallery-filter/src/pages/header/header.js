import React from "react";
import Logo from "../../Assests/logo.svg";
import phoneIconGreen from "../../Assests/phoneIconGreen.png";

class Header extends React.Component {
  myFunction() {
    var x = document.getElementById("myTopnav");
    // console.log(x, " %%%%");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  render() {
    return (
      <nav>
        <div className="topnav" id="myTopnav">
          <div className="background-texture"></div>
          <div
            data-animation="default"
            className="nav-bar w-nav"
            data-easing2="ease-in-quart"
            data-easing="ease-out-quart"
            data-collapse="medium"
            data-w-id="debec348-5c84-6503-82c9-a6b3926bcc1b"
            role="banner"
            data-duration="500"
            data-doc-height="1"
          >
            <div className="container navigation">
              <a
                href="#"
                aria-current="page"
                className="logo w-nav-brand w--current"
              >
                <img src={Logo} />
              </a>
              <nav role="navigation" className="nav-menu w-nav-menu">
                <div className="nav-links">
                  <a href="#" className="nav-link w-nav-link" id="headerMenu">
                    Home
                  </a>
                  <a
                    href="#menu"
                    className="nav-link w-nav-link"
                    id="headerMenu"
                  >
                    Menu
                  </a>
                  <a
                    href="about.html"
                    className="nav-link w-nav-link"
                    id="headerMenu"
                  >
                    About
                  </a>
                  <a
                    href="/gallery"
                    className="nav-link w-nav-link"
                    id="headerMenu"
                  >
                    Gallery
                  </a>
                  <a
                    href="/contact"
                    className="nav-link w-nav-link"
                    id="headerMenu"
                  >
                    Contact
                  </a>
                </div>
                <a
                  href="tel:+971505359409"
                  className="button-wrapper small no-margin w-inline-block"
                >
                  <div className="panel pink">
                    <div>
                      <img
                        src={phoneIconGreen}
                        loading="lazy"
                        alt="Facebook"
                        className="linkedIn"
                      />
                      <a href="tel:+971505359409" class="header-phone">
                        (971) 505-359409
                      </a>
                    </div>
                  </div>
                </a>
              </nav>
              <div className="menu-button w-nav-button">
                <div
                  data-w-id="debec348-5c84-6503-82c9-a6b3926bcc31"
                  className="hamburger-line"
                ></div>
                <div
                  data-w-id="debec348-5c84-6503-82c9-a6b3926bcc32"
                  className="hamburger-line middle"
                ></div>
                <div
                  data-w-id="debec348-5c84-6503-82c9-a6b3926bcc33"
                  className="hamburger-line bottom"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
