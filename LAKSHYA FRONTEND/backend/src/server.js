import express from "express";
import cors from "cors";

const app = express();

// allow your frontend origin (3001)
app.use(cors({ origin: "http://localhost:3001" }));
app.use(express.json());

app.post("/api/auth/signup", (req, res) => {
  console.log("Signup hit:", req.body);
  // TODO: hand over to DB/dev later; for now just echo
  return res.status(201).json({ message: "User registered successfully" });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
