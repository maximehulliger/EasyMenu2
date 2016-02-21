//ExampleView Object constructor
var CostView = function (container, model) {

	var costTable = container.find("#costResumeTable");
	var costTotal = container.find("#costResumeTotal");
	
	function totalCost(dish) {
		if (dish === undefined)
			return 0;
		else
			return model.getNumberOfGuests()
				*dish.ingredients.map(function(i){return i.price;}).reduce(function(a, b){return a+b;});
	}
	
	function costRow(name, cost) {
		return "<tr><td>"+name+"</td><td align='right'>"+cost.toFixed(2)+"</td></tr>";
	}

	this.update = function(arg) {
		n = model.getNumberOfGuests();
		
		while (costTable.children().children().length > 1) {
			costTable.find('tbody').children().last().remove();
		}
		
		model.getFullMenu().forEach( function(dish) {
			costTable.append( costRow(dish.name, totalCost(dish)) );
		})
		costTable.append( costRow("Pending", totalCost(model.getSelectedDish())) );
		
		pcost = totalCost(model.getSelectedDish());
		costTotal.text(model.currency + " " + (model.getTotalMenuPrice()+pcost).toFixed(2) );
	}
	
	model.subscribe(this);
	$('#guestCountInput').val(model.getNumberOfGuests());
	this.update();
	
}
 
