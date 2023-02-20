const { connect } = require("mongoose");
const { set } = require("mongoose");

const db_url = process.env.DB_URI;

set('strictQuery', false);
connect(db_url)
	.then(() => console.log("Database connected"))
	.catch(error => console.log(error));