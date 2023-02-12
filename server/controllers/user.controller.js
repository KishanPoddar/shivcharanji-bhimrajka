;const User = require("../models/user.model");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const ErrorHandler = require("../utils/ErrorHandler");
const validateEmail = require("../utils/validateEmail");

const getOneUser = catchAsyncErrors(async (req, res, next) => {
	const user = res.locals.user;

	if (!user) {
		return next(new ErrorHandler("User not found", 404));
	}

	res.status(200).json({
		success: true,
		message: "Fetched user successfully",
		user: user.getUser(),
	});
});

const getAllUsers = catchAsyncErrors(async (req, res, next) => {
	const users = await User.find().select("name email _id role");
	if (!users) {
		return next(new ErrorHandler("Unable to fetch users", 500));
	}
	const totalUsers = users.length;

	res.status(200).json({
		success: true,
		message: "Fetched user successfully",
		totalUsers,
		users,
	});
});

const updateUser = catchAsyncErrors(async (req, res, next) => {
	const requestBodyObject = req.body;
	const id = res.locals.user.id;

	if (requestBodyObject.email) {
		if (!validateEmail(requestBodyObject.email)) {
			return next(new ErrorHandler("E-mail format incorrect", 400));
		}
	}

	const user = await User.findByIdAndUpdate(id, requestBodyObject, { new: true });
	if (!user) {
		return next(new ErrorHandler("Unable to update user", 500));
	}

	res.status(200).json({
		success: true,
		message: "User updated successfully",
		user: user.getUser(),
	});
});

const deleteUser = catchAsyncErrors(async (req, res, next) => {
	const id = res.locals.user.id;
	await User.findByIdAndDelete(id);
	res.clearCookie("shiv_charan_ji_bhim_raj_ka");
	res.status(200).json({ success: true, message: "User deleted successfully" });
});


// admin route
const updateUserRole = catchAsyncErrors(async (req, res, next) => {
	const { id } = req.params;
	const { role } = req.body;

	const user = await User.findById(id);
	if ((user.role === "user" && role === "admin") || (user.role === "admin" && role === "user")) {
		user.role = role;
		await user.save();

		res.status(200).json({
			success: true,
			message: "User role updated successfully",
			user: user.getUser(),
		});
	} else {
		return next(new ErrorHandler("Please enter a valid role for the user", 400));
	}
});

const getTotalUsers = catchAsyncErrors(async (req, res, next) => {
	const totalUsers = await User.count();
	res.status(200).json({
		success: true,
		message: `Total number of users are ${totalUsers}`,
		totalUsers,
	});
});
	
const adminGetOneUser = catchAsyncErrors(async (req, res, next) => {
	const { id } = req.params;

	const user = await User.findById(id);
	if (!user) {
		return next(new ErrorHandler("User not found", 404));
	}

	res.status(200).json({
		success: true,
		message: "Fetched user successfully",
		user: user.getUser(),
	});
});

const adminDeleteUser = catchAsyncErrors(async (req, res, next) => {
	const { id } = req.params;
	await User.findByIdAndDelete(id);
	res.status(200).json({ success: true, message: "User deleted successfully" });
});
	
module.exports = {
	getOneUser,
	getAllUsers,
	updateUser,
	updateUserRole,
	deleteUser,
	getTotalUsers,
	adminDeleteUser,
	adminGetOneUser,
};
