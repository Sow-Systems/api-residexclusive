const Project = require("../models/ProjectModel");
const Customer = require("../models/CustomerModel");
const VwProjectInfo = require("../models/VwProjectInfoModel");

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

	getProjectInfo: async () => {
		try {
			const projects = await VwProjectInfo.findAll();
			return projects;
		} catch (error) {
			throw new Error(
				`Erro ao obter a obra no banco de dados: ${error.message}`
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

	getProjectByName: async (name) => {
		try {
			if (!name) {
				throw new Error("Nome do projeto não especificado.");
			}
			const project = await Project.findOne({ where: { prj_name: name } });
			return project;
		} catch (error) {
			throw new Error(
				`Erro ao obter a obra no banco de dados: ${error.message}`
			);
		}
	},

	createProject: async (projectData) => {
		try {
			const newProject = await Project.create(projectData);
			return newProject;
		} catch (error) {
			throw new Error(`Erro ao criar a obra: ${error.message}`);
		}
	},

	updateProjectById: async (projectId, updatedProjectData) => {
		try {
			const checkProject = await Project.findByPk(projectId);

			if (!checkProject) {
				throw new Error("Obra não encontrada");
			}

			await Project.update(updatedProjectData, {
				where: { prj_id: projectId },
			});

			const updatedProject = await Project.findByPk(projectId);
			return updatedProject;
		} catch (error) {
			throw new Error(`Erro ao atualizar o projeto: ${error.message}`);
		}
	},

	setProjectCustomer: async (idProject, idCustomer) => {
		try {
			const checkProject = await Project.findByPk(idProject);
			const checkCustomer = await Customer.findByPk(idCustomer);

			if (!checkProject) {
				throw new Error("Obra não encontrada");
			}

			if (!checkCustomer) {
				throw new Error("Cliente não encontrado");
			}

			const newProjectCustomer = await Project.update(
				{ cus_id: idCustomer },
				{ where: { prj_id: idProject } }
			);
			return newProjectCustomer;
		} catch (error) {
			throw new Error(`Erro ao inserir o cliente na obra: ${error.message}`);
		}
	},
};
