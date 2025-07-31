import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";  
import cloudinary from "./cloudinaryConfig.js";
import path from "path";

export default function uploaderMiddleware(folderName) {
  const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: (req, file) => {
      if (!file) {
        throw new Error("No file provided");
      }
      console.log(file);

      const folderPath = `${folderName.trim()}`; // Update the folder path here
      const fileExtension = path.extname(file.originalname).substring(1);
      const publicId = `${file.fieldname}-${Date.now()}`;

      return {
        folder: folderPath,
        public_id: publicId,
        format: fileExtension,
      };
    },
  });
  console.log("Storage configured with folder:", folderName);
  return multer({ storage: storage })
}


// const upload = uploaderMiddleware("imageTweet");

// export default upload;
