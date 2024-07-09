"use client";

import { useState } from "react";
import SectionHeader from "./SectionHeader";
import MenuItem1 from "./menuItem-1";
import MenuItem2 from "./menuItem-2";
import MenuItem3 from "./menuItem-3";

export default function MenuWindowed({
  id,
  headingText,
  dishesArray,
  dishesCategoriesArray,
}) {
  const { Entrées, Plats, Desserts, Vins } = dishesArray;

  const dishCategories = [
    { name: dishesCategoriesArray[0] },
    { name: dishesCategoriesArray[1] },
    { name: dishesCategoriesArray[2] },
    { name: dishesCategoriesArray[3] },
  ];

  const [displayedDishCategory, setDisplayedDishCategory] = useState("Entrées");

  return (
    <section
      id={id}
      className="section navSection | menu-windowed bg-neutral-000"
    >
      <div className="container" data-type="regular">
        <SectionHeader headingText={headingText} displayDecoration />

        <ul className="menu-windowed-links ">
          {dishCategories.map((category, index) => {
            return (
              <h3
                className={`menu-windowed-link  ${
                  displayedDishCategory === category.name ? "active-link" : ""
                }`}
                onClick={() => setDisplayedDishCategory(category.name)}
              >
                {category.name}
              </h3>
            );
          })}
        </ul>

        <div className="menu-menu ">
          <div className="individual-menu">
            <h3 className="heading-3">{displayedDishCategory}</h3>
            <div className="menu-windowed-divider"></div>
            <div className="menu_menu_items">
              {dishesArray[displayedDishCategory].map((item, index) => (
                <MenuItem2
                  key={item.name + index}
                  name={item.name}
                  price={item.price}
                  description={item.description}
                  isVegetarian={item.isVegetarian}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
