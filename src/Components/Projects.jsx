import { motion } from "motion/react";

const revealUp = {
  initial: { opacity: 0, y: 56, filter: "blur(10px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: false, amount: 0.2 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

function Projects() {
  return (
    <motion.section
      className="sectionMain"
      id="projects"
      initial={revealUp.initial}
      whileInView={revealUp.whileInView}
      viewport={revealUp.viewport}
      transition={revealUp.transition}
    >
      <div className="container">
        <h2 className="sectionTitle">PROJECTS</h2>
        <hr className="rule" />

        <article className="project">
          <img
            className="projectImg"
            src="/Project1-Screenshot.png"
            alt="Screenshot of Bake It Happen"
          />
          <div className="projectBody">
            <h3>BAKE IT HAPPEN</h3>
            <p>
              Bake It Happen is a Java GUI desktop application that helps users
              convert common baking measurements and provides a built-in timer
              for baking tasks.
            </p>
          </div>
          <footer className="projectInfo">
            <span>2026</span>
            <span>JAVA</span>
          </footer>
        </article>
      </div>
    </motion.section>
  );
}

export default Projects;
