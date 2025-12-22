import express from "express";
import { login, register,getUserHistory, addToHistory } from "../controllers/user.Controller.js";
const router = express.Router();

router.route("/login").post(login);
router.route("/register").post(register);
router.route("/addtoactivity").post(addToHistory);
router.route("/getallactivity").get(getUserHistory);


export default router;