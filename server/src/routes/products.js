import express from 'express';
import * as product_controller from '../controllers/product-controller.js'

const router = express.Router();

//Get all products
router.get("/", product_controller.getAllProducts);

//Get product by id
router.get("/:id", product_controller.getProductById);

//Get bids of the selected product
router.get("/:id/bids", product_controller.getProductBids);

//Post bids on the selected product
router.post("/:id/bids", product_controller.addBidToProduct);

//Add new product
router.post("/", product_controller.addNewProduct);

//Patch existing product
router.patch("/:id", product_controller.changeExistingProduct);

//Delete bids on the selected product
router.delete("/:id/bids", product_controller.deleteBidsForProduct);

//Delete the selected product
router.delete("/:id", product_controller.deleteProduct);

export default router;