const { DataTypes } = require("sequelize");
const db = require("../database");

const Address = db.define(
	"Address",
	{
		add_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		add_street: {
			type: DataTypes.STRING(200),
			allowNull: true,
		},
		add_number: {
			type: DataTypes.STRING(45),
			allowNull: true,
		},
		add_complement: {
			type: DataTypes.STRING(45),
			allowNull: true,
		},
		add_neighborhood: {
			type: DataTypes.STRING(100),
			allowNull: true,
		},
		add_city: {
			type: DataTypes.STRING(50),
			allowNull: true,
		},
		add_state: {
			type: DataTypes.STRING(50),
			allowNull: true,
		},
		add_postal_code: {
			type: DataTypes.STRING(15),
			allowNull: true,
		},
		add_observations1: {
			type: DataTypes.STRING(200),
			allowNull: true,
		},
		add_observations2: {
			type: DataTypes.STRING(200),
			allowNull: true,
		},
		add_observations3: {
			type: DataTypes.STRING(200),
			allowNull: true,
		},
		usr_id: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
		usr_name: {
			type: DataTypes.STRING(45),
			allowNull: true,
		},
		created_at: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: DataTypes.NOW,
		},
		updated_at: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: DataTypes.NOW,
			onUpdate: DataTypes.NOW,
		},
	},
	{
		tableName: "address",
		timestamps: true,
		underscored: true,
	}
);

module.exports = Address;
