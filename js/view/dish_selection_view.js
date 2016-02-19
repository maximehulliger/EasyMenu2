var DishSelectionView = function (container, model) {
	
	var filterInput = container.find("#dishFilterInput");
	var typeInput = container.find("#typeSelectionInput");
	var selectionTable = container.find("#dishSelectionTable");
	
	gotoDetail = function(mealId) {
		model.setSelectedDish(mealId);
		container.load('view/dish_confirm_view.html', function() {
			dishConfirmView(container, model);
			dishConfirmViewController(container, model);
		});
		alert(mealId);
		
	};
	
	// set the guest count in the view
	function displayDishes(type, filter) {
		selectionTable.find('tbody').children().remove();
		
		var dishPerRow = 5;
		
		model.getAllDishes(type, filter).each( function(index, dish) {
			if (index % dishPerRow == 0) {
				row = $('<tr>');
				selectionTable.find('tbody').append(row);
			}
				
			row.append($('<td>')
						.attr('align', 'center')
						.append($('<button>')
							.attr('onclick', 'gotoDetail('+dish.id+')')
							.append($('<h2>')
								.text(dish.name)
							).append($('<img>')
								.attr('src', 'images/'+dish.image)
								.attr('title', dish.name)
								.text(dish.name)
							).append($('<br>')
							)
						)
					)
		});
	}
	
	var updateChoice = function() {
		displayDishes(typeInput.val(), filterInput.val());
	}
	filterInput.on('input', updateChoice);
	typeInput.on('change', updateChoice);
	updateChoice();
}