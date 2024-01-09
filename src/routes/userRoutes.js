const express = require("express");
const {
	login,
	createUser,
	getUsers,
	getUserByID,
} = require("../controllers/UserController");
const auth = require("../middlewares/Auth");
const UserValidations = require("../validations/UserValidations");

const router = express.Router();

router.post("/login", UserValidations.login, login);
router.get("/user/:id", UserValidations.getUser, getUserByID);
router.get("/users", getUsers);
router.post("/user", UserValidations.createUser, createUser);

module.exports = router;
