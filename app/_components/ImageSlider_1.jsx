import Image from "next/image";
import SectionHeader from "./SectionHeader";
import { useState } from "react";

export default function ImageSlider({ id, headingText, imagesArray }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  let currentImage = imagesArray[currentImageIndex];

  const handleArrowClick = (operation) => {
    if (operation === "nextImage") {
      if (currentImageIndex === imagesArray.length - 1) {
        setCurrentImageIndex(0);
      } else {
        setCurrentImageIndex(currentImageIndex + 1);
      }
    } else if (operation === "previousImage") {
      if (currentImageIndex === 0) {
        setCurrentImageIndex(imagesArray.length - 1);
      } else {
        setCurrentImageIndex(currentImageIndex - 1);
      }
    }
  };

  return (
    <section
      id={id}
      className="section navSection | clr-neutral-900 bg-neutral-000 text-center"
    >
      <div className="container" data-type="wide">
        <SectionHeader
          headingText={headingText}
          headingColor="clr-neutral-900"
        />

        <div className="images-slider_1 clr-neutral-900">
          <div key={currentImage.name} className="image-container">
            <Image
              src={`/images/slider/${currentImage.imgSrc}.jpg`}
              width={2000}
              height={600}
              alt={currentImage.description}
              className="mx-auto"
            />
            <figcaption>
              <h3 className="heading-3">{currentImage.name}</h3>
            </figcaption>
          </div>
          <div className="slider-controls">
            <button
              className={`button ${currentImageIndex === 0 && "disabled"}`}
              onClick={() => handleArrowClick("previousImage")}
              disabled={currentImageIndex === 0}
            >
              &lt;
            </button>
            <div className="slider-index">
              <p>
                {currentImageIndex + 1}/{imagesArray.length}
              </p>
            </div>
            <button
              className={`button ${
                currentImageIndex === imagesArray.length - 1 && "disabled"
              }`}
              onClick={() => handleArrowClick("nextImage")}
              disabled={currentImageIndex === imagesArray.length - 1}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
