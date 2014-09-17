(function(){
  'use strict';

  //new module, no dependencies
  angular.module('mbClockModule', [])
  //gets turned into mb-greeting in the html
  .directive('mbClock', ['$interval', function($interval){
    var o = {};

    o.restrict = 'A';
    o.templateUrl = '/components/directives/mb-clock/mb-clock.html';
    o.scope = {
      frequency : '@'
    };

    o.link = function(scope, element, attrs){
      //this is how we attach stuff directly to the scope
      function updateTime(){
        scope.date = new Date();
      }

      updateTime();

      console.log('starting timer');
      var id = $interval(updateTime, scope.frequency * 1);
      //cancel timer to avoid timers piling up
      element.on('$destroy', function(){
        $interval.cancel(id);
        console.log('dying...');
      });
      console.log('the timer id is ', id);
    };


    return o;
  }]);

})();
