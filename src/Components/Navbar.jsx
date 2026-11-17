import { useEffect, useState } from "react";

function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  function getCurrentSection() {
    const sections = ["home", "about", "projects", "tech", "contact"];
    const offset = 180;

    for (let i = sections.length - 1; i >= 0; i -= 1) {
      const id = sections[i];
      const section = document.getElementById(id);

      if (!section) continue;

      const rect = section.getBoundingClientRect();
      if (rect.top <= offset && rect.bottom >= offset) {
        return id;
      }
    }

    return "home";
  }

  useEffect(() => {
    function handleScroll() {
      setActive(getCurrentSection());
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

  function getClass(id) {
    if (active === id) {
      return "active";
    }
    return "";
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
          <li>
            <a href="#home" className={getClass("home")} onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className={getClass("about")} onClick={closeMenu}>
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={getClass("projects")}
              onClick={closeMenu}
            >
              Projects
            </a>
          </li>
          <li>
            <a href="#tech" className={getClass("tech")} onClick={closeMenu}>
              Tech Stack &amp; Tools
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={getClass("contact")}
              onClick={closeMenu}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
