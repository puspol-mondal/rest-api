import express from "express";
import { getAllData } from "../controllers/User.js";

//router init
const router = express.Router();

//routes
router.get("/", getAllData);
//export default
export default router;
