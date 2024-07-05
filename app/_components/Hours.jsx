import SectionHeader from "./SectionHeader";

export default function Hours() {
  const timetableArray = [
    { day: "Monday", hours: "11:00 - 16:00" },
    { day: "Tuesday", hours: "9:00 - 18:00" },
    { day: "Wednesday", hours: "9:00 - 18:00" },
    { day: "Thursday", hours: "9:00 - 18:00" },
    { day: "Friday", hours: "9:00 - 21:00" },
    { day: "Saturday", hours: "9:00 - 21:00" },
    { day: "Sunday", hours: "9:00 - 18:00" },
  ];

  return (
    <section className="section text-center bg-primary-100">
      <div className="container" data-type="full-bleed">
        <SectionHeader headingText="Hours" displayDecoration />

        <div className="hours ">
          {timetableArray.map((timetableSlot, index) => {
            return (
              <div key={timetableSlot.day + index}>
                <h3 className="heading-3 clr-primary-400">
                  {timetableSlot.day}
                </h3>
                <p className="fs-400">{timetableSlot.hours}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
