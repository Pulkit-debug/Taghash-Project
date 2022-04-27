// Exporting Express Router
const express = require("express");
const router = express.Router();

// Getting our Home controller to load up the web page
const homeController = require("../Controllers/homeController");

// route for home
router.get("/", homeController.home);

// route for vote
router.post("/vote", homeController.vote)

// route to go back to homepage
router.get("/afterSubmit", homeController.anotherResponse);

// route to show all the records present in the database.
router.get("/data", homeController.allData);

// route to show the popup window after submitting response.
router.get("/resSubmit", homeController.resSub);


module.exports = router;

// Home route
