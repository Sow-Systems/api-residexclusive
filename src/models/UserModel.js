const db = require("../database");
const { DataTypes } = require("sequelize");

const User = db.define(
	"User",
	{
		usr_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		usr_username: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		usr_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		usr_email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		usr_password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		usr_birthdate: {
			type: DataTypes.DATE,
			allowNull: false,
		},
		usr_admin: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
		},
	},
	{
		tableName: "user", // Nome da tabela no banco de dados
		timestamps: true,
		underscored: true,
	}
);
module.exports = User;
