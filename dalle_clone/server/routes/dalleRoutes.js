import express from "express";
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const router = express.Router();

//create a new variable and pass it as a function
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

//create an instance of openai
const openai = new OpenAIApi(configuration);

//to test..
router.route("/").get((req, res) => {
  res.send("Hello from Dall-E");
});

export default router;
