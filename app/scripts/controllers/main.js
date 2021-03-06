'use strict';

/**
 * @ngdoc function
 * @name privantAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the privantAngularApp
 */
angular.module('privantAngularApp')
  .controller('MainCtrl',['$scope', '$location', '$http', function ($scope, $location, $http) {
    
    // delivers a token
    this.fakeLogin = function(){
        if($http.defaults.headers.common["token"] === undefined){
            $http.post('http://localhost:10000/user/login', {name : "HansWurst", pw : "irgendwas"}).success(function(res){
            //$http.post('http://localhost:10000/user/login', {name : "user1", pw : "pa$$w0rd"}).success(function(res){
            //$http.post('http://localhost:10000/user/login', {name : "user2", pw : "1234"}).success(function(res){
                console.log(res);
                $http.defaults.headers.common["token"] = res;
            });
        }
    }
    
    this.fakeLogin();
      
      
    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    };

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
