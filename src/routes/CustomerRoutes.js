const express = require("express");
const CustomerController = require("../controllers/CustomerController");
const CustomerValidations = require("../validations/CustomerValidations");
const auth = require("../middlewares/Auth");

const router = express.Router();
router.use(auth);

router.post(
	"/customer-address",
	CustomerValidations.createCustomerAddress,
	CustomerController.createCustomerAddress
);
module.exports = router;
