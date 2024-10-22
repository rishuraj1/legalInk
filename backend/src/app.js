import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const nodeEnv = process.env.NODE_ENV || "development";

console.log(`Running in ${nodeEnv} mode`);

app.use(cors());
app.use(express.json());

app.get("/api/hello", (req, res) => {
  res.status(200).json({ message: "Hello, world!" });
});

app.use((req, res) => {
  res.status(404).send("Not found");
});

if (nodeEnv !== "test") {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

export default app;
