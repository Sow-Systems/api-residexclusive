const AddressService = require("../services/AddressService");
const CustomerService = require("../services/CustomerService");
const UserService = require("../services/UserService");
const ContactService = require("../services/ContactService");

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

	createCustomerContact: async (req, res) => {
		// #swagger.tags = ['Customers']
		// #swagger.description = 'Endpoint para adicionar um contato no cadastro do cliente'
		/* #swagger.security = [{
    "bearerAuth": []
}] */
		try {
			const token = req.headers.authorization?.split(" ")[1];
			const user = await UserService.getUserInToken(token);
			const { idCustomer, description, name, birthdate, phone, email } =
				req.body;

			const newContact = await ContactService.createContact({
				ctt_name: name,
				ctt_phone: phone,
				ctt_email: email,
				ctt_birthdate: birthdate,
				usr_id: user.id,
				usr_username: user.username,
			});
			const newCustomerContact = await CustomerService.createCustomerContact({
				ctt_id: newContact.ctt_id,
				cus_id: idCustomer,
				cct_description: description,
				usr_id: user.id,
				usr_username: user.username,
			});

			if (!newCustomerContact) {
				return res.status(400).json({
					message:
						"Este contato já foi vinculado ao cadastro do cliente anteriormente!",
				});
			}

			res.status(201).json({ message: "Contato cadastrado com sucesso!" });
		} catch (error) {
			res.status(500).json({ message: error.message });
		}
	},
};

module.exports = CustomerController;
