const express = require("express");

const app = express();
require('./app/router')(app);

const PORT = process.env.PORT || 9001;

require('./app/database');

// set port, listen for requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
})