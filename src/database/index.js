const config = require("../config/config");
require("dotenv").config();

const Sequelize = require("sequelize");

let DB_CONFIG_CONNECTION = null;

if (process.env.NODE_ENV === "production") {
	DB_CONFIG_CONNECTION = config.production;
} else {
	DB_CONFIG_CONNECTION = config.development;
}

let db = {};

try {
	db = new Sequelize(DB_CONFIG_CONNECTION);
} catch (error) {
	throw new Error("Erro ao tentar uma conexão com banco dados", error);
}

if (process.env.DB_DIALECT === "mysql")
	db.addHook("beforeSave", (instance) => {
		const currentDate = new Date().toLocaleString("en-US", {
			timeZone: "America/Sao_Paulo",
		});
		if (!instance.createdAt) {
			instance.createdAt = currentDate;
		}
		if (!instance.updatedAt) {
			instance.updatedAt = currentDate;
		}
	});

async function hasConnection() {
	try {
		await db.authenticate();
		console.log(
			`
			 SGBD: ${process.env.DB_DIALECT}
			 BANCO DE DADOS: ${process.env.DB_NAME}
			 USUARIO: ${process.env.DB_USER}
			 AMBIENTE: ${process.env.NODE_ENV}
			 STATUS: Conectado com sucesso ao Sequelize!
			 `
		);
	} catch (error) {
		throw new Error("Erro ao tentar se conectar ao banco de dados", error);
	}
}

Object.assign(db, {
	hasConnection,
});

module.exports = db;
