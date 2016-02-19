var dishConfirmView = function (container, model) {
	
	this.loadSelectionView = function() {
		container.load("view/dual_view.html", function() {
		$('#leftContent').load("view/cost_view.html", function() {CostViewController(container,model);});
		$('#rightContent').load("view/dish_selection_view.html", function() {DishSelectionView(container,model);DishSelectionViewController(container,model);});
		});
	}
	
	$('#homeButton').on('click', this.loadSelectionView);
}