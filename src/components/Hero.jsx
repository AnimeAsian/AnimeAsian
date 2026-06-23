import { profile } from "../data/content";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero-outer">
      <section id="hero">
        <div className="hero-content">
          <div className="status-badge fade-up fade-up-1">
            <span className="status-dot" />
            {profile.status}
          </div>

          <div className="hero-tag fade-up fade-up-2">{profile.tag}</div>

          <h1 className="hero-name fade-up fade-up-3">
            {profile.name.split(" ")[0].toUpperCase()}
            <br />
            <span>{profile.name.split(" ")[1].toUpperCase()}</span>
          </h1>

          <p className="hero-role fade-up fade-up-3">
            {profile.role}
            <span className="cursor" />
          </p>

          <p className="hero-bio fade-up fade-up-4">{profile.bio}</p>

          <div className="hero-ctas fade-up fade-up-5">
            <a href="#projects" className="btn btn-primary">
              🎮 View My Work
            </a>
            <a href="#contact" className="btn btn-outline">
              ✉ Get In Touch
            </a>
          </div>
        </div>

        <svg
          className="hero-visual"
          viewBox="0 0 460 460"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="230" cy="230" r="200" stroke="#cba6f7" strokeWidth="1" strokeDasharray="8 8" />
          <circle cx="230" cy="230" r="140" stroke="#f5c2e7" strokeWidth="1" strokeDasharray="4 12" />
          <circle cx="230" cy="230" r="80" stroke="#cba6f7" strokeWidth="0.5" />
          <polygon
            points="230,80 280,180 380,180 300,240 330,350 230,280 130,350 160,240 80,180 180,180"
            stroke="#cba6f7"
            strokeWidth="1"
            fill="none"
          />
          <circle cx="230" cy="230" r="20" stroke="#f5c2e7" strokeWidth="2" />
          <line x1="230" y1="0" x2="230" y2="460" stroke="#cba6f7" strokeWidth="0.3" />
          <line x1="0" y1="230" x2="460" y2="230" stroke="#cba6f7" strokeWidth="0.3" />
        </svg>
      </section>
    </div>
  );
}
