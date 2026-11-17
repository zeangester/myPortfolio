import { motion } from "motion/react";

const revealUp = {
  initial: { opacity: 0, y: 56, filter: "blur(10px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: false, amount: 0.2 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

function TechStack() {
  return (
    <motion.section
      className="techSectionMain"
      id="tech"
      initial={revealUp.initial}
      whileInView={revealUp.whileInView}
      viewport={revealUp.viewport}
      transition={revealUp.transition}
    >
      <div className="container">
        <h2 className="techSectionTitle">TECH STACK &amp; TOOLS</h2>
        <hr className="rule" />

        <h3 className="groupTitle">TECH STACK</h3>
        <ul className="pills">
          <li className="pill">
            <img src="/html-icon.png" alt="" width="15" height="15" />
            HTML
          </li>
          <li className="pill">
            <img src="/css-icon.png" alt="" width="15" height="15" />
            CSS
          </li>
          <li className="pill">
            <img src="/js-icon.png" alt="" width="15" height="15" />
            JavaScript
          </li>
          <li className="pill">
            <img src="/react-icon.png" alt="" width="15" height="15" />
            ReactJS
          </li>
        </ul>

        <h3 className="groupTitle">DEVELOPMENT TOOLS</h3>
        <ul className="pills">
          <li className="pill">
            <img src="/vscode-Logo.png" alt="" width="15" height="15" />
            Visual Studio Code
          </li>
          <li className="pill">
            <img src="Git-Icon.png" alt="" width="15" height="15" />
            Git
          </li>
          <li className="pill">
            <img src="/GitHub-Logo.png" alt="" width="15" height="15" />
            Github
          </li>
        </ul>
      </div>
    </motion.section>
  );
}

export default TechStack;