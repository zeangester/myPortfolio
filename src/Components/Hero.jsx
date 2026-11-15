import { contact } from "../data.js";

function Hero() {
  return (
    <section className="hero" id="home">
      <h1 className="HeroName"> ZEAN GESTER</h1>
      <a className="heroBtn" href="#about">DIVE IN</a>

      <div className="heroSocial">
        <a href={"mailto:" + contact.email}>
            <img src="#" alt="email icon"></img>
        </a>
        <a href={contact.github} target="_blank">
            <img src="#" alt="github icon"></img>
        </a>
      </div>
    </section>
  );
}

export default Hero;
