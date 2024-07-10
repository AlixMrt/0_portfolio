import Image from "next/image";
import PageHeading from "./PageHeading";
import flowerImage from "/public/svg/fleur.svg";
import LanguageHeader from "./LanguageHeader";
export default function HeroElementary({
  heroPadding,
  heroBackgroundColor,
  heroHeadingText,
  heroSecondaryHeadingText,
  heroText,
  imageSrc,
  imageDescription,
  handleLanguageClick,
  activeLanguage,
}) {
  return (
    <section className={`hero-elementary | ${heroBackgroundColor} `}>
      <LanguageHeader
        handleLanguageClick={handleLanguageClick}
        activeLanguage={activeLanguage}
      />

      <div className="container | hero-elementary-container" data-type="narrow">
        <div className="content-container box-shadow-8">
          <Image
            className="hero-image | text-center mx-auto"
            src={imageSrc}
            width={200}
            height={200}
            alt={imageDescription}
          />
          <PageHeading
            mainHeading={heroHeadingText}
            secondaryHeading={heroSecondaryHeadingText}
            decorationImgSrc="/svg/text-divider-4.svg"
          />
          <Image
            className="flower flower-1"
            src={flowerImage}
            width={50}
            height={50}
            alt="hello"
          />
          <Image
            className="flower flower-2"
            src={flowerImage}
            width={50}
            height={50}
            alt="hello"
          />
          <Image
            className="flower flower-3"
            src={flowerImage}
            width={50}
            height={50}
            alt="hello"
          />
          <Image
            className="flower flower-4"
            src={flowerImage}
            width={50}
            height={50}
            alt="hello"
          />
        </div>
      </div>
    </section>
  );
}
