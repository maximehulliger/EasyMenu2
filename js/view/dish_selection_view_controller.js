var DishSelectionViewController = function (view, model) {
	
	$("#dishFilterInput").on('input', view.update);
	$("#typeSelectionInput").on('change', view.update);
	
}