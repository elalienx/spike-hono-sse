# Spike Hono SSE 🦔🔥

## About

This is a test to try [Hono](https://hono.dev), a lightweight replacement for Express.js that provides TypeScript and Server Side Events out of the box!

- On the server it updates the time 5 times every second when you call the route `/api/sse`.
- On the client we use React to listen to this route and render those 5 time changes on the screen.

## Installation

It contains Dockerfiles for client, server which you should push to your docker hub to be able
You can run it in development mode: `docker-compose up`
