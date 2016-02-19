var DishSelectionView = function (container, model) {
	
	var filterInput = container.find("#dishFilterInput");
	var typeInput = container.find("#typeSelectionInput");
	var selectionTable = container.find("#dishSelectionTable");
	
	function displayDishes(type, filter) {
		selectionTable.find('tbody').children().remove();
		
		var dishPerRow = 5;
		row = $('<tr>');
		selectionTable.find('tbody').append(row);
		model.menu.forEach( function(dish){
		
			
				
			row.append($('<td>')
						.attr('align', 'center')
						.append('<h2>')
							.text(dish.name)
						).append($('<img>')
							.attr('src', 'images/'+dish.image)
						.append('<br>')
							.text(dish.price)
						)
		}
		row.append($('<td>')
			.attr('align', 'left')
			attr('<totalcost>')
			)
		.append($(('<tr>'))
			.append($('<hr>')
			.attr('align', 'center')
			.append($('<button>')
				attr('align', 'center')
				css('width','40%')
				.text('Print Full Recipe')
					)
					)	
		)
		
		
						