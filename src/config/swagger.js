const swaggerAutogen = require("swagger-autogen")({ openapi: "3.0.0" });
require("dotenv").config();

const outputFile = "../../swagger_dev.json";
const endpointFiles = ["../routes/*.js"];

if (process.env.NODE_ENV === "production") {
	outputFile = "../../swagger_prod.json";
}

const doc = {
	info: {
		deepLinking: false,
		description: "Documentação da API do Sistema Resid",
		version: "1.0.0",
		title: "API Sistema Resid",
		contact: {
			email: "danilosalys.developer@gmail.com",
		},
	},
	host: process.env.BASE_URL,
	tags: [
		{
			name: "Users",
			description: "Métodos referentes ao cadastro de Usuários do sistema",
		},
		{
			name: "Projects",
			description: "Métodos referentes ao cadastro de Obras do sistema",
		},
	],

	components: {
		securitySchemes: {
			bearerAuth: {
				type: "http",
				scheme: "bearer",
			},
		},
	},
};

swaggerAutogen(outputFile, endpointFiles, doc);
