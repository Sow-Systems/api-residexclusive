const { DataTypes } = require("sequelize");
const db = require("../database");

const Stage = db.define(
	"Stage",
	{
		stg_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
		},
		stg_name: {
			type: DataTypes.STRING(100),
			allowNull: false,
		},
		usr_id: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
		usr_username: {
			type: DataTypes.STRING,
			allowNull: true,
		},
	},
	{
		tableName: "stage",
		timestamps: true,
		underscored: true,
	}
);

module.exports = Stage;
