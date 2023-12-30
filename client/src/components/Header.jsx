// Node modules
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <h1>This is a multi container Docker application 🐳</h1>
      <Link to="/">Home</Link>
      <Link to="/other">Other page</Link>
    </header>
  );
}
