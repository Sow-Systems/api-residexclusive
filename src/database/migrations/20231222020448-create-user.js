"use strict";

/** @type {import('sequelize-cli').Migration} */

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return await queryInterface.createTable("user", {
			usr_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			usr_username: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true,
			},
			usr_name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			usr_email: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true,
			},
			usr_password: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			usr_birthdate: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			usr_admin: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false,
			},
			created_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			updated_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
		});
	},

	down: async (queryInterface, Sequelize) => {
		return await queryInterface.dropTable("user");
	},
};
