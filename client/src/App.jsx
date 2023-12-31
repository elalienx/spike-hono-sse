// Node modules
import { useState, useEffect } from "react";
import axios from "axios";

// Project files
import "./styles/style.css";

export default function App() {
  // Local state
  const [data, setData] = useState([]);
  const [licence, setLicence] = useState("");

  // Properties
  const endpoint = "/api/values/all"; // 🔔 IMPORTANT: We will use nginx to redirect it to the proper URL

  // Methods
  useEffect(() => {
    fetch(endpoint)
      .then((response) => response.json())
      .then((result) => setData(result.rows.map((row) => row.number)));
  }, []);

  async function onSubmit(event) {
    event.preventDefault();

    await axios.post("/api/values", { value: licence });

    setLicence("");
    setData(...data, licence);
  }

  // Components
  const Items = data.map((item, index) => (
    <div key={index} className="item">
      SWE-{item}
    </div>
  ));

  return (
    <div className="App">
      <h1 className="title">Licence Plates 🚗</h1>
      {Items}
      <hr />
      <form className="form" onSubmit={(event) => onSubmit(event)}>
        <label>Register new car (only numbers):</label>
        <input
          value={licence}
          onChange={(event) => setLicence(event.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
