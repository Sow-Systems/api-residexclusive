const { DataTypes } = require("sequelize");
const db = require("../database");
const Customer = require("./CustomerModel");
const Contact = require("./ContactModel");

const CustomerContact = db.define(
	"CustomerContact",
	{
		cct_id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		cus_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			foreignkey: true,
			references: {
				model: Customer,
				key: "cus_id",
			},
		},
		ctt_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			foreignkey: true,
			references: {
				model: Contact,
				key: "ctt_id",
			},
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
		tableName: "customer_contact",
		timestamps: true,
		underscored: true,
	}
);

module.exports = CustomerContact;
