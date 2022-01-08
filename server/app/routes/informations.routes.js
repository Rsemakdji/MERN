var router = require("express").Router();

const informations = require("../controllers/informations.controller.js");


// Create an information
router.post("/", informations.create);

// Retrieve all informations
router.get("/", informations.findAll);

// // Retrieve a single information with title
router.get("/:id", informations.findOne);

// // Update a information with title
router.put("/:id", informations.update);

// // Delete a information with title
router.delete("/:id", informations.delete);

// // delete all the information
router.delete("/", informations.deleteAll);

module.exports = router;