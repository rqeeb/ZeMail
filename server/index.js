const express = require("express");
const cors = require("cors");
const app = express();
PORT = process.env.PORT || 2022;
const { mailRouter } = require("./routes/mail");

app.use(cors());
app.use(express.json());
app.use("/api/v1/", mailRouter);

app.listen(PORT, () => {
  console.log("it's running!");
});
