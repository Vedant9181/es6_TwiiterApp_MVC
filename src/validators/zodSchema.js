import { z } from "zod";

export const tweetZodSchema = z.object({
  tweetBody: z
    .string()
    .min(1)
    .max(280, "Tweet must be between 1 and 280 characters long"),
});
