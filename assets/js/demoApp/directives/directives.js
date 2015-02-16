/**
 * Sets anchor tag class to "active" when href attribute matches current $location.path()
 *
 *  HTML example use
 *  	<ul demo-nav-tabs>
 *  		<li><a href="/absolute/or/relative path"> Menu Item </a></li>
 *    </ul>
 */
app.
	directive('demoNavTabs', ['$location',
		function ($location) {
			return {
				restrict: 'A',
				link: function(scope, element, attrs) {
					var tabs = element.children(),
					tabMap = {};

					for(var i = 0; i < tabs.length; i ++) {
						var li = angular.element(tabs[i])
						tabMap[li.find("a").attr("href")] = li;
					};

					scope.$on('$locationChangeSuccess', function() {
						var activePath = tabMap[$location.path()];
						element.find("li").removeClass("active");

						if (activePath) {
							tabMap[$location.path()].addClass("active");
						}

					});
				}
			}
		}]);