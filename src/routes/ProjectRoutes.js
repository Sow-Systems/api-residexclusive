const express = require("express");
const ProjectController = require("../controllers/ProjectController");
const ProjectValidations = require("../validations/ProjectValidations");
const auth = require("../middlewares/Auth");

const router = express.Router();
router.use(auth);
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
router.put(
	"/project",
	ProjectValidations.updateProject,
	ProjectController.updateProject
);

router.get("/project-customers", ProjectController.getAllCustomers);
router.post("/project-customer", ProjectController.createProjectCustomer);
router.put("/project-customer", ProjectController.updateProjectCustomer);

// router.put("/project/customer", auth, ProjectController.createProjectCustomer);
// router.delete("/project/customer", auth, ProjectController.deleteProjectCustomer);

// router.get("/project/stage", ProjectController.getProjectStage);
// router.post("/project/stage", auth, ProjectController.createProjectStage);
// router.delete("/project/stage", auth, ProjectController.deleteProjectStage);

module.exports = router;
