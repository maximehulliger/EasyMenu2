var HomeViewController = function (container, model) {
	
	this.loadSelectionView = function() {
		container.load("view/dual_view.html", function() {
		$('#leftContent').load("view/cost_view.html", function() {new CostViewController(container,model)});
		$('#rightContent').load("view/home_view.html");
		});
	}
	
	$('#homeButton').on('click', this.loadSelectionView);
}