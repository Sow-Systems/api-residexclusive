const userService = require("../services/UserService");

module.exports = UserController = {
	login: async (req, res) => {
		// #swagger.tags = ['Users']
		// #swagger.description = 'Endpoint para o usuario efetuar o login no sistema'
		try {
			const { username, password } = req.body;

			if (!username) {
				return res.status(404).send("Usuário não informado");
			}
			const user = await userService.getUserByUsername(username);

			if (!user) {
				return res.status(404).send("Usuário não encontrado");
			}

			if (!userService.checkPassword(password, user.usr_password)) {
				return res.status(401).send("Credenciais inválidas");
			}
			let token = userService.getToken(username);
			return res.status(200).json({ token });
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	},

	getUserByID: async (req, res) => {
		// #swagger.tags = ['Users']
		// #swagger.description = 'Endpoint para listar um usuário pelo ID'
		/* #swagger.security = [{
            "bearerAuth": []
    }] */
		try {
			const { id } = req.params;
			const user = await userService.getUserById(id);

			if (!user) {
				return res.status(404).json({ error: "Usuario nao encontrado" });
			}
			return res.status(200).json(user);
		} catch (error) {
			return res.status(500).json({ error: error.message });
		}
	},

	getUsers: async (req, res) => {
		// #swagger.tags = ['Users']
		// #swagger.description = 'Endpoint para listar todas os usuários cadastrados.'
		/* #swagger.security = [{
            "bearerAuth": []
    }] */
		try {
			const users = await userService.getAllUsers();
			res.status(200).json(users);
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	},

	createUser: async (req, res) => {
		// #swagger.tags = ['Users']
		// #swagger.description = 'Endpoint para cadastrar um usuário'
		/* #swagger.security = [{
            "bearerAuth": []
    }] */
		try {
			const { username, name, email, password, birthdate } = req.body;
			const checkUsername = await userService.getUserByUsername(username);
			const checkEmail = await userService.getUserByEmail(email);
			if (checkUsername) {
				return res
					.status(409)
					.json({ error: "Usuario ja cadastrado no sistema" });
			}

			if (checkEmail) {
				return res
					.status(409)
					.json({ error: "Email ja cadastrado no sistema" });
			}
			const newUser = await userService.createUser(
				username,
				name,
				email,
				password,
				birthdate
			);
			res
				.status(201)
				.json({ message: "Usuario criado: Id: " + newUser.usr_id });
		} catch (error) {
			return res.status(500).json({
				error: "Erro ao inserir o usuario no sistema",
			});
		}
	},
};
