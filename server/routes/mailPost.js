
const express = require("express");
const app = express();
const mailPost = mailPost();


app.post("/post", (req, res) => {
  const tempMail = req.mail;
  const time = req.time;
});

module.exports = {
  mailPost: mailPost,
};
