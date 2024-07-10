"use client";

// Components
import Description from "./_components/Description";
import HeroBackgroundImage from "./_components_others/HeroBackgroundImage";
import Menu from "./_components/Menu";
import ImagesGallery from "./_components/ImagesGallery";
import HeaderElementary from "./_components/HeaderElementary";
import SideNavbar from "./_components/SideNavbar";
import bgImg from "../public/images/background5.jpg";

// Data
import dataEn from "../data/data-en";
import dataFr from "../data/data-fr";

import MenuWindowed from "./_components/MenuWindowed";
import Hero from "./_components_others/Hero";
import HeroElementary from "./_components/HeroElementary";
import FindUsHorizontal from "./_components/FindUsHorizontal";
import FindUsVertical from "./_components/FindUsVertical";
import SectionHeader from "./_components/SectionHeader";
import { useEffect, useState } from "react";
import AboutUs from "./_components/AboutUs";
import Footer from "./_components/Footer";

export default function Home() {
  const [activeSection, setActiveSection] = useState("section1");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".navSection");
      let index = sections.length;

      while (--index && window.scrollY + 50 < sections[index].offsetTop) {}
      setActiveSection(sections[index].id);
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
    } else if (languageValue === "english") {
      setData(dataEn);
      setCurrentLanguage("english");
    }
  };

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
        />
        <Hero
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
          <HeroElementary
            columnLayout="even-columns"
            heroBackgroundColor={"bg-neutral-000"}
            heroHeadingText={data.pageHeading.pageTitle}
            heroSecondaryHeadingText={data.pageHeading.pageSubtitle}
            imageSrc={data.pageHeading.imageLink}
            imageDescription={data.pageHeading.imageDescription}
            handleLanguageClick={handleLanguageStateChange}
            languagesButtons={data.languagesButtons}
            activeLanguage={currentLanguage}
          />
        </div>
        <MenuWindowed
          id="section2"
          headingText={data.sideNavLinks[0].name}
          dishesArray={data.dishesArray}
          dishesCategoriesArray={data.dishesCategoriesArray}
        />

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
        {/* 
        <FindUsHorizontal
          id="section5"
          data={data}
          headingText={data.sideNavLinks[3].name}
          findUsData={data.findUs}
          openingTimeSlotArray={data.openingTimeSlotsArray}
        /> */}
        {/* <FindUsVertical
          id="section5"
          data={data}
          headingText={data.sideNavLinks[3].name}
          findUsData={data.findUs}
          openingTimeSlotArray={data.openingTimeSlotsArray}
        /> */}
        <FindUsVertical
          id="section5"
          data={data}
          headingText={data.sideNavLinks[3].name}
          findUsData={data.findUs}
          openingTimeSlotArray={data.openingTimeSlotsArray}
        />
        <FindUsHorizontal
          id="section5"
          data={data}
          headingText={data.sideNavLinks[3].name}
          findUsData={data.findUs}
          openingTimeSlotArray={data.openingTimeSlotsArray}
        />
      </main>
      <Footer />
    </>
  );
}
