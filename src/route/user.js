import express from "express";

const userRoute = express.Router();

userRoute.get("/", (req, res, next) => {
  res.send("This is user");
});

export default userRoute;