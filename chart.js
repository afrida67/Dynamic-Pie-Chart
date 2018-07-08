var c = document.getElementById("chart");
var data = {

    labels: [ 'Red', 'Yellow','Blue'],
    datasets: [{
    	data: [40, 20, 30],
      backgroundColor: ["#673AB7", "#C6FF00", "#F4511E","#00B0FF","#D50000","#69F0AE","#FF5722"],
      hoverBackgroundColor: []
    }]
};
console.log('labels '+data.labels);
console.log('values '+data.datasets[0].data);
console.log(data);

var options = {
		cutoutPercentage: 0,
    rotation: -0.5 * Math.PI,
    circumference: 2 * Math.PI
};
var opt = {
  type: "pie",
  data: data,
  options: options
};

var chart = new Chart(c,opt);
chart.update();

function addtoChart() {

    chart.config.data.labels.push(document.getElementById('title').value);
    chart.config.data.datasets[0].data.push(Number(document.getElementById('value').value));

  chart.update();

  }

  function removeChart() {
    var chart = new Chart(c,opt);

        chart.config.data.labels.pop(document.getElementById('title').value);
        chart.config.data.datasets[0].data.pop(Number(document.getElementById('value').value));
        chart.update();

        var placeholder = document.getElementById("demow").getAttribute("placeholder");
        console.log(placeholder);

      }
    
    /*static*/
/*
var chart = new Chart(c,opt);
chart.config.data.labels.push("A label");
chart.config.data.labels.push("A label2");
chart.config.data.labels.push("A label3");
chart.config.data.datasets[0].data.push(10);
chart.config.data.datasets[0].data.push(20);
chart.config.data.datasets[0].data.push(30);
chart.update();*/
