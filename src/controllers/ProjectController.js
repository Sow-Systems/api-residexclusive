const projectService = require("../services/ProjectService");

module.exports = ProjectController = {
	getProjectById: async (req, res) => {
		// #swagger.tags = ['Projects']
		// #swagger.description = 'Endpoint para listar uma obra pelo ID'
		/* #swagger.security = [{
            "bearerAuth": []
    }] */
		try {
			const { id } = req.params;
			const project = await projectService.getProjectById(id);

			if (!project) {
				return res.status(404).json({ error: "Obra não encontrada" });
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
			const projects = await projectService.getAllProjects();
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
			const project = await projectService.getProjectByName(name);
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
				cus_id,
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

			const existingProject = await projectService.getProjectByName(prj_name);

			if (existingProject) {
				return res
					.status(409)
					.json({ error: "A obra já esta cadastrada no sistema" });
			}

			const newProject = await projectService.createProject({
				cus_id,
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
				.status(201)
				.json({ message: "Obra cadastrada com sucesso!", newProject });
		} catch (error) {
			res.status(500).json({ error: error.message });
		}
	},
};
