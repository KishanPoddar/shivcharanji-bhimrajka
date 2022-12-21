const { Router } = require("express");
const {
	createBhajan,
	deleteBhajan,
	getAllBhajans,
	getBhajan,
	updateBhajan,
	getTotalBhajans,
} = require("../controllers/bhajan.controller");
const auth = require("../middlewares/auth");
const isAdmin = require("../middlewares/admin");
const router = Router();

router.route("/create").post(auth, isAdmin("admin", "super-admin"), createBhajan);
router.route("/all").get(getAllBhajans);
router.route("/total").get(auth, isAdmin("admin", "super-admin"), getTotalBhajans);
router
	.route("/:id")
	.get(getBhajan)
	.delete(auth, isAdmin("admin", "super-admin"), deleteBhajan)
	.put(auth, isAdmin("admin", "super-admin"), updateBhajan);

module.exports = router;
