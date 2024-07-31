"use client";

import { useState } from "react";
import SectionHeader from "./SectionHeader";
import MenuItem2 from "./menuItem-2";

export default function OrganizedMenu({
  id,
  headingText,
  menusArray,
  menusCategoriesArray,
  menusOtherCategoriesArray,
  vegetarianWording,
  veganWording,
}) {
  const [displayedMenu, setDisplayedMenu] = useState(menusCategoriesArray[0]);

  return (
    <section
      id={id}
      className="section navSection | organized-menu bg-neutral-000"
    >
      <div className="container" data-type="regular">
        <SectionHeader headingText={headingText} displayDecoration />

        <ul className="menu-windowed-links">
          {menusCategoriesArray.map((menuCategory, index) => {
            return (
              <div
                key={index}
                id={displayedMenu === menuCategory ? "active-link" : ""}
                className={`menu-windowed-link  
                `}
                onClick={() => setDisplayedMenu(menuCategory)}
              >
                {menuCategory}
              </div>
            );
          })}
        </ul>
        <div className="menu-list-divider"></div>
        <ul className="others-menu-windowed-links">
          {menusOtherCategoriesArray.map((menuCategory, index) => {
            return (
              <div
                key={index}
                id={displayedMenu === menuCategory ? "active-link" : ""}
                className={`menu-windowed-link  
                `}
                onClick={() => setDisplayedMenu(menuCategory)}
              >
                {menuCategory}
              </div>
            );
          })}
        </ul>

        <div className="menu-menu ">
          <div className="individual-menu">
            <h3 className="heading-3">
              {`${menusArray[displayedMenu].menuName}`} <br />{" "}
              {menusArray[displayedMenu].menuPrice && (
                <span className="menu-price">{`${menusArray[displayedMenu].menuPrice} €`}</span>
              )}
            </h3>

            <div className="menu-divider"></div>

            {menusArray[displayedMenu].menuCategoriesArray.map(
              (menuCategory, index) => {
                return (
                  <div key={index} className="sub-individual-menu">
                    <h4 className="heading-4">{menuCategory}</h4>
                    <div className="sub-menu-divider"></div>

                    <div className="menu_menu_items">
                      {menusArray[displayedMenu].menuCategories[
                        menuCategory
                      ].map((dish, index) => (
                        <MenuItem2
                          key={dish.name + index}
                          name={dish.name}
                          description={dish.description}
                          isVegetarian={dish.isVegetarian}
                          isVegan={dish.isVegan}
                          vegetarianWording={vegetarianWording}
                          veganWording={veganWording}
                        />
                      ))}
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
