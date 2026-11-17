import { motion } from "motion/react";

const buttonTransition = {
  type: "spring",
  stiffness: 360,
  damping: 18,
  mass: 0.8,
};
const hoverEffect = {
  scale: 1.04,
  y: -3,
  boxShadow: "0 14px 30px rgba(0,0,0,0.18)",
};
const revealUp = {
  initial: { opacity: 0, y: 56, filter: "blur(10px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: false, amount: 0.2 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

function Footer() {
  return (
    <>
      <motion.section
        className="Footer"
        id="contact"
        initial={revealUp.initial}
        whileInView={revealUp.whileInView}
        viewport={revealUp.viewport}
        transition={revealUp.transition}
      >
        <div className="container">
          <h2 className="footerTitle">LET’S CONNECT</h2>
          <hr className="rule" />
          <p>
            Whether it’s a simple hello, a question, or an exciting opportunity,
            my inbox is always open. Looking forward to connecting with you!
          </p>

          <ul className="contactCards">
            <li>
              <motion.a
                className="contactCard"
                href="mailto:zeangester@gmail.com"
                whileHover={hoverEffect}
                whileTap={{ scale: 0.98 }}
                transition={buttonTransition}
              >
                <img className="contactIcon" src="/email-icon.svg" alt="" />
                <span className="contactText">
                  <span className="contactTitle">Email</span>
                  <span className="contactSub contactSubLink">
                    zeangester@gmail.com
                  </span>
                </span>
              </motion.a>
            </li>

            <li>
              <motion.a
                className="contactCard"
                href="https://github.com/zeangester"
                target="_blank"
                whileHover={hoverEffect}
                whileTap={{ scale: 0.98 }}
                transition={buttonTransition}
              >
                <img className="contactIcon" src="/GitHub-Logo.png" alt="" />
                <span className="contactText">
                  <span className="contactTitle">Github</span>
                  <span className="contactSub">@zeangester</span>
                </span>
              </motion.a>
            </li>
          </ul>
        </div>
      </motion.section>

      <footer className="footerBar">
        <div className="container">
          <span>Zean Gester Bayot,</span>
          <span>All rights reserved 2026</span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
