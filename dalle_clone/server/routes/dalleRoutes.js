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

router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body;
    // this will come from the front end

    const aiResponse = await openai.createImage({
      //response from the api
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });

    const image = aiResponse.data.data[0].b64_json;
    //storing the image in the image variable

    res.status(200).json({ photo: image });
  } catch (error) {
    console.log(error);
    res.status(500).send(error?.response.data.error.message);
  }
});

export default router;
