import express from "express";
import { authentication } from "../controllers/userController.js";
const router = express.Router();


router.post("/register",authentication);

export default router;