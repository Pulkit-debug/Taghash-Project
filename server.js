const express = require("express");
const app = express();
const db = require("./config/mongoose");
// using bodyparser to parse our form data.
const bodyParser = require("body-parser");
const flatpicker = require("flatpickr");

const path = require("path");
const PORT = 5000;


// setting up express static to server our static files like css, js, img, etc.
app.use("/static", express.static("./static/"));
// setting up the view engine
app.set("views", "./views");
app.set("view engine", "ejs");




// app.use("/css", express.static(__dirname + "assets/css"));
// app.use("/js", express.static(__dirname + "assets/js"));
// parsing the data gathered from form using body-parser
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({extended: true}));


// Setting up our routes 
app.use("/", require("./Routes"));



// Starting our server on localhost port:5000
app.listen(PORT, () => {
    console.log(`Server is up and running on ${PORT}`);
})