var OverviewView = function (container, model) {
	var selectionRow = $("#menuResumeRow");
	var costTotal = container.find("#costResumeTotal");
	
	while(selectionRow.children().length > 1)
		selectionRow.children().first().remove();
	
	model.menu.forEach( function(dish){
		selectionRow.prepend($('<td>')
					.attr('align', 'center')
					.append($('<h2>')
						.text(dish.name)
					).append($('<img>')
						.attr('src', 'images/'+dish.image)
					).append($('<br>')
					).append($('<p>')
						.text(dish.price)
					)
				);
	});
	
	costTotal.text(model.getTotalMenuPrice()+' '+model.currency);
};