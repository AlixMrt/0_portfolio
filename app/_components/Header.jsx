"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Header({ navLinks }) {
  const pathname = usePathname();
  const isActive = (path) => path === pathname;
  return (
    <header className="site-header">
      <div className="container" data-type="widest">
        <div className="site-header__inner">
          <Link href="/">
            {/* <Image
              src={"logo/logo-3.svg"}
              height={100}
              width={100}
              className="logo"
              alt="logo of the website in the header"
            /> */}
          </Link>
          <nav aria-label="primary navigation">
            <h2 className="heading-2"></h2>
            {/* <ul className=" nav | flex-group">
              {navLinks.map((link) => {
                return (
                  <li key={link.id}>
                    <Link href={link.path}>
                      <p
                        className={`heading-3 ${
                          isActive(link.path) ? "active" : ""
                        }`}
                      >
                        {link.name}
                      </p>
                    </Link>
                  </li>
                );
              })}
            </ul> */}
          </nav>
        </div>
      </div>
    </header>
  );
}
