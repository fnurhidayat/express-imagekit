const express = require("express");
const multer = require("multer");
const morgan = require("morgan");
const cors = require("cors");
const imagekit = require("./infra/imagekit");

const app = express();
const uploader = multer();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.post(
  "/api/v1/profile/avatar",
  uploader.single("image"),
  async (req, res) => {
    try {
      // NOTE: This is for imagekit only
      //       You can use other provider to upload your file.
      //       The implementation is similar, just different API.
      const uploadedFile = await imagekit.upload({
        file: req.file.buffer.toString("base64"),
        fileName: req.file.originalname,
      });

      console.log("[DEBUG]:", "uploadedFile", uploadedFile);

      // TODO: Do whatever you want with file
      //       The author suggest that you save
      //       the thumbnail, url, and fileId,
      //       to the database.

      res.status(200).json({
        status: "OK",
        data: uploadedFile,
      });
    } catch (err) {
      console.log("[DEBUG]:", err.name);
      console.log("[DEBUG]:", err.message);
      console.log("[DEBUG]:", err.stack);
      return res.status(422).json({
        status: "FAIL",
        data: {
          name: err.name,
          message: err.message,
          stack: err.stack,
        },
      });
    }
  }
);

module.exports = app;
