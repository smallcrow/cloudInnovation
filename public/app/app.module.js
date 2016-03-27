(function () {
   'use strict';

   angular.module('AgentRegistration', ['ngRoute']);

   angular.module('AgentRegistration').config(['$locationProvider', function ($locationProvider) {
      $locationProvider.html5Mode({
         enabled: true,
         requireBase: false,
      });
   }]);

}());
