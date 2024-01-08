// require("dotenv").config();

// const mysql = require("mysql2/promise");

// const pool = mysql.createPool({
// 	host: process.env.DB_HOST,
// 	user: process.env.DB_USER,
// 	password: process.env.DB_PASSWORD,
// 	database: process.env.DB_NAME,
// 	waitForConnections: true,
// 	connectionLimit: 20,
// 	queueLimit: 0,
// });

// module.exports = pool;

require("dotenv").config();

module.exports = {
	development: {
		username: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME,
		host: process.env.DB_HOST,
		dialect: process.env.DB_DIALECT,
	},
	test: {
		username: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME_DEV,
		host: process.env.DB_HOST,
		dialect: process.env.DB_DIALECT,
	},
	production: {
		username: "root",
		password: "root",
		database: "database_production",
		host: "127.0.0.1",
		dialect: "mysql",
	},
};
