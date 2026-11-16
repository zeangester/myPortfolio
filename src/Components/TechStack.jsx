function TechStack() {
  return (
    <section className="techSectionMain" id="tech">
      <div className="container">
        <h2 className="techSectionTitle">TECH STACK &amp; TOOLS</h2>
        <hr className="rule" />

        <h3 className="groupTitle">TECH STACK</h3>
        <ul className="pills">
          <li className="pill">
            <img src="/icons/html.png" alt="" width="15" height="15" />
            HTML
          </li>
          <li className="pill">
            <img src="/icons/css.png" alt="" width="15" height="15" />
            CSS
          </li>
          <li className="pill">
            <img src="/icons/javascript.png" alt="" width="15" height="15" />
            JavaScript
          </li>
          <li className="pill">
            <img src="/icons/react.png" alt="" width="15" height="15" />
            ReactJS
          </li>
        </ul>

        <h3 className="groupTitle">DEVELOPMENT TOOLS</h3>
        <ul className="pills">
          <li className="pill">
            <img src="/icons/vscode.png" alt="" width="15" height="15" />
            Visual Studio Code
          </li>
          <li className="pill">
            <img src="/icons/git.png" alt="" width="15" height="15" />
            Git
          </li>
          <li className="pill">
            <img src="/icons/github.png" alt="" width="15" height="15" />
            Github
          </li>
        </ul>
      </div>
    </section>
  );
}

export default TechStack;