const db = require("../models");
const User = db.users;
const jsonwebtoken = require('jsonwebtoken');
const jwtSecret = 'rrrrrrrrrrrrrrrrrrrrrrrrr';
// const Section = db.sections;

// Create and Save a new User
exports.signup = async (req, res) => {
  // Validate request

  const errors = {};

  if (!req.body.lastname) {
    res.status(400).send({ message: "Name can not be empty!" });
    return;
  }

  console.log("0");

  // vérification de l'existence de l'utilisateur en base (par le mail)
  const data = await User.find({ email: req.body.email });
  console.log("1");

  if (data.length > 0) {
    // https://stackoverflow.com/questions/3825990/http-response-code-for-post-when-resource-already-exists

    console.log("2");
    errors.email = "désolé mais le mail existe déjà";
    return res.status(409).send(errors);
  }

  console.log("3");

  // Create a User
  const user = new User({
    lastname: req.body.lastname,
    firstname: req.body.firstname,
    email: req.body.email,
    phone: req.body.phone,
    adress: req.body.adress,
    city: req.body.city,
    postal: req.body.postal,
    password: req.body.password,
    // isAdmin: false, // <--  todo : décommenter 
  });


  // Save User in the database
  user
    .save(user)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User."
      });
    });
};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
  const lastname = req.query.lastname;
  var condition = lastname ? { lastname: { $regex: new RegExp(lastname), $options: "i" } } : {};

  User.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    });
};

// Find a single User with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  User.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found User with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving User with id=" + id });
    });
};

// Update a User by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update User with id=${id}. Maybe User was not found!`
        });
      } else res.send({ message: "User was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating User with id=" + id
      });
    });
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  User.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete User with id=${id}. Maybe User was not found!`
        });
      } else {
        res.send({
          message: "User was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete User with id=" + id
      });
    });
};

// Delete all Users from the database.
exports.deleteAll = (req, res) => {
  User.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Users were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all users."
      });
    });
};

// *****************  login  ************************
exports.login = (req, res) => {
  console.log(req.body);

  User.find({ email: req.body.email }).then((data) => {
    console.log(data);

    // user trouvé
    if (data.length > 0) {

      const user = data[0];
      // password match
      if (user.password === req.body.password) {
        
        const token = jsonwebtoken.sign(
          { 
            email : user.email,
            isAdmin : true // user.isAdmin,
          }, // payload
          jwtSecret // secret
        );

        res.send({token});
      }


      // mauvais password
      else {
        res.status(401).send({
          errors: {
            password: "mauvais mot de passe"
          }
        });
      }
    }

    // user pas trouvé
    else {
      res.status(409).send({
        errors: {
          email: "utilisateur non trouvé"
        }
      });
    }


  });
};