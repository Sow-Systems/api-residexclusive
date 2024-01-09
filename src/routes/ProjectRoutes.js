const express = require("express");
const {
	getAllProjects,
	getProjectById,
	getProjectByName,
	createProject,
} = require("../controllers/ProjectController");

const ProjectValidations = require("../validations/ProjectValidations");
const auth = require("../middlewares/Auth");

const router = express.Router();

router.get("/projects", getAllProjects);
router.get("/project/:id", getProjectById);
router.get("/project/name/:name", getProjectByName);
router.post("/project", createProject);

module.exports = router;
