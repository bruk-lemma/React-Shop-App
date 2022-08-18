import express from "express";
import {getProducts, getProduct} from "../controllers/productController.js";

const app = express();
const router = express.Router();

router.route("/").get(getProducts);
router.route("/:id").get(getProduct);

export default router;
