import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { GoClock } from "react-icons/go";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container center-children" data-type="wide">
        <div className="footer-brand | center-children mx-auto">
          {/* <Link href="/">
            <Image
              src={"logo/logo-3.svg"}
              height={100}
              width={100}
              className="logo | mx-auto"
              alt="logo of the website in the footer"
            />
          </Link> */}
          <div>
            <h2 className="heading-1">La Belle Table</h2>
          </div>

          <div className="social-media-icons">
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>

        <div className="footer-copyright ">
          <p>2024 La Belle Table. All Rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
