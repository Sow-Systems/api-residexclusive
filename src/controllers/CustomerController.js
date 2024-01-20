const AddressService = require("../services/AddressService");
const CustomerService = require("../services/CustomerService");
const UserService = require("../services/UserService");

const CustomerController = {
	createCustomerAddress: async (req, res) => {
		// #swagger.tags = ['Customers']
		// #swagger.description = 'Endpoint para cadastrar um endereço no cadastro do cliente'
		/* #swagger.security = [{
    "bearerAuth": []
}] */
		try {
			const token = req.headers.authorization?.split(" ")[1];
			const user = await UserService.getUserInToken(token);
			const {
				idCustomer,
				description,
				street,
				number,
				complement,
				neighborhood,
				city,
				state,
				postalCode,
			} = req.body;

			const newAddress = await AddressService.createAddress({
				add_street: street,
				add_number: number,
				add_complement: complement,
				add_neighborhood: neighborhood,
				add_city: city,
				add_state: state,
				add_postal_code: postalCode,
				usr_id: user.id,
				usr_username: user.username,
			});

			const newCustomerAddress = await CustomerService.createCustomerAddress({
				add_id: newAddress.add_id,
				cus_id: idCustomer,
				cua_description: description,
				usr_id: user.id,
				usr_username: user.username,
			});

			if (!newCustomerAddress) {
				return res.status(400).json({
					message:
						"Este endereço já foi vinculado ao cadastro do cliente anteriormente!",
				});
			}

			res
				.status(201)
				.json({ message: "Endereço do cliente cadastrado com sucesso!" });
		} catch (error) {
			res.status(500).json({ message: error.message });
		}
	},
};

module.exports = CustomerController;
