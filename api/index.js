const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cypto = require("crypto");
const nodemailer = require("nodemailer");

const app = express();
const port = 3000;
const cors = require("cors");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

const jwt = require("jsonwebtoken");
const { error } = require("console");

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
