var factorial = function(number){
  var val = 1;
  for(var i = number ; i>0; i--){
    val = val * i ;
  }
  return val;
};


$(document).ready(function(){
  $("button").click(function(event){
    event.preventDefault();
    var input = parseInt($("#number").val());
    $("#output").text(factorial(input));
  
  });
});
