const SideNavbar = ({
  sideNavLinks,
  activeSection,
  imageSrc,
  imageDescription,
  heading,
}) => {
  return (
    <nav className="site-side-navbar">
      <div className="site-side-navbar-container">
        <a href="#section1" className="logo-container">
          <img className={` mx-auto`} src={imageSrc} alt={imageDescription} />
          <h4
            className={` side-navbar-link heading-4 ${
              activeSection === "section1" ? "activeSideNavLink" : ""
            }`}
          >
            {heading}
          </h4>
        </a>

        <ul className="side-navbar-container">
          {sideNavLinks.map((sideNavLink) => {
            return (
              <li
                className="side-navbar-link-li"
                key={sideNavLink.name}
                href={sideNavLink.hrefTarget}
              >
                <a
                  className={` side-navbar-link heading-4  ${
                    activeSection === sideNavLink.hrefTargetName
                      ? "activeSideNavLink"
                      : ""
                  }`}
                  href={sideNavLink.hrefTarget}
                >
                  {sideNavLink.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default SideNavbar;
