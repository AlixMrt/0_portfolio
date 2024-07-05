import Image from "next/image";

export default function PageHeading({
  mainHeading,
  secondaryHeading,
  tertiaryHeading,
  decorationImgSrc,
}) {
  return (
    <div
      className=" page-heading |  hero__inner container center-children fading-out"
      data-type="widest"
    >
      <h1 className="heading-1 | clr-neutral-1000 text-center">
        {mainHeading}
      </h1>
      <div className="sub-headings">
        <h2 className="heading-2 clr-neutral-1000 ff-base fs-600 text-center">
          {secondaryHeading}
        </h2>
        <h2 className="heading-2 clr-neutral-1000 ff-base fs-600 text-center">
          {tertiaryHeading}
        </h2>
      </div>

      {/* {decorationImgSrc ? (
        <Image
          src={decorationImgSrc}
          height={140}
          width={300}
          className="rotate-svg"
          alt="ornemenadr1`tal decoration for the page heading"
        />
      ) : null} */}
    </div>
  );
}
