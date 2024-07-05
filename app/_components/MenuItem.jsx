import { LuVegan } from "react-icons/lu";

export default function menuItem({
  name,
  price,
  description,
  isVegetarian = false,
  isVegan = false,
}) {
  return (
    // Styling 1
    <div className="menu-item ">
      <div className="item-head">
        <div className="item-name-container">
          <p className="item-name">
            {name} <span>{isVegetarian ? "(Végétarien)" : null}</span>
            <span>{isVegan ? "(Végan)" : null}</span>
          </p>
        </div>
        <div className="item-dash" />
        <div className="item-price">
          <p>{`${price} €`}</p>
        </div>
      </div>
      <div className="item-description">
        <p>{description}</p>
      </div>
      <div className="items-divider"></div>
    </div>

    // Styling 2
    // <div className="menu-item ">
    //   <div className="item-head">
    //     <div className="item-name-container">
    //       <div className="item-name">
    //         {name} <span>{isVegetarian ? "(Végétarien) " : null}</span>
    //         <span>{isVegan ? "(Végan) " : null}</span>
    //         <span>{`- ${price} €`}</span>
    //       </div>
    //     </div>

    //     <div className="item-description">
    //       <p>{description}</p>
    //     </div>
    //   </div>
    //   <div className="item-dash" />
    //   <div className="item-price"></div>

    //   <div className="items-divider"></div>
    // </div>

    // Styling 3
    // <div className="menu-item ">
    //   <div className="item-head">
    //     <div className="item-name-container">
    //       <p className="item-name">
    //         {name} <span>{isVegetarian ? "(Végétarien)" : null}</span>
    //         <span>{isVegan ? "(Végan)" : null}</span>
    //       </p>
    //       <div className="item-description">
    //         <p>{description}</p>
    //       </div>
    //     </div>
    //     <div className="right-column">
    //       <div className="item-dash" />
    //       <div className="item-price">
    //         <p>{`${price} €`}</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
