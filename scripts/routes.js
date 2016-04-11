var app = angular.module('app', ['ui.router']);
app.config(function($stateProvider, $urlRouterProvider){

   // Makes the site default to 'home' state
   $urlRouterProvider.otherwise('home');

   // Defines the states for our app
   $stateProvider

      // Home Page
      .state('home', {
         url: '/home',
         views: {
            '': { 
               templateUrl: 'templates/home.html',
               controller: 'homeCtrl',
               controllerAs: 'home'
            }, // ends '' view
            'header@home': {
               templateUrl: 'templates/header.html'
            },
            'test@home': { 
               controller: 'homeCtrl',
               controllerAs: 'home'
            } // ends 'test@home' view
         }
      })

      // About Page
      .state('about', {
         url: '/about',
         resolve: {
            coffees: ['coffeeService', function(coffeeService){
               return coffeeService.coffeeList;
            }],
            coffeeService: 'coffeeService'
         },
         views: {
            '': {
               templateUrl: 'templates/about.html',
               controller: 'aboutCtrl',
               controllerAs: 'about'
            } // ends '' view
         }
      })

      .state('contact', {
         url: '/contact',
         templateUrl: 'templates/contact.html',
         controller: 'contactCtrl',
         controllerAs: 'contact'
      })
   ;
});