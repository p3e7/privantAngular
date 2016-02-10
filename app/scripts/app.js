'use strict';

/**
 * @ngdoc overview
 * @name privantAngularApp
 * @description
 * # privantAngularApp
 *
 * Main module of the application.
 */

angular
  .module('privantAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'googlechart'
  ])
  .config(function ($routeProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        activetab: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      // Die Route für alle Events.
      .when('/events', {
        templateUrl: 'views/events.html',
        controller: 'EventsCtrl',
        controllerAs: 'events'
      })
      // Die Route für die Erstellung eines einzelnen Events.
      .when('/addEvent', {
        templateUrl: 'views/addEvent.html',
        controller: 'addEventCtrl',
        controllerAs: 'addEvents'
      })
      // Die Route für eine einzelne Event-Seite.
      .when('/single-event/:eventId', {
        templateUrl: 'views/single-event.html',
        controller: 'EventsCtrl'
      })
      .when('/recommendations', {
        templateUrl: 'views/recommendations.html'
       })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl',
        controllerAs: 'register'
      })
      .when('/login', {
        templateUrl: 'views/login.html'
      })
      .when('/user', {
        templateUrl: 'views/user.html',
        controller: 'UserCtrl',
        controllerAs: 'user'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .when('/statistics', {
        templateUrl: 'views/statistics.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });


