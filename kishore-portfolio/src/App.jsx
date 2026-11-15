import './App.css';
import profilePhoto from './assets/kishore-profile.png'; 
import bankingDashboard from './assets/banking-dashboard.png';

import { useEffect, useState } from 'react';

import evaluatorHome from './assets/evaluator-home.jpeg';
import evaluatorLogin from './assets/evaluator-login.jpeg';
import evaluatorSubjects from './assets/evaluator-subjects.jpeg';
import evaluatorEvaluate from './assets/evaluator-evaluate.jpeg';
import evaluatorSemester from './assets/evaluator-semester.jpeg';
import evaluatorMCQ from './assets/evaluator-mcq.jpeg';
import evaluatorUpload from './assets/evaluator-upload.jpeg';
import evaluatorBatch from './assets/evaluator-batch.jpeg';
import evaluatorResults from './assets/evaluator-results.jpeg';
import evaluatorAnalytics from './assets/evaluator-analytics.jpeg';
import evaluatorCorrection from './assets/evaluator-correction.jpeg';
import evaluatorNotifications from './assets/evaluator-notifications.jpeg';
import evaluatorDatabase from './assets/evaluator-database.jpeg';

import bankingLogin from './assets/banking-login.png';
import bankingTransfer from './assets/banking-transfer.png';
import bankingTransactions from './assets/banking-transactions.png';
import bankingCards from './assets/banking-cards.png';
import bankingConnected from './assets/banking-connected.png';
import bankingSuccess from './assets/banking-success.png';


