const cloudinary = require("cloudinary").v2;
// es6 equvialent


// import {
//   CLOUD_NAME,
//   CLOUDINARY_API_KEY,
//   CLOUDINARY_API_SECRET,
// } from "./serverConfig.js";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

module.exports = cloudinary;