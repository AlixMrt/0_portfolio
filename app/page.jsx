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
import CarteExhaustive from "./_components/CarteExhaustive";
import CarteOneColumn from "./_components/CarteOneColumn";
import CarteTwoColumns from "./_components/CarteTwoColumns";
// About us
import AboutUs from "./_components/AboutUs";
// Gallery
import ImagesSection from "./_components/ImagesSection";
// Find us
import FindUs from "./_components/FindUs";
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
        sideNavLinks={data.navBar.links}
        activeSection={activeSection}
        imageSrc={data.navBar.imageLink}
        imageDescription={data.navBar.imageDescription}
        heading={data.navBar.heading}
      />
      <main>
        <div id="section1" className="navSection">
          <HeroElementary
            heroHeadingText={data.hero.pageTitle}
            heroSecondaryHeadingText={data.hero.pageSubtitle}
            imageSrc={data.hero.imageLink}
            imageDescription={data.hero.imageDescription}
            ornamentImgSrc={data.hero.ornamentLink}
            ornamentImgDescription={data.hero.ornamentDescription}
            handleLanguageClick={handleLanguageStateChange}
            languagesButtons={data.hero.languagesButtons}
            activeLanguage={currentLanguage}
          />
        </div>
        <CarteExhaustive
          id="section2"
          headingText={data.navBar.links[0].name}
          dishesArray={data.carte.dishesArray}
          dishesCategoriesArray={data.carte.dishesCategoriesArray}
          // vegetarianWording={data.vegetarianWording}
          // veganWording={data.veganWording}
        />
        <CarteOneColumn
          id="section2"
          headingText={data.navBar.links[0].name}
          dishesArray={data.carte.dishesArray}
          dishesCategoriesArray={data.carte.dishesCategoriesArray}
          // vegetarianWording={data.vegetarianWording}
          // veganWording={data.veganWording}
        />
        <CarteTwoColumns
          id="section2"
          headingText={data.navBar.links[0].name}
          dishesArray={data.carte.dishesArray}
          dishesCategoriesArray={data.carte.dishesCategoriesArray}
          // vegetarianWording={data.vegetarianWording}
          // veganWording={data.veganWording}
        />

        <OrganizedMenu
          id="section2"
          headingText={data.navBar.links[0].name}
          menusArray={data.menu.menusArray}
          menusCategoriesArray={data.menu.menusCategoriesArray}
          menusOtherCategoriesArray={data.menu.menusOtherCategoriesArray}
          // vegetarianWording={data.vegetarianWording}
          // veganWording={data.veganWording}
        />

        <AboutUs
          id="section3"
          headingText={data.navBar.links[1].name}
          aboutUsData={data.aboutUs.descriptionArray}
        />
        <ImageSlider
          id="section4"
          headingText={data.navBar.links[2].name}
          imagesArray={data.gallery.imagesArray}
        />
        {/* <ImagesSection
          id="section4"
          headingText={data.navBar.links[2].name}
          imagesArray={data.gallery.imagesArray}
        /> */}

        <FindUs
          id="section5"
          headingText={data.navBar.links[3].name}
          address={data.findUs.address}
          openingHours={data.findUs.openingHours}
          socialMedia={data.findUs.socialMedia}
        />
      </main>
      <Footer
        mainTitle={data.footer.mainTitle}
        subTitle={data.footer.subTitle}
        paragraphText={data.footer.paragraphText}
        optionalTextDivider={data.footer.optionalTextDivider}
      />
    </>
  );
}
