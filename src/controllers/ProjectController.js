const AddressService = require("../services/AddressService"); // Importe o serviço de endereço aqui
const ProjectService = require("../services/ProjectService");

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
				return res.status(404).json({ error: "Obra não encontrada" });
			}
			return res.status(200).json(project);
		} catch (error) {
			return res.status(500).json({ error: error.message });
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
					.json({ error: "Não há obras cadastradas no sistema" });
			}
			return res.status(200).json(project);
		} catch (error) {
			return res.status(500).json({ error: error.message });
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
					.json({ error: "Nao ha obras cadastradas no sistema" });
			}
			res.status(200).json(projects);
		} catch (error) {
			res.status(500).json({ error: error.message });
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
			res.status(500).json({ error: error.message });
		}
	},

	createProject: async (req, res) => {
		// #swagger.tags = ['Projects']
		// #swagger.description = 'Endpoint para cadastrar uma obra no sistema'
		/* #swagger.security = [{
            "bearerAuth": []
    }] */
		try {
			const {
				projectName,
				description,
				startDate,
				endDate,
				status,
				category,
				area,
				cno,
				art,
				technicalLeadName,
				architectName,
				contractValue,
				userId,
				userName,
				address: { street, number, complement, neighborhood, postalCode, city },
			} = req.body;

			const addressData = req.body.address;

			const existingProject = await ProjectService.getProjectByName(
				projectName
			);

			if (existingProject) {
				return res
					.status(409)
					.json({ error: "A obra já esta cadastrada no sistema" });
			}

			const newAddress = await AddressService.createAddress({
				add_street: addressData.street,
				add_number: addressData.number,
				add_complement: addressData.complement,
				add_neighborhood: addressData.neighborhood,
				add_city: addressData.city,
				add_state: addressData.state,
				add_postal_code: addressData.postalCode,
				usr_id: userId,
				usr_name: userName,
			});

			const newProject = await ProjectService.createProject({
				add_id: newAddress.add_id,
				prj_name: projectName,
				prj_description: description,
				prj_start_date: startDate,
				prj_end_date: endDate,
				prj_status: status,
				prj_category: category,
				prj_area: area,
				prj_cno: cno,
				prj_art: art,
				prj_technical_lead_name: technicalLeadName,
				prj_architect_name: architectName,
				prj_contract_value: contractValue,
				usr_id: userId,
				usr_name: userName,
			});

			res
				.status(201)
				.json({ message: "Obra cadastrada com sucesso!", newProject });
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	},

	updateProject: async (req, res) => {
		// #swagger.tags = ['Projects']
		// #swagger.description = 'Endpoint para atualizar uma obra no sistema'
		/* #swagger.security = [{
        "bearerAuth": []
    }] */
		try {
			const { id } = req.params;
			const existingProject = await ProjectService.getProjectById(id);

			if (!existingProject) {
				return res.status(404).json({ error: "Obra não encontrada" });
			}

			const {
				prj_name,
				prj_description,
				prj_start_date,
				prj_end_date,
				prj_status,
				prj_address,
				prj_category,
				prj_area,
				prj_cno,
				prj_art,
				prj_technical_lead_name,
				prj_architect_name,
				prj_contract_value,
				usr_id,
				usr_name,
			} = req.body;

			const updatedProject = await ProjectService.updateProjectById(id, {
				prj_name,
				prj_description,
				prj_start_date,
				prj_end_date,
				prj_status,
				prj_address,
				prj_category,
				prj_area,
				prj_cno,
				prj_art,
				prj_technical_lead_name,
				prj_architect_name,
				prj_contract_value,
				usr_id,
				usr_name,
			});

			res
				.status(200)
				.json({ message: "Obra atualizada com sucesso!", updatedProject });
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	},
};

module.exports = ProjectController;