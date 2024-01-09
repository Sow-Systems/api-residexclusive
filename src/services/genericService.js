const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const getGenericMessage = () => {
	const message = "This is a generic Message";
	return message;
};

module.exports = {
	getGenericMessage,
};
