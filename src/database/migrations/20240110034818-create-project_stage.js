"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("project_stage", {
			pst_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			prj_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: "project",
					key: "prj_id",
				},
				onDelete: "CASCADE",
				onUpdate: "CASCADE",
			},
			stg_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: "stage",
					key: "stg_id",
				},
				onDelete: "CASCADE",
				onUpdate: "CASCADE",
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
		await queryInterface.dropTable("project_stage");
	},
};
