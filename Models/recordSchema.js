const mongoose = require("mongoose");

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

const Record = mongoose.model("Record", recordSchema);
module.exports = Record;