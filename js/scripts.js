//business logic goes here
var numberToppings;
var toppingQuantity;
var size;
var toppingsCost;

function Pizza(size, numberToppings) {
  this.numberToppings = numberToppings;
  this.size = size;
  this.toppingsCost = toppingsCost;
  this.price;
  this.setPizzaPrice();
}

Pizza.prototype.yourPizzaOrder = function(){
  return "You ordered a " + this.size + " pizza and the cost will be $" + this.price;
}

Pizza.prototype.setPizzaPrice = function() {
  var numberToppings = ($("input:checkbox:checked").length);
  if (this.size === "small") {
    return this.price = 10 + (numberToppings * 2);
  } else if (this.size === "medium") {
    return this.price = 15 + (numberToppings * 2);
  } else if (this.size === "large") {
    return this.price = 20 + (numberToppings * 2);
  } else if (this.size === "gigantic") {
    return this.price = 30 + (numberToppings * 2);
  }
}

//Interface Logic goes here
$(document).ready(function() {
  $("#button").click(function(event) {
    event.preventDefault();

    var size = $("select#size").val();
    var pizzaOrder = new Pizza(size, numberToppings);
    $("#orderConfirmation").show();
    $("#yourOrder").text(pizzaOrder.yourPizzaOrder());

    $('#pizza-builder')[0].reset();

  }); //submit event
});//document ready
