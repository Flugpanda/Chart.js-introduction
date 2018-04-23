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

// get some helper method from Chart.js
var color = Chart.helpers.color;

// create a configuration for the chart
var config = {
    type: 'bar',
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August"],
        datasets: [{
            label: "Dataset 1",
            // set the color to be half transparaent
            backgroundColor: color(window.chartColors.blue).alpha(0.5).rgbString(),
            borderColor: window.chartColors.blue,
            borderWidth: 2,
            data: [60, 10, 5, 0, 20, 30, 45],
        }
    ]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Chart.js Bar Chart'
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
    var ctx = document.getElementById('barchartPlaceholder').getContext('2d');
    window.myLine = new Chart(ctx, config);
};