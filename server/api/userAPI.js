import express from "express";
import { authentication,loginData } from "../controllers/userController.js";
const router = express.Router();


router.post("/register",authentication);
router.post("/login",loginData);

export default router;