"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			"customer",
			[
				{
					cus_name: "ANA PAULA ALVES",
					cus_type: "PF",
					usr_id: 1,
					usr_username: "admin",
				},
				{
					cus_name: "ANDRIANO MAREGA DA SILVA",
					cus_cpf: "2864530646",
					cus_type: "PF",
					usr_id: 1,
					usr_username: "admin",
				},
				{
					cus_name: "ARTHUR REDUCINO VAN EYKEN",
					cus_type: "PF",
					usr_id: 1,
					usr_username: "admin",
				},
				{
					cus_name: "BRUNA MONTES DE ARAÚJO VICTAL",
					cus_type: "PF",
					usr_id: 1,
					usr_username: "admin",
				},
				{
					cus_name: "CAIO VITAGLIANO SANTI ROSSI",
					cus_phone: "34996816716",
					cus_cpf: "26406224809",
					cus_type: "PF",
					usr_id: 1,
					usr_username: "admin",
				},
				{
					cus_name: "CAISON MANOEL CANDIDO",
					cus_cpf: "02865664600",
					cus_type: "PF",
					usr_id: 1,
					usr_username: "admin",
				},
				{
					cus_name: "CEDRICK MORAES MAIA MENDES",
					cus_type: "PF",
					usr_id: 1,
					usr_username: "admin",
				},
				{
					cus_name: "DEILTON ALVES PEREIRA",
					cus_cpf: "05584056650",
					cus_type: "PF",
					usr_id: 1,
					usr_username: "admin",
				},
				{
					cus_name: "EDUARDO E  PRISCILA",
					cus_type: "PF",
					usr_id: 1,
					usr_username: "admin",
				},
				{
					cus_name: "EDUARDO HENRIQUE MILAZZO GUIMARAES",
					cus_cpf: "3382830647",
					cus_type: "PF",
					usr_id: 1,
					usr_username: "admin",
				},
				{
					cus_name: "EDUARDO LOPES ROJO",
					cus_email: "EDUERS@HOTMAIL.COM",
					cus_cpf: "17406332882",
					cus_type: "PF",
					usr_id: 1,
					usr_username: "admin",
				},
				{
					cus_name: "EMPREENDIMENTO OSÉIAS",
					cus_phone: "34988563446",
					cus_cpf: "09313157608",
					cus_type: "PF",
					usr_id: 1,
					usr_username: "admin",
				},
				{
					cus_name: "EPAFRAS REZENDE SCHADEN",
					cus_cpf: "4691275622",
					cus_type: "PF",
					usr_id: 1,
					usr_username: "admin",
				},
				{
					cus_name: "ERNANI BRAGA",
					cus_phone: "34 99960044",
					cus_cpf: "98717529620",
					cus_type: "PF",
					usr_id: 1,
					usr_username: "admin",
				},
				{
					cus_name: "FABIO RODRIGUES DE MELO",
					cus_email: "FABIOELO@HOTMAIL.COM",
					cus_cpf: "5950542690",
					cus_type: "PF",
					usr_id: 1,
					usr_username: "admin",
				},
				{
					cus_name: "FULVIO PEIXOTO CARDOSO",
					cus_cpf: "04458113666",
					cus_type: "PF",
					usr_id: 1,
					usr_username: "admin",
				},
				{
					cus_name: "GABRIEL ROBLES DE CESERO",
					cus_cpf: "88860426634",
					cus_type: "PF",
					usr_id: 1,
					usr_username: "admin",
				},
				{
					cus_name: "HELIANA COPPOLA MACIEL",
					cus_cpf: "36525510600",
					cus_type: "PF",
					usr_id: 1,
					usr_username: "admin",
				},
				{
					cus_name: "KEILLA FREITAS REIS MARTINS",
					cus_cpf: "04230412665",
					cus_type: "PF",
					usr_id: 1,
					usr_username: "admin",
				},
				{
					cus_name: "LUCAS GABRIEL ALVES FALEIROS",
					cus_cpf: "08552500620",
					cus_type: "PF",
					usr_id: 1,
					usr_username: "admin",
				},
				{
					cus_name: "LUCAS GABRIEL FALEIROS 2",
					cus_cpf: "08552500620",
					cus_type: "PF",
					usr_id: 1,
					usr_username: "admin",
				},
				{
					cus_name: "LUIZ RENATO CALCAGNO CAMARGO",
					cus_cpf: "01439615608",
					cus_type: "PF",
					usr_id: 1,
					usr_username: "admin",
				},
				{
					cus_name: "MARCELO FERREIRA BARBOSA",
					cus_cpf: "06630346637",
					cus_type: "PF",
					usr_id: 1,
					usr_username: "admin",
				},
				{
					cus_name: "MARCO ANTÔNIO BORGES",
					cus_cpf: "09013962653",
					cus_type: "PF",
					usr_id: 1,
					usr_username: "admin",
				},
				{
					cus_name: "MARCUS DOS ANJOS ALVES",
					cus_email: "MARCUSDOSANJOS@YAHOO.COM.BR",
					cus_type: "PJ",
					cus_cnpj: "18623674000108",
					usr_id: 1,
					usr_username: "admin",
				},
				{
					cus_name: "NIXXON (KLEBER LUIZ)",
					cus_phone: "34 996452326",
					cus_cpf: "59483296820",
					cus_type: "PF",
					usr_id: 1,
					usr_username: "admin",
				},
				{
					cus_name: "OSEIAS SALÁRIO FORA DO PRO-LABORE",
					cus_cpf: "0",
					cus_type: "PF",
					usr_id: 1,
					usr_username: "admin",
				},
				{
					cus_name: "PATRICK FLORESTA CAMARGOS",
					cus_cpf: "04357857619",
					cus_type: "PF",
					usr_id: 1,
					usr_username: "admin",
				},
				{
					cus_name: "PATRICK FLORESTA CAMARGOS (DAIANE)",
					cus_email: "PATRIKFLORESTA@YAHOO.COM.BR",
					cus_cpf: "4357857619",
					cus_type: "PF",
					usr_id: 1,
					usr_username: "admin",
				},
				{
					cus_name: "PAULO COSTA CARDOSO JUNIOR",
					cus_email: "PCCARDOSOJR@GMAIL.COM",
					cus_cpf: "3095050623",
					cus_type: "PF",
					usr_id: 1,
					usr_username: "admin",
				},
				{
					cus_name: "PAULO HENRIQUE OLIVEIRA REZENDE",
					cus_email: "PAULOHENRIQUE16@GMAIL.COM",
					cus_cpf: "8585533684",
					cus_type: "PF",
					usr_id: 1,
					usr_username: "admin",
				},
				{
					cus_name: "PAULO PATENTE DE ALMEIDA BRABDAO",
					cus_email: "PAULOSOAD@YAHOO.COM.BR",
					cus_cpf: "7021919654",
					cus_type: "PF",
					usr_id: 1,
					usr_username: "admin",
				},
				{
					cus_name: "RODRIGO ANTONIO DE OLIVEIRA",
					cus_cpf: "08843166611",
					cus_type: "PF",
					usr_id: 1,
					usr_username: "admin",
				},
				{
					cus_name: "RODRIGO CHAVES PIMENTA",
					cus_email: "RODRIGOCPIMENTA@GMAIL.COM",
					cus_cpf: "2237199",
					cus_type: "PF",
					usr_id: 1,
					usr_username: "admin",
				},
				{
					cus_name: "RODRIGO LAMOUNIER SILVA",
					cus_email: "CIDELLEVM@YAHOO.COM.BR",
					cus_cpf: "28877825847",
					cus_type: "PF",
					usr_id: 1,
					usr_username: "admin",
				},
				{
					cus_name: "ROGÉRIO HEITOR DA SILVEIRA",
					cus_email: "ROGERIO_HEITOR@YAHOO.COM.BR",
					cus_cpf: "3523553601",
					cus_type: "PF",
					usr_id: 1,
					usr_username: "admin",
				},
				{
					cus_name: "SERGIO PEREIRA DE MIRANDA",
					cus_cpf: "91117232620",
					cus_type: "PF",
					usr_id: 1,
					usr_username: "admin",
				},
				{
					cus_name: "VINÍCIUS ALVES SOUTO PEREIRA",
					cus_email: "VINICIUSASOUTO@TERRA.COM.BR",
					cus_cpf: "625112628",
					cus_type: "PF",
					usr_id: 1,
					usr_username: "admin",
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("customer", null, {});
	},
};