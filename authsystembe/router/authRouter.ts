import express, { Router } from "express";
import {
  DeleteAccount,
  RegisterAccount,
  SigninAccount,
  ViewAllAccount,
} from "../controller/authController";
const router = express.Router();
router.route("/register").post(RegisterAccount);
router.route("/signin").post(SigninAccount);
router.route("/view").get(ViewAllAccount);
router.route("/:accountID/delete").delete(DeleteAccount);
export default router;
