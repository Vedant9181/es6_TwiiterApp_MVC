export default function validateTweet(schema) {
  return async function middleware(req, res, next) {
    try {
      console.log("ZodValidator", req.body);
      schema.parse(req.body);
      next();
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        message: "Validation failed",
        error: error.issues[0].message, //return validation errors
      });
    }
  };
}
