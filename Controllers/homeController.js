// Requiring our recordSchema to use in logic.
const Record = require("../Models/recordSchema")

// rendering Home Page
module.exports.home = function(req, res) {
    return res.render("homePage");   
}

// this function will handle all the data that's coming up from the form and store it onto database
// 
module.exports.vote = function(req, res) {
    // console.log(req.body);
    givingVote = "no";
    if(req.body.vote == "yes") {
        givingVote = "yes";
    }


    // , date: new Date()

    // fetching date 

    let dt = req.body.date;
    let month = dt[0] + dt[1];
    let date = dt[3] + dt[4];
    let year = dt[6] + dt[7] + dt[8] + dt[9];

    // let overallDate = 

    // creating record in the database 
    Record.create({name: req.body.name, vote: givingVote, date: req.body.date}, function(err, record) {
        if(err) {
            console.log("Error in creating record");
            return;
        }
        // console.log(record);
        
        return res.redirect("/");
    })

    // return res.send("data submitted!");
}


// to get back to the homepage
module.exports.anotherResponse = function(req, res) {
    return res.render("homePage");
}


// This function will bring up the data page wherein all the records that are submitted will be displayed.
module.exports.allData = async function(req, res) {

    let records = await Record.find();
    // console.log(records);
    return res.render("records", {
        records: records,
    });
}

// this function will load up the popup page after submitting a resposne.
module.exports.resSub = function(req, res) {
    return res.render("popup");
}