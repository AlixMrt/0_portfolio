import SectionHeader from "./SectionHeader";

export default function Prices() {
  const pricesArray = [
    { name: "Adult cut", price: "$25" },
    { name: "Beard trim", price: "$22" },
    { name: "Kid cut", price: "$20" },
    { name: "Hot towel shave ", price: "$25" },
    { name: "Cut and wash cut", price: "$35" },
    { name: "Adult cut", price: "$45" },
  ];

  return (
    <section className="section text-center bg-neutral-000">
      <div className="container" data-type="narrow">
        <SectionHeader
          headingText="Pricing"
          headingColor="clr-primary-900"
          displayDecoration
          decorationColor="clr-neutral-900"
        />

        <div className="grid-auto-fit">
          {pricesArray.map((service, index) => {
            return (
              <div key={service.name + index}>
                <h3 className="heading-3 clr-primary-400">{service.name}</h3>
                <p className="ff-accent fw-bold fs-600">{service.price}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
