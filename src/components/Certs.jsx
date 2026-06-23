import { certifications } from "../data/content";
import "./Certs.css";

export default function Certs() {
  return (
    <section id="certs">
      <div className="section-wrap">
        <div className="section-label">04 / Certifications</div>
        <h2 className="section-title">Certificates</h2>
        <div className="certs-grid">
          {certifications.map((cert) => (
            <div className="cert-card" key={cert.name}>
              <div className="cert-icon">{cert.icon}</div>
              <div>
                <div className="cert-name">{cert.name}</div>
                <div className="cert-date">{cert.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
