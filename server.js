import express from "express";
import color from "colors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import userRoute from "./route/user.js";

//express initialization
const app = express();
dotenv.config();

//middleware initialization
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());

//environment
const PORT = process.env.PORT || 8080;

//router routes
app.use("/api/v1/user", userRoute);

//app listening
app.listen(PORT, () => {
  console.log(`server is running ${PORT}`.bgGreen.yellow);
});
