import express from "express"; // ESModules
import { DateTime } from "luxon";
import { prisma } from "../prisma/config/prisma";
import dashRouter from "./routes/dashboard";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json()); //Middleware that transforms the incoming request data into JSON

const PORT = 3000;

app.get("/ping", (_req, res) => {
  console.log(`pinged at ${DateTime.now().toISO()}`);
  res.send("pong");
});

app.post("/api/user", async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.create({
    data: {
      email,
      password,
    },
  });
  res.json(user);
  console.log(`User created at: ${DateTime.now().toISO()}`);
});

app.use("/api/dashboard", dashRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
