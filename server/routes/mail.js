const { Router } = require("express");
const mailRouter = Router();

mailRouter.get("/mail", (req, res) => {
  //   console.log("hit");
  return res.json({ message: "test sucess!" });
});

module.exports = {
  mailRouter: mailRouter,
};
