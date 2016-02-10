/**
 * Created by bleile on 28.01.2016.
 */
'use strict';


angular.module('privantAngularApp')

  //User statistics service
  .factory('UserStat', function ($http) {


    return {

      //Get the number of online users
      getNumberOfUsers: function() {

        var users = [];

        //Get mocked data from json file
        return $http.get('mocked_data/users.json').then(function (usersResponse) {
          users = usersResponse.data;

          var number = 0;

          //Iterate through users and increase number of online users if online it set to true
          for (var i = 0; i < users.length; i++) {
            var user = users[i];
            if (user.online === "true") {
              number++;
            }
          }
          return number;
        });

      },

      //Get the number of registered users
      getRegisteredUsers: function(monthYearArray) {

        var monthYear = monthYearArray;
        var statistics = [];

        //Get data from db
        return $http.get('http://localhost:10000/statistics').then(function (statisticData) {

          statistics = statisticData.data;

          var regUsers = [];

          //Iterate through months to get the number of registered users
          for(var i = 0; i < monthYear.length; i++){

            var number = null;

            //Iterate through statistics and set number of registered users if month matches
            for(var k = 0; k < statistics.length; k++) {
              if(monthYear[i] === statistics[k].monthyear) {
                number = statistics[k].regUsers;
                regUsers.push(number);
               }
            }
          }
          return regUsers;
        });
      },

      //Get the number of active users
      getActiveUsers: function(monthYearArray) {

        var monthYear = monthYearArray;
        var statistics = [];

        //Get data from db
        return $http.get('http://localhost:10000/statistics').then(function (statisticData) {
          statistics = statisticData.data;

          var activeUsers = [];

          //Iterate through months to get the number of active users
          for(var i = 0; i < monthYear.length; i++){

            var number = null;

            //Iterate through users and increase number of active users if active match the specified month
            for(var j = 0; j < statistics.length; j++) {
              if(monthYear[i] === statistics[j].monthyear) {
                number = statistics[j].activeUsers;
                activeUsers.push(number);
              }
            }
          }
          return activeUsers;
        });
      }
    }
  });

