const express = require('express')
const multer = require('multer')
const morgan = require('morgan')
const imagekit = require('./infra/imagekit');

const app = express();
const uploader = multer();

app.use(express.json());

app.post('/api/v1/profile/avatar', uploader.single('image'), async (req, res) => {
  try {
    // NOTE: This is for imagekit only
    //       You can use other provider to upload your file.
    //       The implementation is similar, just different API.
    const uploadedFile = await imagekit.upload({
      file: req.file.buffer.toString("base64"),
      fileName: req.file.originalname,
    })

    res.status(200).json({
      status: "OK",
      data: uploadedFile,
    })
  }

  catch(err) {
    return res.status(422).json({
      status: "FAIL",
      data: {
        name: err.name,
        message: err.message,
        stack: err.stack,
      }
    })
  }
})

module.exports = app;
