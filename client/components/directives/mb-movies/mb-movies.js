(function(){
  'use strict';

  //new module, no dependencies
  angular.module('mbMoviesModule', [])
  //gets turned into mb-greeting in the html
  .factory('Movies', ['$http', function($http){
    function nowPlaying(){
      return $http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?apikey=8kkextzv5pjbmjw94b5nng6r&callback=JSON_CALLBACK');
    }
    return {nowPlaying:nowPlaying};
  }])
  .directive('mbMovies', ['Movies', function(Movies){
    var o = {};

    o.restrict = 'A';
    o.templateUrl = '/components/directives/mb-movies/mb-movies.html';
    o.scope = {
    };

    o.link = function(scope, element, attrs){
    };

    o.controller = ['$scope', function($scope){
      function getPlaying(){
        Movies.nowPlaying().then(function(response){
          $scope.movies = response.data;
        });
      }

      getPlaying();
    }];

    return o;
  }]);
})();
