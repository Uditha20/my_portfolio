export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Uditha</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
        <p className="hero--section-description">
"I'm an aspiring full-stack developer passionate about creating user-friendly websites. I enjoy exploring new technologies and solving problems to build innovative and seamless web solutions."</p>
        </div>
        <a href="https://drive.google.com/file/d/1BPFO65dRwgR8s8YsrplSaD9W3f7O8DVm/view?usp=sharing" target="_blank"><button className="btn btn-primary">Download CV</button></a>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero-img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
