import Link from "next/link";
import SectionHeader from "./SectionHeader";

export default function Footer({
  mainTitle,
  subTitle,
  paragraphText,
  optionalTextDivider,
}) {
  return (
    <footer className="site-footer">
      <div
        className="container footer-main-content center-children"
        data-type="full-bleed"
      >
        <div className="footer-brand | center-children mx-auto">
          <Link href="/">
            <SectionHeader
              headingText={mainTitle}
              headingSubText={subTitle}
              optionalTextDivider={optionalTextDivider}
            />
          </Link>
        </div>

        <div className="footer-copyright ">
          <p>{paragraphText}</p>
        </div>
      </div>
    </footer>
  );
}
