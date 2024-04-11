// Node modules
import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { streamSSE } from "hono/streaming";

// Properties
const app = new Hono();
const port = 8000;

app.get("/", (c) => c.text("Hello Hono!"));
app.get("/sse", async (c) => {
  return streamSSE(c, async (stream) => {
    for (let index = 0; index < 5; index++) {
      const data = `It is ${new Date().toISOString()} in Stockholm.`;
      const event = "time-update";
      const id = String(index);

      await stream.writeSSE({ data, event, id });
      await stream.sleep(1000);
    }
  });
});
console.log(`Server is running on port ${port}`);

serve({ fetch: app.fetch, port });
