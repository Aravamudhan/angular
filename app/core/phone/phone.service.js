//Registering a custom service named Phone through factory method.
//This custom service can be used instead of directly calling using lower level $http
angular.
  module('core.phone').
    factory('Phone',['$resource',
      function($resource){
        return $resource('phones/:phoneId.json',{},{
          query:{
            method : 'GET',
            params : { phoneId : 'phones'},
            isArray : true
          }
        });
      }
  ]);
