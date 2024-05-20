import express from "express";
import { DateTime } from "luxon";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send(`[${DateTime.now().toISO()}] --- Fetching current balance...`);
});

router.post("/", (_req, res) => {
  res.send(`[${DateTime.now().toISO()}] --- Saving current balance...`);
});

export default router;
