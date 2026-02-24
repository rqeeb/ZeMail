const express = require("express");
const cors = require("cors");
const app = express();
PORT = process.env.PORT || 2022;
const { mailRouter } = require("./routes/mail");
const { mailGun } = require("./routes/mailGun.js");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/mailgun", mailGun); // /api/v1/mailgun/inbound


app.get("/health", (req, res) => {
  res.json({
    ok: true,
  });
});

app.listen(PORT, () => {
  console.log("it's running!");
});
