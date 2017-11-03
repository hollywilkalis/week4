var numberToppings;

function Pizza(topping, size) {
  this.toppings = toppings;
  this.size = size;
  this.price;
  this.setPizzaPrice();
}

Pizza.prototype.yourPizzaOrder = function(){
}

Pizza.prototype.setPizzaPrice = function() {
  var pizzaCost = 10 * value from size
  var toppingsCost = number of toppings selected * 2
return pizzaCost + toppingsCost


}


//Interface Logic goes here
$(document).ready(function() {
  $("#button").click(function(event) {
    event.preventDefault();
    debugger;
    var numberToppings = $('input[type="checkbox"]:checked').length;


  }); //submit event
});//document ready
