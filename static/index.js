
// JQuery function to get the date on the homepage.
$( function() {
    $( "#date" ).datepicker();
  } );

console.log("loading up")

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
