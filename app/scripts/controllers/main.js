'use strict';

/**
 * @ngdoc function
 * @name privantAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the privantAngularApp
 */
angular.module('privantAngularApp')
  .controller('MainCtrl',['$scope', '$location', function ($scope, $location) {

    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    };

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
