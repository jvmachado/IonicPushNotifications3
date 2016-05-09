angular.module('app.controllers', [])

.controller('cotaOCtrl', function($scope, $http, cotAtualService, media4diasService) {
	cotAtualService.getCotacaoAtual().then(function(response){
		console.log(response.data);
		$scope.cotacao = response.data;
		$scope.media = (response.data.high + response.data.low)/2;
		$scope.ultimaAtt = response.data.create_date;
	});

	media4diasService.getMedia4dias().then(function(res){
		console.log(res.data.resultado);
		$scope.media4 = res.data.resultado;
	});
});
