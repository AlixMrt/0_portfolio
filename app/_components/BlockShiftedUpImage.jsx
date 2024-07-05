import SectionHeader from "./SectionHeader";

export default function BlockShiftedUpImage() {
  return (
    <section className="section block-shifted-up-image" id="about">
      <div className="container" data-type="wide">
        <div className="even-columns ">
          <div>
            <picture>
              <img
                className="shift-up box-shadow-1"
                src="images/shifted-up-image.webp"
                alt="several plates of food seen from above on a white table, some with figs and basil and others with grapefruit and sliced bananas with a brown sauce on top"
              />
            </picture>
          </div>
          <div className="mx-auto">
            <SectionHeader
              headingText="Amazing food without the hassle"
              displayDecoration
            />

            <p>
              Wether it's for a romantic evening with your significant other or
              if you're hosting a large party and need food for a big group
              we're here to help.
            </p>
            <p>
              We can cater to whatever you needs are and ensure that our
              delicious food is delivered at the perfect moment fresh, hot and
              ready to eat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
