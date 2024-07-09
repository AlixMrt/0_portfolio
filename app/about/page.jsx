import Hero from "../_components/Hero";
import HeroBackgroundImage from "../_components/HeroBackgroundImage";

import BlockWithImage from "../_components/BlockWithImage";
import FindUs from "../_components/Description";

import data from "@/data/data";
import EssaiOrnaments from "../_components/EssaiOrnaments";

export default function AboutPage() {
  return (
    <main>
      {/* <HeroBackgroundImage
        mainHeading="Notre restaurant"
        secondaryHeading="En savoir plus sur la cuisine & l'équipe"
        decorationImgSrc="svg/text-divider-4.svg"
        bgImage={bgImg}
      /> */}

      <Hero
        heroPadding={""}
        columnLayout="even-columns"
        heroBackgroundColor={"bg-neutral-100"}
        heroHeadingText="Au Chêne d'Or"
        heroSubHeadingText="Son histoire, sa cuisine & son équipe"
        heroText=""
        imageSrc="/images/find-us2.jpg"
        imageDescription="group of people in front of a computer"
        imageBorderRadius=""
        imageBoxShadow="box-shadow-8"
      />
      <FindUs
        blockPadding=""
        findUsSectionHeading="Le Boulangerie"
        findUsBgColor="bg-neutral-000"
        findUsInnerBgColor="bg-neutral-000"
        cardBgColor="bg-neutral-100"
        cardBoxShadow="box-shadow-8"
        imageLink="/images/hero-img.png"
        imageDescription="group of people talking"
        imageStyling=""
        street="46 rue de Bourgogne"
        city="Fontainebleau 77300"
        phoneNumber="+ 33 1 46 37 28 36"
        email="BelleTable@contact.com"
        openingTimeSlotArray={data.openingTimeSlotsArray}
      />
    </main>
  );
}
