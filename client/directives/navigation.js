'use strict';
app.directive('isActiveNav', function($location){
  /*return {
    restrict: 'A',
    link: function(scope, element){
      scope.location = $location;
      scope.$watch('location.path()', function(currentPath){
        if('/#' + currentPath === element[0].attributes['href'].nodeValue){
          element.parent().addClass('active');
          element.parent('li').addClass('active');
        }else {
          element.parent().removeClass('active');
          element.parent('li').removeClass('active');
        }
      });
    }
  };*/

  /*return function(scope, element, attrs) {
		var links = element.find('a'),
			currentLink,
			urlMap = {},
			activeClass = attrs.navMenu || 'active';

		for (var i = links.length - 1; i >= 0; i--) {
			var link = angular.element(links[i]);
			var url = link.attr('href');

			if (url.substring(0,1) === '#') {
				urlMap[url.substring(1)] = link;
			} else {
				urlMap[url] = link;
			}
		}

		scope.$on('$routeChangeStart', function() {
			var path = urlMap[$location.path()];

			links.parent('li').removeClass(activeClass);

			if (path) {
				path.parent('li').addClass(activeClass);
			}
		});
	};*/
  return {
              restrict: 'A',
              scope: false,
              link: function (scope, element) {
                  function setActive() {
                      var path = $location.path();
                      if (path) {
                          angular.forEach(element.find('li'), function (li) {
                              var anchor = li.querySelector('a');
                              if (anchor.href.match('#' + path + '(?=\\?|$)')) {
                                  angular.element(li).addClass('active');
                              } else {
                                  angular.element(li).removeClass('active');
                              }
                          });
                      }
                  }

                  setActive();

                  scope.$on('$locationChangeSuccess', setActive);
              }
          };
});
