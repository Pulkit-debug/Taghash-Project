const mongoose = require("mongoose");


// creating record schema to be stored in the database.
const recordSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    vote: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        requird: true,
    },
}, {timestamps: true});


// exporting recordShema
const Record = mongoose.model("Record", recordSchema);
module.exports = Record;