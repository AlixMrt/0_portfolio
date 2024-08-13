import Image from "next/image";
import { defaultTextDividerSrc } from "@/data/data-fr";

export default function SectionHeader({
  headingText,
  headingSubText,
  headingColor,
  displayDecoration,
  decorationColor,
  marginBlockEnd = "10",
  optionalTextDivider = null,
}) {
  //
  //

  //
  //
  return (
    <div
      className={`section-header ${decorationColor} margin-block-end-${marginBlockEnd}`}
      data-decoration={displayDecoration}
    >
      <h2 className={`heading-2 ${headingColor} `}>{headingText}</h2>
      {headingSubText && <p>{headingSubText}</p>}
      <Image
        src={!optionalTextDivider ? defaultTextDividerSrc : optionalTextDivider}
        height={85}
        width={150}
        alt="ornamental decoration for a section"
      />
    </div>
  );
}
