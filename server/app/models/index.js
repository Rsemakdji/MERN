const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {
    mongoose : mongoose,
    url : dbConfig.url,
};

// console.log(db.mongoose);
// console.log(mongoose);
// console.log(db);

// models
db.users = require("./user.model.js")(mongoose);
db.informations = require("./informations.model.js")(mongoose);
db.actualites = require("./actualites.model.js")(mongoose);
db.section = require("./sections.model.js")(mongoose);
// console.log(db);
module.exports = db;
