// import React, { useEffect, useState } from "react";
// import "./App.css";
// import images from "./dataTEST";
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
