const ErrorHandler = require("../utils/ErrorHandler");

const authorizeRoles = (...roles) => {
	return (req, res, next) => {
		if (!roles.includes(res.locals.user.role)) {
			return next(new ErrorHandler("You are not allowed to perform this action", 403));
		}

		next();
	};
};

module.exports = authorizeRoles;
