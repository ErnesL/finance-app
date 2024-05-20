import express from "express";
import { DateTime } from "luxon";
import { prisma } from "../../prisma/config/prisma";
import { User, Cost } from "../types";

const router = express.Router();

router.get("/", (req, res) => {
  const id = req.body.id;
  const user: User = prisma.user.findUnique(id);
  res.send(`[${DateTime.now().toISO()}] --- Fetching current user ${user}...`);
});

router.post("/", (_req, res) => {
  res.send(`[${DateTime.now().toISO()}] --- Saving current user...`);
});

export default router;
