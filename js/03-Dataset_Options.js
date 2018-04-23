// define some colores for the cart
window.chartColors = {
	red: 'rgb(255, 99, 132)',
	orange: 'rgb(255, 159, 64)',
	yellow: 'rgb(255, 205, 86)',
	green: 'rgb(75, 192, 192)',
	blue: 'rgb(54, 162, 235)',
	purple: 'rgb(153, 102, 255)',
	grey: 'rgb(201, 203, 207)'
};

// create a configuration for the chart
var config = {
    type: 'line',
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August"],
        datasets: [{
            label: "Solid",
            fill: false,
            backgroundColor: window.chartColors.blue,
            borderColor: window.chartColors.blue,
            // sharp edges at the data points
            lineTension: 0.1,
            data: [50, 10, 5, 17, 20, 30, 45],
        }, {
            label: 'Dashed',
            fill: false,
            backgroundColor: window.chartColors.purple,
            borderColor: window.chartColors.purple,
            borderDash: [5, 5],
            data: [21, 17, 25, 0, 0, 4, 31, 117],
        }]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Chart.js Line Chart'
        },
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Month'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Value'
                },
                ticks:{
                    beginAtZero: true
                }
            }]
        }
    }
};

// generate the chart on the canves
window.onload = function() {
    var ctx = document.getElementById('linechartPlaceholder').getContext('2d');
    window.myLine = new Chart(ctx, config);
};