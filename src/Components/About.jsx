function About() {
  return (
    <section className="section section--main" id="about">
      <div className="container">
        <h2 className="sectionTitle">ABOUT ME</h2>
        <hr className="rule" />

        <div className="about">
          <img
            className="aboutPhoto"
            src="/images/profile.png"
            alt="Photo of Zean Gester Bayot"
          />

          <div className="aboutInfo">
            <p className="aboutHi">HI I’M,</p>
            <h3 className="aboutName">ZEAN GESTER BAYOT</h3>

            <ul className="tags">
              <li>WEB DEVELOPMENT</li>
              <li>UI/UX DESIGNER</li>
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
    </section>
  );
}

export default About;
