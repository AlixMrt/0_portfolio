import Image from "next/image";
import PageHeading from "./PageHeading";
import LanguageHeader from "./LanguageHeader";
export default function HeroElementary({
  heroPadding,
  heroBackgroundColor,
  heroHeadingText,
  heroSecondaryHeadingText,
  heroText,
  imageSrc,
  imageDescription,
  ornamentImgSrc,
  ornamentImgDescription,
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
            priority
          />
          <PageHeading
            mainHeading={heroHeadingText}
            secondaryHeading={heroSecondaryHeadingText}
            decorationImgSrc="/svg/text-divider-4.svg"
          />
          <Image
            className="frameOrnament frameOrnament-1"
            src={ornamentImgSrc}
            width={50}
            height={50}
            alt={ornamentImgDescription}
          />
          <Image
            className="frameOrnament frameOrnament-2"
            src={ornamentImgSrc}
            width={50}
            height={50}
            alt={ornamentImgDescription}
          />
          <Image
            className="frameOrnament frameOrnament-3"
            src={ornamentImgSrc}
            width={50}
            height={50}
            alt={ornamentImgDescription}
          />
          <Image
            className="frameOrnament frameOrnament-4"
            src={ornamentImgSrc}
            width={50}
            height={50}
            alt={ornamentImgDescription}
          />
        </div>
      </div>
    </section>
  );
}
