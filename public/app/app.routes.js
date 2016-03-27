(function () {
   "use strict";

   angular.module('AgentRegistration').config(["$routeProvider", function ($routeProvider) {
         $routeProvider
            .when('/AgentRegistration', {
               templateUrl: "/app/views/agentRegistration.html",
               controller: "AgentRegistrationCtrl", 
               caseInsensitiveMatch: true,
            });
      }]);
}());