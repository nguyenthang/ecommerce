'use strict';
var app = angular.module('eapp', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider.when('/', {
      title: 'Home',
      templateUrl: '/views/home/index.html',
      controller: 'homeCtrl'
    }).when('/category', {
      title: 'Category',
      templateUrl: '/views/category/categories.html',
      controller: 'categoryCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});

app.run(function($location, $rootScope){
  $rootScope.$on('$routeChangeSuccess',function(event, current, previous){
    $rootScope.title = current.$$route.title;
  });
});
