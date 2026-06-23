import { contact } from "../data/content";
import "./Contact.css";

export default function Contact() {
  const links = [
    { icon: "✉️", label: "Email", value: contact.email, href: `mailto:${contact.email}` },
    { icon: "📱", label: "Phone", value: contact.phoneDisplay, href: `tel:${contact.phone}` },
    { icon: "💼", label: "LinkedIn", value: contact.linkedin.handle, href: contact.linkedin.url },
    { icon: "🐙", label: "GitHub", value: contact.github.handle, href: contact.github.url },
    { icon: "🕹️", label: "itch.io", value: contact.itch.handle, href: contact.itch.url },
  ];

  return (
    <section id="contact">
      <div className="section-wrap">
        <div className="section-label">06 / Contact</div>
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-grid">
          {links.map((link) => (
            <a
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="contact-link"
              key={link.label}
            >
              <div className="contact-icon">{link.icon}</div>
              <div>
                <div className="contact-label">{link.label}</div>
                <div className="contact-value">{link.value}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
