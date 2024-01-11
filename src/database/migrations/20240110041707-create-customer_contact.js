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
				allowNull: false,
				references: {
					model: "customer",
					key: "cus_id",
				},
				onDelete: "CASCADE",
				onUpdate: "CASCADE",
			},
			cct_name: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			cct_birthdate: {
				type: Sequelize.DATE,
				allowNull: true,
			},
			cct_phone: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			cct_email: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			cct_description: {
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
