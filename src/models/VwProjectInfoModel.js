const { DataTypes } = require("sequelize");
const db = require("../database");

const VwProject = db.define(
	"VwProjectInfo",
	{
		prj_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
		},
		cus_id: {
			type: DataTypes.INTEGER,
		},
		prj_name: {
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
		prj_contract_value: {
			type: DataTypes.DECIMAL,
		},
		prj_category: {
			type: DataTypes.STRING,
		},
		prj_area: {
			type: DataTypes.DECIMAL,
		},
		stg_name: {
			type: DataTypes.STRING,
			defaultValue: "Definir Tabela do diário de Obras",
		},
	},
	{
		tableName: "vw_project_info",
		timestamps: false,
	}
);

module.exports = VwProject;
