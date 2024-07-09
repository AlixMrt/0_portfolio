import SectionHeader from "./SectionHeader";

export default function FindUs({
  id,
  headingText,
  // street,
  // city,
  // phoneNumber,
  // email,
  findUsData,
  openingTimeSlotArray,
  display,
}) {
  const { street, city, phoneNumber, email } = findUsData;

  if (display === "horizontal") {
    return (
      <section
        id={id}
        className="section navSection | clr-neutral-900 bg-neutral-100 text-center"
      >
        <div className="container" data-type="wide">
          <SectionHeader
            headingText={headingText}
            headingColor="clr-neutral-900"
          />
          <div className="find-us-content">
            <div className={`find-us__card | center-children `}>
              <div className="card-header">
                <h3 className="heading-3 | card-header__text">Horaires</h3>
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
                <h3 className="heading-3 | card-header__text">Adresse</h3>
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
          <div className="socialNetworks"></div>
        </div>
      </section>
    );
  } else if (display === "vertical") {
    return (
      <section
        id={id}
        className="section navSection | clr-neutral-900 bg-neutral-100 text-center"
      >
        <div className="container" data-type="wide">
          <SectionHeader headingText="Contact" headingColor="clr-neutral-900" />

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
        </div>
      </section>
    );
  }
}
