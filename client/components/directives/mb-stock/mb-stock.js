(function(){
  'use strict';

  //new module, no dependencies
  angular.module('mbStockModule', [])
  //gets turned into mb-greeting in the html
  .factory('StockApi', ['$http', function($http){
    function quote(symbol){
      return $http.jsonp('http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=' + symbol + '&callback=JSON_CALLBACK');
    }
    return {quote:quote};
  }])
  .directive('mbStock', ['$interval', function($interval){
    var o = {};

    o.restrict = 'A';
    o.templateUrl = '/components/directives/mb-stock/mb-stock.html';
    o.scope = {
      symbol: '@'
    };

    o.link = function(scope, element, attrs){
      element.on('$destroy', function(){
        $interval.cancel(scope.id);
        console.log('dying...');
      });
    };

    o.controller = ['$scope','StockApi', function($scope, StockApi){
      function getQuote(){
        StockApi.quote($scope.symbol).then(function(response){
          $scope.quote = response.data.LastPrice;
        });
      }

      getQuote();
      var id = $interval(getQuote, 2000);

      $scope.id = id;


    }];

    return o;
  }]);
})();
