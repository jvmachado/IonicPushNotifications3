angular.module('app.services', [])

.factory('cotAtualService', function($http) {
    return {
		getCotacaoAtual: function(){
			return $http.get("http://localhost:3000/cotacaoAtual");
		}
	}
})

.factory('media4diasService', function($http) {
    return {
		getMedia4dias: function(){
			return $http.get("http://localhost:3000/media4dias");
		}
	}
})