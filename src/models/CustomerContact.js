const { DataTypes } = require("sequelize");
const db = require("../database");
const Customer = require("./CustomerModel");
const Contact = require("./ContactModel");

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
			type: DataTypes.DATEONLY,
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

Customer.belongsToMany(Contact, {
	through: CustomerContact,
	foreignKey: "cus_id",
});
Contact.belongsToMany(Customer, {
	through: CustomerContact,
	foreignKey: "cct_id",
});

module.exports = CustomerContact;
