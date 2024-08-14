import Description from "./Description";
import SectionHeader from "./SectionHeader";

export default function AboutUs({ id, headingText, aboutUsData }) {
  return (
    <section
      id={id}
      className="section navSection | about-us clr-neutral-900 bg-neutral-000 "
    >
      <SectionHeader headingText={headingText} marginBlockEnd="0" />

      <Description
        fontColor="clr-neutral-1000"
        findUsBgColor="bg-neutral-000"
        findUsInnerBgColor="bg-neutral-000"
        imagePosition="left"
        descriptionData={aboutUsData.restaurant}
      />
      <Description
        fontColor="clr-neutral-1000"
        findUsBgColor="bg-neutral-000"
        findUsInnerBgColor="bg-neutral-000"
        imagePosition="right"
        descriptionData={aboutUsData.chef}
      />
    </section>
  );
}
