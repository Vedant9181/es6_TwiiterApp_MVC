import { createTweet as createTweetService } from "../services/tweetService.js";

export const getTweets = (req, res, next) => {
  console.log(next);
  return res.json({ message: "Welcome to the Tweet API" });
};

export const getTweetsById = (req, res) => {
  const { id } = req.params;
  return res.json({ message: `Fetching tweet with ID: ${id}` });
};

export const createTweet = async (req, res) => {
  try {
    const response = await createTweetService(req.body);
    return res.status(201).json({
      success: true,
      message: "Tweet created successfully",
      data: response,
    });

  } catch (error) {
  
    if(error.status){
      return res.status(error.status).json({
        message: error.message,
        success: false,
      });
    }

    return res.status(500).json({
      message: "Failed to create tweet/ Internal Server Error",
      success: false,
    });
  }
};
