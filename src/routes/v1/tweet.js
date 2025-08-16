import express from "express";
import {
  createTweet,
  deleteTweet,
  getTweets,
  getTweetsById,
  updateTweet,
} from "../../controller/tweetController.js";
import validateTweet from "../../validators/tweetZodValidator.js";
import { tweetZodSchema } from "../../validators/zodSchema.js";
import upload from "../../config/multerConfig.js";
import { getTweetsByIdManualValidator } from "../../validators/tweetManualValidator.js";
import { de } from "zod/locales";

const router = express.Router();

router.get("/", getTweets);

router.get("/:id", getTweetsByIdManualValidator, getTweetsById);

router.delete("/:id", getTweetsByIdManualValidator, deleteTweet);

router.post(
  "/",
  upload.single("imageTweet"),
  validateTweet(tweetZodSchema),
  createTweet
);

router.put("/:id", getTweetsByIdManualValidator, updateTweet)
export default router;
