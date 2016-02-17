$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	var exampleView = new ExampleView($("#root"));
	var controller = new Controller($("#root"));
	
	//once index has finished loadings
	controller.loadlist();
	
	$("#root").load("view/home_view.html");
});