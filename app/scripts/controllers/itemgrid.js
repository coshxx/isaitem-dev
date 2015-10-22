'use strict';

/**
 * @ngdoc function
 * @name isaitemApp.controller:ItemgridCtrl
 * @description
 * # ItemgridCtrl
 * Controller of the isaitemApp
 */
angular.module('isaitemApp')
    .controller('ItemgridCtrl', function ($scope, $http) {
        $http.get('./resources/itemdb.json').success(function (data) {
            $scope.isaacItems = data;
        });
    });
