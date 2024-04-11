// Node modules
import { useState, useEffect } from "react";

// Project files
import "./styles/style.css";

export default function App() {
  // Local state
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(0); // 0 loading, 1 ready, 2 error

  // Properties
  const endpoint = "/sse"; // 🔔 IMPORTANT: We will use nginx to redirect it to the proper URL

  // Methods
  useEffect(() => {
    fetch(`${endpoint}/all`)
      .then((response) => response.json())
      .then((result) => onSucess(result))
      .catch((error) => onFailure(error));
  }, []);

  function onSucess(result) {
    setData(result.rows);
    setStatus(1);
  }

  function onFailure(error) {
    console.error(error);
    setStatus(2);
  }

  // Components
  const Items = data.map((item) => (
    <div key={item.id} className="item">
      {item.data}
    </div>
  ));

  // Safeguards
  if (status === 0) return <p>🕒 Loading...</p>;
  if (status === 2) return <p>❌ Error</p>;

  return (
    <div className="App">
      <h1 className="title">Spike Hono 🦔🔥</h1>
      {Items}
    </div>
  );
}
