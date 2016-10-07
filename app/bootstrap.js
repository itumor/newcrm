'use strict';

(function(window) {

    require.config({
        baseUrl: "app",
        paths: {
            'jasmine_f': '../libs/jasmine/lib/jasmine-core',
            'specs': '../test/specs',
            'angular-mocks': '../libs/angular-mocks/angular-mocks',
            'mocks': '../test/mocks',
            '$Libs': '../libs',
            '$App': '../libs/apperyio',
            '$Screens': 'pages',
            '$Modals': 'modals',
            '$Services': 'services',
            "navigateTo": "services/navigateTo",
            "backButton": "services/backButton",
            "text": "../libs/text",
            "require": "../libs/requirejs/require",
            "angular": "../libs/angular/angular.min",
            "angular-touch": "../libs/angular-touch/angular-touch.min",
            "angular-route": "../libs/angular-route/angular-route.min",
            "ionic": "../libs/ionic/ionic.bundle",
            "appery-ui": "../libs/appery-ui/appery-ui",
            "lodash": "../libs/lodash/dist/lodash.min",
            "gmaps": "../libs/angular-google-maps/angular-google-maps.min",
            "Apperyio": "../libs/apperyio/Apperyio",
            "q": "../libs/ms_sdk_bundle/q/q",
            "localforage": "../libs/ms_sdk_bundle/localforage/dist/localforage",
            "EventEmitter": "../libs/ms_sdk_bundle/EventEmitter.js/EventEmitter",
            "tv4": "../libs/ms_sdk_bundle/tv4/tv4",
            "ms-client-sdk": "../libs/ms_sdk_bundle/client-sdk",
            "CryptoJS": "../libs/ms_sdk_bundle/crypto-js-md5/crypto-js-md5",
            "moment": "../libs/ms_sdk_bundle/moment/moment",
            "cordova": "../libs/cordova",
            "x2js": "../libs/x2js/xml2json",
            "$App/crouterconfig": "../libs/apperyio/crouterconfig",
            "activeScreenManager": "services/activeScreenManager",
            "LoginUser_service": "services/LoginUser_service",
            "RegisterNewUser_service": "services/RegisterNewUser_service",
            "dataStorage": "services/dataStorage",
            "angular-translate.min": "services/angular-translate.min",
            "AngularTranslate": "services/AngularTranslate",
            "AppClientInit": "services/AppClientInit",
            "AppClientServices": "services/AppClientServices",
            "LEAD1APIExpressService_operations": "services/LEAD1APIExpressService_operations",
            "APIExpressService_operations": "services/APIExpressService_operations",
            "LEAD_operations": "services/LEAD_operations",
            "MailgunEmail_Mailgun_service": "services/MailgunEmail_Mailgun_service",
            "calendar-tpls": "services/calendar-tpls",
            "navigateTo_chat": "services/navigateTo_chat",
            "backButton_chat": "services/backButton_chat",
            "calendarDemoApp": "services/calendarDemoApp",
            "JavaScript2": "services/JavaScript2",
            "NEWCRM_GET_OUSER_GET_LEAD_get": "services/NEWCRM_GET_OUSER_GET_LEAD_get",
            "fullcalendar": "services/fullcalendar",
            "jquery.min": "services/jquery.min",
            "jquery-ui.min": "services/jquery-ui.min",
            "moment.min": "services/moment.min",
            "EVENTS_operations": "services/EVENTS_operations",
            "appname_login_service": "services/appname_login_service",
            "LEAD2_operations": "services/LEAD2_operations",
            "myDB_settings_Impl": "services/myDB_settings_Impl",
            "CONTACT_operations": "services/CONTACT_operations",
            "CLIENT_operations": "services/CLIENT_operations",
            "Chart": "services/Chart",
            "NEWCRM_chart_LEAD_Chart_chart_lead_get": "services/NEWCRM_chart_LEAD_Chart_chart_lead_get",
            "LoginUser_LoginUser1474303486448_service": "services/LoginUser_LoginUser1474303486448_service",
            "dataStorage_Hello_World_App": "services/dataStorage_Hello_World_App",
            "dataStorage_Hello_World_App_2": "services/dataStorage_Hello_World_App_2",
            "Obtain_Session_token_Service": "services/Obtain_Session_token_Service",
            "get_user_id_Service": "services/get_user_id_Service",
            "PushRegisterDeviceImpl": "services/PushRegisterDeviceImpl",
            "PushUnregisterDevice": "services/PushUnregisterDevice",
            "PushUpdateDeviceImpl": "services/PushUpdateDeviceImpl",
            "PushSendImpl": "services/PushSendImpl",
            "UserDB_UserProfile_query_service": "services/UserDB_UserProfile_query_service",
            "EVENTS2_operations": "services/EVENTS2_operations",
            "UserDB_UserProfile_read_service": "services/UserDB_UserProfile_read_service",
            "UserDB_UserProfile_update_service": "services/UserDB_UserProfile_update_service",
            "UserDB_UserProfile_delete_service": "services/UserDB_UserProfile_delete_service",
            "UserDB_UserProfile_create_service": "services/UserDB_UserProfile_create_service",
            "UserDB_UserProfile_list_service": "services/UserDB_UserProfile_list_service",
            "NOTES_operations": "services/NOTES_operations",
            "ATTACHED_NOTE_operations": "services/ATTACHED_NOTE_operations",
            "getuserdata_RESTService": "services/getuserdata_RESTService",
            '$Calendar_API': 'pages/Calendar_API',
            '$Calendar': 'pages/Calendar',
            '$LEAD_DETAILS_Oracle': 'pages/LEAD_DETAILS_Oracle',
            '$push_notifications': 'pages/push_notifications',
            '$Events': 'pages/Events',
            '$CONTACT_CREATE': 'pages/CONTACT_CREATE',
            '$Proposals': 'pages/Proposals',
            '$CONTACT_DETAILS': 'pages/CONTACT_DETAILS',
            '$CSS_Calendar': 'pages/CSS_Calendar',
            '$CONTACT_EDIT': 'pages/CONTACT_EDIT',
            '$Info': 'pages/Info',
            '$Profile': 'pages/Profile',
            '$Home': 'pages/Home',
            '$CLIENT_LIST': 'pages/CLIENT_LIST',
            '$fullcalendar': 'pages/fullcalendar',
            '$CLIENT_CREATE': 'pages/CLIENT_CREATE',
            '$CLIENT_DETAILS': 'pages/CLIENT_DETAILS',
            '$CLIENT_EDIT': 'pages/CLIENT_EDIT',
            '$CONTACT_USER_CREATE': 'pages/CONTACT_USER_CREATE',
            '$ATTACHED_NOTE_DETAILS': 'pages/ATTACHED_NOTE_DETAILS',
            '$ATTACHED_NOTE_EDIT': 'pages/ATTACHED_NOTE_EDIT',
            '$ATTACHED_NOTE_LIST': 'pages/ATTACHED_NOTE_LIST',
            '$chart': 'pages/chart',
            '$menu': 'pages/menu',
            '$ATTACHED_NOTE_CREATE': 'pages/ATTACHED_NOTE_CREATE',
            '$NOTE_EDIT': 'pages/NOTE_EDIT',
            '$EVENT_EDIT': 'pages/EVENT_EDIT',
            '$Login': 'pages/Login',
            '$NOTE_DETAILS': 'pages/NOTE_DETAILS',
            '$Register': 'pages/Register',
            '$Welcome': 'pages/Welcome',
            '$EVENT_DETAILS': 'pages/EVENT_DETAILS',
            '$chartjs': 'pages/chartjs',
            '$Login_clone_1': 'pages/Login_clone_1',
            '$NOTE_LIST': 'pages/NOTE_LIST',
            '$mailgun': 'pages/mailgun',
            '$EVENT_CREATE_clone_1': 'pages/EVENT_CREATE_clone_1',
            '$USER_CONTACTS': 'pages/USER_CONTACTS',
            '$LEAD_CREATE_Oracle': 'pages/LEAD_CREATE_Oracle',
            '$User_Profile': 'pages/User_Profile',
            '$LEAD_EDIT_Oracle': 'pages/LEAD_EDIT_Oracle',
            '$LEAD_LIST_Oracle': 'pages/LEAD_LIST_Oracle',
            '$EVENT_CREATE': 'pages/EVENT_CREATE',
            '$EVENT_LIST': 'pages/EVENT_LIST',
            '$NOTE_CREATE': 'pages/NOTE_CREATE',
            '$ifcalendar': 'pages/ifcalendar',
            '$Contacts': 'pages/Contacts'
        },
        waitSeconds: 100,
        shim: {
            "angular": {
                exports: "angular"
            },
            "angular-touch": {

                deps: ["angular"]
            },
            "angular-route": {

                deps: ["angular"]
            },
            "ionic": {

                deps: ["angular", "cordova"]
            },
            "appery-ui": {

                deps: ["angular"]
            },
            "lodash": {
                exports: "_"
            },
            "gmaps": {

                deps: ["angular"]
            },
            "CryptoJS": {
                exports: "CryptoJS"
            },
            "x2js": {
                exports: "X2JS"
            },
            "angular-translate.min": {},

            'jasmine_f/boot': {
                deps: ['jasmine_f/jasmine-html']
            },
            'jasmine_f/jasmine-html': {
                deps: ['jasmine_f/jasmine']
            },
            'angular-mocks': {
                deps: ['angular', 'jasmine_f/boot']
            }
        }
    });

    define('angular', [], function() {
        return window.angular;
    });

    window.__APPLICATION_NAME = "AppModule_NEWCRM";

    if (window.location.href.indexOf('tests.html') > -1) {
        require(["require", "angular", "app", '../test/tests_asset'], function() {});
    } else {
        require(["require", "angular", "app", "ionic", "appery-ui"], function(require, angular) {
            // Run APP
            angular.bootstrap(document.documentElement, [window.__APPLICATION_NAME]);
        });
    }
})(this);