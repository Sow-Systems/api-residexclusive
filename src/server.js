require("dotenv").config();
const app = require("./app");

app.listen(process.env.PORT || 4000, () => {
	console.log("Servidor rodando na Porta 4000");
});
