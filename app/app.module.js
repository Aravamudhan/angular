angular.module(
  'phoneCatAppModule',
  // This is dependency array. phoneListModule is passed into it.
  // This makes all entities registered in the phoneListModule available to
  // phoneCatAppModule as well.
  [
    'phoneListModule', 'ngRoute', 'phoneDetail', 'core', 'ngAnimate'
  ]
);
