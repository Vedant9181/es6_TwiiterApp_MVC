import { createTweet as createTweetService } from "../services/tweetService.js";
import {
  getTweets as getTweetsService,
  getTweetById as getTweetsByIdService,
  deleteTweet as deleteTweetService,
  updateTweet as updateTweetService,
} from "../services/tweetService.js";

export const createTweet = async (req, res) => {
  console.log("req obj in tweetController\n", req.file);
  try {
    const response = await createTweetService({
      tweetBody: req.body.tweetBody,
      image: req.file?.path,
    });
    return res.status(201).json({
      success: true,
      message: "Tweet created successfully",
      data: response,
    });
  } catch (error) {
    if (error.status) {
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

export const getTweets = async (req, res) => {
  try {
    const response = await getTweetsService();
    return res.status(200).json({
      success: true,
      message: "Tweets fetched successfully",
      data: response,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to fetch tweets/ Internal Server Error",
      success: false,
    });
  }
};

export const getTweetsById = async (req, res) => {
  try {
    const response = await getTweetsByIdService(req.params.id);
    console.log("tweet id cntrl poch raha till return sttement");

    return res.status(200).json({
      success: true,
      message: `Tweet  fetched successfully`,
      data: response,
    });
  } catch (error) {
    if (error.status) {
      return res.status(error.status).json({
        message: error.message,
        success: false,
      });
    }

    console.log(error);

    return res.status(500).json({
      message: "Failed to fetch tweet/ Internal Server Error okkkkkk",
      success: false,
    });
  }
};

export const deleteTweet = async (req, res) => {
  try {
    const response = await deleteTweetService(req.params.id);
    return res.status(200).json({
      success: true,
      message: "Tweet deleted successfully",
      data: response,
    });
  } catch (error) {
    console.log(error);
    if (error.status) {
      return res.status(error.status).json({
        message: error.message,
        success: false,
      });
    }

    return res.status(500).json({
      message: "Failed to delete tweet/ Internal Server Error",
      success: false,
    });
  }
};

export const updateTweet = async (req, res) => {
  try {
    const response = await updateTweetService(
      req.params.id,
      req.body.tweetBody
    );
    return res.status(200).json({
      success: true,
      message: "Tweet updated successfully",
      data: response,
    });
  } catch (error) {
    console.log(error);
    if (error.status) {
      return res.status(error.status).json({
        message: error.message,
        success: false,
      });
    }

    return res.status(500).json({
      message: "Failed to delete tweet/ Internal Server Error",
      success: false,
    });
  }
};
