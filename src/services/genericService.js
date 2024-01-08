const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const getUserByUsername = async (usr_username) => {
	try {
		return await userRepository.getUserByUsername(usr_username);
	} catch (error) {
		throw new Error(`Erro a obter o usuários: ${error}`);
	}
};

const createUser = async (usr_username, usr_name, usr_email, usr_password) => {
	try {
		const hashedPassword = await bcrypt.hash(usr_password, 10);
		const userData = {
			usr_username,
			usr_name,
			usr_email,
			usr_password: hashedPassword,
		};
		const newUser = await userRepository.createUser(userData);
		return newUser;
	} catch (error) {
		if (error.message.includes("Duplicate entry")) {
			throw new Error("Usuario duplicado");
		}
		throw new Error("Erro ao registrar usuário");
	}
};

const getAllUsers = async () => {
	try {
		const users = await userRepository.getAllUsers();
		return users;
	} catch (error) {
		throw new Error("Erro ao obter os usuários");
	}
};

const getUserById = async (id) => {
	try {
		const user = await userRepository.getUserById(id);
		return user;
	} catch (error) {
		throw new Error("Erro ao obter o usuário");
	}
};

const checkPassword = (password, passwordDB) =>
	bcrypt.compareSync(password, passwordDB);

const getToken = (username) => {
	const token = jwt.sign({ username: username }, process.env.JWT_SECRET_USER, {
		expiresIn: "365d",
	});
	return token;
};

const getGenericMessage = () => {
	const message = "This is a generic Message";
	return message;
};

module.exports = {
	getUserByUsername,
	createUser,
	getAllUsers,
	getUserById,
	checkPassword,
	getToken,
	getGenericMessage,
};
