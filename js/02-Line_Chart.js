const CHART = document.getElementById('linechartPlaceholder');
console.log(CHART);

// create the chart
var linechart = new Chart(CHART, {
    // The type of chart we want to create
    type: 'line',

    // Bootstrap the data and a dataset
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "My First dataset",
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45],
        }]
    }

});