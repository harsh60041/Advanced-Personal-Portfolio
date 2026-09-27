import { useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const projects = [
    {
      title: "Electric Vehicle Analysis",
      description:
        "A data analysis project exploring electric vehicle sales, trends, battery performance and market growth.",
      technologies: ["Python", "Pandas", "Matplotlib"],
      github: "#",
    },
    {
      title: "Film Data Analysis",
      description:
        "An analysis of film datasets including genres, ratings, revenue and audience trends.",
      technologies: ["Python", "Pandas", "Data Analysis"],
      github: "#",
    },
    {
      title: "CLI Calculator",
      description:
        "A command-line calculator with arithmetic operations, error handling and calculation history.",
      technologies: ["Python", "CLI", "File Handling"],
      github: "#",
    },
  ];

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Python",
    "Git & GitHub",
    "SQL",
    "MongoDB",
    "Power BI",
    "MS Excel",
  ];

  return (
    <div className={darkMode ? "app dark" : "app light"}>

      {/* NAVBAR */}
      <header className="navbar">
        <a href="#home" className="logo">
          HD<span>.</span>
        </a>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>

        <div className="nav-actions">
          <button
            className="theme-btn"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="hero section">

        <div className="hero-content">
          <p className="small-heading">
            WELCOME TO MY PORTFOLIO
          </p>

          <h1>
            Hi, I'm <span>Harsh Dwivedi</span>
          </h1>

          <h2>Full Stack Developer & Data Enthusiast</h2>

          <p className="hero-description">
            I build modern, responsive and user-friendly web applications
            while exploring Python, data analysis and emerging technologies.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary">
              View My Work
            </a>

            <a href="#contact" className="btn secondary">
              Contact Me
            </a>
          </div>

          <div className="social-links">
            <a href="#">GitHub</a>
            <a href="#">LinkedIn</a>
            <a href="#">Instagram</a>
          </div>
        </div>

        <div className="hero-image">
          <div className="profile-card">
            <div className="profile-circle">
              HD
            </div>

            <h3>Developer</h3>
            <p>Code • Create • Learn</p>
          </div>
        </div>

      </section>

      {/* ABOUT */}
      <section id="about" className="section">

        <div className="section-heading">
          <p>GET TO KNOW ME</p>
          <h2>
            About <span>Me</span>
          </h2>
        </div>

        <div className="about-grid">

          <div className="about-text">
            <h3>
              Building ideas into digital experiences.
            </h3>

            <p>
              I'm a passionate developer interested in creating modern
              web applications and solving real-world problems using
              technology.
            </p>

            <p>
              My learning journey includes frontend development,
              backend technologies, Python programming, data analysis
              and visualization.
            </p>

            <p>
              I enjoy learning new technologies and turning ideas into
              practical projects.
            </p>

            <a href="#contact" className="btn primary">
              Let's Work Together
            </a>
          </div>

          <div className="about-info">

            <div className="info-card">
              <span>🎓</span>
              <div>
                <h4>Education</h4>
                <p>BCA Computer Science</p>
              </div>
            </div>

            <div className="info-card">
              <span>💻</span>
              <div>
                <h4>Development</h4>
                <p>Frontend & Full Stack</p>
              </div>
            </div>

            <div className="info-card">
              <span>📊</span>
              <div>
                <h4>Data</h4>
                <p>Python & Visualization</p>
              </div>
            </div>

            <div className="info-card">
              <span>🚀</span>
              <div>
                <h4>Goal</h4>
                <p>Build useful applications</p>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* SKILLS */}
      <section id="skills" className="section">

        <div className="section-heading">
          <p>MY EXPERTISE</p>

          <h2>
            Technical <span>Skills</span>
          </h2>
        </div>

        <div className="skills-grid">

          {skills.map((skill, index) => (
            <div className="skill-card" key={skill}>

              <div className="skill-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3>{skill}</h3>

              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{
                    width: `${75 + (index % 4) * 5}%`,
                  }}
                ></div>
              </div>

            </div>
          ))}

        </div>

      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">

        <div className="section-heading">
          <p>MY RECENT WORK</p>

          <h2>
            Featured <span>Projects</span>
          </h2>
        </div>

        <div className="projects-grid">

          {projects.map((project, index) => (
            <article
              className="project-card"
              key={project.title}
            >

              <div className="project-top">

                <span className="project-number">
                  0{index + 1}
                </span>

                <a
                  href={project.github}
                  className="github-link"
                >
                  ↗
                </a>

              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="technology-list">

                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}

              </div>

            </article>
          ))}

        </div>

      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section">

        <div className="section-heading">
          <p>MY JOURNEY</p>

          <h2>
            Experience & <span>Education</span>
          </h2>
        </div>

        <div className="timeline">

          <div className="timeline-item">

            <div className="timeline-dot"></div>

            <div className="timeline-content">

              <span>2026</span>

              <h3>Full Stack Development</h3>

              <h4>Development Internship</h4>

              <p>
                Worked on web development, Python programming,
                data analysis, dashboards and practical development
                projects.
              </p>

            </div>

          </div>

          <div className="timeline-item">

            <div className="timeline-dot"></div>

            <div className="timeline-content">

              <span>2023 - Present</span>

              <h3>Bachelor of Computer Applications</h3>

              <h4>Computer Science & Information Technology</h4>

              <p>
                Developing strong foundations in programming,
                databases, software development and computer
                science concepts.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section id="contact" className="section">

        <div className="section-heading">
          <p>GET IN TOUCH</p>

          <h2>
            Let's <span>Connect</span>
          </h2>
        </div>

        <div className="contact-grid">

          <div className="contact-info">

            <h3>
              Have a project in mind?
            </h3>

            <p>
              I'm always interested in discussing new projects,
              ideas and opportunities.
            </p>

            <div className="contact-item">
              <span>📧</span>

              <div>
                <small>Email</small>
                <p>your.email@example.com</p>
              </div>
            </div>

            <div className="contact-item">
              <span>📍</span>

              <div>
                <small>Location</small>
                <p>India</p>
              </div>
            </div>

            <div className="contact-item">
              <span>💼</span>

              <div>
                <small>Availability</small>
                <p>Open to opportunities</p>
              </div>
            </div>

          </div>

          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message submitted successfully!");
            }}
          >

            <div className="input-row">

              <div className="input-group">
                <label>Your Name</label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="input-group">
                <label>Email Address</label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

            </div>

            <div className="input-group">

              <label>Subject</label>

              <input
                type="text"
                placeholder="What is this about?"
                required
              />

            </div>

            <div className="input-group">

              <label>Message</label>

              <textarea
                rows="6"
                placeholder="Write your message..."
                required
              ></textarea>

            </div>

            <button
              type="submit"
              className="btn primary submit-btn"
            >
              Send Message →
            </button>

          </form>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="footer">

        <div>
          <h3>
            HD<span>.</span>
          </h3>

          <p>
            Building digital experiences with code.
          </p>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <p className="copyright">
          © 2026 Harsh Dwivedi. All Rights Reserved.
        </p>

      </footer>

    </div>
  );
}

export default App;