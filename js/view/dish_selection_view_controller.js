var DishSelectionViewController = function (container, model) {
	
	var guestCountInput = container.find("#guestCountInput");
	var costTable = container.find("#costResumeTable");
	var costTotal = container.find("#costResumeTotal");
	
	
	function costRowPending(dish) {
		if (dish === undefined)
			return costRow("Pending", 0);
		else {
			var cost = dish.ingredients.map(function(i){return i.price;}.reduce(function(a, b){return a+b;}));
			return costRow("Pending", cost);
		}
	}
	function costRowDish(dish) {
		var cost = dish.ingredients.map(function(i){return i.price;}.reduce(function(a, b){return a+b;}));
		return costRow(dish.name, cost);
	}
	function costRow(name, cost) {
		return "<tr><td>"+name+"</td><td align='right'>"+cost+"</td></tr>";
	}
	
	// set the guest count in the view
	function setGuestCount(n) {
			
		while (costTable.children().children().length > 1) {
			costTable.children().children().last().remove();
			//costTable.removeChild();
		}
		model.getFullMenu().forEach( function(dish) {
			costTable.append( costRowDish(dish) );
		})
		costTable.append( costRowPending(model.getSelectedDish()) );
		
		costTotal.html(model.currency + " " + model.getTotalMenuPrice() );
	}
	
}