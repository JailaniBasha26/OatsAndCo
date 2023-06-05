import React, { useEffect, useState } from "react";
import "./gallery.css";
import images from "../../data";
import { SRLWrapper } from "simple-react-lightbox";
import Header from "../header/header";
import Footer from "../footer/footer";
import HeaderTest from "../header/headerTest";
import Aos from "aos";
import "aos/dist/aos.css";
import aboutUsImg from "../../Assests/aboutUsImg.jpeg";
import sampleVideo from "../../Assests/DJI_0467.MP4.mp4";
import { Media, Player, controls } from "react-media-player";
import ReactImageVideoLightbox from "react-image-video-lightbox";

const { PlayPause, MuteUnmute } = controls;

const data = [
  {
    index: 0,
    url: "https://placekitten.com/450/300",
    thumbnail: "https://placekitten.com/450/300",
    type: "photo",
  },
  {
    index: 1,
    url: "https://www.youtube.com/embed/ScMzIvxBSi4",
    thumbnail: "https://placekitten.com/450/300",
    type: "video",
  },
  {
    index: 2,
    url: "https://placekitten.com/550/500",
    thumbnail: "https://placekitten.com/550/500",
    type: "photo",
  },
  {
    index: 3,
    url: "https://www.youtube.com/embed/ScMzIvxBSi4",
    thumbnail: "https://placekitten.com/550/500",
    type: "video",
  },
];

const options = {
  // settings: {
  // 	overlayColor: 'rgb(25, 136, 124)',
  // 	autoplaySpeed: 1500,
  // 	transitionSpeed: 900
  // },
  // buttons: {
  // 	backgroundColor: 'red',
  // 	iconColor: 'rgba(126, 172, 139, 0.8)'
  // },
  // caption: {
  // 	captionColor: '#a6cfa5',
  // 	captionFontFamily: 'Raleway, sans-serif',
  // 	captionFontWeight: '300',
  // 	captionTextTransform: 'uppercase'
  // },
  // progressBar: {
  // 	height: '20px',
  // 	fillColor: 'blue',
  // 	backgroundColor: 'white'
  // }
};

function Gallery() {
  const [tag, setTag] = useState("all");
  const [filteredImages, setFilteredImages] = useState([]);

  const [open, setopen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  Aos.init({ duration: 1000 });

  const openlightbox = (index) => {
    // console.log(index);
    setCurrentIndex(index);
    setopen(true);
  };

  useEffect(() => {
    tag === "all"
      ? setFilteredImages(images)
      : setFilteredImages(images.filter((image) => image.tag === tag));

    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [tag]);

  return (
    <div className="App">
      <HeaderTest />
      <div data-aos="fade-up">
        <section className="section m wf-section" id="galleryPageTitle">
          <div className="container">
            <div className="_12-columns slide-up">
              <div className="column desktop-6 tablet-8 mobile-12">
                <div className="text-center">
                  <h1 className="heading xl" id="galleryPageTitleText">
                    Gallery
                  </h1>
                  <div className="underline"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <SRLWrapper options={options}>
          <div className="containerGallery">
            {filteredImages.map((image) => (
              <div key={image.id} className="image-card">
                {/* {console.log(image.imageName, "** ./images/", image.imageName)} */}
                <a href={`./images/${image.imageName}`}>
                  {image.id != "1" ? (
                    <img
                      className="image"
                      src={`./images/${image.imageName}`}
                      alt=""
                    />
                  ) : (
                    <video
                      srl_video_thumbnail={`./images/${image.imageName}`}
                      width="100%"
                      height="100%"
                      muted={false}
                      controls
                    >
                      <source
                        src={`./images/${image.imageName}`}
                        type="video/mp4"
                      />
                    </video>
                  )}
                </a>
              </div>
            ))}
          </div>
        </SRLWrapper>
        {/* <SRLWrapper options={options}>
          <div className="containerGallery">
            {data.map((image, idx) => (
              <div key={image.thumbnail} className="image-card">
                {console.log(image.thumbnail, "** ./images/", image.thumbnail)}
                <img
                  className="image"
                  src={image.thumbnail}
                  alt=""
                  onClick={() => openlightbox(idx)}
                />
              </div>
            ))}
          </div> */}

        {/* {data.map((item, index) => {
          return (
            <img src={item.thumbnail} onClick={() => openlightbox(index)} />
          );
        })}
        <div>kdkdk</div> */}
        {/* {open && (
            <ReactImageVideoLightbox
              data={data}
              startIndex={currentIndex}
              showResourceCount={true}
              onCloseCallback={() => setopen(false)}
              onNavigationCallback={(currentIndex) =>
                console.log(`Current index: ${currentIndex}`)
              }
            />
          )}
        </SRLWrapper> */}
        <Footer />
      </div>
    </div>
  );
}

export default Gallery;
