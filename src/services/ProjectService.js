const Project = require("../models/ProjectModel");

module.exports = {
	getAllProjects: async () => {
		try {
			const projects = await Project.findAll();
			return projects;
		} catch (error) {
			throw new Error(
				`Erro ao obter as obras no banco de dados: ${error.message}`
			);
		}
	},

	getProjectById: async (id) => {
		try {
			const project = await Project.findByPk(id);
			return project;
		} catch (error) {
			throw new Error(
				`Erro ao obter a obra no banco de dados: ${error.message}`
			);
		}
	},

	getProjectByName: async (prj_name) => {
		try {
			const project = await Project.findOne({ where: { prj_name: prj_name } });
			return project;
		} catch (error) {
			throw new Error(
				`Erro ao obter a obra no banco de dados: ${error.message}`
			);
		}
	},

	createProject: async ({
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
	}) => {
		try {
			const newProject = await Project.create({
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
			return newProject;
		} catch (error) {
			throw new Error(`Erro ao criar a obra: ${error.message}`);
		}
	},
};
