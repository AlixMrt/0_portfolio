import SectionHeader from "./SectionHeader";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import SocialMedia from "./SocialMedia";

export default function FindUsVertical({
  id,
  headingText,
  findUsData,
  openingTimeSlotArray,
}) {
  const { street, city, phoneNumber, email } = findUsData;

  return (
    <section
      id={id}
      className="section navSection find-us-vertical |  clr-neutral-900 text-center"
    >
      <div className="container" data-type="narrow">
        <SectionHeader
          headingText={headingText}
          headingColor="clr-neutral-900"
        />

        <div className="find-us-content">
          <div className="find-us-hours">
            {openingTimeSlotArray.map((openingTimeSlot) => {
              return (
                <div key={openingTimeSlot.days}>
                  <p className="days">
                    {openingTimeSlot.days} {openingTimeSlot.hours}
                  </p>
                </div>
              );
            })}
          </div>
          <div>
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
          <div className="find-us-divider"></div>
          <SocialMedia />
        </div>
      </div>
    </section>
  );
}
