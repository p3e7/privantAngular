'use strict';

/**
 * @ngdoc function
 * @name privantAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the privantAngularApp
 */
angular.module('privantAngularApp')
  .controller('EventsCtrl',['$scope', 'dataService', function ($scope, dataService) {
    $scope.users = dataService.users;


  }]);
