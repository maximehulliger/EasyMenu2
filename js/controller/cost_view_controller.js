var CostViewController = function (container, model) {
	
	$('#guestCountInput').on('input', function() { 
		var n = $(this).val();
		model.setNumberOfGuests(n);
	});
	
	$('#confirmDinnerButton').on('click', function() { 
		gotoOverview();
	});
}