const genericMessage = require("../services/genericService");

module.exports = GenericController = {
	getGenericMessage: async (req, res) => {
		// #swagger.tags = ['Generic']
		// #swagger.description = 'Endpoint testar o servidor Express para deploy.'
		/* #swagger.security = [{
            "bearerAuth": []
    }] */
		try {
			const message = await genericMessage.getGenericMessage();
			res.status(200).json(message);
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	},
};
