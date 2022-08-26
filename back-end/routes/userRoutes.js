import express from "express";
import {
  authUser,
  getUserProfile,
  RegisterUser,
  updateUserProfile,
} from "../controllers/userController.js";
import {protect} from "../middleware/authMiddleware.js";
const app = express();
const router = express.Router();

router.route("/login").post(authUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router.route("/register").post(RegisterUser);

//router.route("/:id").get(getProduct);

export default router;
