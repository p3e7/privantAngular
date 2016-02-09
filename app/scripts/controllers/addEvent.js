'use strict';

/**
 * @ngdoc function
 * @name privantAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the privantAngularApp
 */
angular.module('privantAngularApp')
  .controller('addEventCtrl',['$scope', '$location', 'dataService', function ($scope, $location, dataService) {
    $scope.pAEvents = dataService.pAEvents;
    console.error("1");

    // Speichern eines neuen Events.
    $scope.save = function (event) {
      var id = -1;
      console.error("2");

      // Die höchste ID ermiteln, um eine neue ID vergeben zu können.
      angular.forEach($scope.pAEvents.items, function (event) {
        if (event.id > id) {
          id = event.id;
        }
      });

      // Das neue Event speichern.
      $scope.pAEvents.items.push({
        id: id + 1,
        name: event.name,
        description: event.description,
        descriptionLong: event.descriptionLong,
        date:event.date,
        location:event.location,
        picture: "http://placehold.it/200x200/239788/ffffff",
      });

      $location.path("/events");
    };


  }]);
