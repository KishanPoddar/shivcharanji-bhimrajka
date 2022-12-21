const { verify } = require("jsonwebtoken");
const User = require("../models/user.model");
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("./catchAsyncErrors");

const isUserAuthenticated = catchAsyncErrors(async function (req, res, next) {
	const token = req.cookies?.shiv_charan_ji_bhim_raj_ka;
	if (!token) {
		return next(new ErrorHandler("Please login to access this resource", 401));
	}

	const data = verify(token, String(process.env.JWT_SECRET));
	if (!data) {
		return next(new ErrorHandler("User not found", 404));
	}
	res.locals.user = await User.findById(data.id);

	next();
});

module.exports = isUserAuthenticated;
