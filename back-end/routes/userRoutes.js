import express from "express";
import {authUser} from "../controllers/userController.js";

const app = express();
const router = express.Router();

router.route("/login").post(authUser);
//router.route("/:id").get(getProduct);

export default router;
