'use strict';

//import{calcFreeSlots} from  '../functions/calcVisitors';

angular.module('privantAngularApp')
  .controller('EventsCtrl',['$scope','$routeParams','$location', 'dataService', function ($scope, $routeParams, $location, dataService) {
    $scope.pAEvents = dataService.pAEvents;

    $scope.asdf ="test";

    var index = 0;


    // Wird ein Angebot übergeben, muss genau das angezeigt werden.
    if ($routeParams.eventId !== 'undefined') {
      console.log($routeParams.eventId);

      index = $scope.pAEvents.items.map(function (e) {
        return e.id;
      }).indexOf(parseInt($routeParams.eventId));

      if(isNaN(parseInt($routeParams.eventId))){
        //$location.path("/#/events");
        console.log("NaN");
      }

      $scope.pAEvent = $scope.pAEvents.items[index];

    }

    //console.log(calcFreeSlots(pAEvent.limit,pAEvent.visitors));
  }]);



angular.module('privantAngularApp').directive('guests', function() {
  return {
    template: 'Verfügbar: {{pAEvent.limit}}'
  };
});
