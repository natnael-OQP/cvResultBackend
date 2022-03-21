const mongoose = require("mongoose");
const dbConnect = async () => {
  await mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("Connected to MongoDB"));
};
module.exports = dbConnect;
