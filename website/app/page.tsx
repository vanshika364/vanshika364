const industries = ["Finance", "Manufacturing", "Healthcare"];

const experience = [
  {
    period: "Present",
    role: "Forward Deployed Engineer",
    company: "Perficient",
    tags: ["Solution engineering", "Applied AI", "Data systems"],
  },
  {
    period: "May - Aug 2025",
    role: "Data Science Intern",
    company: "Intuit",
    tags: ["Databricks", "Experimentation", "Product analytics"],
  },
  {
    period: "Jan - Aug 2024",
    role: "Software Engineer",
    company: "Loyal Advisory",
    tags: ["Forecasting", "Power BI", "Energy"],
  },
  {
    period: "2023",
    role: "Trainee Engineer & Intern",
    company: "Principal Global Services",
    tags: ["AWS", "ETL", "Financial systems"],
  },
];

const projects = [
  {
    number: "01",
    title: "Conversational Analysis Agent",
    description:
      "A Slack-based AI agent that lets teams query Google Sheets data through a conversational workflow.",
    stack: "Python · Flask · Slack Bolt · Google Sheets API",
  },
  {
    number: "02",
    title: "Health Misinformation Labeler",
    description:
      "An LLM-assisted system that grounds health-post classification in semantic search and external fact-checking results.",
    stack: "LLMs · Retrieval · Semantic search · Evaluation",
  },
  {
    number: "03",
    title: "Product Feedback Intelligence",
    description:
      "An NLP workflow that transforms noisy user feedback into recurring themes and prioritized product issues.",
    stack: "Python · NLP · Embeddings · Clustering",
  },
];

const skills = [
  {
    label: "AI engineering",
    items: "PyTorch, TensorFlow, scikit-learn, RAG, LLM pipelines, retrieval, embeddings, semantic search",
  },
  {
    label: "Data & cloud",
    items: "SQL, Databricks, Snowflake, MySQL, AWS, Tableau, Power BI",
  },
  {
    label: "Languages & tools",
    items: "Python, SQL, JavaScript, C++, LangChain, Git",
  },
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="monogram" href="#top" aria-label="Vanshika Bajaj, home">
          VB
        </a>
        <div className="navLinks">
          <a href="#work">Work</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a className="contactLink" href="mailto:vb364@cornell.edu">
            Contact
          </a>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <div className="eyebrow"><span /> New York, NY</div>
        <div className="heroTitle">
          <h1>AI systems.<em> Real-world impact.</em></h1>
          <div className="portraitWrap">
            {/* This local image is intentionally rendered directly for vinext compatibility. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="portrait"
              src="/vanshika-profile.jpg"
              alt="Illustrated portrait of Vanshika working at her computer"
              width={460}
              height={460}
            />
          </div>
        </div>
        <div className="heroBottom">
          <p className="heroIntro">
            <strong>Forward Deployed Engineer</strong> · Machine Learning Engineer · Data Scientist
          </p>
          <div className="industryList" aria-label="Industries">
            {industries.map((industry, index) => (
              <span key={industry}>
                <b>0{index + 1}</b> {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell" id="work">
        <div className="sectionHeading">
          <p>Experience</p>
          <h2>Work</h2>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <article className="experienceRow" key={`${item.company}-${item.role}`}>
              <p className="period">{item.period}</p>
              <div>
                <h3>{item.role}</h3>
                <p className="company">{item.company}</p>
              </div>
              <div className="experienceDetail">
                <div className="tags">
                  {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="projects section" id="projects">
        <div className="shell">
          <div className="sectionHeading projectHeading">
            <p>Selected</p>
            <h2>Projects</h2>
          </div>
          <div className="projectGrid">
            {projects.map((project) => (
              <article className="projectCard" key={project.number}>
                <span className="projectNumber">{project.number}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p className="stack">{project.stack}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell" id="skills">
        <div className="aboutGrid">
          <div className="sectionHeading">
            <p>Toolkit</p>
            <h2>Skills</h2>
          </div>
          <div className="aboutCopy">
            <div className="skillList">
              {skills.map((skill) => (
                <div key={skill.label}>
                  <h3>{skill.label}</h3>
                  <p>{skill.items}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="education">
        <div className="shell educationGrid">
          <p className="sectionLabel">Education</p>
          <article>
            <p className="degree">Master of Science in Information Science</p>
            <h2>Cornell University</h2>
          </article>
          <article>
            <p className="degree">Bachelor of Engineering in Information Technology</p>
            <h2>Ramdeobaba University</h2>
          </article>
        </div>
      </section>

      <footer className="footer shell">
        <div>
          <p className="footerLead">Get in touch</p>
          <a className="email" href="mailto:vb364@cornell.edu">Hello.</a>
        </div>
        <div className="footerLinks">
          <a href="https://www.linkedin.com/in/vanshika-bajaj/">LinkedIn</a>
          <a href="https://github.com/vanshika364">GitHub</a>
        </div>
        <p className="copyright">© {new Date().getFullYear()} Vanshika Bajaj</p>
      </footer>
    </main>
  );
}
