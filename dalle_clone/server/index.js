import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

dotenv.config();
//the above line of code will enable us to pull our enviornment variables from our .env files

const app = express();
//initialize express
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/", async (req, res) => {
  res.send("Hello from Dalle");
});

app.listen(8080, () =>
  console.log("Server has started on port http://localhost:8080")
);