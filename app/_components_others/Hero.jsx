import Image from "next/image";
import PageHeading from "../_components/PageHeading";

export default function Hero({
  columnLayout,
  heroPadding,
  heroBackgroundColor,
  heroHeadingText,
  heroSubHeadingText,
  heroText,
  imageSrc,
  imageDescription,
  imageBoxShadow,
  imageBorderRadius,
}) {
  return (
    <section
      className={`hero |  section ${heroBackgroundColor} ${heroPadding} mx-auto `}
    >
      <div className="container" data-type="wide">
        <div className={`${columnLayout}`}>
          <div className="image-container">
            <Image
              className={`hero__image | ${imageBorderRadius}  ${imageBoxShadow}`}
              src={imageSrc}
              alt={imageDescription}
              width="500"
              height="500"
              priority
            />
          </div>
          <div className="content-container ">
            <PageHeading
              mainHeading={heroHeadingText}
              secondaryHeading={heroSubHeadingText}
              decorationImgSrc="/svg/text-divider-4.svg"
            />
            <p className="text-center">{heroText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
