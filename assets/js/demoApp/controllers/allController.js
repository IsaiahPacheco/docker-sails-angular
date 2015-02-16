app.
	controller('BlogController', ['$scope', '$routeParams', 'Post', '_C',
		function ($scope, $routeParams, Post, _C) {

			Post.query({slug: $routeParams.slug}, function(page) {
				$scope.mainContent = page[0];
				console.log($scope.mainContent);
			});

		}]);

app.
	controller('FeaturedController', ['$scope', 'Post',
		function ($scope, Post) {

			Post.query({featured: true, limit: 5}, function(featured) {
				$scope.featuredPosts = featured;
			});

		}]);

app.
	controller('SearchController', ['$scope', 'SearchList',
		function ($scope, SearchList) {
			$scope.myList = SearchList.get();
		}]);

app.
	controller('PaneController', ['$scope', '$location', '_C',
		function ($scope, $location, _C) {
			$scope.class = ($location.path() === _C.homePath ? 'pane-up' : 'pane-down');

			$scope.toggleShowMenu = function() {
				$scope.class =  ($scope.class == 'pane-up' ? 'pane-down' : 'pane-up');
			}
		}]);