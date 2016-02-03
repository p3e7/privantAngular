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
        var onlineusers = $http.get('mocked_data/users.json').then(function (usersResponse) {
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

        return onlineusers;
      },

      //Get the number of registered users of the last 4 months
      getRegisteredUsers: function(monthYearArray) {

        var monthYear = monthYearArray;
        var users = [];

        //Get mocked data from json file
        var registeredUsers = $http.get('mocked_data/users.json').then(function (usersResponse) {
          users = usersResponse.data;

          var regUsers = [];

          //Iterate through months to get the number of registered users
          for(var i = 0; i < monthYear.length; i++){

            var number = 0;

            //Iterate through users and increase number of registered users if registered match the specified month
            for(var j = 0; j < users.length; j++) {
              var user = users[j];
              var regDate = user.registrierungsdatum;
              if (regDate.indexOf(monthYear[i]) > -1) {
                number++;
              }
            }
            //Insert number of registered users in array
            regUsers.push(number);
          }
          return regUsers;
        });
        return registeredUsers;
      },

      //Get the number of active users of the last 4 months
      getActiveUsers: function(monthYearArray) {

        var monthYear = monthYearArray;
        var users = [];

        //Get mocked data from json file
        var actUsers = $http.get('mocked_data/users.json').then(function (usersResponse) {
          users = usersResponse.data;

          var activeUsers = [];

          //Iterate through months to get the number of active users
          for(var i = 0; i < monthYear.length; i++){

            var number = 0;

            //Iterate through users and increase number of active users if active match the specified month
            for(var j = 0; j < users.length; j++) {
              var user = users[j];
              var lastActive = user.zuletzt_online;
              if (lastActive.indexOf(monthYear[i]) > -1) {
                number++;
              }
            }
            //Insert number of registered users in array
            activeUsers.push(number);
          }
          return activeUsers;
        });
        return actUsers;
      }
    }
  });

