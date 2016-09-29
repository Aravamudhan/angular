angular.
  module('phoneCatAppModule')
    //The routeProvider routes to templates based on the URL.
    .config(['$locationProvider', '$routeProvider',
      function config($locationProvider, $routeProvider) {
       //This sets a prefix right after the hash.
        $locationProvider.hashPrefix('!');

        $routeProvider.
          when('/phones',{
            template : '<phone-list></phone-list>'
          }).//:phoneId here is a variable. For example '/phones/101'
          when('/phones/:phoneId',{
            template : '<phone-detail></phone-detail>'
          }).
          otherwise('/phones');
      }
]);
