const express = require("express");
const ProjectController = require("../controllers/ProjectController");
const ProjectValidations = require("../validations/ProjectValidations");
const auth = require("../middlewares/Auth");

const router = express.Router();

router.get("/projects", ProjectController.getAllProjects);
router.get(
	"/project/:id",
	ProjectValidations.getProjectById,
	ProjectController.getProjectById
);

router.get("/projects-info", ProjectController.getProjectsInfo);

router.get(
	"/project/name/:name",
	ProjectValidations.getProjectByName,
	ProjectController.getProjectByName
);
router.post(
	"/project",
	ProjectValidations.createProject,
	ProjectController.createProject
);

module.exports = router;
