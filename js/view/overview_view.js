var OverviewView = function (container, model) {
	
	var selectionTable = container.find("#menuResumeTable");
	var costTotal = container.find("#costResumeTotal");
	
	$("#preparationButton").on('click', function() {
		gotoInstruction();
	});
	
	$('#goBackButton').on('click', function() {
		gotoSelection();
	});
	
	selectionTable.find('tbody').children().remove();
	
	row = $('<tr>');
	selectionTable.find('tbody').append(row);
	model.menu.forEach( function(dish){
		
		row.append($('<td>')
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
	row.append('<td align="left"><br><br><br><br><br><br><br><text>Total:</text><p>'+model.getTotalMenuPrice()
			+' SEK</p></td>');
	
	//costTotal.text(model.getTotalMenuPrice()+' '+model.currency);
};