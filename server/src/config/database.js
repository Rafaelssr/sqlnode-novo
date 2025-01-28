module.exports = {
	dialect: "postgres",
	host: "localhost",
	username: "Rafael-Freitas",
	password: "Postgres2022!",
	database: "database_development",
	define: {
		timestamps: true,
		underscored: true,
		underscoredAll: true
	},
	development: {
		username: "Rafael-Freitas",
		password: null,
		database: "database_development",
		host: "127.0.0.1",
		dialect: "postgres"
	},
	test: {
		username: "Rafael-Freitas",
		password: null,
		database: "database_test",
		host: "127.0.0.1",
		dialect: "postgres"
	},
	production: {
		username: "Rafael-Freitas",
		password: null,
		database: "database_production",
		host: "127.0.0.1",
		dialect: "postgres"
	}
};

const p = require("../../")
