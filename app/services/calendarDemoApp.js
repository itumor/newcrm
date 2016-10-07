define(['require', 'angular'], function(require, angular) {
    /**
     * Read more about AngularJS modules in official docs: 
     * https://docs.angularjs.org/guide/module
     * 
     * Check here how to paste 3rd party modules:
     * https://devcenter.appery.io/documentation/angularjs/resources/#Using_3rd_party_modules
     */
   // var module = angular.module('JavaScript1', []);
    //module.provider(name, providerType);
    //module.factory(name, providerFunction);
    //module.service(name, constructor);
    //module.value(name, object);
    //module.constant(name, object);
    //module.decorator(The, This);
    //module.animation(name, animationFactory);  //animations take effect only if the ngAnimate module is loaded
    //module.filter(name, filterFactory);
    //module.controller(name, constructor);
    //module.directive(name, directiveFactory);
    //module.config(configFn);
    //module.run(initializationFn);


 var module = angular.module('calendarDemoApp', ['ionic', 'ngAnimate', 'ui.rCalendar'])
    .run(function ($ionicPlatform, $animate) {
        'use strict';
        $animate.enabled(false);
    })


   module.controller('CalendarDemoCtrl', function ($scope) {
        'use strict';
        $scope.calendar = {};
        $scope.changeMode = function (mode) {
            $scope.calendar.mode = mode;
        };

        $scope.loadEvents = function () {
            $scope.calendar.eventSource = createRandomEvents();
        };
    });
    
});