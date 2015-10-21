'use strict';

/**
 * @ngdoc function
 * @name isaitemApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the isaitemApp
 */
angular.module('isaitemApp')
    .controller('MainCtrl', function ($scope, $http) {
        $http.get('./resources/itemdb.json').success(function (data) {
            $scope.isaacItems = data;
        });
    });
