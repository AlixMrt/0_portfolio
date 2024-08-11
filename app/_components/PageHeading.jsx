import Image from "next/image";

export default function PageHeading({
  mainHeading,
  secondaryHeading,
  decorationImgSrc,
}) {
  return (
    <div
      className=" page-heading |  hero__inner container center-children fading-out"
      data-type="widest"
    >
      <h1 className="heading-1 |  text-center">{mainHeading}</h1>
      <div className="heading-divider"></div>
      <div className="sub-headings">
        <h2 className="heading-2 ff-base fs-600 text-center">
          {secondaryHeading}
        </h2>
      </div>
    </div>
  );
}
