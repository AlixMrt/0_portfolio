import React from "react";
import SectionHeader from "./SectionHeader";
import BlockWithImage from "./BlockWithImage";

export default function Description({
  descriptionHeadingText,
  fontColor,
  findUsBgColor,
  findUsInnerBgColor,
  imageLink,
  imageDescription,
  imageStyling,
  imagePosition,
  data,
}) {
  return (
    <section className={`description |  clr-neutral-000 ${findUsBgColor}`}>
      <div className={`container`} data-type="wide">
        <BlockWithImage
          backgroundColor={findUsInnerBgColor}
          imageSrc={imageLink}
          imageDescription={imageDescription}
          imageStyling={imageStyling}
          imagePosition={imagePosition}
          imageCornerRounded=""
          borderBottom="border-bottom"
        >
          <div>
            <h3 className={`heading-3 | ${fontColor}`}>
              {descriptionHeadingText}
            </h3>
            <div className="paragraphs-container">
              {data.map((paragraph) => {
                return (
                  <p className={`paragraph | ${fontColor}`}>
                    {paragraph.paragraph}
                  </p>
                );
              })}
            </div>
          </div>
        </BlockWithImage>
      </div>
    </section>
  );
}
