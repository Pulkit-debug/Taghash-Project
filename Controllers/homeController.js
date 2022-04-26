const Record = require("../Models/recordSchema")

module.exports.home = function(req, res) {
    return res.render("homePage");   
}

module.exports.vote = function(req, res) {
    console.log(req.body);
    givingVote = "no";
    if(req.body.vote == "yes") {
        givingVote = "yes";
    }


    // , date: new Date()

    let dt = req.body.date;
    let month = dt[0] + dt[1];
    let date = dt[3] + dt[4];
    let year = dt[6] + dt[7] + dt[8] + dt[9];

    // let overallDate = 

    Record.create({name: req.body.name, vote: givingVote, date: req.body.date}, function(err, record) {
        if(err) {
            console.log("Error in creating record");
            return;
        }
        console.log(record);
        return res.redirect("/afterSubmit");
    })

    // return res.send("data submitted!");
}

module.exports.anotherResponse = function(req, res) {
    return res.render("afterSubmit");
}


module.exports.allData = async function(req, res) {

    let records = await Record.find();
    console.log(records);
    return res.render("records", {
        records: records,
    });
}