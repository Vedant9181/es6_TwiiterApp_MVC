import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  return res.json({ message: "Welcome to the Tweet API v2" });
});

router.get("/:id", (req, res) => {
  const tweetId = req.params.id;
  return res.json({ message: `Fetching v2 tweet with ID: ${tweetId}` });
});

export default router;
