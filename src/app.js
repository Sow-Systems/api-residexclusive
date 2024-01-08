const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger.json");
const db = require("./database");
const routes = require("./routes");

const app = express();

app.use(cors());

// Middleware do servidor
app.use(express.json());

// Rotas dos usuários
app.use(routes.genericRoute);
db.hasConnection();

// Documentação Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;
