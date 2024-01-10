"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return await queryInterface.createTable("stage", {
			stg_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			stg_name: {
				type: Sequelize.STRING(45),
				allowNull: false,
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
			},
			updated_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
		});
	},

	down: async (queryInterface, Sequelize) => {
		return await queryInterface.dropTable("stage");
	},
};
