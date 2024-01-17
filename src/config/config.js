require("dotenv").config();

module.exports = {
	development: {
		username: process.env.DB_USER_DEV,
		password: process.env.DB_PASSWORD_DEV,
		database: process.env.DB_NAME_DEV,
		host: process.env.DB_HOST_DEV,
		dialect: process.env.DB_DIALECT_DEV,
		dialectOptions: {
			ssl: { rejectUnauthorized: false },
		},
	},
	test: {
		username: process.env.DB_USER_DEV,
		password: process.env.DB_PASSWORD_DEV,
		database: process.env.DB_NAME_DEV,
		host: process.env.DB_HOST_DEV,
		dialect: process.env.DB_DIALECT_DEV,
		dialectOptions: {
			ssl: { rejectUnauthorized: false },
		},
	},
	production: {
		username: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME,
		host: process.env.DB_HOST,
		dialect: process.env.DB_DIALECT,
		dialectOptions: {
			ssl: { rejectUnauthorized: false },
		},
	},
};
