export default function menuItem2({
  name,
  price,
  description,
  isVegetarian = false,
  isVegan = false,
}) {
  return (
    <div className="menu-item-2">
      <div className="item-head">
        <div className="item-name-container">
          <div className="item-name">
            <p>
              {name} <span>{isVegetarian ? "(Végétarien) " : null}</span>
              <span>{isVegan ? "(Végan) " : null}</span>
              <span>{`- ${price} €`}</span>
            </p>
          </div>
        </div>
        <div className="item-description">
          <p>{description}</p>
        </div>
      </div>
      <div className="item-dash" />
      <div className="item-price"></div>
    </div>
  );
}
