const industries = ["Finance", "Manufacturing", "Healthcare"];

const experience = [
  {
    period: "Present",
    role: "Forward Deployed Engineer",
    company: "Perficient",
    summary:
      "Turning complex business needs into practical AI, data, and software solutions across highly specialized industries.",
    tags: ["Solution engineering", "Applied AI", "Data systems"],
  },
  {
    period: "May - Aug 2025",
    role: "Data Science Intern",
    company: "Intuit",
    summary:
      "Analyzed 5M customer-journey records, built SQL and Databricks pipelines, and evaluated product experiments that informed rollout and adoption decisions.",
    tags: ["Databricks", "Experimentation", "Product analytics"],
  },
  {
    period: "Jan - Aug 2024",
    role: "Software Engineer",
    company: "Loyal Advisory",
    summary:
      "Built commodity forecasting models and a Power BI analytics system that surfaced logistics and cost inefficiencies for leadership.",
    tags: ["Forecasting", "Power BI", "Energy"],
  },
  {
    period: "2023",
    role: "Trainee Engineer & Intern",
    company: "Principal Global Services",
    summary:
      "Improved data workflows supporting 500K daily financial transactions and contributed to an AWS migration that cut processing time by 40%.",
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
          <a href="#about">About</a>
          <a className="contactLink" href="mailto:vb364@cornell.edu">
            Contact
          </a>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <div className="eyebrow"><span /> New York, NY</div>
        <h1>
          I build intelligent systems
          <em> where the real work happens.</em>
        </h1>
        <div className="heroBottom">
          <p className="heroIntro">
            I&apos;m Vanshika, a <strong>Forward Deployed Engineer</strong>, Machine
            Learning Engineer, and Data Scientist translating complex problems into
            useful, deployable products.
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

      <section className="statement">
        <div className="shell statementInner">
          <p>
            My work sits at the intersection of <strong>AI</strong>, <strong>data</strong>,
            and <strong>industry expertise</strong>—from financial workflows and
            manufacturing operations to healthcare information systems.
          </p>
        </div>
      </section>

      <section className="section shell" id="work">
        <div className="sectionHeading">
          <p>Selected experience</p>
          <h2>Building from ambiguity to impact.</h2>
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
                <p>{item.summary}</p>
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
            <p>Selected projects</p>
            <h2>Ideas made tangible.</h2>
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

      <section className="section shell" id="about">
        <div className="aboutGrid">
          <div className="sectionHeading">
            <p>About & expertise</p>
            <h2>Technical depth. Product instinct.</h2>
          </div>
          <div className="aboutCopy">
            <p>
              I enjoy the messy middle: understanding the real constraint, finding the
              useful signal, and working across technical and business teams to ship
              something people can trust.
            </p>
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
            <p>Machine Learning Engineering · Deep Learning · Trust & Safety · HCI</p>
          </article>
          <article>
            <p className="degree">Bachelor of Engineering in Information Technology</p>
            <h2>Ramdeobaba University</h2>
            <p>Engineering foundations · Software · Data systems</p>
          </article>
        </div>
      </section>

      <footer className="footer shell">
        <div>
          <p className="footerLead">Have a complex problem worth solving?</p>
          <a className="email" href="mailto:vb364@cornell.edu">Let&apos;s talk.</a>
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
