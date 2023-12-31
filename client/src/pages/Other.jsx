// Node modules
import { Link } from "react-router-dom";

export default function Other() {
  return (
    <div id="other">
      <h1>I'm an other page!</h1>
      <Link to="/">Go back to home screen</Link>
    </div>
  );
}
