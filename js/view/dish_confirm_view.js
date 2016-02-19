var dishConfirmView = function (container, model) {
	
	var dishName = $('#dishName');
	var preparationText = $('#mealPrep');
	var image = $('#imgId');
	
	var listTitle = $('#listTitle');
	var ingrTable = $('#ingredientTable');
	var confirmDishButton = $('#confirmDishButton');
	var goBackButton = $('#goBackButton');
	var total = $('#pendingIngrTotal');
	
	var goBack = function() {
		var rightCon = $('#rightContent');
		rightCon.load("view/dish_selection_view.html", function() {DishSelectionView(rightCon,model);DishSelectionViewController(rightCon,model);});
		model.dropSelectedDish();
	};
	
	var dish = model.getSelectedDish();
	dishName.text(dish.name);
	preparationText.text(dish.description);
	image.attr('src', 'images/'+dish.image);
	goBackButton.on('click', goBack);
	
	function update() {
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
	
	confirmDishButton.on('click', function() {
		model.addSelectedDish();
		goBack();
	});
	
	update();
}