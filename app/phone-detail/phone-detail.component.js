angular.
  module('phoneDetail').
    component('phoneDetail',{
      templateUrl : 'phone-detail/phone-detail.template.html',
      controller: ['$http','$routeParams',
        function PhoneDetailController($http, $routeParams){
          var self = this;
          self.setImage = function setImage(imageUrl){
            self.mainImageUrl = imageUrl;
          };
          self.onDoubleClick = function onDoubleClick(){
            alert("You double clicked instead of single click. One click is enough.");
          }
          $http.get('phones/'+ $routeParams.phoneId + '.json').then(function(response){
            self.phone = response.data;
            self.setImage(self.phone.images[0]);
          });
        }
      ]
    });
    //The controller above can be written simply as
    // Here a service named Phone is injected. The get of the Phone service is called.
    // controller: ['$routeParams', 'Phone',
    //   function PhoneDetailController($routeParams, Phone) {
    //     var self = this;
    //     self.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
    //       self.setImage(phone.images[0]);
    //     });
    //
    //     self.setImage = function setImage(imageUrl) {
    //       self.mainImageUrl = imageUrl;
    //     };
    //   }
    // ]
