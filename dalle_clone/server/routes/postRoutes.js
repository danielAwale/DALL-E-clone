import express from "express";
import * as dotenv from "dotenv";
import pkg from "cloudinary";
const { V2: cloudinary } = pkg;

import Post from "../mongodb/models/post.js";

dotenv.config();

const router = express.Router();

export default router;
