var router = require("express").Router();
const jwt = require('express-jwt');

const users = require("../controllers/user.controller.js");
const { jwtSecret } = require("../config/jwt.config");


// auth 
router.post("/login", users.login);

// Create a new User
router.post("/signup", users.signup);

// ======= PRIVATE ROUTES =======

router.use(jwt({ secret: jwtSecret, algorithms: ['HS256'] }));

// Retrieve all Users
router.get("/", users.findAll);

// get informations about user
router.get("/getInfo", users.getInfo);

// Retrieve a single Tutorial with id
router.get("/:id", users.findOne);

// Update a Tutorial with id
router.put("/:id", users.update);

// Delete a Tutorial with id
router.delete("/:id", users.delete);

// Delete all
router.delete("/", users.deleteAll);


module.exports = router;