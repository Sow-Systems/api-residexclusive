const { DataTypes } = require("sequelize");
const db = require("../database");
const CustomerContact = require("./CustomerContactModel");
const Customer = require("./CustomerModel");

const Contact = db.define(
	"Contact",
	{
		ctt_id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		ctt_name: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		ctt_phone: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		ctt_email: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		ctt_birthdate: {
			type: DataTypes.DATEONLY,
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
