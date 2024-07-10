import Image from "next/image";
import PageHeading from "../_components/PageHeading";

export default function HeroBackgroundImage({
  mainHeading,
  secondaryHeading,
  decorationImgSrc,
  bgImage,
}) {
  return (
    <section className="hero-background-image | section-background">
      <Image
        alt="background image : a dish"
        src={bgImage.src}
        quality={100}
        fill
        sizes="100vw"
        style={{ objectFit: "cover", zIndex: -1 }}
        priority
        className="fading-out-image"
      />

      <PageHeading
        mainHeading={mainHeading}
        secondaryHeading={secondaryHeading}
        decorationImgSrc={decorationImgSrc}
      />
    </section>
  );
}
