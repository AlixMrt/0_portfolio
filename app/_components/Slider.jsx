"use client";

import Image from "next/image";
import { useState } from "react";

export default function Slider({ imagesArray }) {
  const [currentImage, setCurrentImage] = useState(0);

  const previousImage = () => {
    setCurrentImage((prevState) => {
      if (currentImage === 0) {
        return imagesArray.length - 1;
      }
      return prevState - 1;
    });
  };
  const nextImage = () => {
    setCurrentImage((prevState) => {
      if (currentImage === imagesArray.length - 1) {
        return 0;
      }
      return prevState + 1;
    });
  };

  const handleClick = (value) => {
    setCurrentImage((prevState) => {
      return value;
    });
  };

  let singleImage = imagesArray[currentImage];
  let thumbnailArray = [];
  if (currentImage === imagesArray.length - 1) {
    thumbnailArray.push(imagesArray[currentImage]);
    thumbnailArray.push(imagesArray[0]);
    thumbnailArray.push(imagesArray[1]);
  } else if (currentImage === imagesArray.length - 2) {
    thumbnailArray.push(imagesArray[currentImage]);
    thumbnailArray.push(imagesArray[currentImage + 1]);
    thumbnailArray.push(imagesArray[0]);
    // thumbnailArray.push(imagesArray[1]);
  } else if (currentImage === imagesArray.length - 3) {
    thumbnailArray.push(imagesArray[currentImage]);
    thumbnailArray.push(imagesArray[currentImage + 1]);
    thumbnailArray.push(imagesArray[currentImage + 2]);
    // thumbnailArray.push(imagesArray[0]);
  } else {
    thumbnailArray.push(imagesArray[currentImage]);
    thumbnailArray.push(imagesArray[currentImage + 1]);
    thumbnailArray.push(imagesArray[currentImage + 2]);
  }

  return (
    <div className="slider">
      <div className="carousel">
        <div className="list">
          <div className="item">
            <Image
              src={`/images/slider/${singleImage.imgSrc}.jpg`}
              width={2000}
              height={600}
              alt={singleImage.description}
              className="mx-auto"
            />
            <h1>{singleImage.description}</h1>
            <div className="content">
              <div className="title">{singleImage.name}</div>
              <div className="topic">{singleImage.category}</div>
              <div className="des">{singleImage.description}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="thumbnail">
        {thumbnailArray.map((singleImage, index) => {
          return (
            <div className="item" key={singleImage.description + index}>
              <Image
                src={`/images/slider/${singleImage.imgSrc}.jpg`}
                width={200}
                height={200}
                alt={singleImage.description}
                onClick={() => handleClick(singleImage.number - 1)}
              />
              <div className="content">
                <div className="title">{singleImage.name}</div>
                <div className="">{singleImage.category}</div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="arrows">
        <button id="prev" onClick={previousImage}>
          Previous
        </button>
        <button id="next" onClick={nextImage}>
          Next
        </button>
      </div>
      <div className="time"></div>
    </div>
  );
}
