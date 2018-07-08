$.getJSON("data.json", function(data) {
    //var labels = data.chartD[0].amounts.map(function(e) {
    var labels = data.map(function(e) {
       return e.label;
    });
   // var data = data.chartD[0].amounts.map(function(e) {
    var data = data.map(function(e) {
       return e.val;
    });
 

    var ctx = document.getElementById('chart').getContext('2d');
    var chart = new Chart(ctx, {
       type: 'pie',
       data: {
          labels: labels,
          datasets: [{
             backgroundColor: ["#2196F3","#D50000","#EEFF41", "#00E676", "#795548","#651FFF","#FF4081","#546E7A","#FFFF00"],
             borderColor: '#212121',
             data: data
          }]
       },

    
       options: {
          responsive: 'true',
       }
    });


    chart.update();

    window.addtoChart = function()  {

        chart.config.data.labels.push(document.getElementById('title').value);
        chart.config.data.datasets[0].data.push(Number(document.getElementById('value').value));
        chart.update();


      }

    window.removefromChart = function(){

        chart.config.data.labels.pop(document.getElementById('title').value);
        chart.config.data.datasets[0].data.pop(Number(document.getElementById('value').value));
        chart.update();


    }

 });
 


  