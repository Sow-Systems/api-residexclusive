const { DataTypes } = require("sequelize");
const db = require("../database");
const Customer = require("./CustomerModel");

const CustomerContact = db.define(
	"CustomerContact",
	{
		cct_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
		},
		cct_name: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		cct_birthdate: {
			type: DataTypes.DATE,
			allowNull: true,
		},
		cct_phone: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		cct_email: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		cct_description: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		usr_id: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
		usr_name: {
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

Customer.hasMany(CustomerContact, { foreignKey: "cus_id" });
CustomerContact.belongsTo(Customer, { foreignKey: "cus_id" });

module.exports = CustomerContact;
