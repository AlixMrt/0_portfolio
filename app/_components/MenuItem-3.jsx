export default function menuItem3({
  name,
  price,
  description,
  isVegetarian = false,
  isVegan = false,
}) {
  return (
    <div className="menu-item-3">
      <div className="item-head">
        <div className="item-name-container">
          <p className="item-name">
            {name} <span>{isVegetarian ? "(Végétarien)" : null}</span>
            <span>{isVegan ? "(Végan)" : null}</span>
          </p>
          <div className="item-description">
            <p>{description}</p>
          </div>
        </div>
        <div className="right-column">
          <div className="item-dash" />
          <div className="item-price">
            <p>{`${price} €`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
