$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	var exampleView = new ExampleView($("#exampleView"));
	var controller = new Controller($("#exampleView"));
	
	//once index has finished loadings
	controller.loadlist();
});