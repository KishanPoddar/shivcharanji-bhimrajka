const { Schema, model } = require("mongoose");

const bhajanSchema = new Schema(
	{
		title: { type: String, required: true },
		tarj: { type: String, default: "" },
		doha: { type: String, default: "" },
		lyrics: [{ type: String }],
		image: { type: String, default: "" },
		image_public_url: { type: String, default: "" },
	},
	{ timestamps: true },
);

module.exports = model("Bhajan", bhajanSchema);