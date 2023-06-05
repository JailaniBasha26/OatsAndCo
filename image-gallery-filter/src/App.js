// import React, { useEffect, useState } from "react";
// import "./App.css";
// import images from "./data";
// import { SRLWrapper } from "simple-react-lightbox";

// const options = {
//   // settings: {
//   // 	overlayColor: 'rgb(25, 136, 124)',
//   // 	autoplaySpeed: 1500,
//   // 	transitionSpeed: 900
//   // },
//   // buttons: {
//   // 	backgroundColor: 'red',
//   // 	iconColor: 'rgba(126, 172, 139, 0.8)'
//   // },
//   // caption: {
//   // 	captionColor: '#a6cfa5',
//   // 	captionFontFamily: 'Raleway, sans-serif',
//   // 	captionFontWeight: '300',
//   // 	captionTextTransform: 'uppercase'
//   // },
//   // progressBar: {
//   // 	height: '20px',
//   // 	fillColor: 'blue',
//   // 	backgroundColor: 'white'
//   // }
// };

// function App() {
//   const [tag, setTag] = useState("all");
//   const [filteredImages, setFilteredImages] = useState([]);

//   useEffect(() => {
//     tag === "all"
//       ? setFilteredImages(images)
//       : setFilteredImages(images.filter((image) => image.tag === tag));
//   }, [tag]);

//   return (
//     <div className="App">
//       TEST BASHA
//       <SRLWrapper options={options}>
//         <div className="container">
//           {filteredImages.map((image) => (
//             <div key={image.id} className="image-card">
//               <a href={`/images/${image.imageName}`}>
//                 <img
//                   className="image"
//                   src={`/images/${image.imageName}`}
//                   alt=""
//                 />
//               </a>
//             </div>
//           ))}
//         </div>
//       </SRLWrapper>
//     </div>
//   );
// }

// export default App;

import Home from "../src/pages/home/home";
import Gallery from "./pages/gallery/gallery";
import Contact from "./pages/contact/contact";
import MenuIndex from "./pages/menu/menuIndex";
import About from "./pages/about/about";
import BookTable from "./pages/bookTable/bookTable";
import Test from "./pages/test/test";
// import Gallery from "./pages/gallery/gallery";
// import Test from "./pages/home/test";
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  HashRouter,
} from "react-router-dom";
// import "./App.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css"; //icons
import "primeflex/primeflex.css";

function App() {
  return (
    <HashRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/menu" component={MenuIndex} />
      <Route exact path="/gallery" component={Gallery} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/bookTable" component={BookTable} />
    </HashRouter>
  );
}

export default App;
