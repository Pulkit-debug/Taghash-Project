const mongoose = require("mongoose");

//connecting to our mongodb database
// 27017 is the default port that mongodb provides followed by database name
mongoose.connect(`mongodb://localhost:27017/taghashProject`);

const db = mongoose.connection;

// check if something goes wrong while connecting db.
db.on("error", console.error.bind(console, "Error connecting to MongoDB"));


//funcn to connect to db.
db.once("open", function() {
    console.log("Connected to Database :: MongoDB");
});

module.exports = db;