
// ROUTING
var app = angular.module('app', ['ui.router']);
app.config(function($stateProvider, $urlRouterProvider){

   // Makes the site default to 'home' state
   $urlRouterProvider.otherwise('home');

   // Defines the states for our app
   $stateProvider
      .state('home', {
         url: '/home',
         templateUrl: 'templates/home.html'
      })
      .state('about', {
         url: '/about',
         templateUrl: 'templates/about.html'
      })
   ;
});