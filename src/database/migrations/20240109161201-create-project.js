"use strict";

/** @type {import('sequelize-cli').Migration} */

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return await queryInterface.createTable("project", {
			prj_id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			cus_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			prj_name: {
				type: Sequelize.STRING,
			},
			prj_description: {
				type: Sequelize.STRING,
			},
			prj_start_date: {
				type: Sequelize.DATE,
			},
			prj_end_date: {
				type: Sequelize.DATE,
			},
			prj_status: {
				type: Sequelize.STRING,
			},
			prj_address: {
				type: Sequelize.STRING,
			},
			prj_category: {
				type: Sequelize.STRING,
			},
			prj_area: {
				type: Sequelize.INTEGER,
			},
			prj_cno: {
				type: Sequelize.STRING,
			},
			prj_art: {
				type: Sequelize.STRING,
			},
			prj_technical_lead_name: {
				type: Sequelize.STRING,
			},
			prj_architect_name: {
				type: Sequelize.STRING,
			},
			prj_contract_value: {
				type: Sequelize.INTEGER,
			},
			usr_id: {
				type: Sequelize.INTEGER,
			},
			usr_name: {
				type: Sequelize.STRING,
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
		return await queryInterface.dropTable("project");
	},
};
