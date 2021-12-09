var router = require("express").Router();

const users = require("../controllers/user.controller.js");


// auth 
router.post("/login", users.login);

// Create a new User
router.post("/", users.create);

// Retrieve all Users
router.get("/", users.findAll);

// Retrieve a single Tutorial with id
router.get("/:id", users.findOne);

// Update a Tutorial with id
router.put("/:id", users.update);

// Delete a Tutorial with id
router.delete("/:id", users.delete);

// Create a new Tutorial
router.delete("/", users.deleteAll);

module.exports = router;