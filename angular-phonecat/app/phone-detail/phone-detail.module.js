// Even though ngRoute module is available already through the dependency section of app.module.js
// it is a good practice to include its dependency. If another application takes phone-detail and
// tries to use it, it would fail, had we omitted this dependency here. This does not incur any cost.
angular.module('phoneDetail',[
  'ngRoute'
])
