import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  return res.json({ message: "Welcome to the Comment API" });
});

router.get("/:id", (req, res) => {
  const tweetId = req.params.id;
  return res.json({ message: `Fetching comment with ID: ${tweetId}` });
});



export default router;
