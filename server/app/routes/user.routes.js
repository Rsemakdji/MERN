var router = require("express").Router();
const jwt = require('express-jwt');

const users = require("../controllers/user.controller.js");
//a mettre dans la config
const jwtSecret = 'rrrrrrrrrrrrrrrrrrrrrrrrr';




// auth 
router.post("/login", users.login);

// Create a new User
router.post("/signup", users.signup);

// Retrieve a single Tutorial with id
router.get("/:id", users.findOne);

// Update a Tutorial with id
router.put("/:id", users.update);

// Delete a Tutorial with id
router.delete("/:id", users.delete);

// Create a new Tutorial
router.delete("/", users.deleteAll);

router.use(jwt({ secret: jwtSecret, algorithms: ['HS256'] }));

// Retrieve all Users
router.get("/", users.findAll);

module.exports = router;