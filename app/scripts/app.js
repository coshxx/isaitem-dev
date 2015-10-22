'use strict';

/**
 * @ngdoc overview
 * @name isaitemApp
 * @description
 * # isaitemApp
 *
 * Main module of the application.
 */
angular
    .module('isaitemApp', [
        'ngRoute',
        'ngAnimate',
        'ngOrderObjectBy'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'about'
            })
            .when('/contact', {
                templateUrl: 'views/contact.html',
            })
            .when('/itemgrid', {
              templateUrl: 'views/itemgrid.html',
              controller: 'ItemgridCtrl',
              controllerAs: 'itemgrid'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
