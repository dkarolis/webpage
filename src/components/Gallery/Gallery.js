import "./Gallery.css";
import Image from "./Image";
import { useMediaQuery } from "react-responsive";
import React from "react";

function Gallery() {
  const isMobile = useMediaQuery({
    query: "(max-width: 800px)",
  });
  const [showMore, setShowMore] = React.useState(false);
  return (
    <div className="gallery-container">
      <Image />
      <Image />
      <Image />
      <Image />
      <div
        className="images-more"
        style={{
          display: (isMobile && showMore) || !isMobile ? "block" : "none",
        }}
      >
        <Image />
      </div>
      <div
        className="images-more"
        style={{
          display: (isMobile && showMore) || !isMobile ? "block" : "none",
        }}
      >
        <Image />
      </div>
      <div
        className="images-more"
        style={{
          display: (isMobile && showMore) || !isMobile ? "block" : "none",
        }}
      >
        <Image />
      </div>
      <div
        className="images-more"
        style={{
          display: (isMobile && showMore) || !isMobile ? "block" : "none",
        }}
      >
        <Image />
      </div>
      <button
        className="button-show-more"
        style={{ display: isMobile ? "block" : "none" }}
        onClick={() => (showMore ? setShowMore(false) : setShowMore(true))}
      >
        {showMore ? "show less..." : "show more..."}
      </button>
    </div>
  );
}

export default Gallery;
