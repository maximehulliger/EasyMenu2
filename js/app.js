$(function() {

	var model = new DinnerModel();
	
	this.init = function() {
		//And create the needed controllers and views
		var homeViewController = new HomeViewController($("#root"),model);
	}
	
	$("#root").load("view/overview_view.html",this.init); //overview_view
});