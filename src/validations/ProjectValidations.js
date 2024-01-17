const { validate, Joi } = require("express-validation");

const options = {
	keyByField: true,
	statusCode: 400,
	context: true,
};

const ProjectValidations = {
	getProjectById: validate({
		params: Joi.object({
			id: Joi.number().required(),
		}),
	}),
	getProjectByName: validate({
		params: Joi.object({
			name: Joi.string().required(),
		}),
	}),

	createProject: validate({
		body: Joi.object({
			projectName: Joi.string(),
			description: Joi.string(),
			startDate: Joi.date(),
			endDate: Joi.date(),
			status: Joi.string(),
			category: Joi.string(),
			area: Joi.number(),
			cno: Joi.string(),
			technicalLeadName: Joi.string(),
			art: Joi.string(),
			architectName: Joi.string(),
			rrt: Joi.string(),
			foremanName: Joi.string(),
			contractValue: Joi.number(),
			contractType: Joi.string(),
			observations: Joi.string(),
			address: Joi.object({
				street: Joi.string(),
				number: Joi.number(),
				complement: Joi.string().allow(""),
				neighborhood: Joi.string(),
				postalCode: Joi.number(),
				city: Joi.string(),
				state: Joi.string(),
			}).required(),
		}),
	}),
};

module.exports = ProjectValidations;
