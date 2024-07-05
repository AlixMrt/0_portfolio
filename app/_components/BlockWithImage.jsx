import Link from "next/link";
import ImageComponent from "./ImageComponent";

export default function BlockWithImage({
  blockPadding,
  fontColor,
  backgroundColor,
  imagePosition,
  borderBottom,
  imageDescription,
  imageSrc,
  imageCornerRounded,
  imageStyling,

  children,
}) {
  return (
    <div
      className={` block-with-image ${backgroundColor} ${fontColor} ${borderBottom} ${blockPadding}`}
    >
      <div className="block-with-image-inner even-columns vertically-centered">
        {imagePosition === "left" ? (
          <ImageComponent
            imagePosition={imagePosition}
            imageDescription={imageDescription}
            imageSrc={imageSrc}
            imageCornerRounded={imageCornerRounded}
            imageStyling={imageStyling}
          />
        ) : null}
        <div className={`flow ${imagePosition === "right" ? "reverse" : ""}`}>
          {children}
        </div>

        {imagePosition === "right" ? (
          <ImageComponent
            imagePosition={imagePosition}
            imageDescription={imageDescription}
            imageSrc={imageSrc}
            imageCornerRounded={imageCornerRounded}
            imageStyling={imageStyling}
          />
        ) : null}
      </div>
    </div>
  );
}
