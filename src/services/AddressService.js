const Address = require("../models/AddressModel");

module.exports = {
	getAddressById: async (id) => {
		try {
			const address = await Address.findByPk(id);
			return address;
		} catch (error) {
			throw new Error(
				`Erro ao obter o endereco no banco de dados: ${error.message}`
			);
		}
	},

	getAddressbyStreet: async (street) => {
		try {
			if (!street) {
				throw new Error("Nome do logradouro não especificado.");
			}
			const address = await Address.findOne({ where: { add_street: street } });
			return address;
		} catch (error) {
			throw new Error(
				`Erro ao obter o logradouro no banco de dados: ${error.message}`
			);
		}
	},

	getAddressbyPostalCode: async (postalCode) => {
		try {
			if (!street) {
				throw new Error("Nome do logradouro não especificado.");
			}
			const address = await Address.findOne({
				where: { add_postal_code: postalCode },
			});
			return address;
		} catch (error) {
			throw new Error(
				`Erro ao obter o logradouro no banco de dados: ${error.message}`
			);
		}
	},

	createAddress: async (addressData) => {
		try {
			const newAddress = await Address.create(addressData);
			return newAddress;
		} catch (error) {
			throw new Error(`Erro ao criar o endereco: ${error.message}`);
		}
	},

	updateAddressById: async (addressId, updatedAddressData) => {
		try {
			const existingAddress = await Address.findByPk(addressId);

			if (!existingAddress) {
				throw new Error("Endereco não encontrada");
			}

			await Address.update(updatedAddressData, {
				where: { add_id: addressId },
			});

			const updatedAddress = await Address.findByPk(addressId);
			return updatedAddress;
		} catch (error) {
			throw new Error(`Erro ao atualizar o endereco: ${error.message}`);
		}
	},
};
