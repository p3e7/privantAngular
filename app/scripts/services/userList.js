'use strict';


angular.module('privantAngularApp').factory('userList', function () {
  var data = {};


  // Die globalen Benutzer.
  data.users = {
    items: [
      {
        "username": "user1",
        "passwort": "pa$$w0rd",
        "id": "0001",
        "email": "Email@yahoo.de",
        "ueber_mich": "Text zur Selbstbeschreibung",
        "profilbild": "images/AntCircle.jpg",
        "rolle": "Benutzer",
        "aktiviert": "true",
        "registrierungsdatum": "01.11.2015",
        "zuletzt_online": "23.11.2015 12:30:45"
      },
      {
        "username": "user2",
        "passwort": "1234",
        "id": "0002",
        "email": "bla@gmx.de",
        "ueber_mich": "Dies ist ein Testtext",
        "profilbild": "images/AntColor7.jpg",
        "rolle": "Admin",
        "aktiviert": "true",
        "registrierungsdatum": "15.09.2015",
        "zuletzt_online": "24.11.2015 02:22:01"
      },
      {
        "username": "weitererUser",
        "passwort": "qaws",
        "id": "0003",
        "email": "user@yahoo.de",
        "ueber_mich": "Hier erscheint der Text über den User",
        "profilbild": "images/yeoman.png",
        "rolle": "Benutzer",
        "aktiviert": "true",
        "registrierungsdatum": "15.12.2015",
        "zuletzt_online": "30.12.2015 01:33:07"
      },
      {
        "username": "vierterUser",
        "passwort": "test",
        "id": "0004",
        "email": "user@stud.fh-dortmund.de",
        "ueber_mich": "",
        "profilbild": "",
        "rolle": "Benutzer",
        "aktiviert": "true",
        "registrierungsdatum": "02.01.2016",
        "zuletzt_online": "03.01.2016 18:36:04"
      },
      {
        "username": "HansWurst",
        "passwort": "irgendwas",
        "id": "0005",
        "email": "student@stud.fh-dortmund.de",
        "ueber_mich": "",
        "profilbild": "",
        "rolle": "Benutzer",
        "aktiviert": "true",
        "registrierungsdatum": "02.01.2016",
        "zuletzt_online": "03.01.2016 18:36:04"
      },
      {
        "username": "JaneDoe",
        "passwort": "jane",
        "id": "0006",
        "email": "jane@stud.fh-dortmund.de",
        "ueber_mich": "Ich bin Jane Doe",
        "profilbild": "",
        "rolle": "Benutzer",
        "aktiviert": "true",
        "registrierungsdatum": "02.10.2015",
        "zuletzt_online": "04.01.2016 03:36:04"
      }
    ]
  };
    return data;
});
/**
 * Created by Hon on 04.01.2016.
 */
