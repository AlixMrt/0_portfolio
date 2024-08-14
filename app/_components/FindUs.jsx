import SectionHeader from "./SectionHeader";
import SocialMedia from "./SocialMedia";

export default function FindUs({
  id,
  headingText,
  address,
  openingHours,
  socialMedia,
}) {
  const { street, city, phoneNumber, email } = address;

  return (
    <section id={id} className="section navSection find-us | text-center">
      <div className="container" data-type="wide">
        <SectionHeader
          headingText={headingText}
          headingColor="clr-neutral-900"
        />
        <div className="find-us-content">
          <div className="find-us-inner-content">
            <div className={`find-us__card | center-children `}>
              <h3 className="heading-3 | card-header__text">Horaires</h3>
              <div className="card-main card-hours">
                {openingHours.map((openingTimeSlot) => {
                  return (
                    <div key={openingTimeSlot.days}>
                      <p className="days">{openingTimeSlot.days}</p>
                      <p>{openingTimeSlot.hours}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="card-divider"></div>
            <div className={`find-us__card | center-children `}>
              <h3 className="heading-3 | card-header__text">Adresse</h3>
              <div className="card-main card-address">
                <div>
                  <p>{street}</p>
                  <p>{city}</p>
                </div>

                <p>{phoneNumber}</p>
                <p>{email}</p>
              </div>
            </div>
          </div>

          <SocialMedia socialMedia={socialMedia} />
        </div>
      </div>
    </section>
  );
}
