import Image from "next/image";

export default function SectionHeader({
  headingText,
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

      <Image
        src={"svg/text-divider-4.svg"}
        height={85}
        width={150}
        className="rotate-svg"
        alt="ornemental decoration for a section"
      />
    </div>
  );
}
