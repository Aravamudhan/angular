// The component phoneList is being attached to the module phoneCatAppModule
angular.
  module('phoneCatAppModule').
    component('phoneList',{

      template : '<ul>'+
                    '<li ng-repeat="phone in $ctrl.phones">'+
                      '<span>{{phone.name}}</span>'+
                      '<p>{{phone.snippet}}</p>'+
                    '</li>'+
                  '</ul>',

      controller : function PhoneListController(){
        this.name = 'world';
        this.rowNumbers = [0, 1, 2, 3, 4, 5, 6, 7];
        this.columnNumbers = [0, 1, 2, 3, 4, 5, 6, 7];
        this.phones = [
        {
          name: 'Nexus S',
          snippet: 'Fast just got faster with Nexus S.'
        },
        {
          name: 'Motorola XOOM™ with Wi-Fi',
          snippet: 'The Next, Next Generation tablet.'
        },
        {
          name: 'MOTOROLA XOOM™',
          snippet: 'The Next, Next Generation tablet.'
        }
      ];
      }

    });
