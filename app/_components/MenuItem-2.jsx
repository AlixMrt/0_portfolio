export default function menuItem2({
  name,
  price,
  description,
  isVegetarian = false,
  isVegan = false,
  vegetarianWording,
  veganWording,
}) {
  return (
    <div className="menu-item-2">
      <div className="item-head">
        <div className="item-name-container">
          <p className="item-name">
            {name} <span>{isVegetarian ? vegetarianWording : null}</span>
            <span>{isVegan ? veganWording : null}</span>
            <span>{price && `- ${price}€`}</span>
          </p>
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
