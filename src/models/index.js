const Customer = require("./CustomerModel");
const Contact = require("./ContactModel");
const Address = require("./AddressModel");
const CustomerAddress = require("./CustomerAddressModel");
const CustomerContact = require("./CustomerContactModel");
const Project = require("./ProjectModel");
const Stage = require("./StageModel");
const ProjectStage = require("./ProjectStageModel");
const User = require("./UserModel");
const VwProjectInfo = require("./VwProjectInfoModel");

Contact.belongsToMany(Customer, {
	foreignKey: "ctt_id",
	through: CustomerContact,
});

Customer.belongsToMany(Contact, {
	foreignKey: "cus_id",
	through: CustomerContact,
});

Address.belongsToMany(Customer, {
	foreignKey: "add_id",
	through: CustomerAddress,
});

Customer.belongsToMany(Address, {
	foreignKey: "cus_id",
	through: CustomerAddress,
});

Project.belongsTo(Address, {
	foreignKey: "add_id",
});

Project.belongsTo(Customer, {
	foreignKey: "cus_id",
});

module.exports = {
	Customer,
	Contact,
	Address,
	CustomerAddress,
	CustomerContact,
	Project,
	Stage,
	ProjectStage,
	User,
	VwProjectInfo,
};
