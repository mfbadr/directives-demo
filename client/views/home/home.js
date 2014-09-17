(function(){
  'use strict';

  angular.module('directives-demo')
  .controller('HomeCtrl', ['$scope', '$interval', 'Home', function($scope, $interval, Home){

    $scope.people = [{name:'bob', age:22},{name:'sue', age:30},{name:'joe', age:33}];
    $scope.symbols = ['AAPL', 'GOOG', 'MSFT', 'AMZN'];
  }]);
})();

