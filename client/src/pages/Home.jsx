// Node modules
import { useCallback, useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [values, setValues] = useState([]);
  const [value, setValue] = useState("");

  const getAllNumbers = useCallback(async () => {
    // we will use nginx to redirect it to the proper URL
    const data = await axios.get("/api/values/all");
    setValues(data.data.rows.map((row) => row.number));
  }, []);

  const saveNumber = useCallback(
    async (event) => {
      event.preventDefault();

      await axios.post("/api/values", {
        value,
      });

      setValue("");
      getAllNumbers();
    },
    [value, getAllNumbers]
  );

  useEffect(() => {
    getAllNumbers();
  }, []);

  // Components
  const Items = values.map((value) => <div className="value">{value}</div>);

  return (
    <div id="home">
      <h2 className="title">Values</h2>
      {Items}
      <hr />
      <form className="form" onSubmit={saveNumber}>
        <label>Enter your value: </label>
        <input
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <button>Submit</button>
      </form>
      <button onClick={getAllNumbers}>Get all numbers</button>
    </div>
  );
}