function App() {
  useEffect(() => {
    document.documentElement.classList.add('js-motion');
    const items = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      items.forEach((item) => item.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -35px 0px' });
    items.forEach((item) => observer.observe(item));
    return () => { observer.disconnect(); document.documentElement.classList.remove('js-motion'); };
  }, []);


const bankingImages = [
  { src: bankingDashboard, label: 'Dashboard' },
  { src: bankingLogin, label: 'Login' },
  { src: bankingTransfer, label: 'Fund Transfer' },
  { src: bankingTransactions, label: 'Transactions' },
  { src: bankingCards, label: 'My Cards' },
  { src: bankingConnected, label: 'Connected Banks' },
  { src: bankingSuccess, label: 'Transfer Success' },
];

const [bankingImageIndex, setBankingImageIndex] = useState(0);
const [evaluatorImageIndex, setEvaluatorImageIndex] = useState(0);

const nextBankingImage = () => {
  setBankingImageIndex((current) =>
    (current + 1) % bankingImages.length
  );
};

const previousBankingImage = () => {
  setBankingImageIndex((current) =>
    (current - 1 + bankingImages.length) % bankingImages.length
  );
};

  const projects = [
  {
    number: '01',
    title: 'Smart Banking & Personal Finance',
    category: 'FULL STACK DEVELOPMENT',
    description:
      'A full-stack banking platform featuring secure authentication, account management, OTP-verified fund transfers and transaction tracking.',
    tech: ['React', 'Node.js', 'Express', 'SQLite', 'JWT'],
    features: [
      'Secure login and authentication',
      'OTP-verified fund transfers',
      'Account and transaction management',
    ],
    screenshot: bankingDashboard,
    github: 'https://github.com/kishoresingha108/neobank-india',
    demo: null,
  },
  {
    number: '02',
    title: 'AI-Powered Answer Script Evaluator',
    category: 'AI & FULL STACK DEVELOPMENT',
    description:
      'An intelligent academic evaluation platform using NLP to assess answer scripts, generate feedback and provide student performance insights.',
    tech: ['React', 'Python', 'Flask', 'NLP', 'MongoDB'],
    features: [
      'Automated answer evaluation',
      'Faculty review and mark corrections',
      'Student analytics and reports',
    ],
    
screenshot: evaluatorHome,

screenshots: [
  evaluatorHome,
  evaluatorLogin,
  evaluatorSubjects,
  evaluatorEvaluate,
  evaluatorSemester,
  evaluatorMCQ,
  evaluatorUpload,
  evaluatorBatch,
  evaluatorResults,
  evaluatorAnalytics,
  evaluatorCorrection,
  evaluatorNotifications,
  evaluatorDatabase,
],

    github: 'https://github.com/kishoresingha108/ai-answer-script-evaluator',
    demo: null,
  },
];

  const skills = [
    'HTML5', 'CSS3', 'JavaScript', 'React.js',
    'Node.js', 'Express.js', 'MongoDB', 'SQLite',
    'Git', 'GitHub', 'REST APIs', 'Responsive Design'
  ];

  return (
    <div className="portfolio">
      <nav className="navbar" aria-label="Main navigation">
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
          <div className="hero-content reveal">
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
  className="resume-btn"
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

          <div className="hero-visual reveal">
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
          <div className="about-content reveal">
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
          <div className="skills-grid reveal">
            {skills.map((skill) => (
              <div className="skill-item" key={skill}>{skill} ↗</div>
            ))}
          </div>
        </section>

        
<section className="projects section" id="projects">
  <p className="section-label">03 / SELECTED WORK</p>

  <h2>
    Projects I've worked on<span>.</span>
  </h2>

  <p className="projects-intro">
    A selection of projects exploring full-stack development,
    secure applications and intelligent automation.
  </p>

  <div className="project-showcase">
    {projects.map((project) => (
      <article className="showcase-card reveal" key={project.number}>

        
<div className="showcase-visual">
  {project.number === '01' ? (
    <div className="banking-gallery">
      <img
        src={bankingImages[bankingImageIndex].src}
        alt={`NeoBank India - ${bankingImages[bankingImageIndex].label}`}
        className="banking-gallery-image"
      />

      <div className="banking-gallery-controls">
        <button
          type="button"
          onClick={previousBankingImage}
          aria-label="Previous banking screenshot"
        >
          ←
        </button>

        <span>
          {bankingImages[bankingImageIndex].label}
          {' · '}
          {bankingImageIndex + 1}/{bankingImages.length}
        </span>

        <button
          type="button"
          onClick={nextBankingImage}
          aria-label="Next banking screenshot"
        >
          →
        </button>
      </div>
    </div>
  
) : project.number === '02' && project.screenshots?.length ? (
  <div className="banking-gallery">
    <img
      src={project.screenshots[evaluatorImageIndex]}
      alt={`${project.title} screenshot ${evaluatorImageIndex + 1}`}
      className="showcase-image"
      loading="lazy"
    />

    <div className="banking-gallery-controls">
      <button
        type="button"
        onClick={() =>
          setEvaluatorImageIndex((prev) =>
            (prev - 1 + project.screenshots.length) %
            project.screenshots.length
          )
        }
        aria-label="Previous evaluator screenshot"
      >
        ←
      </button>

      
<span>
  {[
    'Home',
    'Login',
    'Subjects',
    'Answer Evaluation',
    'Whole Semester Evaluation',
    'MCQ Evaluation',
    'Upload Answer Scripts',
    'Batch Evaluation',
    'Publish Results',
    'Analytics Dashboard',
    'Faculty Corrections',
    'Notifications',
    'MongoDB Database',
  ][evaluatorImageIndex]}
  {' · '}
  {evaluatorImageIndex + 1}/{project.screenshots.length}
</span>


      <button
        type="button"
        onClick={() =>
          setEvaluatorImageIndex((prev) =>
            (prev + 1) % project.screenshots.length
          )
        }
        aria-label="Next evaluator screenshot"
      >
        →
      </button>
    </div>
  </div>
) : project.screenshot ? (

    <img
      src={project.screenshot}
      alt={`${project.title} screenshot`}
      className="showcase-image"
      loading="lazy"
    />
  ) : (
    <div className="showcase-placeholder">
      <span className="showcase-placeholder-number">
        {project.number}
      </span>
      <span className="showcase-placeholder-title">
        {project.title}
      </span>
      <span className="showcase-placeholder-label">
        PROJECT PREVIEW COMING SOON
      </span>
    </div>
  )}
</div>


        <div className="showcase-content">
          <div className="showcase-top">
            <span>{project.category}</span>
            <span>PROJECT / {project.number}</span>
          </div>

          <h3>{project.title}</h3>

          <p className="showcase-description">
            {project.description}
          </p>

          <div className="showcase-features">
            <p>KEY FEATURES</p>
            <ul>
              {project.features?.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="tech-list">
            {project.tech.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>

          <div className="showcase-actions">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="showcase-link"
              >
                View Code ↗
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="showcase-link"
              >
                Live Demo ↗
              </a>
            )}
          </div>
        </div>

      </article>
    ))}
  </div>
</section>


        <section className="contact section" id="contact">
  <p className="section-label">04 / GET IN TOUCH</p>

  <div className="contact-status">
    <span className="status-dot"></span>
    AVAILABLE FOR FREELANCE PROJECTS
  </div>

  <h2>
    Have a project in mind?
    <br />
    <span>Let's build something great.</span>
  </h2>

  <p className="contact-description">
    I'm open to freelance website development, frontend projects,
    internships, and collaborations. Whether you need a landing page,
    portfolio website, or a modern web application, I'd love to hear
    about your idea.
  </p>

  <div className="contact-actions">
    <a
      href="https://www.linkedin.com/in/kishore-singh-a-b34319395"
      target="_blank"
      rel="noopener noreferrer"
      className="primary-btn"
    >
      Hire Me / Let's Connect ↗
    </a>

    <a
      href="https://github.com/kishoresingha108"
      target="_blank"
      rel="noopener noreferrer"
      className="secondary-btn"
    >
      View GitHub ↗
    </a>
    <a
  href="mailto:kishore.singh.a2005@gmail.com?subject=Freelance%20Project%20Inquiry"
  className="secondary-btn"
>
  ✉ Send Email
</a>
  </div>

  <p className="contact-note">
    Open to remote opportunities and freelance collaborations.
  </p>
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
