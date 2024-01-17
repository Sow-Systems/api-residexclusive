const jwt = require("jsonwebtoken");

const Helpers = {
	decodeJWT: jwt.verify(token, process.env.JWT_SECRET_USER, (err, decoded) => {
		if (err) {
			return res.status(401).json({ error: "Token inválido" });
		}
		req.username = decoded.username;
	}),
};

module.exports = Helpers;
