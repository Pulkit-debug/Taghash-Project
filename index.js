const express = require("express");
const app = express();
const db = require("./config/mongoose");
const bodyParser = require("body-parser");
const flatpicker = require("flatpickr");

const path = require("path");
const PORT = 5000;



app.use("/static", express.static("./static/"));
// setting up the view engine
app.set("views", "./Views");
app.set("view engine", "ejs");




// app.use("/css", express.static(__dirname + "assets/css"));
// app.use("/js", express.static(__dirname + "assets/js"));
// parsing the data gathered from form using body-parser
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({extended: true}));

app.use("/", require("./Routes"));




app.listen(PORT, () => {
    console.log(`Server is up and running on ${PORT}`);
})