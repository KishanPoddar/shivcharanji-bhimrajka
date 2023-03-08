const Bhajan = require("../models/bhajan.model");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const ErrorHandler = require("../utils/ErrorHandler");
const cloudinary = require("../utils/cloudinaryConfig");

const createBhajan = catchAsyncErrors(async (req, res, next) => {
	const requestBodyObject = req.body;
	const { title, lyrics, doha, image } = requestBodyObject;

	if (doha?.length) {
		let newDoha = doha.split("\n");
		newDoha = newDoha.filter(doha => doha.length);
		requestBodyObject.doha = newDoha;
	}

	if (lyrics?.length) {
		let newLyrics = lyrics.split("\n");
		newLyrics = newLyrics.filter(lyrics => lyrics.length);
		requestBodyObject.lyrics = newLyrics;
	}

	if (image) {
		const uploadImage = await cloudinary.uploader.upload(image, {
			folder: "bhajans",
			use_filename: true,
		});
		const setPic = uploadImage.secure_url;
		const setPublicUrl = uploadImage.public_id;
		requestBodyObject.image_public_url = setPublicUrl;
		requestBodyObject.image = setPic;
	}

	if (!title) {
		return next(new ErrorHandler("Please enter a title for the bhajan", 400));
	}

	const bhajan = await Bhajan.create(requestBodyObject);
	if (!bhajan) {
		return next(new ErrorHandler("Unable to create bhajan", 500));
	}

	res.status(201).json({
		success: true,
		message: "Bhajan created successfully",
		bhajan,
	});
});

const getBhajan = catchAsyncErrors(async (req, res, next) => {
	const { id } = req.params;

	const bhajan = await Bhajan.findById(id);
	if (!bhajan) {
		return next(new ErrorHandler("Bhajan not found", 404));
	}

	res.status(200).json({ success: true, message: "Fetched bhajan successfully", bhajan });
});

const getAllBhajans = catchAsyncErrors(async (req, res, next) => {
	const bhajans = await Bhajan.find();
	if (!bhajans) {
		return next(new ErrorHandler("Unable to load bhajans", 500));
	}
	const totalBhajans = bhajans.length;

	res.status(200).json({
		success: true,
		message: "Fetched all bhajans successfully",
		totalBhajans,
		bhajans,
	});
});

const getAllCategoryBhajans = catchAsyncErrors(async (req, res, next) => {
	const { id } = req.params;
	const bhajans = await Bhajan.find({category: id});
	if (!bhajans) {
		return next(new ErrorHandler("Unable to load bhajans", 500));
	}
	const totalBhajans = bhajans.length;

	res.status(200).json({
		success: true,
		message: "Fetched all bhajans successfully",
		totalBhajans,
		bhajans,
	});
});

const getTotalBhajans = catchAsyncErrors(async (req, res, next) => {
	const totalBhajans = await Bhajan.count();
	res.status(200).json({
		success: true,
		message: `Total number of bhajans are ${totalBhajans}`,
		totalBhajans,
	});
});

const updateBhajan = catchAsyncErrors(async (req, res, next) => {
	const requestBodyObject = req.body;
	const { id } = req.params;
	const { lyrics, doha, image } = requestBodyObject;

	const previousBhajan = await Bhajan.findById(id);
	if (!previousBhajan) {
		return next(new ErrorHandler("Bhajan not found", 404));
	}
	
	if (doha?.length) {
		let newDoha = doha.split("\n");
		newDoha = newDoha.filter(doha => doha.length);
		requestBodyObject.doha = newDoha;
	}

	if (lyrics?.length) {
		let newLyrics = lyrics.split("\n");
		newLyrics = newLyrics.filter(lyrics => lyrics.length);
		requestBodyObject.lyrics = newLyrics;
	}
	if (image) {
		if (previousBhajan.image_public_url) {
			await cloudinary.uploader.destroy(previousBhajan.image_public_url);
		}
		const uploadImage = await cloudinary.uploader.upload(image, {
			folder: "bhajans",
			use_filename: true,
		});
		const setPic = uploadImage.secure_url;
		const setPublicUrl = uploadImage.public_id;
		requestBodyObject.image_public_url = setPublicUrl;
		requestBodyObject.image = setPic;
	}

	const bhajan = await Bhajan.findByIdAndUpdate(id, requestBodyObject, { new: true });
	if (!bhajan) {
		return next(new ErrorHandler("Unable to update user", 500));
	}

	res.status(200).json({
		success: true,
		message: "Bhajan updated successfully",
		bhajan,
	});
});

const deleteBhajan = catchAsyncErrors(async (req, res, next) => {
	const { id } = req.params;
	const bhajan = await Bhajan.findById(id);
	if (bhajan.image_public_url) {
		await cloudinary.uploader.destroy(bhajan.image_public_url);
	}

	await bhajan.remove();
	res.status(200).json({ success: true, message: "Bhajan deleted successfully" });
});

module.exports = {
	createBhajan,
	updateBhajan,
	getBhajan,
	getAllBhajans,
	getAllCategoryBhajans,
	deleteBhajan,
	getTotalBhajans,
};
