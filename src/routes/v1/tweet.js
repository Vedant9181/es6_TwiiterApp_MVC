import express from "express";
import {
  createTweet,
  getTweets,
  getTweetsById,
} from "../../controller/tweetController.js";
import validateTweet from "../../validators/tweetZodValidator.js";
import { tweetZodSchema } from "../../validators/zodSchema.js";
// import upload from "../../config/multerConfig.js";
import uploaderMiddleware from "../../config/multerConfig.js";

const router = express.Router();

router.get("/", getTweets);

router.get("/:id", getTweetsById);

router.post(
  "/",
  // upload.single("imageTweet"),
  uploaderMiddleware("imageTweet").single("imageTweet"),
  validateTweet(tweetZodSchema),
  createTweet
);

export default router;
