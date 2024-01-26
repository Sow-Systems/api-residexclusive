require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");

module.exports = {
	getAllUsers: async () => {
		try {
			const users = await User.findAll();
			return users;
		} catch (error) {
			throw new Error(`Erro ao obter os usuários: ${error.message}`);
		}
	},

	getUserByUsername: async (usr_username) => {
		try {
			const user = await User.findOne({
				where: { usr_username: usr_username },
			});
			return user;
		} catch (error) {
			throw new Error(`Erro ao obter o usuário: ${error.message}`);
		}
	},

	getUserByEmail: async (email) => {
		try {
			const user = await User.findOne({ where: { usr_email: email } });
			return user;
		} catch (error) {
			throw new Error(`Erro ao obter o usuário: ${error.message}`);
		}
	},

	createUser: async (username, name, email, password, birthdate) => {
		try {
			const hashedPassword = await bcrypt.hash(password, 10);
			const newUser = await User.create({
				usr_username: username,
				usr_name: name,
				usr_email: email,
				usr_password: hashedPassword,
				usr_birthdate: birthdate,
				usr_admin: 0,
			});
			return newUser;
		} catch (error) {
			throw new Error(`Erro ao criar usuário: ${error}`);
		}
	},

	updateUser: async (idUser, username, name, email, password, birthdate) => {
		try {
			const hashedPassword = await bcrypt.hash(password, 10);

			await Project.update(updatedProjectData, {
				where: { prj_id: projectId },
			});

			const newUser = await User.update(
				{
					usr_username: username,
					usr_name: name,
					usr_email: email,
					usr_password: hashedPassword,
					usr_birthdate: birthdate,
					usr_admin: 0,
				},
				{ where: { usr_id: idUser } }
			);
			return newUser;
		} catch (error) {
			throw new Error(`Erro ao criar usuário: ${error}`);
		}
	},

	getUserById: async (id) => {
		try {
			const user = await User.findByPk(id);
			return user;
		} catch (error) {
			throw new Error(`Erro ao obter o usuário: ${error.message}`);
		}
	},

	checkPassword: (password, passwordDB) =>
		bcrypt.compareSync(password, passwordDB),

	getToken: (id, username) => {
		const token = jwt.sign({ id, username }, process.env.JWT_SECRET_USER, {
			expiresIn: "365d",
		});
		return token;
	},

	getUserInToken: async (token) => {
		let user = { id: null, username: null };
		if (!token) {
			return user;
		}
		await jwt.verify(token, process.env.JWT_SECRET_USER, (err, decoded) => {
			if (err) {
				return user;
			}
			user = { id: decoded.id, username: decoded.username };
		});
		return user;
	},
};
