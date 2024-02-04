const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

const app = express();
const port = 3000;
const cors = require("cors");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const jwt = require("jsonwebtoken");
const User = require("./models/userModel");

mongoose
	.connect("mongodb+srv://deepak:deepak@cluster0.6t6frod.mongodb.net/")
	.then(() => {
		console.log("Connected to MongoDB");
	})
	.catch((error) => {
		console.log("Error while connecting to mongodb");
	});

app.listen(port, () => {
	console.log("server is running on 3000");
});

// end points

app.post("/register", async (req, res) => {
	try {
		const { name, email, password } = req.body;

		// check user is already exist
		const existingUser = await User.findOne({ email });

		if (existingUser) {
			res.status(500).json({ message: "User already exists" });
		}

		// create new user
		const newUser = new User({
			name,
			email,
			password,
		});

		// generate a vefification token
		newUser.verificationToken = crypto.randomBytes(20).toString("hex");

		// save the user to the database
		await newUser.save();

		// send the verification email to the register user
		sendVerificationEmail(newUser.email, newUser.verificationToken);
	} catch (error) {
		console.log("Error while registering the user");
		res.status(500).json({ message: "Registration failed" });
	}
});
