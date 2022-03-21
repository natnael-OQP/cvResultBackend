const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const asyncHandler = require("express-async-handler");
const dbConnect = require("./db");
const Cv = require("./cvmodel");
// initialize
dotenv.config();
dbConnect();
const app = express();
// middleware
app.use(express.json());
app.use(cors());

// creat cv
app.post(
  "/api/",
  asyncHandler(async (req, res, next) => {
    try {
      const cv = await Cv.create(req.body);
      res.status(200).json(cv._id);
    } catch (error) {
      res.status(500).json(error);
    }
  })
);
// get cv by id
app.get(
  "/api/:id",
  asyncHandler(async (req, res, next) => {
    try {
      const cv = await Cv.findById(req.params.id);
      res.status(200).json(cv);
    } catch (error) {
      res.status(500).json(error);
    }
  })
);

app.listen(process.env.PORT || 8000, () => {
  console.log(`backend server => http://localhost:8000`);
});
