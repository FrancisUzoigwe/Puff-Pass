import express, {Router} from "express"
import { DeleteAccount, RegisterAccount, ViewAllAccount } from "../controller/authController"
const router = express.Router()
router.route("/register").post(RegisterAccount)
router.route("/view").get(ViewAllAccount)
router.route("/:accountID/delete").delete(DeleteAccount)
export default router