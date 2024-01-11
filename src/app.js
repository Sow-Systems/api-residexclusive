require("dotenv").config();
const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
let swaggerDocument = "";
const db = require("./database");
const routes = require("./routes");
const handleMiddleware = require("./middlewares/handleMiddleware");

if (process.env.NODE_ENV === "production") {
	swaggerDocument = require("../swagger_prod.json");
} else {
	swaggerDocument = require("../swagger_dev.json");
}

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes.userRoutes);

app.use(routes.projectRoutes);

db.hasConnection();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(handleMiddleware);

module.exports = app;
