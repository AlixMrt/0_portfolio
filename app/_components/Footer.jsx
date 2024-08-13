import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { GoClock } from "react-icons/go";
import Image from "next/image";
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
      <div className="container center-children" data-type="full-bleed">
        <div className="footer-brand | center-children mx-auto">
          <Link href="/">
            <SectionHeader
              headingText={mainTitle}
              headingColor="clr-neutral-000"
              headingSubText={subTitle}
              marginBlockEnd="1"
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
