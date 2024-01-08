require("dotenv").config();
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
	const token = req.headers.authorization?.split(" ")[1];

	if (!token) {
		return res
			.status(401)
			.json({ error: "Token nao encontrado na requisicao" });
	}
	jwt.verify(token, process.env.JWT_SECRET_USER, (err, decoded) => {
		if (err) {
			return res.status(401).json({ error: "Token inválido" });
		}
		req.username = decoded.username;
		next();
	});
};

module.exports = authMiddleware;
