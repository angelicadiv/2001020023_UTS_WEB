$(document).ready(function(){
  $.ajax({
    url: "API/stats.json",
    method: "GET",
    success: function (result) {
      var infected = result.numbers.infected
      var recovered = result.numbers.recovered
      var fatal = result.numbers.fatal 

      var formatter = new Intl.NumberFormat('id-ID');
      var infected1 = formatter.format(infected);
      var recovered1 = formatter.format(recovered);
      var fatal1 = formatter.format(fatal);

      $("#infected").append("<h1>"+infected1+"</h1>");
      $("#recovered").append("<h1>"+recovered1+"</h1>");
      $("#fatal").append("<h1>"+fatal1+"</h1>");
    },
  });
})