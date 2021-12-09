const express = require('express');
const cors = require("cors");

const userRoute = require("./routes/user.routes");
const informationsRoute = require("./routes/informations.routes");
const actualitesRoute = require("./routes/actualites.routes");
const sectionRoute = require("./routes/sections.routes");

module.exports = app => {
    
    // Configuration

    app.use(cors({ origin: "http://localhost:3000" }));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    // Home route
    app.get("/", (req, res) => {
        //throw new Error();
        res.json({ message: "Welcome to judoclub application." });
    });


    

    // Models Routes

    app.use("/api/users", userRoute);
    app.use("/api/informations", informationsRoute);
    app.use("/api/actualites", actualitesRoute);
    app.use("/api/sections", sectionRoute);


    // Error Routes

    app.use((req, res, next) => {
        const error = new Error("Not found");
        error.status = 404;
        next(error);
    });

    app.use((error, req, res, next) => {
        res.status(error.status || 500);
        res.json({
            error: {
                message: error.message || "No detail"
            }
        });
    });

};