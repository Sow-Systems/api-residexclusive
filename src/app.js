const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger.json");
const db = require("./database");
const routes = require("./routes");
const handleMiddleware = require("./middlewares/handleMiddleware");

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes.userRoutes);

db.hasConnection();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(handleMiddleware);

module.exports = app;
