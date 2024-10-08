import React from "react";
import SectionHeader from "./SectionHeader";
import BlockWithImage from "./BlockWithImage";

export default function Description({
  // descriptionHeadingText,
  fontColor,
  findUsBgColor,
  findUsInnerBgColor,
  // imageLink,
  // imageDescription,
  imageStyling,
  imagePosition,
  descriptionData,
}) {
  const { headingText, paragraphsArray, imageDescription, imageLink } =
    descriptionData;

  return (
    <section className={`description |  clr-neutral-000 ${findUsBgColor}`}>
      <div className={`container`} data-type="wide">
        <BlockWithImage
          backgroundColor={findUsInnerBgColor}
          imageSrc={`/images/about/${imageLink}`}
          imageDescription={imageDescription}
          imageStyling={imageStyling}
          imagePosition={imagePosition}
          imageCornerRounded=""
          borderBottom="border-bottom"
        >
          <div>
            <h3 className={`heading-3 | ${fontColor}`}>{headingText}</h3>
            <div className="paragraphs-container">
              {paragraphsArray.map((paragraph, index) => {
                return (
                  <p
                    key={paragraph[0] + index + paragraph[3]}
                    className={`paragraph | ${fontColor}`}
                  >
                    {paragraph}
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
