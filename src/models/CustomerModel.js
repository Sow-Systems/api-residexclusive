const { DataTypes } = require("sequelize");
const db = require("../database");
const Address = require("./AddressModel");

const Customer = db.define(
	"Customer",
	{
		cus_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
		},
		cus_name: {
			type: DataTypes.STRING(100),
			allowNull: true,
		},
		cus_birthdate: {
			type: DataTypes.DATEONLY,
			allowNull: true,
		},
		cus_phone: {
			type: DataTypes.STRING(20),
			allowNull: true,
		},
		cus_email: {
			type: DataTypes.STRING(100),
			allowNull: true,
		},
		cus_type: {
			type: DataTypes.STRING(2),
			allowNull: true,
		},
		cus_cpf: {
			type: DataTypes.STRING(20),
			allowNull: true,
		},
		cus_cnpj: {
			type: DataTypes.STRING(20),
			allowNull: true,
		},
		cus_notes: {
			type: DataTypes.STRING(200),
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
		tableName: "customer",
		timestamps: true,
		underscored: true,
	}
);

module.exports = Customer;
