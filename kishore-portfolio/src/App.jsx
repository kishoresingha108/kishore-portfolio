
import './App.css';
import profilePhoto from './assets/kishore-profile.png'; 

function App() {
  const projects = [
    {
      number: '01',
      title: 'Smart Banking & Personal Finance',
      category: 'Full Stack Development',
      description:
        'A smart banking application featuring account management, secure transactions, OTP verification and personal finance tracking.',
      tech: ['React', 'Node.js', 'SQLite', 'JWT'],
    },
    {
      number: '02',
      title: 'AI-Powered Answer Script Evaluator',
      category: 'AI & Web Development',
      description:
        'An intelligent evaluation platform designed to automate answer-script assessment and provide question-wise performance insights.',
      tech: ['React', 'JavaScript', 'AI', 'Chart.js'],
    },
  ];

  const skills = [
    'HTML5', 'CSS3', 'JavaScript', 'React.js',
    'Node.js', 'Express.js', 'MongoDB', 'SQLite',
    'Git', 'GitHub', 'REST APIs', 'Responsive Design'
  ];

  return (
    <div className="portfolio">
      <nav className="navbar">
        <a href="#home" className="logo">KS<span>.</span></a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact" className="nav-contact">Let's Talk ↗</a>
        </div>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <div className="availability">
              <span className="status-dot"></span>
              OPEN TO OPPORTUNITIES
            </div>

            <p className="eyebrow">HELLO, I'M KISHORE SINGH A.</p>

            <h1>
              Building digital
              <br />
              experiences that
              <br />
              <span>make an impact.</span>
            </h1>

            <p className="hero-description">
              I'm an Information Science student and aspiring Full Stack
              Developer, passionate about building modern web applications
              and solving real-world problems through technology.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-btn">
                Explore My Work ↗
              </a>
              <a href="#contact" className="secondary-btn">
                Get In Touch
              </a>

              <a
  href="/Kishore_Singh_Resume.pdf"
  download="Kishore_Singh_Resume.pdf"
  className="btn btn-outline"
>
  Download Resume ↓
</a>
            </div>
            <div className="social-links">
  <a
    href="https://github.com/kishoresingha108"
    target="_blank"
    rel="noreferrer"
  >
    GitHub ↗
  </a>

  <a
    href="https://www.linkedin.com/in/kishore-singh-a-b34319395"
    target="_blank"
    rel="noreferrer"
  >
    LinkedIn ↗
  </a>
</div>

            <div className="hero-meta">
              <span>BASED IN INDIA</span>
              <span>INFORMATION SCIENCE & ENGINEERING</span>
            </div>
          </div>

          <div className="hero-visual">
  <div className="profile-image-wrapper">
    <img
      src={profilePhoto}
      alt="Kishore Singh A. - Full Stack Developer"
      className="profile-image"
    />

    <div className="profile-caption">
      <span className="status-dot"></span>
      Aspiring Full Stack Developer
    </div>
  </div>
</div>
        </section>

        <section className="about section" id="about">
          <p className="section-label">01 / ABOUT ME</p>
          <div className="about-content">
            <h2>
              Curious by nature.
              <br />
              <span>Driven by technology.</span>
            </h2>
            <p>
              I'm currently pursuing Information Science and Engineering.
              I enjoy exploring web technologies, developing practical
              projects and continuously improving my development skills.
              My goal is to create useful, accessible and well-designed
              digital products.
            </p>
          </div>
        </section>

        <section className="skills section" id="skills">
          <p className="section-label">02 / MY TOOLKIT</p>
          <h2>Technologies I work with<span>.</span></h2>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-item" key={skill}>{skill} ↗</div>
            ))}
          </div>
        </section>

        <section className="projects section" id="projects">
          <p className="section-label">03 / SELECTED WORK</p>
          <h2>Projects I've worked on<span>.</span></h2>

          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <span className="project-number">{project.number}</span>
                <div className="project-info">
                  <p className="project-category">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="tech-list">
                    {project.tech.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>
                <span className="project-arrow">↗</span>
              </article>
            ))}
          </div>
        </section>

        <section className="contact section" id="contact">
          <p className="section-label">04 / GET IN TOUCH</p>
          <h2>Have an idea?<br /><span>Let's build it.</span></h2>
          <p>
            I'm interested in development opportunities, collaborations
            and exciting projects. Feel free to reach out.
          </p>
          <a
            href="https://github.com/kishoresingh108"
            target="_blank"
            rel="noreferrer"
            className="primary-btn"
          >
            Visit My GitHub ↗
          </a>
        </section>
      </main>

      <footer>
        <a href="#home" className="logo">KS<span>.</span></a>
        <p>Designed & built by Kishore Singh A. © 2026</p>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </div>
  );
}

export default App;
