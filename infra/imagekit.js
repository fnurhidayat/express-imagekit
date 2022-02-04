const ImageKit = require("imagekit");

// READ: https://www.npmjs.com/package/imagekit#initialization
module.exports = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});
