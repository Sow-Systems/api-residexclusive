"use strict";

module.exports = {
	up: async (queryInterface) => {
		const createViewQuery = `
      CREATE or REPLACE VIEW vw_projects_info AS
      SELECT prj.prj_id
	          ,cus.cus_id
            ,cus.cus_name
            ,prj.prj_name
            ,prj.prj_start_date
            ,prj.prj_end_date
            ,prj.prj_status
            ,prj.prj_contract_value
            ,prj.prj_category
            ,prj.prj_area
            ,'Definir Tabela do diário de Obras' as stg_name            
  FROM project prj
LEFT JOIN customer cus
 ON prj.cus_id = cus.cus_id
    `;
		await queryInterface.sequelize.query(createViewQuery);
	},

	down: async (queryInterface) => {
		const dropViewQuery = `
      DROP VIEW IF EXISTS vw_projects_info;
    `;
		await queryInterface.sequelize.query(dropViewQuery);
	},
};
