const { DataTypes } = require("sequelize");
const db = require("../database");
const Project = require("./ProjectModel");
const Stage = require("./StageModel");

const ProjectStage = db.define(
	"ProjectStage",
	{
		pst_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
		},
		usr_id: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
		usr_username: {
			type: DataTypes.STRING,
			allowNull: true,
		},
	},
	{
		tableName: "project_stage",
		timestamps: true,
		underscored: true,
	}
);

Project.belongsToMany(Stage, { through: ProjectStage, foreignKey: "prj_id" });
Stage.belongsToMany(Project, { through: ProjectStage, foreignKey: "stg_id" });

module.exports = ProjectStage;
