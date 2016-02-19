var DishSelectionView = function (container, model) {
	
	dishSelectionTable
	var filterInput = container.find("#dishFilterInput");
	//var selectionButton = container.find("#dishSelectionButton");
	var typeInput = container.find("#typeSelectionInput");
	var selectionTable = container.find("#dishSelectionTable");
	
	
	this.that = this;
	
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
	
	function formatCell4Dish(cell, dish) {
		
	}
	
	// set the guest count in the view
	function displayDishes(type, filter) {
		selectionTable.children().children().remove();
		
		
		
		var dishPerRow = 5;
		
		
		model.getAllDishes(type, filter).each( function(index, dish) {
			if (index % dishPerRow == 0) {
				row = $('<tr>');
				selectionTable.find('tbody').append(row);
			}
				
			row.append($('<td>')
						.append($('<img>')
							.attr('src', 'images/'+dish.image)
							.text(dish.name);
						)
					)
		});
	}
	
	var updateChoice = function() {
		displayDishes(typeInput.val(), filterInput.val());
	}
	filterInput.on('input', updateChoice);
	typeInput.on('change', updateChoice);
}