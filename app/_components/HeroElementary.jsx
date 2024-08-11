import Image from "next/image";
import PageHeading from "./PageHeading";
import frameOrnament from "/public/svg/fleur.svg";
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
  languagesButtons,
}) {
  return (
    <section className={`hero-elementary | ${heroBackgroundColor} `}>
      <LanguageHeader
        handleLanguageClick={handleLanguageClick}
        activeLanguage={activeLanguage}
        languagesButtons={languagesButtons}
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
            className="frameOrnament frameOrnament-1"
            src={frameOrnament}
            width={50}
            height={50}
            alt="hello"
          />
          <Image
            className="frameOrnament frameOrnament-2"
            src={frameOrnament}
            width={50}
            height={50}
            alt="hello"
          />
          <Image
            className="frameOrnament frameOrnament-3"
            src={frameOrnament}
            width={50}
            height={50}
            alt="hello"
          />
          <Image
            className="frameOrnament frameOrnament-4"
            src={frameOrnament}
            width={50}
            height={50}
            alt="hello"
          />
        </div>
      </div>
    </section>
  );
}
