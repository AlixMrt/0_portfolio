import Image from "next/image";

export default function ImageComponent({
  imagePosition,
  imageDescription,
  imageSrc,
  imageCornerRounded,
  imageStyling,
}) {
  return (
    <div className="div">
      <div
        data-position={imagePosition}
        className="imageContainer"
        style={{ position: "relative" }}
      >
        <Image
          className={`${imageCornerRounded} ${imageStyling} find-us-img fading-img`}
          src={imageSrc}
          alt={imageDescription}
          width="600"
          height="600"
        />
      </div>
    </div>
  );
}
