(function(){
  'use strict';

  //new module, no dependencies
  angular.module('mbWeatherModule', [])
  //gets turned into mb-greeting in the html
  .factory('Weather', ['$http', function($http){
    function conditions(zip){
      return $http.jsonp('http://api.wunderground.com/api/2738df9035fbffa9/conditions/q/' + zip + '.json?callback=JSON_CALLBACK');
    }
    return {conditions:conditions};
  }])
  .directive('mbWeather', ['Weather', function(Weather){
    var o = {};

    o.restrict = 'A';
    o.templateUrl = '/components/directives/mb-weather/mb-weather.html';
    o.scope = {
      zip: '@'
    };

    o.link = function(scope, element, attrs){
    };

    o.controller = ['$scope', function($scope){
      function getWeather(){
        Weather.conditions($scope.zip).then(function(response){
          $scope.weather = response.data;
        });
      }

      getWeather();
    }];

    return o;
  }]);
})();
