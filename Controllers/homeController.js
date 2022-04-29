// Requiring our recordSchema to use in logic.
const Record = require("../Models/recordSchema")
const db = require("../config/mongoose");
const { resetWatchers } = require("nodemon/lib/monitor/watch");
const coll = db.collection("records");

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
    // creating pipeline for our aggregate query
    
   // -----Code for getting the date to show yesCount and noCount graph ---------------
    
    const totalRecordsOnDate = [
        {
            $group: { _id: "$date", count: { $sum: 1 } } 
        
        }
    ]   

    
    const aggDataTotal = await coll.aggregate(totalRecordsOnDate);
    var totalCount = 0;

    for await (const entity of aggDataTotal) {
        if(entity._id == req.body.vdate) totalCount = entity.count;
    }


    const yesCountOnDate = [
        {
            $match: {date: req.body.vdate}
        },
        {
            $match: {vote: "yes"}
        }
        
        // { $group: { _id: "$vote", count: { $sum: 1} } }
    ];

    var yesCount = 0;
    const aggDataYes = await coll.aggregate(yesCountOnDate);
    for await (const entity of aggDataYes) {
        console.log(entity);
        
        yesCount += 1;
    }

    var noCount = totalCount - yesCount;

    console.log("Yes count: " + yesCount + " no count: " + noCount);

    // Filtering our dates in order to not show repeated values in the selection tag----------
    var dateSet = [];
    for(record of records) {
        dateSet.push(record.date);
    }

    const filterRecords = dateSet.filter((data, index) => {
        return dateSet.indexOf(data) === index;
    });

    
    // console.log("filter values: ", filterRecords);


    // --------------------------------
    
    return res.render("records", {
        filterRecords: filterRecords,
        records: records,
        yesCount: yesCount,
        noCount: noCount,
    });
}


// this function will load up the popup page after submitting a resposne.
module.exports.resSub = function(req, res) {
    return res.render("popup");
}


module.exports.getDate = function(req, res) {
    var myDate = req.body.vdate;
    return res.render("test");
}


// module.exports.noData = global.noCount;
// module.exports.yesData = global.yesCount;