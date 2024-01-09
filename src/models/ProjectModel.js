const db = require("../database");
const { DataTypes } = require("sequelize");

const Project = db.define(
	"Project",
	{
		prj_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		cus_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		prj_name: {
			type: DataTypes.STRING,
		},
		prj_description: {
			type: DataTypes.STRING,
		},
		prj_start_date: {
			type: DataTypes.DATE,
		},
		prj_end_date: {
			type: DataTypes.DATE,
		},
		prj_status: {
			type: DataTypes.STRING,
		},
		prj_address: {
			type: DataTypes.STRING,
		},
		prj_category: {
			type: DataTypes.STRING,
		},
		prj_area: {
			type: DataTypes.INTEGER,
		},
		prj_cno: {
			type: DataTypes.STRING,
		},
		prj_art: {
			type: DataTypes.STRING,
		},
		prj_technical_lead_name: {
			type: DataTypes.STRING,
		},
		prj_architect_name: {
			type: DataTypes.STRING,
		},
		prj_contract_value: {
			type: DataTypes.INTEGER,
		},
		usr_id: {
			type: DataTypes.INTEGER,
		},
		usr_name: {
			type: DataTypes.STRING,
		},
	},
	{
		tableName: "project",
		timestamps: true,
		underscored: true,
	}
);

module.exports = Project;
