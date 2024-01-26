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
			let project = await ProjectService.getProjectById(id);

			if (!project) {
				return res.status(404).json({ message: "Obra não encontrada" });
			}
			const idAddress = project.add_id;

			const address = await AddressService.getAddressById(idAddress);

			project = {
				...project.dataValues,
				address: {
					add_street: address.add_street,
					add_number: address.add_number,
					add_complement: address.add_complement,
					add_neighborhood: address.add_neighborhood,
					add_city: address.add_city,
					add_state: address.add_state,
					add_postal_code: address.add_postal_code,
					add_observations1: address.add_observations1,
				},
			};
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

			const projectsWithAddress = [];

			for (const project of projects) {
				let idAddress = project.add_id;
				const address = await AddressService.getAddressById(idAddress);

				const projectWithAddress = {
					...project.dataValues,
					address: {
						add_street: address.add_street,
						add_number: address.add_number,
						add_complement: address.add_complement,
						add_neighborhood: address.add_neighborhood,
						add_city: address.add_city,
						add_state: address.add_state,
						add_postal_code: address.add_postal_code,
						add_observations1: address.add_observations1,
					},
				};

				projectsWithAddress.push(projectWithAddress);
			}

			res.status(200).json(projectsWithAddress);
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
			const idAddress = project.add_id;

			const address = await AddressService.getAddressById(idAddress);

			project = {
				...project.dataValues,
				address: {
					add_street: address.add_street,
					add_number: address.add_number,
					add_complement: address.add_complement,
					add_neighborhood: address.add_neighborhood,
					add_city: address.add_city,
					add_state: address.add_state,
					add_postal_code: address.add_postal_code,
					add_observations1: address.add_observations1,
				},
			};
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
				address: {
					street,
					number,
					complement,
					neighborhood,
					postalCode,
					city,
					state,
					condominium,
				},
			} = req.body;

			const existingProject = await ProjectService.getProjectByName(
				projectName
			);

			if (existingProject) {
				return res
					.status(409)
					.json({ message: "A obra já esta cadastrada no sistema" });
			}

			let newAddress = await AddressService.createAddress({
				add_street: street,
				add_number: number,
				add_complement: complement,
				add_neighborhood: neighborhood,
				add_observations1: condominium,
				add_city: city,
				add_state: state,
				add_postal_code: postalCode,
				usr_id: user.id,
				usr_username: user.username,
			});

			let newProject = await ProjectService.createProject({
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
				usr_username: user.username,
			});

			newProject = {
				...newProject.dataValues,
				address: {
					add_street: newAddress.add_street,
					add_number: newAddress.add_number,
					add_complement: newAddress.add_complement,
					add_neighborhood: newAddress.add_neighborhood,
					add_city: newAddress.add_city,
					add_state: newAddress.add_state,
					add_postal_code: newAddress.add_postal_code,
					add_observations1: newAddress.add_observations1,
				},
			};

			res
				.status(201)
				.json({ message: "Obra cadastrada com sucesso!", newProject });
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
				idProject,
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
				address: {
					street,
					number,
					complement,
					neighborhood,
					postalCode,
					city,
					state,
					condominium,
				},
			} = req.body;

			const existingProject = await ProjectService.getProjectById(idProject);

			if (!existingProject) {
				return res.status(404).json({ message: "Obra não encontrada" });
			}

			const idAddress = existingProject.add_id;

			let updatedAddress = await AddressService.updateAddressById(idAddress, {
				add_street: street,
				add_number: number,
				add_complement: complement,
				add_neighborhood: neighborhood,
				add_observations1: condominium,
				add_city: city,
				add_state: state,
				add_postal_code: postalCode,
				usr_id: user.id,
				usr_username: user.username,
			});

			let updatedProject = await ProjectService.updateProjectById(idProject, {
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
				usr_username: user.username,
			});

			updatedProject = {
				...updatedProject.dataValues,
				address: {
					add_street: updatedAddress.add_street,
					add_number: updatedAddress.add_number,
					add_complement: updatedAddress.add_complement,
					add_neighborhood: updatedAddress.add_neighborhood,
					add_city: updatedAddress.add_city,
					add_state: updatedAddress.add_state,
					add_postal_code: updatedAddress.add_postal_code,
					add_observations1: updatedAddress.add_observations1,
				},
			};

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

			const existsCustomer = await CustomerService.validadeExistsCustomer({
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

			if (existsCustomer) {
				return res.status(400).json({
					message: "Este cliente ja foi cadastrado anteriormente!",
				});
			}

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

			const IdCustomerProject = newCustomer.cus_id;

			await ProjectService.setProjectCustomer(idProject, IdCustomerProject);

			res.status(201).json({ message: "Cliente cadastrado com sucesso!" });
		} catch (error) {
			res.status(500).json({ message: error.message });
		}
	},

	updateProjectCustomer: async (req, res) => {
		// #swagger.tags = ['Projects']
		// #swagger.description = 'Endpoint para incluir um cliente existente em uma obra'
		/* #swagger.security = [{
        "bearerAuth": []
    }] */
		try {
			const token = req.headers.authorization?.split(" ")[1];
			const user = await UserService.getUserInToken(token);

			const { idProject, idCustomer } = req.body;

			const checkProject = await ProjectService.getProjectById(idProject);

			if (!checkProject) {
				return res.status(404).json({ message: "Obra não encontrada" });
			}

			const checkCustomer = await CustomerService.getCustomerById(idCustomer);

			if (!checkCustomer) {
				return res.status(404).json({ message: "Cliente não encontrado" });
			}

			const updatedProject = await ProjectService.updateProjectById(idProject, {
				cus_id: idCustomer,
				usr_id: user.id,
				usr_username: user.username,
			});

			res
				.status(200)
				.json({ message: "Obra atualizada com sucesso!", updatedProject });
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
