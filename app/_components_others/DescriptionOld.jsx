import Image from "next/image";
import SectionHeader from "../_components/SectionHeader";

export default function DescriptionOld() {
  const descriptionsArray = [
    {
      heading: "Equipe soudée",
      text: `Notre equipe travaille avec notre chef etoilé Guy Borel au renouvellement annuel de la carte `,
      logoSlug: "icons/chef.svg",
      logoDescription: "logo of a chef",
    },
    {
      heading: "Ingredients frais",
      text: `Nous utilisons des produits de saison pour offrir à nos clients une cuisine de qualité, pleine de saveurs authentiques et de nutriments`,
      logoSlug: "icons/watermelon.svg",
      logoDescription: "logo of an apple",
    },
    {
      heading: "Circuits courts",
      text: `Nous fonctionnons uniquement en circuit-courts pour soutenir la production de produits de nos terroirs.`,
      logoSlug: "icons/map.svg",
      logoDescription: "logo of a clock",
    },
  ];

  return (
    <section className="section | bg-neutral-000 text-center">
      <div className="container">
        <SectionHeader headingText="Nous faisons de la super nourriture!" />

        <div className="grid-auto-fit">
          {descriptionsArray.map((description, index) => {
            return (
              <div className="description-old">
                <Image
                  key={description.heading + index}
                  src={description.logoSlug}
                  alt={description.logoDescription}
                  width={100}
                  height={100}
                />
                <h3 className="fs-500 fw-bold clr-neutral-900 heading-3">
                  {description.heading}
                </h3>
                <p>{description.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
