app.
	factory('Post', ['$resource',
		function ($resource) {
			// How to get slug in site_url.com/post/post-slug
			// $resource('/post/:slug', {slug: '@slug'});

			Post = $resource('/post');

			return Post;
		}]);

app.
	factory('SearchList', ['$resource',
		function ($resource) {

                        Search = $resource('/search/list', {}, {get: {method:'GET', isArray: true}});

                        return Search;
		}]);