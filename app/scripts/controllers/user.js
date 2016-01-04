'use strict';

/**
 * Created by Hon on 04.01.2016.
 */

angular.module('privantAngularApp')
  .controller('UserCtrl', ['$scope', 'userList', function ($scope, userList){
      $scope.articles = userList.users;
    }]);

