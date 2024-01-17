const express = require("express");
const ProjectController = require("../controllers/ProjectController");
const ProjectValidations = require("../validations/ProjectValidations");
const auth = require("../middlewares/Auth");

const router = express.Router();

router.get("/projects", auth, ProjectController.getAllProjects);
router.get(
	"/project/:id",
	auth,
	ProjectValidations.getProjectById,
	ProjectController.getProjectById
);
router.get("/projects-info", ProjectController.getProjectsInfo);
router.get(
	"/project/name/:name",
	auth,
	ProjectValidations.getProjectByName,
	ProjectController.getProjectByName
);
router.post(
	"/project",
	auth,
	ProjectValidations.createProject,
	ProjectController.createProject
);

router.get("/project/stage", auth, ProjectController.getProjectStage);
router.post("/project/stage", auth, ProjectController.createProjectStage);
router.delete("/project/stage", auth, ProjectController.deleteProjectStage);

// router.get("/project/customer", ProjectController.getProjectCustomer);
// router.post("/project/customer", auth, ProjectController.createProjectCustomer);
// router.put("/project/customer", auth, ProjectController.createProjectCustomer);
// router.delete("/project/customer", auth, ProjectController.deleteProjectCustomer);

module.exports = router;
