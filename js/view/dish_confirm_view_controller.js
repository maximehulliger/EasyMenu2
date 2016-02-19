var dishConfirmViewController = function (container, model) {
	
	this.loadSelectionView = function() {
		container.load("view/dual_view.html", function() {
		var leftCon = $('#leftContent');
		var rightCon = $('#rightContent');
		leftCon.load("view/cost_view.html", function() {CostViewController(leftCon,model);});
		rightCon.load("view/dish_selection_view.html", function() {DishSelectionView(rightCon,model);DishSelectionViewController(rightCon,model);});
		});
	}
	
	$('#homeButton').on('click', this.loadSelectionView);
}