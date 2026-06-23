import { experience } from "../data/content";
import "./Experience.css";

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-wrap">
        <div className="section-label">03 / Experience</div>
        <h2 className="section-title">Work Experience</h2>
        <div className="exp-list">
          {experience.map((job) => (
            <div
              className="exp-card"
              key={job.company}
              style={{ borderLeftColor: `var(--${job.accent})` }}
            >
              <div className="exp-header">
                <div>
                  <div className="exp-company" style={{ color: `var(--${job.accent})` }}>
                    {job.company}
                  </div>
                  <div className="exp-role">{job.role}</div>
                </div>
                <div className="exp-date">{job.date}</div>
              </div>
              <ul className="exp-points">
                {job.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
