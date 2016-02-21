$(function() {

	var model = new DinnerModel();
	var root = $('#root');
	
	gotoHome = function() {
		root.load("view/home_view.html", function() {HomeViewController(root,model)});
	}
	
	gotoSelection = function() {
		model.dropSelectedDish();
		
		root.load("view/dual_view.html", function() {
		var leftCon = $('#leftContent');
		var rightCon = $('#rightContent');
		leftCon.load("view/cost_view.html", function() {
				CostViewController(leftCon,model);
				new CostView(leftCon,model)
			});
		rightCon.load("view/dish_selection_view.html", function() {
				var view = new DishSelectionView(rightCon,model);
				DishSelectionViewController(view,model);
			});
		});
	}
	
	gotoDetail = function(mealId) {
		model.setSelectedDish(mealId);
		var container = $('#rightContent');
		container.load('view/dish_confirm_view.html', function() {
			dishConfirmView(container, model);
			dishConfirmViewController(container, model);
		});
	};
	
	gotoOverview = function() {
		root.load('view/overview_view.html', function() {
			OverviewView(root, model);
			OverviewViewController(root,model);
		});
	}
	
	gotoInstruction = function() {
		root.load('view/instruction_view.html', function() {
			InstructionView(root, model);
			InstructionViewController(root, model);
		})
	}
	
	gotoHome(); //gotoHome
});