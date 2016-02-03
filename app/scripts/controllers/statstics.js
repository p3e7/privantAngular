/**
 * Created by bleile on 28.01.2016.
 */

'use strict';


angular.module('privantAngularApp')

  //Controller for user statistics
  .controller('UserStatCtrl', function ($scope, UserStat) {

    //Get number of currently online users
    UserStat.getNumberOfUsers().then(function(onlineUsers){
      $scope.online = onlineUsers;
    });

    //Number of months selected in select form (default 4)
    $scope.monthSelected = "4";

    //Current month and date
    var date = new Date();
    $scope.currentMonth = date.getMonth();
    $scope.currentYear = date.getFullYear();

    //Google chart object
    $scope.chartObject = {};

    //Chart of type Area
    $scope.chartObject.type = "AreaChart";

    //Row skeleton
    $scope.initRowSkeleton = function() {
      return rowSkeleton();
    };

    $scope.rows = $scope.initRowSkeleton();

    //Month array for chart
    $scope.initChartMonths = function() {
      return getChartMonths();
    };

    $scope.monthArray = $scope.initChartMonths();

    //Fill data in row skeleton
    getRegUsers();

    //Fill google chart with data
    $scope.chartObject.data = {"cols": [
      {id: "m", label: "Monat", type: "string"},
      {id: "r", label: "Nutzerregistrierungen", type: "number"},
      {id: "a", label: "Aktive Nutzer", type: "number"}
    ], "rows": $scope.rows};

    $scope.chartObject.options = {
      'title': 'Nutzung der letzten Monate',
      'hAxis': {
        'viewWindowMode': 'maximized'
      }
    };


    //Update online users
    $scope.updateOnline = function() {

      var online = UserStat.getNumberOfUsers().then(function(onlineUsers){
        return onlineUsers;
      });

      return online;

    };

    //Update user statistic when number of months has changed
    $scope.updateStatistics = function() {

      //Row skeleton
      $scope.rows = $scope.initRowSkeleton();

      //Montharray
      $scope.monthArray = $scope.initChartMonths();

      //Fill data in row skeleton
      getRegUsers();

      //Fill google chart with data
      $scope.chartObject.data = {"cols": [
        {id: "m", label: "Monat", type: "string"},
        {id: "r", label: "Nutzerregistrierungen", type: "number"},
        {id: "a", label: "Aktive Nutzer", type: "number"}
      ], "rows": $scope.rows};

    };


    //Fill array with last months and corresponding years (depending on number of months chosen in select form)
    function monthYearArray() {

      var numberMonths = parseInt($scope.monthSelected, 10);
      var monthYearArray = [];
      var currentMonth = $scope.currentMonth + 1;
      var currentYear = $scope.currentYear;


      for(numberMonths; numberMonths > 0; numberMonths--) {

        if(currentMonth < 10) {
          monthYearArray.splice(0,0, "0" + currentMonth + "." + currentYear);
        } else {
          monthYearArray.splice(0,0, currentMonth + "." + currentYear);
        }

        currentMonth--;
        if(currentMonth < 1) {
          currentMonth = 12;
          currentYear--;
        }

      }

      return monthYearArray;
    }

    //Define raw row data skeleton
    function rowSkeleton() {
      var numberMonths = parseInt($scope.monthSelected, 10);
      var rows = [];

      for(numberMonths; numberMonths > 0; numberMonths--) {

        rows.push({"c": [{"v": ""}, {"v": 0}, {"v": 0}]});

      }

      return rows;
    }

    //Specify month names for chart
    function getChartMonths() {

      var numberMonths = parseInt($scope.monthSelected, 10);
      numberMonths--;

      //months identifier for chart
      var monthNames = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
      var currentMonth = $scope.currentMonth;

      var monthArray = [];

      //Filling chart row with months
      for (numberMonths; numberMonths >=0; numberMonths--){

        monthArray.splice(0,0, monthNames[currentMonth]);

        currentMonth--;
        if(currentMonth < 0){
          currentMonth = 11;
        }
      }
      return monthArray;
    }


    //Get registered user statistics
    function getRegUsers() {

      UserStat.getRegisteredUsers(monthYearArray()).then(function(regUsers){
        $scope.regUsers = regUsers;
        getActiveUsers();
      });
    }

    //Get active user statistics
    function getActiveUsers() {

      UserStat.getActiveUsers(monthYearArray()).then(function(activeUsers){
        $scope.activeUsers = activeUsers;
        finalFilling();
       });
    }

    function finalFilling() {

      var numberMonths = parseInt($scope.monthSelected, 10);

      for(var i = 0; i < numberMonths; i++) {

        //Enter month name in google chart and reduce month for next row
        $scope.rows[i].c[0].v = $scope.monthArray[i];
        $scope.rows[i].c[1].v = $scope.regUsers[i];
        $scope.rows[i].c[2].v = $scope.activeUsers[i];

      }
    }


  });

