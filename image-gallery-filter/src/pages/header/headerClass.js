// import React, { Component } from "react";
// import "./headerTest.css";
// import { Link } from "react-router-dom";
// import phoneIconBlack from "../../Assests/phoneIconBlack.svg";
// import Logo from "../../Assests/logo.svg";
// import circleMenuIcon from "../../Assests/circleMenuIcon.png";

// class HeaderClass extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       date1: "",
//     };
//   }

//   menuOnClick(activeMenuName) {
//     console.log(activeMenuName, ">>");
//   }

//   myFunction() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "topnav") {
//       x.className += " responsive";
//     } else {
//       x.className = "topnav";
//     }
//   }

//   navi() {
//     this.props.history.push("#about");
//   }

//   render() {
//     return (
//       <nav>
//         <a href="#" aria-current="page" id="headerLogoWeb">
//           <img src={Logo} className="headerLogo" />
//         </a>
//         <div className="topnav" id="myTopnav">
//           <div className="navBarInsideWrapper">
//             <a
//               href="#"
//               aria-current="page"
//               className="logo w-nav-brand w--current"
//               id="headerLogoMobile"
//             >
//               <img src={Logo} className="headerLogo" />
//             </a>
//             <div className="headerMenus">
//               <a
//                 href="#"
//                 className="nav-link w-nav-link"
//                 id="headerMenu"
//                 onClick={(e) => this.menuOnClick("Home")}
//               >
//                 Home
//               </a>

//               <div onClick={this.navi()}>BASHA</div>
//               <a
//                 href="#about"
//                 className="nav-link w-nav-link"
//                 onClick={(e) => this.menuOnClick("About")}
//               >
//                 About us
//               </a>
//               <a
//                 href="#menu"
//                 className="nav-link w-nav-link"
//                 onClick={(e) => this.menuOnClick("Menu")}
//               >
//                 Menu
//               </a>
//               <a
//                 href="#gallery"
//                 className="nav-link w-nav-link"
//                 onClick={(e) => this.menuOnClick("Gallery")}
//               >
//                 Gallery
//               </a>
//               <a
//                 href="#contact"
//                 className="nav-link w-nav-link"
//                 onClick={(e) => this.menuOnClick("Contact")}
//               >
//                 Contact us
//               </a>
//             </div>
//             <a
//               href="tel:+971505359409"
//               className="nav-link w-nav-link"
//               id="headerPhoneTag"
//             >
//               <img
//                 src={phoneIconBlack}
//                 loading="lazy"
//                 alt="Facebook"
//                 className="linkedIn"
//               />{" "}
//               (971) 505-359409
//             </a>

//             <a
//               href="javascript:void(0);"
//               className="icon"
//               onClick={this.myFunction}
//             >
//               <img src={circleMenuIcon} loading="lazy" alt="Facebook" />
//             </a>
//           </div>
//         </div>
//       </nav>
//     );
//   }
// }

// export default HeaderClass;
