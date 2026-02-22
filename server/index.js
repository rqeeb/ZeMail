const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 2022;
const mail = require("./routes/mail");




app.use(cors());
app.use(express.json());
app.use("/mail",mail);



app.listen(PORT, () => {
  console.log("it's running!");
});