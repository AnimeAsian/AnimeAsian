import { profile } from "../data/content";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <span className="footer-name">{profile.name.toUpperCase()}</span> &nbsp;·&nbsp; GAME
      DEVELOPER &nbsp;·&nbsp; {profile.location.toUpperCase()} &nbsp;·&nbsp; {year}
    </footer>
  );
}
