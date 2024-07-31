"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderAbsolute({ navLinks }) {
  const pathname = usePathname();
  const isActive = (path) => path === pathname;

  return (
    <header className="header-absolute container" data-type="widest">
      <Link href="/">
        <Image
          src={"logo/logo-3.svg"}
          height={100}
          width={100}
          className="logo"
        />
      </Link>
      <nav>
        <ul className="header-absolute__nav  nav | flex-group mx-auto  ">
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
        </ul>
      </nav>
    </header>
  );
}
