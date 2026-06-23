import { education, volunteer } from "../data/content";
import "./Education.css";

export default function Education() {
  return (
    <section id="education">
      <div className="section-wrap">
        <div className="section-label">05 / Education</div>
        <h2 className="section-title">Education</h2>

        <div className="edu-card">
          <div className="edu-badge">{education.degree}</div>
          <div className="edu-info">
            <h3>{education.school}</h3>
            <p>{education.field}</p>
          </div>
          <div className="edu-cgpa">
            <div className="cgpa-num">{education.cgpa}</div>
            <div className="cgpa-label">CGPA</div>
          </div>
        </div>

        <div className="volunteer-block">
          <div className="section-label">Volunteer Experience</div>
          <div className="vol-list">
            {volunteer.map((item) => (
              <div className="vol-item" key={item.title}>
                <strong>{item.title}</strong> — {item.description}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
