import Tweet from "../schema/tweetSchema.js";

export const createTweet = async ({ tweetBody, image }) => {
  try {
    const tweet = await Tweet.create({ tweetBody, image });
    return tweet;
  } catch (error) {
    throw error;
  }
};

export const getTweets = async () => {
  try {
    const tweets = await Tweet.find();
    return tweets;
  } catch (error) {
    throw error;
  }
};

export const getTweetById = async (tweetId) => {
  try {
    const tweet = await Tweet.findById(tweetId);
    console.log("tweet id repo return poch raha till return sttement");
    return tweet;
  } catch (error) {
    throw error;
  }
};

export const deleteTweet = async (tweetId) => {
  try {
    const tweet = await Tweet.findByIdAndDelete(tweetId);
    return tweet;
  } catch (error) {
    throw error;
  }
};

export const updateTweet = async (tweetId, tweetBody) => {
  try {
    const tweet = await Tweet.findByIdAndUpdate(
      tweetId,
      { tweetBody },
      { new: true }
    );
    return tweet;
  } catch (error) {
    throw error;
  }
};
