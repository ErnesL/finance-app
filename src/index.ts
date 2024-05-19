import express from "express"; // ESModules
// const express = require("express"); -> CommonJS

import { DateTime } from "luxon";
import dashRouter from "./routes/dashboard";

const app = express();
app.use(express.json()); //Middleware that transforms the incoming request data into JSON

const PORT = 3000;

app.get("/ping", (_req, res) => {
  console.log(`pinged at ${DateTime.now().toISO()}`);
  res.send("pong");
});

app.use("/api/dashboard", dashRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
