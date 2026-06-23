import { skills } from "../data/content";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-wrap">
        <div className="section-label">02 / Skills</div>
        <h2 className="section-title">Skill Set</h2>
        <div className="skills-grid">
          {skills.map((group) => (
            <div className="skill-card" key={group.title}>
              <div className="skill-card-icon">{group.icon}</div>
              <div className="skill-card-title">{group.title}</div>
              <div className="skill-tags">
                {group.items.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
