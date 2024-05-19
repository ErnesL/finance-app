import express from "express";
import { DateTime } from "luxon";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send(`[${DateTime.now().toISO()}] --- Fetching dashboard...`);
});

router.post("/", (_req, res) => {
  res.send("Saving dashboard...");
});

export default router;
