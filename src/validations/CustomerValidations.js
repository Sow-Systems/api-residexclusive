const { validate, Joi } = require("express-validation");

const options = {
	keyByField: true,
	statusCode: 400,
	context: true,
};

const CustomerValidations = {
	createCustomerAddress: validate({
		body: Joi.object({
			idCustomer: Joi.number().required(),
			description: Joi.string(),
			street: Joi.string(),
			number: Joi.number(),
			complement: Joi.string(),
			neighborhood: Joi.string(),
			city: Joi.string(),
			state: Joi.string(),
			postalCode: Joi.number(),
		}),
	}),
};

module.exports = CustomerValidations;
