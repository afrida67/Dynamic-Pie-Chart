$.getJSON("data.json", function(data) {
    //var labels = data.chartD[0].amounts.map(function(e) {
      var colors = data.map(function(e) {
        return e.color;
      });

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
             backgroundColor: colors,
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
  
      window.processData(c1) = function() {
        var cv1 = document.getElementById(c1).value;
        //  var cv2 = document.getElementById(c2).value;
         // console.log("color1 "+cv1);
       // alert(cv1);
      }

    window.removefromChart = function(){

        chart.config.data.labels.pop(document.getElementById('title').value);
        chart.config.data.datasets[0].data.pop(Number(document.getElementById('value').value));
        chart.update();

    }
    
 });
 


  