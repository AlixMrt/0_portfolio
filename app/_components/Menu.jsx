// import { SubHeading } from "../../components";
import SectionHeader from "./SectionHeader";
import MenuItem1 from "./menuItem-1";
import MenuItem2 from "./menuItem-2";
// import { images } from "../../constants";

export default function Menu({ dishesArray }) {
  const { Entrées, Plats, Desserts, Vins } = dishesArray;

  return (
    <section id="menu" className="section | menu bg-neutral-000">
      <div className="container" data-type="regular">
        <SectionHeader headingText="Menu" displayDecoration />

        <div className="menu-menu ">
          <div className="individual-menu">
            <h3 className="heading-3">Entrées</h3>
            <div className="menu_menu_items">
              {Entrées.map((starter, index) => (
                <MenuItem2
                  key={starter.name + index}
                  name={starter.name}
                  price={starter.price}
                  description={starter.description}
                  isVegetarian={starter.isVegetarian}
                  isVegan={starter.isVegan}
                />
              ))}
            </div>
          </div>
          <div className="individual-menu">
            <h3 className="heading-3">Plats</h3>
            <div className="menu_menu_items">
              {Plats.map((dish, index) => (
                <MenuItem3
                  key={dish.name + index}
                  name={dish.name}
                  price={dish.price}
                  description={dish.description}
                  isVegetarian={dish.isVegetarian}
                  isVegan={dish.isVegan}
                />
              ))}
            </div>
          </div>
          <div className="individual-menu">
            <h3 className="heading-3">Desserts</h3>
            <div className="menu_menu_items">
              {Desserts.map((desert, index) => (
                <MenuItem1
                  key={desert.name + index}
                  name={desert.name}
                  price={desert.price}
                  description={desert.description}
                  isVegetarian={desert.isVegetarian}
                  isVegan={desert.isVegan}
                />
              ))}
            </div>
          </div>

          <div className="individual-menu">
            <h3 className="heading-3">Vins</h3>
            <div className="menu_menu_items">
              {Vins.map((wine, index) => (
                <MenuItem1
                  key={wine.name + index}
                  name={wine.name}
                  price={wine.price}
                  description={wine.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
