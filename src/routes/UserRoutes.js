const express = require("express");
const UserController = require("../controllers/UserController");
const UserValidations = require("../validations/UserValidations");
const auth = require("../middlewares/Auth");

const router = express.Router();

router.post("/login", UserValidations.login, UserController.login);
router.use(auth);

router.get("/user/:id", UserValidations.getUser, UserController.getUserById);
router.get("/users", UserController.getUsers);
router.post("/user", UserValidations.createUser, UserController.createUser);
router.put("/user", UserValidations.updateUser, UserController.updateUser);

module.exports = router;
