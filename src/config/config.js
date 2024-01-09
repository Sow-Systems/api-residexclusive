require("dotenv").config();

module.exports = {
	development: {
		username: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME,
		host: process.env.DB_HOST,
		dialect: process.env.DB_DIALECT,
		dialectOptions: {
			ssl: { rejectUnauthorized: false },
		},
	},
	test: {
		username: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME_DEV,
		host: process.env.DB_HOST,
		dialect: process.env.DB_DIALECT,
		dialectOptions: {
			ssl: { rejectUnauthorized: false },
		},
	},
	production: {
		username: "root",
		password: "root",
		database: "database_production",
		host: "127.0.0.1",
		dialect: "mysql",
		dialectOptions: {
			ssl: { rejectUnauthorized: false },
		},
	},
};
