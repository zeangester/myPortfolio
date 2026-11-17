import { motion } from "motion/react";
import { contact } from "../data.js";

const buttonTransition = {
  type: "spring",
  stiffness: 360,
  damping: 18,
  mass: 0.8,
};

const heroEase = [0.22, 1, 0.36, 1];

function Hero() {
  return (
    <motion.section
      className="hero"
      id="home"
      initial={{ opacity: 0, y: 48, filter: "blur(12px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.9, ease: heroEase }}
    >
      <motion.h1
        className="HeroName"
        initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ delay: 0.18, duration: 0.8, ease: heroEase }}
      >
        ZEAN GESTER
      </motion.h1>

      <motion.a
        className="heroBtn"
        href="#about"
        initial={{ opacity: 0, y: 20, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.28, duration: 0.7, ease: heroEase }}
        whileHover={{ scale: 1.05, y: -3 }}
        whileTap={{ scale: 0.97 }}
      >
        DIVE IN
      </motion.a>

      <motion.div
        className="heroSocial"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.65, ease: heroEase }}
      >
        <motion.a
          href={"mailto:" + contact.email}
          whileHover={{ y: -3, scale: 1.06 }}
          whileTap={{ scale: 0.97 }}
          transition={buttonTransition}
        >
          <img className="emailIcon" src="./email-icon.svg" alt="Email" />
        </motion.a>
        <motion.a
          href={contact.github}
          target="_blank"
          rel="noreferrer"
          whileHover={{ y: -3, scale: 1.06 }}
          whileTap={{ scale: 0.97 }}
          transition={buttonTransition}
        >
          <img className="github" src="./GitHub-Logo.png" alt="github icon" />
        </motion.a>
      </motion.div>
    </motion.section>
  );
}

export default Hero;
