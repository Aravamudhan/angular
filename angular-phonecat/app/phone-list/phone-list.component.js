// The component phoneList is being attached to the module phoneCatAppModule
angular.
module('phoneListModule').
component('phoneList', {
    //The URL is relative to the home directory or the index.html file.
    //Using template directly couples this file with the HTML. By Using
    //templateUrl instead of template code is cleaner and decoupled from HTML.
    //For every templateUrl, a request is made to the server. Angular provides lazy fetching of templates
    //and caching to make it effective, especially on mobile devices.
    templateUrl: 'phone-list/phone-list.template.html',
    //1. To use a service declare the dependencies in the controller's
    //constructor. They will be injected through DI.
    //2. It is good enough to declare dependency this way ."controller: function PhoneListController($http) {}"
    //But during minification this might get lost and angular will have no way to identify the dependencies
    //to be injected to that constructor. To avoid this by setting the controller property as an array,
    //which starts with the dependencies its requires, then going on to declare the controller function
    //as its callback prevents this possible problem.
    //3. Another syntax is declaring the method separately and passing that along with its dependencies list
    //to the controller.
    //function PhoneListController($http) {...}
    //...
    //.component('phoneList', {..., controller: ['$http', PhoneListController]});
    // Commenting the controller below in favour of using ngResource#$resource services
    // controller: ['$http',
    //     function PhoneListController($http) {
    //         var self = this;
    //         self.orderProp = 'age';
    //         $http.get('/phones/phones.json').then(function(response) {
    //             self.phones = response.data;
    //         });
    //     }
    // ]
    // Here instead of $http.get().then....{...} Phone.query() is used.
    controller : ['Phone',
      function PhoneListController(Phone){
        // The query method does not return the response synchronously. It returns
        // something called 'future', an object, which will be filled when the XHR response
        // is received. Because of the two-way data binding, even if this future object is bound
        // to the view before the response arrives, that will be updated automatically once the
        // response is received.
        this.phones = Phone.query();
        this.orderProp = 'age';
      }
    ]
});
