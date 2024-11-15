import express from 'express';
import * as user_controller from '../controllers/user-controller.js';
const router = express.Router();

router.post("/register", user_controller.registerUser);

router.post("/login", user_controller.loginUser);

router.get("/token", user_controller.getUserByToken);

router.get("/", user_controller.getAllUsers);

router.get("/:id", user_controller.getUserById);

router.get("/bids/me", user_controller.getUserBidsByToken);


export default router;