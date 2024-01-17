require("dotenv").config();
const Sequelize = require("sequelize");

const DB_NAME =
	process.env.NODE_ENV === "production"
		? process.env.DB_NAME
		: process.env.DB_NAME_DEV;
const DB_USER =
	process.env.NODE_ENV === "production"
		? process.env.DB_USER
		: process.env.DB_USER_DEV;
const DB_PASS =
	process.env.NODE_ENV === "production"
		? process.env.DB_PASSWORD
		: process.env.DB_PASSWORD_DEV;
const DB_CONFIG = {
	dialect:
		process.env.NODE_ENV === "production"
			? process.env.DB_DIALECT
			: process.env.DB_DIALECT_DEV,
	dialectOptions: {
		ssl: { rejectUnauthorized: false },
	},
	host:
		process.env.NODE_ENV === "production"
			? process.env.DB_HOST
			: process.env.DB_HOST_DEV,
	timezone:
		process.env.NODE_ENV === "production"
			? process.env.DB_TIMEZONE
			: process.env.DB_TIMEZONE_DEV,
};

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
		console.log(`Banco dados ${process.env.NODE_ENV} conectado com Sequelize!`);
	} catch (error) {
		console.error("Erro ao tentar se conectar ao banco de dados");
	}
}

Object.assign(db, {
	hasConnection,
});

module.exports = db;
