import SectionHeader from "./SectionHeader";
import MenuItem1 from "./menuItem-1";
import MenuItem2 from "./menuItem-2";

export default function Menu({
  id,
  dishesArray,
  dishesCategoriesArray,
  vegetarianWording,
  veganWording,
}) {
  // const { Entrées, Plats, Desserts, Vins } = dishesArray;
  console.log(dishesCategoriesArray);
  return (
    <section id={id} className="section | navSection menu bg-neutral-000">
      <div className="container" data-type="regular">
        <SectionHeader headingText="Menu" displayDecoration />

        <div className="menu-menu ">
          {dishesCategoriesArray.map((dishCategory, index) => {
            return (
              <div key={index} className="individual-menu">
                <h3 className="heading-3">{dishCategory}</h3>
                <div className="menu-divider"></div>

                <div className="menu_menu_items">
                  {dishesArray[dishCategory].map((starter, index) => (
                    <MenuItem2
                      key={starter.name + index}
                      name={starter.name}
                      price={starter.price}
                      description={starter.description}
                      isVegetarian={starter.isVegetarian}
                      isVegan={starter.isVegan}
                      vegetarianWording={vegetarianWording}
                      veganWording={veganWording}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
