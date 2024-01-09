const { validate, Joi } = require("express-validation");

const options = {
	keyByField: true,
	statusCode: 400,
	context: true,
};

const UserValidations = {
	login: validate({
		body: Joi.object({
			username: Joi.string().required(),
			password: Joi.string().required(),
			//isadmin: Joi.boolean().required(),
		}),
	}),
	createUser: validate(
		{
			body: Joi.object({
				username: Joi.string().required(),
				name: Joi.string().required(),
				email: Joi.string().email().required(),
				password: Joi.string().required(),
				birthdate: Joi.date().required(),
			}),
		},
		options
	),
	getUser: validate(
		{
			params: Joi.object({
				id: Joi.number().required(),
			}),
		},
		options
	),
};

module.exports = UserValidations;
