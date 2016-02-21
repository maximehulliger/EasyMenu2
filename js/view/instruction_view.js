var InstructionView = function (container, model) {
	
	var intructionTable = container.find("#intructionTable").find('tbody');
	intructionTable.children().remove();
	
	model.menu.forEach( function(dish) {
		intructionTable.append($('<tr>')
			.append($('<td>')
				.attr('align', 'left')
				.attr('style', "width:30%")
				.append($('<h2>')
					.text(dish.name)
				).append($('<img>')
					.attr('src', 'images/'+dish.image)
				).append($('<br>')
				)
			).append($('<td>')
				.attr('align', 'left')
				.attr('style', "width:70%")
				.append($('<br>')
				).append($('<h4>')
					.text('Preparation')
				).append($('<p>')
					.text(dish.description)
				).append($('<br>')
				)
			)
		)
	});
	
	$('#goBackButton').on('click', function() {
		gotoOverview();
	});
}