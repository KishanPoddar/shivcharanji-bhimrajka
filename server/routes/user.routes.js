const { Router } = require("express");
const {
	deleteUser,
	getAllUsers,
	getOneUser,
	updateUser,
	updateUserRole,
	getTotalUsers,
	adminDeleteUser,
	adminGetOneUser,
} = require("../controllers/user.controller");
const auth = require("../middlewares/auth");
const isAdmin = require("../middlewares/admin");
const router = Router();

router.route("/all").get(auth, isAdmin("super-admin"), getAllUsers);
router.route("/role/:id").put(auth, isAdmin("super-admin"), updateUserRole);
router.route("/").get(auth, getOneUser).put(auth, updateUser).delete(auth, deleteUser);
// admin users
router.route("/delete/:id").delete(auth, isAdmin("super-admin"), adminDeleteUser);
router.route("/total").get(auth, isAdmin("super-admin"), getTotalUsers);
router.route("/:id").get(auth, isAdmin("super-admin"), adminGetOneUser);

module.exports = router;
