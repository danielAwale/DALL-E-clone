import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import connectDB from "./mongodb/connect.js";
import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes";

dotenv.config();
//the above line of code will enable us to pull our enviornment variables from our .env files

const app = express();
//initialize express
app.use(cors());
app.use(express.json({ limit: "50mb" }));
// to use the routes they need to be added to middleware 
app.use(/api/v1/post, postRoutes);
app.use(/api/v1/dalle, dalleRoutes);


app.get("/", async (req, res) => {
  res.send("Hello from Dalle");
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(8080, () =>
      console.log("Server has started on port http://localhost:8080")
    );
  } catch (error) {
    console.log(error);
  }
};

startServer();
