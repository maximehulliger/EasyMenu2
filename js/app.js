$(function() {

	var model = new DinnerModel();
	
	this.init = function() {
		//And create the needed controllers and views
		var homeViewController = new HomeViewController($("#root"),model);
	}
	
	$("#root").load("view/home_view.html",this.init); //home_view
});