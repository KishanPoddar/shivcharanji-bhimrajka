const { Schema, model } = require("mongoose");
const { compare, genSalt, hash } = require("bcryptjs");
const { sign } = require("jsonwebtoken");
const crypto = require("crypto");

const userSchema = new Schema(
	{
		name: { type: String, required: [true, "Please enter your name"] },
		email: { type: String, required: [true, "Please enter your e-mail"], unique: true },
		password: { type: String, required: [true, "Please enter a password"] },
		role: { type: String, default: "user" },
		resetPassword: { type: String, default: "" },
	},
	{ timestamps: true },
);

// hashing password
userSchema.pre("save", async function (next) {
	if (!this.isModified("password")) {
		next();
	}
	const salt = await genSalt(10);
	this.password = await hash(this.password, salt);
});

// compare hashed password
userSchema.methods.comparePassword = async function (enteredPassword) {
	return await compare(enteredPassword, this.password);
};

// Creating JWT tokens
userSchema.methods.getJWTToken = function () {
	return sign({ id: this._id }, String(process.env.JWT_SECRET));
};

userSchema.methods.getResetPasswordToken = function () {
	const resetToken = crypto.randomBytes(16).toString("hex");
	this.resetPassword = crypto.createHash("sha256").update(resetToken).digest("hex");

	return resetToken;
};

userSchema.methods.getUser = function () {
	return {
		name: this.name,
		email: this.email,
		_id: this._id,
		role: this.role,
	};
};

module.exports = model("User", userSchema);
