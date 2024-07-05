"use client";

import { useState } from "react";
import SectionHeader from "./SectionHeader";
import MenuItem1 from "./menuItem-1";
import MenuItem2 from "./menuItem-2";
import MenuItem3 from "./menuItem-3";

export default function MenuWindowed({ dishesArray }) {
  const { Entrées, Plats, Desserts, Vins } = dishesArray;

  const dishCategories = [
    { name: "Entrées" },
    { name: "Plats" },
    { name: "Desserts" },
    { name: "Vins" },
  ];

  const [displayedDishCategory, setDisplayedDishCategory] = useState("Entrées");

  return (
    <section className="section | menu-windowed bg-neutral-000">
      <div className="container" data-type="regular">
        <SectionHeader headingText="Menu" displayDecoration />

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
              {dishesArray[displayedDishCategory].map((starter, index) => (
                <MenuItem2
                  key={starter.name + index}
                  name={starter.name}
                  price={starter.price}
                  description={starter.description}
                  isVegetarian={starter.isVegetarian}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
