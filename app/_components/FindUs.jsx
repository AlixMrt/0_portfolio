export default function FindUs({
  street,
  city,
  phoneNumber,
  email,
  openingTimeSlotArray,
  display,
}) {
  if (display === "horizontal") {
    return (
      <div className="find-us-content | container" data-type="regular">
        <div className={`find-us__card | center-children `}>
          <div className="card-header">
            {/* <h3 className="heading-3 | card-header__text">Horaires</h3> */}
          </div>
          <div className="card-main">
            {openingTimeSlotArray.map((openingTimeSlot) => {
              return (
                <div>
                  <p className="days">{openingTimeSlot.days}</p>
                  <p>{openingTimeSlot.hours}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="card-divider"></div>
        <div className={`find-us__card | center-children `}>
          <div className="card-header">
            {/* <h3 className="heading-3 | card-header__text">Adresse</h3> */}
          </div>
          <div className="card-main">
            <div id="border-bottom"></div>
            <div>
              <p>{street}</p>
              <p>{city}</p>
              <p>{phoneNumber}</p>
              <p>{email}</p>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (display === "vertical") {
    return (
      <div className="find-us-content-2">
        <div className="find-us-hours">
          {openingTimeSlotArray.map((openingTimeSlot) => {
            return (
              <div>
                <p className="days">
                  {openingTimeSlot.days} {openingTimeSlot.hours}
                </p>
                <p></p>
              </div>
            );
          })}
        </div>
        <div className="address">
          <p>
            {street}, {city}
          </p>
        </div>
        <div className="contact">
          <p>{email}</p>
          <p> {phoneNumber}</p>
        </div>
      </div>
    );
  }
}
