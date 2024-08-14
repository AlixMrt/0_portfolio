import SectionHeader from "../_components/SectionHeader";

export default function Testimonials() {
  const cardsArray = [
    {
      name: "Dave Boylond",
      occupation: `Guide touristique`,
      text: `John Wellington et son équipe préparent une cuisine incroyable. Chaque fois que j'ai commandé, j'ai été impressionné par la qualité. On voit qu'ils n'utilisent que des ingrédients frais et mettent beaucoup d'amour dans chaque plat qu'ils préparent !`,
      imageSlug: `images/testimonials/testimonial-01.jpg`,
      imageDescription: `A man standing outside, smiling`,
    },

    {
      name: "Marie Cavalla",
      occupation: `Passionnée de gastronomie`,
      text: `Je suis tellement heureuse d'avoir trouvé John Wellington ! La cuisine est à la hauteur de certains des meilleurs restaurants où j'ai jamais mangé, mais dans le confort de mon foyer. Chaque fois que je commande, c'est un délice qui fait saliver.`,
      imageSlug: `images/testimonials/testimonial-02.jpg`,
      imageDescription: `A woman outside with her phone`,
    },
    {
      name: "Sonia Reinhert",
      occupation: `Cliente régulière`,
      text: `"Des repas simples aux mets les plus extravagants que j'ai jamais mangés, John et son équipe livrent toujours. Chaque fois que je commande quelque chose de nouveau, j'ai hâte qu'il soit livré, sachant à quel point il sera délicieusement savoureux."`,
      imageSlug: `images/testimonials/testimonial-03.jpg`,
      imageDescription: `A woman eating a sandwich`,
    },
  ];

  return (
    <section className="testimonials section text-center">
      <div className="container" data-type="wide">
        <SectionHeader headingText="Ce que nos clients disent de nous" />

        <div className="even-columns">
          {cardsArray.map((card, index) => {
            return (
              <div
                key={card.name + index}
                className="card"
                data-type="testimonial"
              >
                <img
                  src={card.imageSlug}
                  alt={card.imageDescription}
                  className="card__img"
                />

                <div className="card__body">
                  <p>{card.text}</p>
                </div>
                <div className="card__footer">
                  <h3 className="card__heading">{card.name}</h3>
                  <p className="ff-accent clr-neutral-900">{card.occupation}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
