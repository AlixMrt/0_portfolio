import Image from "next/image";

export default function PageHeading({
  mainHeading,
  secondaryHeading,
  decorationImgSrc,
}) {
  const { definition, city } = secondaryHeading;
  return (
    <div
      className=" page-heading |  hero__inner container center-children fading-out"
      data-type="widest"
    >
      <h1 className="heading-1 |  text-center">{mainHeading}</h1>
      <div className="heading-divider"></div>
      {/* <img src={decorationImgSrc} alt="" /> */}
      <div className="sub-headings">
        <p className="heading-4 ff-base text-center">
          {definition} <br /> {city}
        </p>
      </div>
    </div>
  );
}
