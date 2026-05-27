import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/data", (req, res) => {
    res.json({
        satatus: "ok",
        message: "Backend running",
    });
});

app.listen(5000, "0.0.0.0", () => {
  console.log("Backend is running");
});