
var app = angular.module('myDemo', [
		'ngResource', 'ngRoute','plangular'
	]);

app.
	config(['$routeProvider', '$locationProvider',
		function ($routeProvider, $locationProvider,) {
			$routeProvider
				.when('/', {
					templateUrl: '/templates/home.html',
				})
				.when('/blog/:slug', {
					templateUrl: '/templates/post.html',
					controller: 'BlogController'
				})
				.when('/blog', {
					templateUrl: '/templates/featured.html',
					controller: 'FeaturedController'
				})
				.when('/player', {
					templateUrl: '/templates/player.html',
					controller: 'PlayerController'
				});
				.when('/search', {
					templateUrl: '/templates/search.html',
					controller: 'SearchController'
				});

			$locationProvider.html5Mode({
				enabled: true,
				requireBase: false
			});
			$locationProvider.hashPrefix('!');
		}]);