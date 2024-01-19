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

Customer.belongsToMany(Address, {
	through: CustomerAddress,
	foreignKey: "cus_id",
});
Address.belongsToMany(Customer, {
	through: CustomerAddress,
	foreignKey: "add_id",
});

module.exports = CustomerAddress;
