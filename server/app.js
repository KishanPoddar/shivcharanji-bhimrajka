const express = require("express");
const app = express();

const limit = "1000"
app.use(express.urlencoded({ extended: true, limit: "1000mb" }));
app.use(express.json({ limit: "1000mb" }));

const cors = require("cors");
app.use(cors({ credentials: true, origin: true }));

const cookieParser = require("cookie-parser");
app.use(cookieParser());

// import routes here
const authRouter = require("./routes/auth.routes");
const bhajanRouter = require("./routes/bhajan.routes");
const userRouter = require("./routes/user.routes");
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/bhajan", bhajanRouter);

// --------------- DEPLOYMENT ---------------

// import { join } from "path";
// if (process.env.NODE_ENV === "production") {
// 	app.use(express.static("client/build"));
// 	app.get("*", (req, res) => {
// 		res.status(200).sendFile(join(__dirname, "../client", "build", "index.html"));
// 	});
// }

// --------------- DEPLOYMENT ---------------

// // import error-middleware here
app.use((req, res) => {
	res.status(404).json({ success: false, message: "Please enter a valid API-URL" });
});
const error = require("./middlewares/error");
app.use(error);

module.exports = app;
