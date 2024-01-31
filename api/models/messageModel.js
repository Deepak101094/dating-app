import mongoose from "mongoose";

const messageModel = new mongoose.Schema({
	senderId: {
		type: String,
		required: true,
	},
	receiverId: {
		type: String,
		required: true,
	},
	message: {
		type: String,
		required: true,
	},
	timestamp: {
		type: Date,
		default: Date.now,
	},
});

const Chat = mongoose.model("Chat", messageModel);

module.exports = Chat;
