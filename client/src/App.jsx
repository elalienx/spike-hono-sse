// Node modules
import { useState, useEffect } from "react";

// Project files
import "./styles/style.css";

export default function App() {
  // Local state
  const [data, setData] = useState([]);
  const [licence, setLicence] = useState("");

  // Properties
  const endpoint = "/api/values"; // 🔔 IMPORTANT: We will use nginx to redirect it to the proper URL

  // Methods
  useEffect(() => {
    fetch(`${endpoint}/all`)
      .then((response) => response.json())
      .then((result) => setData(result.rows.map((row) => row.number)));
  }, []);

  async function onSubmit(event) {
    const item = { value: licence };
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    };

    await fetch(endpoint, options);
    event.preventDefault();
    setData([...data, licence]);
    setLicence("");
  }

  // Components
  const Items = data.map((item, index) => (
    <div key={index} className="item">
      🚔 {item}
    </div>
  ));

  return (
    <div className="App">
      <h1 className="title">Car licence plates</h1>
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
