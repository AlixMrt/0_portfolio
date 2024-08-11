import Image from "next/image";

export default function SectionHeader({
  headingText,
  headingSubText,
  headingColor,
  displayDecoration,
  decorationColor,
  marginBlockEnd = "10",
}) {
  return (
    <div
      className={`section-header ${decorationColor} margin-block-end-${marginBlockEnd}`}
      data-decoration={displayDecoration}
    >
      <h2 className={`heading-2 ${headingColor} `}>{headingText}</h2>
      {headingSubText && <h3>{headingSubText}</h3>}
      <Image
        src={"svg/section-divider-black.svg"}
        height={85}
        width={150}
        alt="ornamental decoration for a section"
      />
    </div>
  );
}
