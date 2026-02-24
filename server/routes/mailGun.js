const { Router } = require("express");
const multer = require("multer");

const router = Router();
const upload = multer();

router.post("/inbound", upload.any(), (req, res) => {
 
  const body = req.body ?? {};
  console.log("inbound hit");

  const recipient = body.recipient;
  const sender = body.sender;
  const subject = body.subject;
  const bodyPlain = body["body-plain"];

  console.log({ recipient, sender, subject });
  console.log("plain:", (bodyPlain || "").slice(0, 120));

  
  return res.status(200).send("ok");
});

module.exports = { mailGun: router };