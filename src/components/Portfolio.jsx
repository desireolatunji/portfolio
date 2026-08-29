

const  Portfolio=() => {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <h2>DEEBOY<span>.</span></h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="hero">
        <p>WELCOME TO MY PORTFOLIO</p>

        <h1>
          Hi, I'm <span>Deeeboy</span>
        </h1>

        <h2>Frontend Developer & Game Creator</h2>

        <p className="description">
          I create modern websites, games and interactive experiences
          using React and JavaScript.
        </p>

        <div className="buttons">
          <a href="#projects">View My Work</a>
          <a href="#contact">Contact Me</a>
        </div>
      </section>

      <section id="about" className="section">
        <h2>About <span>Me</span></h2>

        <p>
          I'm a developer who loves creating websites, games and
          interactive experiences.
        </p>
      </section>

      <section id="projects" className="section">
        <h2>My <span>Projects</span></h2>

        <div className="projects">
          <div className="project">
            <h3>🎮 FPS 2026</h3>
            <p>My first-person shooter game built with React.</p>
          </div>

          <div className="project">
            <h3>⚽ Football 2026</h3>
            <p>A football game project built with React.</p>
          </div>

          <div className="project">
            <h3>🌐 Web Projects</h3>
            <p>Modern websites and applications.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Let's build something <span>awesome.</span></h2>

        <p>Thanks for visiting my portfolio bye.</p>
      </section>

      <footer>
        <h3>DEEBOY<span>.</span></h3>
        <p>© 2026 Deeeboy</p>
      </footer>
    </div>
  );
}

export default Portfolio;