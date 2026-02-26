const mongoose = require("mongoose");

async function connectDB(uri) {
  mongoose.set("strictQuery", true);
  await mongoose.connect(uri);
  console.log("DB connected");
}

module.exports = { connectDB };