const User = require("../models/user.model");
const crypto = require("crypto");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const ErrorHandler = require("../utils/ErrorHandler");
const sendResetEmail = require("../utils/sendEmail");
const sendToken = require("../utils/sendToken");
const validateEmail = require("../utils/validateEmail");

const signup = catchAsyncErrors(async (req, res, next) => {
	const { name, email, password } = req.body;

	if (!name || !email || !password) {
		return next(new ErrorHandler("Please enter all the credentials", 400));
	}
	if (!validateEmail(email)) {
		return next(new ErrorHandler("Email format is incorrect", 400));
	}

	const user = await User.findOne({ email });
	if (user) {
		return next(new ErrorHandler("User account already exists", 400));
	}

	const newUser = await User.create({ name, email, password });
	if (!newUser) {
		return next(new ErrorHandler("Unable to create user", 500));
	}

	sendToken(res, newUser, 201, "User created successfully");
});

const login = catchAsyncErrors(async (req, res, next) => {
	const { email, password } = req.body;
	if (!email || !password) {
		return next(new ErrorHandler("Please enter all the credentials", 400));
	}
	if (!validateEmail(email)) {
		return next(new ErrorHandler("Email format is incorrect", 400));
	}

	const user = await User.findOne({ email });
	if (!user) {
		return next(new ErrorHandler("Enter valid credentials", 400));
	}

	const comparePasswordResult = await user.comparePassword(password);
	if (!comparePasswordResult) {
		return next(new ErrorHandler("Enter valid credentials", 400));
	}

	sendToken(res, user, 200, "User logged-in successfully");
});

const logout = catchAsyncErrors(async (req, res, next) => {
	res.clearCookie("shiv_charan_ji_bhim_raj_ka");

	res.status(200).json({ success: true, message: "User logged out successfully" });
});

const forgotPassword = catchAsyncErrors(async (req, res, next) => {
	const { email } = req.body;
	if (!validateEmail(email)) {
		return next(new ErrorHandler("Please enter a valid e-mail ID", 400));
	}

	const user = await User.findOne({ email });
	if (!user) {
		return next(
			new ErrorHandler("User with this e-mail ID is not present", 404),
		);
	}

	const resetToken = user.getResetPasswordToken();
	const { success, message } = await sendResetEmail(email, resetToken); // sending mail to the client
	if (!success) {
		return next(new ErrorHandler(message, 500));
	}
	await user.save();

	res.status(200).json({
		success: true,
		message: `Password reset link has been sent to ${email}, please check your e-mail`,
	});
});

const resetPassword = catchAsyncErrors(async (req, res, next) => {
	const { password } = req.body;
	const { id } = req.params;
	const newId = crypto.createHash("sha256").update(id).digest("hex");
	const user = await User.findOne({ resetPassword: newId });
	if (!user) {
		return next(new ErrorHandler("User not found", 404));
	}

	user.password = password;
	user.resetPassword = "";
	await user.save();

	res.status(200).json({ success: true, message: "New password updated" });
});

module.exports = { signup, login, logout, resetPassword, forgotPassword };
