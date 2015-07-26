(function() {

	angular.module('AppCarro', [ 'ngRoute', 'ngDialog', 'ngFileUpload',
			'CarroControllers' ]);

	angular.module('AppCarro').constant("APP_CONFIG", {
		"API_REST" : "http://localhost:8080/Carros/rest"
	});

	function Config($routeProvider) {
		$routeProvider.when('/', {
			controller : 'CarroListController',
			templateUrl : './pages/carros/list.html'
		}).otherwise({
			redirectTo : '/'
		});
	}

	angular.module('AppCarro').config(Config);
}());