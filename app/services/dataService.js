'use strict';


angular.module('privantAngularApp').factory('dataService', function () {
  var data = {};


  // Die globalen Benutzer.
  data.users = {
    items: [
      {
        id: 1,
        name: "bestUser4Eva!",
        mail: "whatever@gmx.de",
        password: "superSecurePlainTextPwd",
        aboutMe: "Ich bin Batman",
        profilePicture: "http://placehold.it/120x120/007700/ffffff"
      },
      {
        id: 2,
        name: "noob",
        mail: "deineKontoDatenSindSuper@example.org",
        password: "superSecurePlainTextPwd",
        aboutMe: "Ich bin Batman",
        profilePicture: "http://placehold.it/120x120/007700/ffffff"
      },
      {
        id: 3,
        name: "marcel",
        mail: "marcelpauck@live.de",
        password: "superSecurePlainTextPwd",
        aboutMe: "Ich bin Batman",
        profilePicture: "http://placehold.it/120x120/007700/ffffff"
      },
      {
        id: 4,
        name: "sebastian",
        mail: "sebastian@example.com",
        password: "superSecurePlainTextPwd",
        aboutMe: "Ich bin Batman",
        profilePicture: "http://placehold.it/120x120/007700/ffffff"
      }

    ]
  };

  return data;
});
