"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderAbsolute({ id, languagesButtons }) {
  return (
    <header id={id} className="header-elementary " data-type="widest">
      <nav>
        <ul className="elementary--nav">
          <li>
            <a>
              <p className={"heading-5"}>English </p>
            </a>
          </li>
          <p className="heading-5"> / </p>
          <li>
            <a>
              <p className={"heading-5"}>Français</p>
            </a>
          </li>

          {/* {languagesButtons.map((link) => {
            return (
              <li key={link.id}>
                <a>
                  <p
                    className={`heading-5 ${
                      isActive(link.path) ? "active" : ""
                    }`}
                  >
                    {link.name}
                  </p>
                </a>
              </li>
            );
          })} */}
        </ul>
      </nav>
    </header>
  );
}
