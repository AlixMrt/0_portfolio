import Image from "next/image";
import SectionHeader from "./SectionHeader";

export default function ImagesGallery({ imagesArray }) {
  return (
    <section
      id="gallery"
      className="section | clr-neutral-900 bg-neutral-100 text-center"
    >
      <div className="container" data-type="wide">
        <SectionHeader
          headingText="Gallerie Photo"
          headingColor="clr-neutral-900"
        />

        <div className="grid-auto-fit images-gallery clr-neutral-900">
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
                    <div id="border-bottom"></div>
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
