const express = require("express");
const UserController = require("../controllers/UserController");
const UserValidations = require("../validations/UserValidations");
const auth = require("../middlewares/Auth");

const router = express.Router();

router.post("/login", UserValidations.login, UserController.login);
router.get(
	"/user/:id",
	auth,
	UserValidations.getUser,
	UserController.getUserById
);
router.get("/users", auth, UserController.getUsers);
router.post(
	"/user",
	auth,
	UserValidations.createUser,
	UserController.createUser
);

module.exports = router;
