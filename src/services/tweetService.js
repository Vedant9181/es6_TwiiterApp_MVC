import { Filter } from "bad-words";
import {
  createTweet as createTweetRepository,
  getTweets as getTweetsRepository,
  getTweetById as getTweetByIdRepository,
} from "../repository/tweetRepository.js";
export const createTweet = async ({ tweetBody }) => {
  //try to find blocked words in the tweet tweet
  //and if any exists  don't create the tweet and throw an error

  const filter = new Filter();
  if (filter.isProfane(tweetBody)) {
    console.log(tweetBody);
    console.log(filter.clean(tweetBody));
    throw {
      message: "tweet contains inappropriate language",
      status: 400,
    };
  }

  const tweet = await createTweetRepository({ tweetBody });
  return tweet;
};

export const getTweets = async () => {
  try {
    const tweets = await getTweetsRepository();
    return tweets;
  } catch (error) {
    
  }
};
