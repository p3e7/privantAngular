/**
 * Created by bleile on 01.02.2016.
 */
describe("User statistics Unit Test: ", function(){
  beforeEach(module('privantAngularApp'));

  var $controller, $scope;

  beforeEach(inject(function($rootScope, _$controller_){
    $scope = $rootScope.$new();
    $controller = _$controller_;

    createController = function() {
      return $controller('UserStatCtrl', {$scope: $scope});
    }
  }));

  describe("Testing getChartMonths function", function() {

    it('Writes month names of last four months in array beginning in May (without changing years)', function(){
      var controller = new createController();

      $scope.currentMonth = 4; //May
      $scope.monthSelected = "4";

      expect($scope.initChartMonths()).toEqual(["Februar", "März", "April", "Mai"]);
    });

    it('Writes month names of last four months in array beginning in February (with changing years', function(){
      var controller = new createController();

      $scope.currentMonth = 1; //February
      $scope.monthSelected = "4";

      expect($scope.initChartMonths()).toEqual(["November", "Dezember", "Januar", "Februar"]);
    });

  });

  describe("Testing rowSkeleton function", function(){

    it('Length of row skeleton should be as long as the number of months selected (here: 6)', function () {
      var controller = new createController();

      $scope.monthSelected = "6";

      expect($scope.initRowSkeleton().length).toEqual(6);
    });

  });

});
