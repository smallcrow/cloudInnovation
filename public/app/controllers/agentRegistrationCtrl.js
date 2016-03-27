 angular.module('AgentRegistration')
      .controller('AgentRegistrationCtrl', ['$scope', RegistrationForm]);

function RegistrationForm ($scope) {
	$scope.isRegisted = 'zzzzzz hello zzzzzz';
}