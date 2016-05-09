angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.cotaO', {
    url: '/cotacao',
    views: {
      'tab2': {
        templateUrl: 'templates/cotaO.html',
        controller: 'cotaOCtrl'
      }
    }
  })

  .state('tabsController.notificaEs', {
    url: '/notificacoes',
    views: {
      'tab3': {
        templateUrl: 'templates/notificaEs.html',
        controller: 'notificaEsCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/cotacao')

  

});