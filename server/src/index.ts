// Node modules
import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { stream, streamSSE } from "hono/streaming";

// Properties
const app = new Hono();
const port = 8000;
let id = 0;

app.get("/sse", async (c) => {
  return streamSSE(c, async (stream) => {
    while (id < 5) {
      const message = `It is ${new Date().toISOString()}`;
      await stream.writeSSE({
        data: message,
        event: "time-update",
        id: String(id++),
      });
      await stream.sleep(1000);
    }
  });
});

console.log(`Server is running on port ${port}`);

serve({ fetch: app.fetch, port });
