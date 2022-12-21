// on server errors
process.on("uncaughtException", error => console.log("uncaughtException: ", error));
process.on("unhandledRejection", error => console.log("unhandledRejection: ", error));

const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

require("./database/database");
const app = require("./app");

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Listening on http://localhost:${port}/`));
