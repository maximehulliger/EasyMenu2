var CostViewController = function (container, model) {
	
	var guestCountInput = container.find("#guestCountInput");
	
	$('#guestCountInput').on('input', function() { 
		var n = $(this).val();
		model.setNumberOfGuests(n);
	});
	$('#confirmDinnerButton').on('click', function() { 
		gotoOverview();
	});
}