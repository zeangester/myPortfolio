import { motion } from "motion/react";

const revealUp = {
  initial: { opacity: 0, y: 56, filter: "blur(10px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: false, amount: 0.2 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

function About() {
  return (
    <motion.section
      className="section section--main"
      id="about"
      initial={revealUp.initial}
      whileInView={revealUp.whileInView}
      viewport={revealUp.viewport}
      transition={revealUp.transition}
    >
      <div className="container">
        <h2 className="sectionTitle">ABOUT ME</h2>
        <hr className="rule" />

        <div className="about">
          <img
            className="aboutPhoto"
            src="/zean-pic.JPG"
            alt="Photo of Zean Gester Bayot"
          />

          <div className="aboutInfo">
            <p className="aboutHi">HI I’M,</p>
            <h3 className="aboutName">ZEAN GESTER BAYOT</h3>

            <ul className="tags">
              <li>WEB DEVELOPMENT</li>
              <li>STUDENT</li>
            </ul>

            <p className="aboutBio">
              A second-year Information Technology student and an aspiring web
              developer passionate about learning new technologies and building
              functional, user-friendly websites. I’m continuously improving my
              skills in web development and exploring new ways to turn ideas
              into meaningful digital experiences. I’m excited to grow, learn,
              and create as I pursue my journey in the IT field.
            </p>

            <h4 className="eduHeading">MY EDUCATION</h4>
            <div className="edu">
              <div className="eduItem">
                <h5>Cavite State University - Silang Campus</h5>
                <ul>
                  <li>2025 - PRESENT</li>
                  <li>Bachelor of Science in Information Technology</li>
                </ul>
              </div>

              <div className="eduItem">
                <h5>Philippine Christian University - Dasmariñas</h5>
                <ul>
                  <li>2023 - 2025</li>
                  <li>STEM</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
