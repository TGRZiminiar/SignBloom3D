// /server/index.js
import express from "express";
import cors from "cors";
import { connectToDatabase } from "./configs/db.config.js";
import userRouter from "./routes/user.js";
import vocabRouter from "./routes/vocab.js";
import ticketRouter from "./routes/ticket.js";
const app = express();

app.use(cors());
connectToDatabase();

app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api/vocab", vocabRouter);
app.use("/api/ticket", ticketRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
