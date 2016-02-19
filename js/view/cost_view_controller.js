var CostViewController = function (container, model) {
	
	var guestCountInput = container.find("#guestCountInput");
	var costTable = container.find("#costResumeTable");
	var costTotal = container.find("#costResumeTotal");
	
	this.that = this;
	
	function totalCost(dish) {
		return model.getNumberOfGuests()
				*dish.ingredients.map(function(i){return i.price;}).reduce(function(a, b){return a+b;});
	}
	
	function costRowPending(dish) {
		if (dish === undefined)
			return costRow("Pending", 0);
		else {
			return costRow("Pending", totalCost(dish));
		}
	}
	function costRowDish(dish) {
		return costRow(dish.name, totalCost(dish));
	}
	function costRow(name, cost) {
		return "<tr><td>"+name+"</td><td align='right'>"+cost.toFixed(2)+"</td></tr>";
	}
	
	// set the guest count in the view
	function setGuestCount(n) {
			
		while (costTable.children().children().length > 1) {
			costTable.find('tbody').children().last().remove();
		}
		
		model.getFullMenu().forEach( function(dish) {
			costTable.append( costRowDish(dish) );
		})
		costTable.append( costRowPending(model.getSelectedDish()) );
		
		pcost = totalCost(model.getSelectedDish());
		costTotal.text(model.currency + " " + (model.getTotalMenuPrice()+pcost).toFixed(2) );
	}
	
	$('#guestCountInput').on('input', function() { 
		var n = $(this).val();
		model.setNumberOfGuests(n);
		setGuestCount(n);
	});
}