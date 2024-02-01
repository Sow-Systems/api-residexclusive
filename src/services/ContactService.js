const { Contact } = require("../models");

module.exports = {
	getContactById: async (contactId) => {
		try {
			const contact = await Contact.findByPk(contactId);
			return contact;
		} catch (error) {
			throw new Error(
				`Erro ao obter o contato no banco de dados: ${error.message}`
			);
		}
	},

	createContact: async (contactData) => {
		try {
			const { usr_id, usr_username, ...findContactData } = contactData;

			const contact = await Contact.findAll({
				where: findContactData,
			});

			if (contact.length > 0) {
				return contact[0];
			}

			const newContact = await Contact.create(contactData);
			return newContact;
		} catch (error) {
			console.log(error);
			throw new Error(`Erro ao criar o contato: ${error.message}`);
		}
	},

	updateContactById: async (contactId, updatedContactData) => {
		try {
			const existsContact = await Contact.findByPk(contactId);

			if (!existsContact) {
				throw new Error("Contato não encontrada");
			}

			await Contact.update(updatedContactData, {
				where: { ctt_id: contactId },
			});

			const updatedContact = await Contact.findByPk(contactId);
			return updatedContact;
		} catch (error) {
			throw new Error(`Erro ao atualizar o contato: ${error.message}`);
		}
	},
};
