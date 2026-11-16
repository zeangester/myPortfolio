import { contact } from "../data.js";

function Footer() {
  return (
    <section className="Footer">
      <div className="container">
        <h2 className="footerTitle">LET’S CONNECT</h2>
        <hr className="rule" />

        <ul className="footer">
          <li>
            <a className="pillLink" href={`mailto:${contact.email}`}>
              <img src="/icons/mail.png" alt="Email" width="16" height="16" />
              Email me
            </a>
          </li>
          <li>
            <a className="pillLink" href={contact.github} target="_blank" rel="noreferrer">
              <img src="/icons/github.png" alt="GitHub" width="16" height="16" />
              Github
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Footer;