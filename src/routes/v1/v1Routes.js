import express from "express";
import tweetsRouter from "./tweet.js";
import commentsRouter from "./comment.js";
const router = express.Router();

router.use("/tweets", tweetsRouter);
router.use("/comments", commentsRouter);

export default router;
