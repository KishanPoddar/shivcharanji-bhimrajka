const { Router } = require("express");
const {
	signup,
	login,
	logout,
	forgotPassword,
	resetPassword,
} = require("../controllers/auth.controller");
const auth = require("../middlewares/auth");
const router = Router();

router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/logout").get(auth, logout);
router.route("/forgot-password").post(forgotPassword);
router.route("/reset-password/:id").post(resetPassword);

module.exports = router;
