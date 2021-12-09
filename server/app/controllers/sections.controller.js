const db = require("../models");
const Section = db.section;

// Create and Save a section
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({ message: "Name can not be empty!" });
    return;
  }

  // Create a section
  const section = new Section({
    name : req.body.name,
    timetable: req.body.timetable,
    professor: req.body.professor,
    tariff: req.body.tariff
  });

  // Save section in the database
  section
    .save(section)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the section."
      });
    });
};

// Retrieve all section from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};

  Section.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving name ."
      });
    });
};

// Find a single section with a name
exports.findOne = (req, res) => {
    const name = req.query.name;

  Section.findById(name)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Section with name " + name });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving section with name=" + name});
    });
};

// Update a section with a name in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const name = req.params.name;

  Section.findByIdAndUpdate(name, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update section with name=${name}. Maybe section was not found!`
        });
      } else res.send({ message: "section was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating section with name=" + name
      });
    });
};

// Delete a section with the specified name in the request
exports.delete = (req, res) => {
  const name = req.params.name;

  Section.findByIdAndRemove(name, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete section with name=${name}. Maybe section was not found!`
        });
      } else {
        res.send({
          message: "section was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete section with name=" + name
      });
    });
};

// Delete all sections from the database.
exports.deleteAll = (req, res) => {
  Section.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} section were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all sections."
      });
    });
};