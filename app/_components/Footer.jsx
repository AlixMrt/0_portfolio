import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { GoClock } from "react-icons/go";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "./SectionHeader";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container center-children" data-type="full-bleed">
        <div className="footer-brand | center-children mx-auto">
          <Link href="/">
            <SectionHeader
              headingText={"Au Vieux Chêne"}
              headingColor="clr-neutral-000"
              headingSubText="Restaurant Gastronomique - Fontainebleau"
              marginBlockEnd="1"
            />
          </Link>
        </div>

        <div className="footer-copyright ">
          <p>2024 Au Vieux Chêne. All Rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
