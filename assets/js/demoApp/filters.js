// Thank You - Martin Angelov  http://j.mp/instant-search
app.
	filter('searchFor', function(){

	return function(arr, searchString){

		if (!searchString){
			return arr;
		}

		var result = [];
		searchString = searchString.toLowerCase();

		angular.forEach(arr, function(item){

			// *hotfix* *revisit* undefined to toLowerCase error
			if (item.title) {
				if (item.title.toLowerCase().indexOf(searchString) !== -1){
					result.push(item);
				}
			} else if (item.name) {
				if (item.name.toLowerCase().indexOf(searchString) !== -1){
					result.push(name);
				}
			}

		});

		return result;
	};

});