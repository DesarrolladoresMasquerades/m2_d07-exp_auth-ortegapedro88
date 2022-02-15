const multer = require("multer");
const cloudinary = require("cloudinary");
const {CloudinaryStorage} = require("multer-storage-cloudinary");

const cloudinaryAccount = cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const storage = new CloudinaryStorage({
 cloudinary: cloudinaryAccount,
  params: {
    folder: "cappuccino",
    allowed_formats: ["svg", "png", "jpg", "tif", "wep", "pdf"],
  },
});

module.exports = multer({ storage });
