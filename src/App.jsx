import "./App.css";

const spotlightProjects = [
  {
    title: "Signal Room",
    type: "Realtime dashboard",
    description:
      "A focused operations view for tracking launches, blockers, and team signals without turning into noise.",
  },
  {
    title: "Northstar Notes",
    type: "Knowledge system",
    description:
      "A writing-first workspace that organizes ideas, decisions, and snippets into one calm searchable flow.",
  },
  {
    title: "Orbit Commerce",
    type: "Storefront concept",
    description:
      "A premium product landing experience built to feel editorial, fast, and mobile-ready from the first scroll.",
  },
];

const strengths = [
  "Responsive React interfaces",
  "Clean component structure",
  "Tailwind-ready styling setup",
  "Production-friendly Vite workflow",
];

const workflow = [
  {
    step: "01",
    title: "Shape the idea",
    text: "Start with a clear goal, a bold visual direction, and only the sections that actually matter.",
  },
  {
    step: "02",
    title: "Build with intent",
    text: "Use React for structure, keep styling consistent, and make the layout feel good on smaller screens too.",
  },
  {
    step: "03",
    title: "Polish the details",
    text: "Add contrast, spacing, motion, and hierarchy so the final result feels designed, not just assembled.",
  },
];

export default function App() {
  return (
    <div className="page-shell">
      <div className="page-glow page-glow-left" />
      <div className="page-glow page-glow-right" />

      <main className="page">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">React Practice Project</p>
            <h1>Harrish&apos;s creative front-end starter, built to launch fast.</h1>
            <p className="hero-text">
              This project turns the basic Vite scaffold into a bold portfolio-style landing
              page with featured work, design rhythm, and a responsive layout you can keep
              expanding.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore Projects
              </a>
              <a className="button button-secondary" href="#workflow">
                See the Process
              </a>
            </div>

            <div className="hero-highlights">
              {strengths.map((item) => (
                <span className="pill" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <aside className="hero-panel">
            <div className="panel-card panel-accent">
              <p className="panel-label">Current Focus</p>
              <h2>Designing web experiences that feel sharp, calm, and useful.</h2>
              <p>
                Built with React and Vite, styled for personality, and ready for your own
                content, features, and experiments.
              </p>
            </div>

            <div className="metric-grid">
              <article className="panel-card metric-card">
                <strong>03</strong>
                <span>showcase concepts</span>
              </article>
              <article className="panel-card metric-card">
                <strong>100%</strong>
                <span>responsive layout</span>
              </article>
              <article className="panel-card metric-card">
                <strong>Vite</strong>
                <span>fast local workflow</span>
              </article>
              <article className="panel-card metric-card">
                <strong>React</strong>
                <span>clean component base</span>
              </article>
            </div>
          </aside>
        </section>

        <section className="section-heading" id="projects">
          <p className="eyebrow">Featured Concepts</p>
          <div className="heading-row">
            <h2>Three starter directions you can turn into full products.</h2>
            <p>
              Use these cards as portfolio entries, product ideas, or placeholders while you
              build your next real app.
            </p>
          </div>
        </section>

        <section className="project-grid">
          {spotlightProjects.map((project) => (
            <article className="project-card" key={project.title}>
              <p className="project-type">{project.type}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </article>
          ))}
        </section>

        <section className="split-section" id="workflow">
          <div className="section-heading compact">
            <p className="eyebrow">Workflow</p>
            <h2>A simple build rhythm for shipping something that looks intentional.</h2>
          </div>

          <div className="timeline">
            {workflow.map((item) => (
              <article className="timeline-card" key={item.step}>
                <span className="timeline-step">{item.step}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="cta-strip">
          <div>
            <p className="eyebrow">Next Move</p>
            <h2>Keep this as your landing page, or use it as the base for the next React idea.</h2>
          </div>
          <p>
            You can now swap in real projects, connect a backend, or add routing and animations
            without starting over from a blank screen.
          </p>
        </section>
      </main>
    </div>
  );
}
