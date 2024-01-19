const AddressService = require("../services/AddressService");
const ProjectService = require("../services/ProjectService");
const UserService = require("../services/UserService");
const CustomerService = require("../services/CustomerService");

const ProjectController = {
	getProjectById: async (req, res) => {
		// #swagger.tags = ['Projects']
		// #swagger.description = 'Endpoint para listar uma obra pelo ID'
		/* #swagger.security = [{
            "bearerAuth": []
    }] */
		try {
			const { id } = req.params;
			const project = await ProjectService.getProjectById(id);

			if (!project) {
				return res.status(404).json({ message: "Obra não encontrada" });
			}
			return res.status(200).json(project);
		} catch (error) {
			return res.status(500).json({ message: error.message });
		}
	},

	getProjectsInfo: async (req, res) => {
		// #swagger.tags = ['Projects']
		// #swagger.description = 'Endpoint para listar as obras na pagina inicial do menu de Obras'
		/* #swagger.security = [{
            "bearerAuth": []
    }] */
		try {
			const project = await ProjectService.getProjectInfo();
			if (!project) {
				return res
					.status(404)
					.json({ message: "Não há obras cadastradas no sistema" });
			}
			return res.status(200).json(project);
		} catch (error) {
			return res.status(500).json({ message: error.message });
		}
	},

	getAllProjects: async (req, res) => {
		// #swagger.tags = ['Projects']
		// #swagger.description = 'Endpoint para listar todas as obras cadastradas no sistema.'
		/* #swagger.security = [{
            "bearerAuth": []
    		}] */
		try {
			const projects = await ProjectService.getAllProjects();
			if (!projects) {
				return res
					.status(404)
					.json({ message: "Nao ha obras cadastradas no sistema" });
			}
			res.status(200).json(projects);
		} catch (error) {
			res.status(500).json({ message: error.message });
		}
	},

	getProjectByName: async (req, res) => {
		// #swagger.tags = ['Projects']
		// #swagger.description = 'Endpoint para procurar uma obra pelo nome.'
		/* #swagger.security = [{
            "bearerAuth": []
    	}] */
		const { name } = req.params;

		try {
			const project = await ProjectService.getProjectByName(name);
			if (!project) {
				return res
					.status(404)
					.json({ error: "Nao ha obras com este nome no sistema" });
			}
			res.status(200).json(project);
		} catch (error) {
			res.status(500).json({ message: error.message });
		}
	},

	createProject: async (req, res) => {
		// #swagger.tags = ['Projects']
		// #swagger.description = 'Endpoint para cadastrar uma obra no sistema'
		/* #swagger.security = [{
            "bearerAuth": []
    }] */

		try {
			const token = req.headers.authorization?.split(" ")[1];
			const user = await UserService.getUserInToken(token);
			const {
				projectName,
				startDate,
				endDate,
				status,
				category,
				area,
				cno,
				technicalLeadName,
				art,
				architectName,
				rrt,
				foremanName,
				contractValue,
				contractType,
				observations,
				address: { street, number, complement, neighborhood, postalCode, city },
			} = req.body;

			const addressData = req.body.address;

			const existingProject = await ProjectService.getProjectByName(
				projectName
			);

			if (existingProject) {
				return res
					.status(409)
					.json({ message: "A obra já esta cadastrada no sistema" });
			}

			const newAddress = await AddressService.createAddress({
				add_street: addressData.street,
				add_number: addressData.number,
				add_complement: addressData.complement,
				add_neighborhood: addressData.neighborhood,
				add_city: addressData.city,
				add_state: addressData.state,
				add_postal_code: addressData.postalCode,
				usr_id: user.id,
				usr_name: user.username,
			});

			const newProject = await ProjectService.createProject({
				add_id: newAddress.add_id,
				prj_name: projectName,
				prj_start_date: startDate,
				prj_end_date: endDate,
				prj_status: status,
				prj_category: category,
				prj_area: area,
				prj_cno: cno,
				prj_technical_lead_name: technicalLeadName,
				prj_art: art,
				prj_architect_name: architectName,
				prj_rrt: rrt,
				prj_foreman_name: foremanName,
				prj_contract_type: contractType,
				prj_observations: observations,
				prj_contract_value: contractValue,
				usr_id: user.id,
				usr_name: user.username,
			});

			const idProject = newProject.prj_id;

			res
				.status(201)
				.json({ message: "Obra cadastrada com sucesso!", idProject });
		} catch (error) {
			res.status(500).json({ message: error.message });
		}
	},

	updateProject: async (req, res) => {
		// #swagger.tags = ['Projects']
		// #swagger.description = 'Endpoint para atualizar uma obra no sistema'
		/* #swagger.security = [{
        "bearerAuth": []
    }] */
		try {
			const token = req.headers.authorization?.split(" ")[1];
			const user = await UserService.getUserInToken(token);

			const {
				id,
				projectName,
				startDate,
				endDate,
				status,
				category,
				area,
				cno,
				technicalLeadName,
				art,
				architectName,
				rrt,
				foremanName,
				contractValue,
				contractType,
				observations,
			} = req.body;

			const existingProject = await ProjectService.getProjectById(id);

			if (!existingProject) {
				return res.status(404).json({ message: "Obra não encontrada" });
			}

			const updatedProject = await ProjectService.updateProjectById(id, {
				prj_name: projectName,
				prj_start_date: startDate,
				prj_end_date: endDate,
				prj_status: status,
				prj_category: category,
				prj_area: area,
				prj_cno: cno,
				prj_technical_lead_name: technicalLeadName,
				prj_art: art,
				prj_architect_name: architectName,
				prj_rrt: rrt,
				prj_foreman_name: foremanName,
				prj_contract_type: contractType,
				prj_observations: observations,
				prj_contract_value: contractValue,
				usr_id: user.id,
				usr_name: user.username,
			});

			res
				.status(200)
				.json({ message: "Obra atualizada com sucesso!", updatedProject });
		} catch (error) {
			res.status(500).json({ message: error.message });
		}
	},

	getAllCustomers: async (req, res) => {
		// #swagger.tags = ['Projects']
		// #swagger.description = 'Endpoint para listar todas os clientes cadastradas no sistema.'
		/* #swagger.security = [{
            "bearerAuth": []
    		}] */
		try {
			const customers = await CustomerService.getAllCustomers();
			if (!customers) {
				return res
					.status(404)
					.json({ message: "Nao ha clientes cadastrados no sistema" });
			}
			res.status(200).json(customers);
		} catch (error) {
			res.status(500).json({ message: error.message });
		}
	},

	createProjectCustomer: async (req, res) => {
		// #swagger.tags = ['Projects']
		// #swagger.description = 'Endpoint para Cadastrar um Cliente em uma obra'
		/* #swagger.security = [{
        "bearerAuth": []
    }] */
		try {
			const token = req.headers.authorization?.split(" ")[1];
			const user = await UserService.getUserInToken(token);
			const {
				idProject,
				name,
				birthdate,
				phone,
				email,
				type,
				cpf,
				cnpj,
				notes,
			} = req.body;

			const newCustomer = await CustomerService.createCustomer({
				cus_name: name,
				cus_birthdate: birthdate,
				cus_phone: phone,
				cus_email: email,
				cus_type: type,
				cus_cpf: cpf,
				cus_cnpj: cnpj,
				cus_notes: notes,
				usr_id: user.id,
				usr_username: user.username,
			});

			res
				.status(201)
				.json({ message: "Cliente cadastrado com sucesso!", newCustomer });
		} catch (error) {
			res.status(500).json({ message: error.message });
		}
	},

	getProjectStage: async (req, res) => {
		// #swagger.tags = ['Projects']
		// #swagger.description = 'Endpoint para obter as etapas de uma obra'
		/* #swagger.security = [{
        "bearerAuth": []
    }] */
		try {
			return res.status(200).json({ message: "em desenvolvimento" });
		} catch (error) {
			res.status(500).json({ message: error.message });
		}
	},

	createProjectStage: async (req, res) => {
		// #swagger.tags = ['Projects']
		// #swagger.description = 'Endpoint para adicionar etapas a uma obra'
		/* #swagger.security = [{
        "bearerAuth": []
    }] */
		try {
			return res.status(200).json({ message: "em desenvolvimento" });
		} catch (error) {
			res.status(500).json({ message: error.message });
		}
	},
	deleteProjectStage: async (req, res) => {
		// #swagger.tags = ['Projects']
		// #swagger.description = 'Endpoint para excluir etapas de uma obra'
		/* #swagger.security = [{
        "bearerAuth": []
    }] */
		try {
			return res.status(200).json({ message: "em desenvolvimento" });
		} catch (error) {
			res.status(500).json({ message: error.message });
		}
	},
};

module.exports = ProjectController;
