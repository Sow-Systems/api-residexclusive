"use strict";

const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */

module.exports = {
	up: async (queryInterface) => {
		// Inserir um usuário administrador na tabela
		const hashedPassword = await bcrypt.hash("admin", 10);
		return queryInterface.bulkInsert("user", [
			{
				usr_username: "admin",
				usr_name: "Administrador",
				usr_email: "danilosalys.developer@gmail.com",
				usr_password: hashedPassword,
				usr_birthdate: "1990-05-08",
				usr_admin: true,
				created_at: new Date(),
				updated_at: new Date(),
			},
		]);
	},

	down: async (queryInterface) => {
		// Remover o usuário administrador inserido na seed
		return queryInterface.bulkDelete("user", { usr_username: "admin" });
	},
};
