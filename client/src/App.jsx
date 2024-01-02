// Node modules
import { useState, useEffect } from "react";

// Project files
import "./styles/style.css";

export default function App() {
  // Local state
  const [data, setData] = useState([]);
  const [licence, setLicence] = useState("");
  const [status, setStatus] = useState(0); // 0 loading, 1 ready, 2 error

  // Properties
  const endpoint = "/api/values"; // 🔔 IMPORTANT: We will use nginx to redirect it to the proper URL

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

  async function onSubmit(event) {
    event.preventDefault();

    const item = { value: licence };
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    };

    await fetch(endpoint, options);
    setData([...data, { number: licence }]);
    setLicence("");
  }

  // Components
  const Items = data.map((item, index) => (
    <div key={index} className="item">
      🚔 {item.number}
    </div>
  ));

  // Safeguards
  if (status === 0) return <p>🕒 Loading...</p>;
  if (status === 2) return <p>❌ Error</p>;

  return (
    <div className="App">
      <h1 className="title">Car licence plates 2</h1>
      {Items}
      <hr />
      <form className="form" onSubmit={(event) => onSubmit(event)}>
        <label>Register new car:</label>
        <input
          type="number"
          placeholder="555"
          value={licence}
          required
          onChange={(event) => setLicence(event.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
