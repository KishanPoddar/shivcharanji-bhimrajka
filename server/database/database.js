const { connect } = require("mongoose");
const { set } = require("mongoose");

const db_url = process.env.DB_URI || "mongodb://127.0.0.1:27017/shivcharanji-bhimrajka";

set('strictQuery', false);
connect(db_url)
	.then(() => console.log("Database connected"))
	.catch(error => console.log(error));