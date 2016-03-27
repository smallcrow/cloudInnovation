 angular.module('AgentRegistration')
      .controller('AgentRegistrationCtrl', ['$scope', RegistrationForm]);

function RegistrationForm ($scope) {
	$scope.isRegisted = 'zzzzzz hello zzzzzz';

	var agentList = [];

	$scope.addAgents = function() {
		console.log('add ' + $scope.agentToAdd + ' to the list');
		agentList.push($scope.agentToAdd);
		$scope.agentToAdd = null;
	}

	$scope.listAgents = function() {
		return agentList;
	}
}