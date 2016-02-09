'use strict';

/**
 * @ngdoc function
 * @name privantAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the privantAngularApp
 */
angular.module('privantAngularApp')
  .controller('AboutCtrl', ['$scope', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
