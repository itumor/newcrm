define([
/**
 * System global resources
 */
"require", "angular", "angular-touch", "angular-route", "Apperyio", "cordova", "constants", "routes", "bootstrap", "$App/crouterconfig", '$Screens/indexController',
/**
 * Angular modules
 */
"ionic", "gmaps", "angular-translate.min", "AngularTranslate",

/**
 * Custom global resources
 */
"navigateTo", "backButton", "activeScreenManager", "LoginUser_service", "RegisterNewUser_service", "dataStorage", "AppClientInit", "AppClientServices", "LEAD1APIExpressService_operations", "APIExpressService_operations", "LEAD_operations", "MailgunEmail_Mailgun_service", "calendar-tpls", "navigateTo_chat", "backButton_chat", "calendarDemoApp", "JavaScript2", "NEWCRM_GET_OUSER_GET_LEAD_get", "fullcalendar", "jquery.min", "jquery-ui.min", "moment.min", "EVENTS_operations", "appname_login_service", "LEAD2_operations", "myDB_settings_Impl", "CONTACT_operations", "CLIENT_operations", "Chart", "NEWCRM_chart_LEAD_Chart_chart_lead_get", "LoginUser_LoginUser1474303486448_service", "dataStorage_Hello_World_App", "dataStorage_Hello_World_App_2", "Obtain_Session_token_Service", "get_user_id_Service", "PushRegisterDeviceImpl", "PushUnregisterDevice", "PushUpdateDeviceImpl", "PushSendImpl", "UserDB_UserProfile_query_service", "EVENTS2_operations", "UserDB_UserProfile_read_service", "UserDB_UserProfile_update_service", "UserDB_UserProfile_delete_service", "UserDB_UserProfile_create_service", "UserDB_UserProfile_list_service", "NOTES_operations", "ATTACHED_NOTE_operations", "getuserdata_RESTService"], function() {
    var angular = require("angular"),
        _Appery = require("Apperyio"),
        routerConfig = require("$App/crouterconfig");
    var DEPENDENCIES_INDEX = 15;
    var DEPENDENCIES = Array.prototype.slice.call(arguments, DEPENDENCIES_INDEX);

    /**
     * Adding angular modules to the application
     */
    var APP = angular.module(window.__APPLICATION_NAME, ['ApperyioModule', "ionic", "uiGmapgoogle-maps", "pascalprecht.translate", "AngularTranslate"]).config(["$routeProvider", '$controllerProvider', '$provide', '$locationProvider', '$compileProvider', '$filterProvider', 'uiGmapGoogleMapApiProvider', Configuration]).run(["Apperyio", "User", "$location", "$ionicPlatform", RUN]);

    function Configuration($routeProvider, $controllerProvider, $provide, $locationProvider, $compileProvider, $filterProvider, $uiGmapGoogleMapApiProvider) {

        APP.controller = $controllerProvider.register;
        APP.directive = $compileProvider.directive;
        APP.filter = $filterProvider.register;
        APP.factory = $provide.factory;
        APP.service = $provide.service;
        APP.provider = $provide.provider;
        APP.value = $provide.value;
        APP.constant = $provide.constant;
        APP.decorator = $provide.decorator;

        /**
         * Place for list of pages and routes
         */
        var routes = require('routes');
        APP.defaultRoute = routes['default']['redirectTo'];
        $locationProvider.html5Mode({
            enabled: false,
            requireBase: false
        });
        angular.forEach(routes.when, function(route, path) {
            $routeProvider.when(path, routerConfig(route, APP));
        });
        $routeProvider.otherwise(routes.otherwise || routes.
    default);
        /**
         * Global dependencies resolver
         */
        if (DEPENDENCIES.length >= 0) {
            var deps = null;
            for (var i = 0, l = DEPENDENCIES.length; i < l; i++) {
                deps = DEPENDENCIES[i];
                if (angular.isArray(deps) && deps.length > 0 && angular.isArray(deps[0].deps)) {
                    try {
                        for (var j = 0, l2 = deps.length; j < l2; j++) {
                            APP[deps[j].type].call(APP, deps[j].name, deps[j].deps);
                        }
                    } catch (e) {
                        // angular or service level error
                        e.message = 'Error in ' + deps[j].name + "\nMessage: " + e.message;
                        throw new Error(e);
                    }
                }
            }
        }
        APP.controller('indexController', require('$Screens/indexController'));
    }

    function RUN(Apperyio, User, $location, $ionicPlatform) {
        Apperyio.User = User;
        Apperyio.Config.init(require('constants'));
        $ionicPlatform.registerBackButtonAction(function(event) {
            if (APP.defaultRoute === $location.path()) {
                navigator.app.exitApp();
            } else {
                navigator.app.backHistory();
            }
        }, 100);
    }

    return APP;
});