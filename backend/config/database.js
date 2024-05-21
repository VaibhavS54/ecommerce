// Importing the Mongoose library
const mongoose = require("mongoose");

require("dotenv");

const dbConnect = () => {
	mongoose
		.connect("mongodb+srv://prayasyadav248:v4s38aStDtz4SlUC@cluster0.phtnyvx.mongodb.net/e-commerce", {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then(() => console.log("DB CONNECTION SUCCESS"))
		.catch((err) => {
			console.log(`DB CONNECTION ISSUES`);
			console.error(err.message);
			process.exit(1);
		});
};

module.exports = dbConnect;
