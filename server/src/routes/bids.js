import express from 'express';
import * as bid_controller from '../controllers/bid-controller.js'

const router = express.Router();

router.get("/", bid_controller.getAllBids);

router.get("/:id", bid_controller.getBidById);

export default router;