var app = angular.module('eapp', []);

app.config('$routeProvider', function($routeProvider){
    $routeProvider.when('/', {
      templateUrl: '/views/home/index.html',
      controller: 'productCtrl'
    }).otherwise({
      redirectTo: '/'
    });
});

app.controller('showTextCtrl', function($scope){
  $scope.text = 'Hello World';
});
