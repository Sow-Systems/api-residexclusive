require("dotenv").config();
const Sequelize = require("sequelize");

const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASSWORD;
const DB_CONFIG = {
	dialect: process.env.DB_DIALECT,
	dialectOptions: {
		ssl: { rejectUnauthorized: false },
	},
	host: process.env.DB_HOST,
	//port: process.env.DB_PORT,
	timezone: "-03:00",
};

// objeto para guardar a conexão do banco dados
let db = {};

try {
	db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
} catch (error) {
	console.error("Erro ao tentar uma conexão com banco dados");
}
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
		console.log("Banco dados conectado com Sequelize!");
	} catch (error) {
		console.error("Erro ao tentar se conectar ao banco de dados");
	}
}

Object.assign(db, {
	hasConnection,
});

module.exports = db;
