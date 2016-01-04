'use strict';


angular.module('privantAngularApp').factory('dataService', function () {
  var data = {};


  //Alle Events.
  data.pAEvents = {
    items: [
      {
        id: 1,
        name: "Event 1",
        mail: "whatever@gmx.de",
        description: "Wir haben Batman",
        picture: "http://placehold.it/120x120/007700/ffffff"
      },
      {
        id: 2,
        name: "Event 2",
        mail: "deineKontoDatenSindSuper@example.org",
        description: "Wir haben Batman",
        picture: "http://placehold.it/120x120/007700/ffffff"
      },
      {
        id: 3,
        name: "Event 3",
        mail: "marck@live.de",
        description: "Wir haben Batman",
        picture: "http://placehold.it/120x120/007700/ffffff"
      },
      {
        id: 4,
        name: "Event 4",
        mail: "sebastian@example.com",
        description: "Wir haben Batman",
        picture: "http://placehold.it/120x120/007700/ffffff"
      }

    ]
  };

  return data;
});
