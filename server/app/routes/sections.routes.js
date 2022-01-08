var router = require("express").Router();

const sections = require("../controllers/sections.controller.js");

// Create a new section
router.post("/", sections.create);

// Retrieve all sections
router.get("/", sections.findAll);

// // Retrieve a single sections with name
router.get("/:id", sections.findOne);

// // Update a sections with name
router.put("/:id", sections.update);

// // Delete a sections with name
router.delete("/:id", sections.delete);

// // delete all the sections
router.delete("/", sections.deleteAll);

module.exports = router;