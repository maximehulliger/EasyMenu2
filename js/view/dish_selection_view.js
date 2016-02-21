var DishSelectionView = function (container, model) {
	
	var selectionTable = container.find("#dishSelectionTable");
	
	this.update = function() {
		var filter = $("#dishFilterInput").val();
		var type = $("#typeSelectionInput").val();
		
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
					).append($('<hr>')
					)
				)
			)
		});
	}
	
	this.update();
}