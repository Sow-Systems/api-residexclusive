const { DataTypes } = require("sequelize");
const db = require("../database");
const Customer = require("./CustomerModel");
const Address = require("./AddressModel");

const CustomerAddress = db.define(
	"CustomerAddress",
	{
		cua_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
		},
		cua_description: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		cus_id: {
			type: DataTypes.INTEGER,
			allowNull: true,
			foreignkey: true,
			references: { model: "customer", key: "cus_id" },
		},
		add_id: {
			type: DataTypes.INTEGER,
			allowNull: true,
			foreignkey: true,
			references: { model: "address", key: "add_id" },
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
		tableName: "customer_address",
		timestamps: true,
		underscored: true,
	}
);

module.exports = CustomerAddress;
