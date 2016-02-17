var CostViewController = function (container, model) {
	
	var guestCountInput = container.find("#guestCountInput");
	var costTable = container.find("#costResumeTable");
	var costTotal = container.find("#costResumeTotal");
	
	this.that = this;
	
	function costRowPending(dish) {
		if (dish === undefined)
			return "";
		else {
			alert(dish);
			var cost = dish.ingredients.map(function(i){return i.price;}.reduce(function(a, b){return a+b;}));
			return costRow("pending", cost);
		}
	}
	function costRowDish(dish) {
		var cost = dish.ingredients.map(function(i){return i.price;}.reduce(function(a, b){return a+b;}));
		return costRow(dish.name, cost);
	}
	function costRow(name, cost) {
		return "<tr><td>"+name+"</td><td align='right'>"+menu.currency+" "+cost+"</td></tr>";
	}
	
	// set the guest count in the view
	function setGuestCount(n) {
		while (costTable.children().length > 1) {
			costTable.children()[0].remove();  					TODO TODO
			//costTable.removeChild();
		}
		model.getFullMenu().forEach( function(dish) {
			costTable.append( costRowDish(dish) );
		})
		//costTable.append( costRowPending(model.getSelectedDish()) );
		
		costTotal.html(model.currency + " " + model.getTotalMenuPrice() );
	}
	
	$('#guestCountInput').on('input', function() { 
		var n = $(this).val();
		model.setNumberOfGuests(n);
		setGuestCount(n);
	});
}