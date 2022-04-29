// const {homeController} = require("../Controllers/homeController.js");

// const yesCount = homeController.yesData;
// const noCount = homeController.noCount;





// JQuery function to get the date on the homepage.
$( function() {
    $( "#date" ).datepicker();
  } );


  // need to get yesCount and noCount from homeController

(function() {
  const ctx = document.getElementById("myChart").getContext("2d");

const labels = ['YES', 'No'];

const data = {
  labels: labels,
  datasets: [{
    label: "Users Voting on particular Day!",
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: [10, 5],
  }]
}

const config = {
  type: 'bar',
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
};

const myChart = new Chart(ctx, config);

// console.log(locals.yesCount);
})();