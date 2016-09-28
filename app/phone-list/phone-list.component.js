// The component phoneList is being attached to the module phoneCatAppModule
angular.
  module('phoneListModule').
    component('phoneList',{
     //The URL is relative to the home directory or the index.html file.
     //Using template directly couples this file with the HTML. By Using
     //templateUrl instead of template code is cleaner and decoupled from HTML.
     //For every templateUrl, a request is made to the server. Angular provides lazy fetching of templates
     //and caching to make it effective, especially on mobile devices.
      templateUrl : 'phone-list/phone-list.template.html',

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
