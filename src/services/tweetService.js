import { Filter } from "bad-words";
import {
  createTweet as createTweetRepository,
  getTweets as getTweetsRepository,
  getTweetById as getTweetByIdRepository,
  deleteTweet as deleteTweetRepository,
  updateTweet as updateTweetRepository,
} from "../repository/tweetRepository.js";

export const createTweet = async ({ tweetBody, image }) => {
  //try to find blocked words in the tweet tweet
  //and if any exists  don't create the tweet and throw an error
  console.log("IN createTweet service");
  console.log();

  const filter = new Filter();
  if (filter.isProfane(tweetBody)) {
    console.log(tweetBody);
    console.log(filter.clean(tweetBody));
    throw {
      message: "tweet contains inappropriate language",
      status: 400,
    };
  }

  const tweet = await createTweetRepository({ tweetBody, image });
  return tweet;
};

export const getTweets = async () => {
  const tweets = await getTweetsRepository();
  return tweets;
};

export const getTweetById = async (tweetId) => {
  const tweet = await getTweetByIdRepository(tweetId);
  if (!tweet) {
    throw {
      message: "Tweet not found",
      status: 404,
    };
  }

  return tweet;
};

export const deleteTweet = async (tweetId) => {
  const tweet = await deleteTweetRepository(tweetId);
  if (!tweet) {
    throw {
      message: "Tweet not found",
      status: 404,
    };
  }
  return tweet;
};

export const updateTweet = async (tweetId, tweetBody) => {
  const response = await updateTweetRepository(tweetId, tweetBody);
  return response;
};
