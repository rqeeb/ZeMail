const { Router } = require("express");
const multer = require("multer");

const router = Router();
const upload = multer();

router.post("/inbound", upload.any(), (req, res) => {
  const recipient = req.body.recipient;
  const sender = req.body.sender;
  const subject = req.body.subject;
  const bodyPlain = req.body["body-plain"];
  const bodyHtml = req.body["body-html"];

  console.log("Mailgun inbound hit!");
  console.log({ recipient, sender, subject });
  console.log("Body plain:", (bodyPlain || "").slice(0, 120));

  return res.status(200).send("ok");
});

module.exports = { mailGun: router };