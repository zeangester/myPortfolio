import { useEffect, useState } from "react";
import { navLinks } from "../data.js";

function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      let current = "home";

      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);

        if (section && section.getBoundingClientRect().top <= 150) {
          current = link.id;
        }
      });

      setActive(current);
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 
  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  let navClass = "nav";
  let buttonClass = "nav-toggle";
  let listClass = "navLinks";

  if (menuOpen) {
    navClass = "nav nav-open";
    buttonClass = "nav-toggle open";
    listClass = "navLinks open";
  }

  return (
    <header className="nav-wrap">
      <nav className={navClass}>
        <button
          type="button"
          className={buttonClass}
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={listClass}>
          {navLinks.map((link) => {
            let linkClass = "";

            if (active === link.id) {
              linkClass = "active";
            }

            return (
              <li key={link.id}>
                <a href={"#" + link.id} className={linkClass} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;