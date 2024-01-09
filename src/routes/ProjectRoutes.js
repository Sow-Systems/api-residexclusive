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
router.get("/projects/:id", getProjectById);
router.get("/projects/name/:name", getProjectByName);
router.post("/projects", createProject);

module.exports = router;
