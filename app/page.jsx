// Components
import Description from "./_components/Description";
import HeroBackgroundImage from "./_components/HeroBackgroundImage";
import Menu from "./_components/Menu";
import ImagesGallery from "./_components/ImagesGallery";
import Slider from "./_components/Slider";
import HeaderElementary from "./_components/HeaderElementary";

import bgImg from "../public/images/background5.jpg";

// Data
import data from "../data/data";
import MenuWindowed from "./_components/MenuWindowed";
import Hero from "./_components/Hero";
import HeroElementary from "./_components/HeroElementary";
import Hours from "./_components/Hours";
import OurStory from "./_components/OurStory";
import EssaiOrnaments from "./_components/EssaiOrnaments";
import FindUs from "./_components/FindUs";
import DescriptionOld from "./_components/DescriptionOld";
import SectionHeader from "./_components/SectionHeader";

export default function Home() {
  const languagesButtons = [
    { id: 1, name: "English /" },
    { id: 2, name: " French" },
  ];

  return (
    <main>
      {/* <HeroBackgroundImage
        mainHeading="La Belle Table"
        secondaryHeading="Restaurant gastronomique à Fontainebleau"
        decorationImgSrc="svg/text-divider-4.svg"
        bgImage={bgImg}
      /> */}
      {/* <Hero
        heroPadding={""}
        columnLayout="even-columns"
        heroBackgroundColor={"bg-neutral-000"}
        heroHeadingText="La Belle Table"
        heroSubHeadingText="Restaurant gastronomique à Fontainebleau"
        heroText=""
        imageSrc="/images/find-us2.jpg"
        imageDescription="two children holding hands"
        imageBorderRadius=""
        imageBoxShadow="box-shadow-8"
      /> */}
      <HeaderElementary languagesButtons={languagesButtons} />
      <HeroElementary
        columnLayout="even-columns"
        heroBackgroundColor={"bg-neutral-000"}
        heroHeadingText="La Belle Table"
        heroSecondaryHeadingText="Restaurant Gastronomique à Fontainebleau"
        // heroTertiaryHeadingText="Restaurant"
        imageSrc="/svg/silhouettes1.svg"
        imageDescription="two children holding hands"
      />
      <FindUs
        street="46 rue de Bourgogne"
        city="Fontainebleau"
        phoneNumber="01 46 37 28 36"
        email="BelleTable@contact.com"
        openingTimeSlotArray={data.openingTimeSlotsArray}
        display="vertical"
      />
      <MenuWindowed dishesArray={data.dishesArray} />
      {/* <OurStory /> */}
      <SectionHeader
        headingText="Notre Histoire"
        marginBlockEnd="0"
        displayDecoration
      />

      <Description
        descriptionHeadingText="Le bateau"
        fontColor="clr-neutral-1000"
        findUsBgColor="bg-neutral-000"
        findUsInnerBgColor="bg-neutral-000"
        imageLink="/images/salle-restaurant.png"
        imageDescription="a photo of our restaurant with table and chairs"
        imagePosition="left"
        data={data.descriptionArray.restaurant}
      />
      <Description
        descriptionHeadingText="Le Chef"
        fontColor="clr-neutral-1000"
        findUsBgColor="bg-neutral-000"
        findUsInnerBgColor="bg-neutral-000"
        imageLink="/images/chef.png"
        imageDescription="a photo of our restaurant with table and chairs"
        imagePosition="right"
        data={data.descriptionArray.chef}
      />
      <ImagesGallery imagesArray={data.imagesArray} />
      {/* <Menu dishesArray={data.dishesArray} /> */}

      {/* <Slider imagesArray={data.imagesArray} /> */}
      {/* <EssaiOrnaments /> */}
    </main>
  );
}
