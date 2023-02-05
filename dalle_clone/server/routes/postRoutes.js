import express from "express";
import * as dotenv from "dotenv";
import pkg from "cloudinary";
const { V2: cloudinary } = pkg;

import Post from "../mongodb/models/post.js";

dotenv.config();

const router = express.Router();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

//GET ALL POST
router.route("/").get(async (req, res) => {});

//CREATE A POST
router.route("/").post(async (req, res) => {});

export default router;
