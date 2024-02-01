const {
	Customer,
	Address,
	Contact,
	CustomerAddress,
	CustomerContact,
} = require("../models");
const AddressService = require("./AddressService");

module.exports = {
	getAllCustomers: async () => {
		try {
			const customers = await Customer.findAll();
			return customers;
		} catch (error) {
			throw new Error(
				`Erro ao obter os clientes no banco de dados: ${error.message}`
			);
		}
	},

	getCustomerById: async (id) => {
		try {
			const customer = await Customer.findByPk(id);
			return customer;
		} catch (error) {
			throw new Error(
				`Erro ao obter o cliente no banco de dados: ${error.message}`
			);
		}
	},

	validateExistsCustomer: async (customerData) => {
		try {
			const { usr_id, usr_username, ...findCustomerData } = customerData;
			const customer = await Customer.findAll({ where: findCustomerData });
			return customer[0];
		} catch (error) {
			throw new Error(
				`Erro ao obter os clientes no banco de dados: ${error.message}`
			);
		}
	},

	createCustomer: async (customerData) => {
		try {
			const newCustomer = await Customer.create(customerData);
			return newCustomer;
		} catch (error) {
			throw new Error(`Erro ao criar o cliente: ${error.message}`);
		}
	},

	updateCustomerById: async (idCustomer, updatedCustomerData) => {
		try {
			const existingCustomer = await Customer.findByPk(idCustomer);

			if (!existingCustomer) {
				throw new Error("Cliente não encontrado");
			}

			await Customer.update(updatedCustomerData, {
				where: { cus_id: idCustomer },
			});

			const updatedCustomer = await Customer.findByPk(idCustomer);
			return updatedCustomer;
		} catch (error) {
			throw new Error(`Erro ao atualizar o cliente: ${error.message}`);
		}
	},

	createCustomerAddress: async (customerAddressData) => {
		try {
			const { usr_id, usr_username, ...findCustomerAddressData } =
				customerAddressData;

			const customerAddress = await CustomerAddress.findAll({
				where: findCustomerAddressData,
			});
			if (customerAddress.length > 0) {
				return null;
			}
			const newCustomerAddress = await CustomerAddress.create(
				customerAddressData
			);
			return newCustomerAddress;
		} catch (error) {
			throw new Error(
				`Erro ao inserir o endereco no cadastro do cliente: ${error.message}`
			);
		}
	},

	createCustomerContact: async (customerContactData) => {
		try {
			const { usr_id, usr_username, ...findCustomerContactData } =
				customerContactData;

			const customerContact = await CustomerContact.findAll({
				where: findCustomerContactData,
			});
			if (customerContact.length > 0) {
				return null;
			}
			const newCustomerContact = await CustomerContact.create(
				customerContactData
			);
			return newCustomerContact;
		} catch (error) {
			throw new Error(
				`Erro ao inserir o contato no cadastro do cliente: ${error.message}`
			);
		}
	},

	getCustomerContacts: async (idCustomer) => {
		try {
			const contacts = await Contact.findAll({
				include: [
					{ model: Customer, attributes: [], where: { cus_id: idCustomer } },
				],
			});
			return contacts;
		} catch (error) {
			throw new Error(
				`Erro ao obter os contatos do cliente no banco de dados: ${error.message}`
			);
		}
	},

	getCustomerAddresses: async (idCustomer) => {
		try {
			const addresses = await Address.findAll({
				include: [
					{ model: Customer, attributes: [], where: { cus_id: idCustomer } },
				],
			});
			return addresses;
		} catch (error) {
			throw new Error(`
			Erro ao obter os enderecos do cliente no banco de dados: ${error.message}`);
		}
	},
};
