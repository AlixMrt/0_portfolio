import Image from "next/image";
import SectionHeader from "./SectionHeader";

export default function ImagesSection({ id, headingText, imagesArray }) {
  return (
    <section
      id={id}
      className="section navSection | clr-neutral-900 bg-neutral-000 text-center"
    >
      <div className="container" data-type="wide">
        <SectionHeader
          headingText={headingText}
          headingColor="clr-neutral-900"
        />

        <div className="grid-auto-fit images-section clr-neutral-900">
          {imagesArray.map((singleImage, index) => {
            return (
              <div key={singleImage.name + index}>
                <figure className="interactive-figure">
                  <div className="image-container">
                    <Image
                      src={`/images/slider/${singleImage.imgSrc}.jpg`}
                      width={2000}
                      height={600}
                      alt={singleImage.description}
                      className="mx-auto fading-img"
                    />
                  </div>
                  <figcaption>
                    <h3 className="heading-3">{singleImage.name}</h3>
                    <p>{singleImage.description}</p>
                  </figcaption>
                </figure>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
