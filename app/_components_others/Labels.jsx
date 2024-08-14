import SectionHeader from "../_components/SectionHeader";

export default function Labels() {
  const labelsArray = [
    {
      name: "Hair cutting",
      description:
        "A quick clean up or a totally new style, we have you covered.",
    },
    {
      name: "Hot shaves",
      description:
        "There is no better way to pamper yourself than to have a hot shave.",
    },
    {
      name: "Beard cleanup",
      description:
        "Our barbers are expects when it comes to working on beards.",
    },
    {
      name: "Hair coloring",
      description: "Expert color work to help you keep looking your best.",
    },
    {
      name: "Kids",
      description:
        "Bring your kids with you while your at it, we love working them them too!",
    },
    {
      name: "Products",
      description: "We carry a wide range of hair and beard products.",
    },
  ];

  return (
    <section className="section text-center bg-primary-100">
      <div className="container">
        <SectionHeader headingText="Our services" />

        <div className="grid-auto-fit | margin-block-end-10">
          {labelsArray.map((service, index) => {
            return (
              <div key={service.name + index} className="label">
                <h3 className="heading-3 label__heading">{service.name}</h3>
                <p>{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
