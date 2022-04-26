// Exporting Express Router
const express = require("express");
const router = express.Router();

// Getting our Home controller to load up the web page
const homeController = require("../Controllers/homeController");

router.get("/", homeController.home);

router.post("/vote", homeController.vote)

router.get("/afterSubmit", homeController.anotherResponse);

router.get("/data", homeController.allData);

module.exports = router;

// Home route
