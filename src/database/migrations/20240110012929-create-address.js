"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.createTable("address", {
			add_id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			add_street: {
				type: Sequelize.STRING(200),
				allowNull: true,
			},
			add_number: {
				type: Sequelize.STRING(45),
				allowNull: true,
			},
			add_complement: {
				type: Sequelize.STRING(45),
				allowNull: true,
			},
			add_neighborhood: {
				type: Sequelize.STRING(100),
				allowNull: true,
			},
			add_city: {
				type: Sequelize.STRING(50),
				allowNull: true,
			},
			add_state: {
				type: Sequelize.STRING(50),
				allowNull: true,
			},
			add_postal_code: {
				type: Sequelize.STRING(15),
				allowNull: true,
			},
			add_observations1: {
				type: Sequelize.STRING(200),
				allowNull: true,
			},
			add_observations2: {
				type: Sequelize.STRING(200),
				allowNull: true,
			},
			add_observations3: {
				type: Sequelize.STRING(200),
				allowNull: true,
			},
			usr_id: {
				type: Sequelize.INTEGER,
				allowNull: true,
			},
			usr_name: {
				type: Sequelize.STRING(45),
				allowNull: true,
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
		return queryInterface.dropTable("address");
	},
};
