const Customer = require("../models/CustomerModel");
const CustomerAddress = require("../models/CustomerAddress");

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
};
