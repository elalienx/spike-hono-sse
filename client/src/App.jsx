// Node modules
import { useState, useEffect } from "react";

// Project files
import "./styles/style.css";

export default function App() {
  // Local state
  const [data, setData] = useState([]);

  // Methods
  useEffect(() => {
    const eventSource = new EventSource("/api/sse");

    eventSource.addEventListener("time-update", (event) => {
      const newData = event;
      console.log("event", event);
      setData((prevData) => [...prevData, newData]);
    });
  }, []);

  // Components
  const Items = data.map((item) => (
    <div key={item.data} className="item">
      {item.data}
    </div>
  ));

  return (
    <div className="App">
      <h1 className="title">Spike Hono 2 🦔🔥</h1>@{Items}@
    </div>
  );
}
