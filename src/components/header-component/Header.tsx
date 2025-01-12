import reactLogo from "/src/assets/react.svg";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <img src={reactLogo} className="nav-logo" alt="React Logo" />
      <nav>
        <ul className="nav-list">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
