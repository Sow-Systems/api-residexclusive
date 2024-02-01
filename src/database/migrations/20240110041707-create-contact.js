"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("contact", {
			ctt_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			ctt_name: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			ctt_phone: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			ctt_email: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			ctt_birthdate: {
				type: Sequelize.DATEONLY,
				allowNull: true,
			},
			usr_id: {
				type: Sequelize.INTEGER,
				allowNull: true,
			},
			usr_username: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			created_at: {
				type: Sequelize.DATE,
				allowNull: false,
				defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
			},
			updated_at: {
				type: Sequelize.DATE,
				allowNull: false,
				defaultValue: Sequelize.literal(
					"CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
				),
			},
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("contact");
	},
};
