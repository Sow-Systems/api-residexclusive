const { DataTypes } = require("sequelize");
const db = require("../database");

const Contact = db.define(
	"Contact",
	{
		cct_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
		},
		cus_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		cnt_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		cct_description: {
			type: DataTypes.STRING,
			allowNull: true,
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
		tableName: "contact",
		timestamps: true,
		underscored: true,
	}
);

module.exports = Contact;
