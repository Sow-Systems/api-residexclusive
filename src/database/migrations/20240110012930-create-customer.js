"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return await queryInterface.createTable("customer", {
			cus_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			cus_name: {
				type: Sequelize.STRING(100),
				allowNull: true,
			},
			cus_birthdate: {
				type: Sequelize.DATE,
				allowNull: true,
			},
			cus_phone: {
				type: Sequelize.STRING(20),
				allowNull: true,
			},
			cus_email: {
				type: Sequelize.STRING(100),
				allowNull: true,
			},
			cus_type: {
				type: Sequelize.STRING(2),
				allowNull: true,
			},
			cus_cpf: {
				type: Sequelize.STRING(20),
				allowNull: true,
			},
			cus_cnpj: {
				type: Sequelize.STRING(20),
				allowNull: true,
			},
			cus_notes: {
				type: Sequelize.STRING(200),
				allowNull: true,
			},
			usr_id: {
				type: Sequelize.INTEGER,
				allowNull: true,
			},
			usr_name: {
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
		return await queryInterface.dropTable("customer");
	},
};
