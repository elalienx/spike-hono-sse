// Node modules
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import pkg from "pg";

// Project files
import keys from "./keys.js";

// Properties
const { Pool } = pkg;
const app = express();
const postgressClient = new Pool({
  user: keys.pgUser,
  host: keys.pgHost,
  database: keys.pgDatabase,
  password: keys.pgPassword,
  port: keys.pgPort,
});
const port = 5000;

postgressClient.on("connect", (client) => {
  client
    .query("CREATE TABLE IF NOT EXISTS values (number INT)")
    .catch((error) => console.log("PG ERROR", error));
});

app.use(cors());
app.use(bodyParser.json());
app.get("/", (request, resolve) => resolve.send("Hi"));
app.get("/values/all", async (request, resolve) => {
  const values = await postgressClient.query("SELECT * FROM values");

  resolve.send(values);
});
app.post("/values", async (request, resolve) => {
  // safeguard
  if (!request.body.value) resolve.send({ working: false });

  postgressClient.query("INSERT INTO values(number) VALUES($1)", [
    request.body.value,
  ]);

  resolve.send({ working: true });
});
app.listen(port, () => console.log(`Listening on port ${port}`));
