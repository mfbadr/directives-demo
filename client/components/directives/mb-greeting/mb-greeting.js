(function(){
  'use strict';

  //new module, no dependencies
  angular.module('mbGreetingModule', [])
  //gets turned into mb-greeting in the html
  .directive('mbGreeting', [function(){
    var o = {};

    o.restrict = 'A';
    o.templateUrl = '/components/directives/mb-greeting/mb-greeting.html';
    o.scope = {
      name: '@',
      age: '@'
    };

    return o;
  }]);

})();
