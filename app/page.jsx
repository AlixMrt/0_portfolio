"use client";

// // HOOKS // //
import { useEffect, useState } from "react";

// // DATA // //
import dataEn from "../data/data-en";
import dataFr from "../data/data-fr";

// // COMPONENTS // //
// Navbar
import SideNavbar from "./_components/SideNavbar";
// Hero
import HeroElementary from "./_components/HeroElementary";
// Restaurant Menu
import Menu from "./_components/Menu";
import MenuWindowedOneColumn from "./_components/MenuWindowedOneColumn";
import MenuWindowedTwoColumns from "./_components/MenuWindowedTwoColumns";
// About us
import AboutUs from "./_components/AboutUs";
// Gallery
import ImagesSection from "./_components/ImagesSection";
// Find us
import FindUsHorizontal from "./_components/FindUsHorizontal";
// Footer
import Footer from "./_components/Footer";
import ImageSlider from "./_components/ImageSlider_1";
import OrganizedMenu from "./_components/OrganizedMenu";

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
        <Menu
          id="section2"
          dishesArray={data.dishesArray}
          dishesCategoriesArray={data.dishesCategoriesArray}
          // vegetarianWording={data.vegetarianWording}
          // veganWording={data.veganWording}
        />
        <MenuWindowedOneColumn
          id="section2"
          headingText={data.sideNavLinks[0].name}
          dishesArray={data.dishesArray}
          dishesCategoriesArray={data.dishesCategoriesArray}
          // vegetarianWording={data.vegetarianWording}
          // veganWording={data.veganWording}
        />
        <MenuWindowedTwoColumns
          id="section2"
          headingText={data.sideNavLinks[0].name}
          dishesArray={data.dishesArray}
          dishesCategoriesArray={data.dishesCategoriesArray}
          // vegetarianWording={data.vegetarianWording}
          // veganWording={data.veganWording}
        />

        <OrganizedMenu
          id="section2"
          headingText={data.sideNavLinks[0].name}
          menusArray={data.menusArray}
          menusCategoriesArray={data.menusCategoriesArray}
          menusOtherCategoriesArray={data.menusOtherCategoriesArray}
          // vegetarianWording={data.vegetarianWording}
          // veganWording={data.veganWording}
        />

        <AboutUs
          id="section3"
          headingText={data.sideNavLinks[1].name}
          aboutUsData={data.descriptionArray}
        />
        <ImageSlider
          id="section4"
          headingText={data.sideNavLinks[2].name}
          imagesArray={data.imagesArray}
        />
        {/* <ImagesSection
          id="section4"
          headingText={data.sideNavLinks[2].name}
          imagesArray={data.imagesArray}
        /> */}

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
