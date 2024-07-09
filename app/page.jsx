"use client";

// Components
import Description from "./_components/Description";
import HeroBackgroundImage from "./_components/HeroBackgroundImage";
import Menu from "./_components/Menu";
import ImagesGallery from "./_components/ImagesGallery";
import Slider from "./_components/Slider";
import HeaderElementary from "./_components/HeaderElementary";
import SideNavbar from "./_components/SideNavbar";
import bgImg from "../public/images/background5.jpg";

// Data
// import data from "../data/data";
import dataEn from "../data/data-en";
import dataFr from "../data/data-fr";

import MenuWindowed from "./_components/MenuWindowed";
import Hero from "./_components/Hero";
import HeroElementary from "./_components/HeroElementary";
import Hours from "./_components/Hours";
import OurStory from "./_components/OurStory";
import EssaiOrnaments from "./_components/EssaiOrnaments";
import FindUs from "./_components/FindUs";
import DescriptionOld from "./_components/DescriptionOld";
import SectionHeader from "./_components/SectionHeader";
import { useEffect, useState } from "react";
import AboutUs from "./_components/AboutUs";
import Footer from "./_components/Footer";

export default function Home() {
  const languagesButtons = [
    { id: 1, name: "English /" },
    { id: 2, name: " French" },
  ];

  const [activeSection, setActiveSection] = useState("section1");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".navSection");
      let index = sections.length;

      while (--index && window.scrollY + 50 < sections[index].offsetTop) {}
      setActiveSection(sections[index].id);
      // console.log(activeSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [data, setData] = useState(dataFr);
  const [currentLanguage, setCurrentLanguage] = useState("french");

  const handleLanguageStateChange = (languageValue) => {
    if (languageValue === "french") {
      setData(dataFr);
      setCurrentLanguage("french");
      console.log(currentLanguage);
    } else if (languageValue === "english") {
      setData(dataEn);
      setCurrentLanguage("english");
      console.log(currentLanguage);
    }
  };

  // const sideNavLinks = [
  //   // { name: "Accueil", hrefTarget: "#section1", hrefTargetName: "section1" },
  //   { name: "Menu", hrefTarget: "#section2", hrefTargetName: "section2" },
  //   {
  //     name: "About us",
  //     hrefTarget: "#section3",
  //     hrefTargetName: "section3",
  //   },
  //   { name: "Gallerie", hrefTarget: "#section4", hrefTargetName: "section4" },
  //   { name: "Contact", hrefTarget: "#section5", hrefTargetName: "section5" },
  // ];

  return (
    <>
      <SideNavbar
        sideNavLinks={data.sideNavLinks}
        activeSection={activeSection}
      />
      <main>
        {/* <HeroBackgroundImage
        mainHeading="Au Vieux Chêne"
        secondaryHeading="Restaurant gastronomique à Fontainebleau"
        decorationImgSrc="svg/text-divider-4.svg"
        bgImage={bgImg}
      /> */}
        {/* <Hero
        heroPadding={""}
        columnLayout="even-columns"
        heroBackgroundColor={"bg-neutral-000"}
        heroHeadingText="Au Vieux Chêne"
        heroSubHeadingText="Restaurant gastronomique à Fontainebleau"
        heroText=""
        imageSrc="/images/find-us2.jpg"
        imageDescription="two children holding hands"
        imageBorderRadius=""
        imageBoxShadow="box-shadow-8"
      /> */}
        <div id="section1" className="navSection">
          {/* <HeaderElementary languagesButtons={languagesButtons} /> */}
          <HeroElementary
            columnLayout="even-columns"
            heroBackgroundColor={"bg-neutral-000"}
            heroHeadingText={data.pageHeading.pageTitle}
            heroSecondaryHeadingText={data.pageHeading.pageSubtitle}
            // heroTertiaryHeadingText="Restaurant"
            imageSrc={data.pageHeading.imageLink}
            imageDescription={data.pageHeading.imageDescription}
            handleLanguageClick={handleLanguageStateChange}
            activeLanguage={currentLanguage}
          />
        </div>

        <MenuWindowed
          id="section2"
          headingText={data.sideNavLinks[0].name}
          dishesArray={data.dishesArray}
          dishesCategoriesArray={data.dishesCategoriesArray}
        />
        {/* <OurStory /> */}

        <AboutUs
          id="section3"
          headingText={data.sideNavLinks[1].name}
          aboutUsData={data.descriptionArray}
        />

        <ImagesGallery
          id="section4"
          headingText={data.sideNavLinks[2].name}
          imagesArray={data.imagesArray}
        />
        {/* <Menu dishesArray={data.dishesArray} /> */}

        <FindUs
          id="section5"
          // street="46 rue de Bourgogne"
          // city="Fontainebleau"
          // phoneNumber="01 46 37 28 36"
          // email="LeVieuxChene@contact.com"
          headingText={data.sideNavLinks[3].name}
          findUsData={data.findUs}
          openingTimeSlotArray={data.openingTimeSlotsArray}
          display="horizontal"
        />
        {/* <Slider imagesArray={data.imagesArray} /> */}
        {/* <EssaiOrnaments /> */}
      </main>
      <Footer />
    </>
  );
}
