import { projects, contact } from "../data/content";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

export default function Projects() {
  const allPlaceholders = projects.every((p) => p.isPlaceholder);

  return (
    <section id="projects">
      <div className="section-wrap">
        <div className="section-label">01 / Work</div>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-sub">
          A growing collection of games and builds — shipped on itch.io and hosted on GitHub.
          {allPlaceholders &&
            " The cards below are placeholders: swap in your real titles, thumbnails, and links any time (see src/data/content.js)."}
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>

        {allPlaceholders && (
          <div className="projects-cta">
            <p>
              <strong>This section is a template.</strong> Edit{" "}
              <code>src/data/content.js</code> to swap in real game titles, cover art, and
              links from itch.io/GitHub.
            </p>
            <a href={contact.itch.url} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              View itch.io profile
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
