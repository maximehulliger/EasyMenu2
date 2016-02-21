var dishConfirmView = function (container, model) {
	
	var dishName = $('#dishName');
	var preparationText = $('#mealPrep');
	var image = $('#imgId');

	var listTitle = $('#listTitle');
	var ingrTable = $('#ingredientTable');
	var total = $('#pendingIngrTotal');
	
	var dish = model.getSelectedDish();
	
	function init() {
		dishName.text(dish.name);
		preparationText.text(dish.description);
		image.attr('src', 'images/'+dish.image);
		
		this.update();
	}
	
	this.update = function() {
		var n = model.getNumberOfGuests();
		
		listTitle.text('Ingredients for '+n+' people')
		
		var tbody = ingrTable.find('tbody');
		tbody.children().remove();
		var totPrice = 0;
		dish.ingredients.forEach( function(ingr) {
			var price = ingr.price*n;
			totPrice += price;
			tbody.append( "<tr><td>"
						+ingr.quantity*n+" "
						+ingr.unit+"</td><td>"
						+ingr.name+"</td><td align='right'>"
						+model.currency+"</td><td align='right'>"
						+price.toFixed(2)+"</td></tr>" );
		});
		total.text(model.currency+" "+totPrice.toFixed(2));
	}
	
	model.subscribe(this);
	init();
}