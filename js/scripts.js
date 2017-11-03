//business logic goes here
var numberToppings;
var toppingQuantity;
var size;
var toppingsCost;
var toppingsList = [];

function Pizza(size, numberToppings) {
  this.numberToppings = numberToppings;
  this.size = size;
  this.toppingsCost = toppingsCost;
  this.price;
  this.setPizzaPrice();
}

Pizza.prototype.yourPizzaOrder = function() {
  var numberToppings = ($("input:checkbox:checked").length);
  return "You ordered a " + this.size + " pizza with " + numberToppings + " toppings and the cost will be $" + this.price + ".00";
}

Pizza.prototype.setPizzaPrice = function() {
  var numberToppings = ($("input:checkbox:checked").length);
  if (this.size === "SMALL") {
    return this.price = 10 + (numberToppings * 2);
  } else if (this.size === "MEDIUM") {
    return this.price = 15 + (numberToppings * 2);
  } else if (this.size === "LARGE") {
    return this.price = 20 + (numberToppings * 2);
  } else if (this.size === "GIGANTIC") {
    return this.price = 30 + (numberToppings * 2);
  };
}

//Interface Logic goes here
$(document).ready(function() {
  $("#button").click(function(event) {
    event.preventDefault();
    var size = $("select#size").val();
    var pizzaOrder = new Pizza(size, numberToppings);
    $("#orderConfirmation").show();
    $("#yourOrder").text(pizzaOrder.yourPizzaOrder());
    $("#pizza-builder")[0].reset();
  }); //submit event
});//document ready
