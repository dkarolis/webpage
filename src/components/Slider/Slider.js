import "./Slider.css";
import React from "react";

function Slider() {
  const [currentSlider, setCurrentSlider] = React.useState(1);

  React.useEffect(() => {
    if (currentSlider === 1) setTimeout(() => setCurrentSlider(2), 2000);
    if (currentSlider === 2) setTimeout(() => setCurrentSlider(3), 2000);
    if (currentSlider === 3) setTimeout(() => setCurrentSlider(1), 2000);
  });

  return (
    <div className="slider-container">
      <p
        className="slider-content"
        style={{ display: currentSlider === 1 ? "block" : "none" }}
      >
        SLIDER1
      </p>
      <p
        className="slider-content"
        style={{ display: currentSlider === 2 ? "block" : "none" }}
      >
        SLIDER2
      </p>
      <p
        className="slider-content"
        style={{ display: currentSlider === 3 ? "block" : "none" }}
      >
        SLIDER3
      </p>
      <div className="slider-buttons-container">
        <button
          onClick={() => setCurrentSlider(1)}
          style={{ backgroundColor: currentSlider === 1 ? "#707070" : "#fff" }}
          className="slider-button"
        ></button>
        <button
          onClick={() => setCurrentSlider(2)}
          style={{ backgroundColor: currentSlider === 2 ? "#707070" : "#fff" }}
          className="slider-button"
        ></button>
        <button
          onClick={() => setCurrentSlider(3)}
          style={{ backgroundColor: currentSlider === 3 ? "#707070" : "#fff" }}
          className="slider-button"
        ></button>
      </div>
    </div>
  );
}

export default Slider;
