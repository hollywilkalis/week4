//business logic goes here
function Pizza(size, numberToppings, toppingsCost) {
  this.numberToppings = numberToppings;
  this.size = size;
  this.toppingsCost = toppingsCost;
  this.price;
  this.setPizzaPrice();
}

Pizza.prototype.setPizzaPrice = function() {
  if (this.size === "SMALL") {
    return this.price = 10 + this.toppingsCost;
  } else if (this.size === "MEDIUM") {
    return this.price = 15 + this.toppingsCost;
  } else if (this.size === "LARGE") {
    return this.price = 20 + this.toppingsCost;
  } else if (this.size === "GIGANTIC") {
    return this.price = 30 + this.toppingsCost;
  };
}

Pizza.prototype.yourPizzaOrder = function() {
  return "You ordered a " + this.size + " pizza with " + this.numberToppings + " toppings and the cost will be $" + this.price + ".00";
}

//Interface Logic goes here
$(document).ready(function() {
  $("#button").click(function(event) {
    event.preventDefault();
    var size = $("select#size").val();
    var numberToppings = ($("input:checkbox:checked").length);
    var toppingsCost = numberToppings * 2;
    var pizzaOrder = new Pizza(size, numberToppings, toppingsCost);
    $("#orderConfirmation").show();
    $("#yourOrder").text(pizzaOrder.yourPizzaOrder());
    $("#pizza-builder")[0].reset();
  }); //submit event
});//document ready
