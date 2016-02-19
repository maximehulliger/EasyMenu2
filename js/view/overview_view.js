var OverviewView = function (container, model) {
	
	var selectionTable = container.find("#menuResumeTable");
	var costTotal = container.find("#costResumeTotal");
	var preparationButton = container.find("#preparationButton");
	
	preparationButton.on('click', function() {
		container = $('#root');
		container.load('view/instruction_view.html', function() {
			InstructionView(container, model);
		})
	});
	
	$('#goBackButton').on('click', function() {
		container.load("view/dual_view.html", function() {
		var leftCon = $('#leftContent');
		var rightCon = $('#rightContent');
		leftCon.load("view/cost_view.html", function() {CostViewController(leftCon,model);});
		rightCon.load("view/dish_selection_view.html", function() {DishSelectionView(rightCon,model);DishSelectionViewController(rightCon,model);});
		});
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