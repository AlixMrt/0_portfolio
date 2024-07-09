const Navbar = ({ sideNavLinks, activeSection }) => {
  return (
    <nav className="site-side-navbar">
      <div className="site-side-navbar-container">
        {/* <a className="logo-container">
        <img src="/svg/white.svg" alt="" />
        <h4 className="heading-4">Au Vieux Chêne</h4>
      </a> */}
        <a href="#section1" className="logo-container">
          <img
            className={` mx-auto ${
              activeSection === "section1" ? "activeImg" : ""
            }`}
            src="/svg/white.svg"
            alt=""
          />
          <h4
            className={` side-navbar-link heading-4 ${
              activeSection === "section1" ? "activeSideNavLink" : ""
            }`}
          >
            Au Vieux Chêne
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

export default Navbar;
