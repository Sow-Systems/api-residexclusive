"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("customer_contact", {
			cct_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			cus_id: {
				type: Sequelize.INTEGER,
				allowNull: true,
			},
			ctt_id: {
				type: Sequelize.INTEGER,
				allowNull: true,
			},
			cct_description: {
				type: Sequelize.STRING,
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
		await queryInterface.dropTable("customer_contact");
	},
};
