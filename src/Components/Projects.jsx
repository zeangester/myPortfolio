function Projects() {
  return (
    <section className="sectionMain" id="projects">
      <div className="container">
        <h2 className="sectionTitle">PROJECTS</h2>
        <hr className="rule" />

        <article className="project">
          <img
            className="projectImg"
            src="/images/bake-it-happen.png"
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
    </section>
  );
}

export default Projects;



  
