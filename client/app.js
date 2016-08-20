'use strict';
var app = angular.module('eapp', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider.when('/', {
      title: 'Home',
      templateUrl: '/views/home/index.html',
      controller: 'homeCtrl'
    }).when('/categories', {
      title: 'Category',
      templateUrl: '/views/category/categories.html',
      controller: 'categoryCtrl'
    }).when('/category.form', {
      title: 'New Category',
      templateUrl: '/views/category/form.html',
      controller: 'categoryCtrl'
    }).when('/products', {
      title: 'Products',
      templateUrl: '/views/product/products.html',
      controller: 'productCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});

app.run(function($location, $rootScope){
  $rootScope.$on('$routeChangeSuccess',function(event, currentRoute, previous){
      $rootScope.title = currentRoute.$$route.title;
  });
});
