var dishConfirmViewController = function (view, model) {
	
	$('#goBackButton').on('click', function() {
		model.dropSelectedDish();
		gotoSelection();
	});
	
	$('#confirmDishButton').on('click', function() {
		model.addSelectedDish();
		gotoSelection();
	});
	
}