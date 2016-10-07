define(['require', 'app'], function(require, APP) {

    /**
     * Controller for CONTACT_CREATE generated by Appery.io
     * @module CONTACT_CREATE
     */

    APP.controller('CONTACT_CREATE', ['$scope', 'Apperyio', controller]);

    function controller($scope, Apperyio) {
        /**
         * User controller functions
         */
        /**
         * @function init
         * @param _id
         * @param lorc
         */
        $scope.init = function(_id, lorc) {
            //On load screen logic
            $scope.state = false;
            var $routeParams = Apperyio.get("$routeParams");
            $scope.id = $routeParams['_id'];
            $scope.lorc = $routeParams['lorc'];

            //$scope.userid = sessionStorage.getItem("userid");
            $scope.userid = "57cc88a0e4b0ce1875dd5468";
            console.log($scope.userid);

        };

        /**
         * @function FIND
         */
        $scope.FIND = function() {
            var requestData = {};
            requestData = (function mapping4828($scope) {
                var requestData = {};
                requestData = Apperyio.EntityAPI('CONTACT_find.request.data', undefined, true);

                var CONTACT_scope = $scope.CONTACT;
                var id_scope = $scope.id;
                requestData.where.E_MAIL = CONTACT_scope.E_MAIL;
                requestData.where.LEAD_DBID = id_scope;

                return requestData; /*|button_mapping|onbeforesend|C129DDF1-BE6D-8D1E-2F93-AC5DE89884BB||4828|*/
            })($scope);

            // read more about using rest services: https://devcenter.appery.io/documentation/angularjs/rest-service/ 
            Apperyio.get("CONTACT_find")(requestData).then( /*|service_bookmark|bookmark|C129DDF1-BE6D-8D1E-2F93-AC5DE89884BB||5769|*/

            function(success) { // success callback
                (function mapping6123(success, $scope) {
                    var CONTACTS_scope = $scope.CONTACTS;

                    CONTACTS_scope = [];
                    for (var i = 0, l = success.length; i < l; i++) {
                        CONTACTS_scope[i] = Apperyio.EntityAPI('CONTACTS.[i]');
                        CONTACTS_scope[i] = success[i];
                    }
                    $scope.CONTACTS = CONTACTS_scope;
                    console.log(success.length);

                    if (success.length === 0) {
                        console.log("Create");
                        $scope.CREATE();
                    } else {
                        console.log("Record already exists");
                        $scope.recordExists();

                    }

                    //CONTACTS_scope = success;
                    //$scope.CONTACTS = CONTACTS_scope;
                    /*|button_mapping|onsuccess|C129DDF1-BE6D-8D1E-2F93-AC5DE89884BB||6123|*/
                })(success, $scope);

            }, function(error) { // callback to handle request error
                console.log(error);

            }, function(notify) { // notify callback, can fire few times
                console.log(notify);
            });

        };

        /**
         * @function CREATE
         */
        $scope.CREATE = function() {
            var requestData = {};
            requestData = (function mapping4583($scope) {
                var requestData = {};
                requestData = Apperyio.EntityAPI('CONTACT_create.request.data', undefined, true);

                var userid_scope = $scope.userid;
                var CONTACT_scope = $scope.CONTACT;
                var id_scope = $scope.id;
                var lorc_scope = $scope.lorc;
                requestData.USER_ID = userid_scope;
                requestData.SOURCE = CONTACT_scope.SOURCE;
                requestData.STATUS = CONTACT_scope.STATUS;
                requestData.COMPANY = CONTACT_scope.COMPANY;
                requestData.INDUSTRY = CONTACT_scope.INDUSTRY;
                requestData.WEBSITE = CONTACT_scope.WEBSITE;
                requestData.PHONE_1 = CONTACT_scope.PHONE_1;
                requestData.E_MAIL = CONTACT_scope.E_MAIL;
                requestData.ADDRESS = CONTACT_scope.ADDRESS;
                requestData.REGION = CONTACT_scope.REGION;
                requestData.CITY = CONTACT_scope.CITY;
                requestData.COUNTRY = CONTACT_scope.COUNTRY;
                requestData.HEADCOUNT = CONTACT_scope.HEADCOUNT;
                requestData.DOB = CONTACT_scope.DOB;
                requestData.ACCOUNT_DBID = CONTACT_scope.ACCOUNT_DBID;
                requestData.OWNER = CONTACT_scope.OWNER;
                requestData.FULLNAME = CONTACT_scope.FULLNAME;
                requestData.PHONE_2 = CONTACT_scope.PHONE_2;
                requestData.DESCRIPTION = CONTACT_scope.DESCRIPTION;
                requestData.TITLE = CONTACT_scope.TITLE;
                requestData.RATING = CONTACT_scope.RATING;
                requestData.TWITTER_ID = CONTACT_scope.TWITTER_ID;
                requestData.INSTAGRAM_ID = CONTACT_scope.INSTAGRAM_ID;
                requestData.FACEBOOK_ID = CONTACT_scope.FACEBOOK_ID;
                requestData.NOTES = CONTACT_scope.NOTES;
                requestData.MAIN_CONTACT = CONTACT_scope.MAIN_CONTACT;
                requestData.LEAD_DBID = id_scope;
                requestData.LEAD_OR_CLIENT = lorc_scope;

                if (requestData.STATUS === "") requestData.STATUS = "Not Contacted";
                if (requestData.MAIN_CONTACT === "") requestData.MAIN_CONTACT = "No";

                return requestData; /*|button_mapping|onbeforesend|3F22F071-A228-3BA1-F76E-7BBD18B36608||4583|*/
            })($scope);

            // read more about using rest services: https://devcenter.appery.io/documentation/angularjs/rest-service/ 
            if (requestData.FULLNAME && (requestData.E_MAIL || requestData.PHONE_1 || requestData.PHONE_2)) {
                Apperyio.get("CONTACT_create")(requestData).then( /*|service_bookmark|bookmark|3F22F071-A228-3BA1-F76E-7BBD18B36608||3359|*/

                function(success) { // success callback
                    /*|button_mapping|onsuccess|3F22F071-A228-3BA1-F76E-7BBD18B36608||7676|*/

                    console.log("create");
                    Apperyio.navigateTo("Contacts", {
                        '_id': $scope.id,
                        'lorc': $scope.lorc
                    });
                    $scope.$apply();
                }, function(error) { // callback to handle request error
                    console.log(error);

                }, function(notify) { // notify callback, can fire few times
                    console.log(notify);
                });
            } else {
                console.log("You can't add a Contact that has no name, company or email!");
                $scope.noEnoughInput();
            }

        };

        /**
         * @function recordExists
         */
        $scope.recordExists = function() {
            function onConfirm(buttonIndex) {

            }

            navigator.notification.confirm('There is a record already exists with this e-mail', // message
            onConfirm, // callback to invoke with index of button pressed
            'Sorry', // title
            ['OK'] // buttonLabels
            );
        };

        /**
         * @function noEnoughInput
         */
        $scope.noEnoughInput = function() {
            function onConfirm(buttonIndex) {

            }

            navigator.notification.confirm("You can't add a Contact that has no name or email!", // message
            onConfirm, // callback to invoke with index of button pressed
            'Sorry', // title
            ['OK'] // buttonLabels
            );
        };

        /**
         * user controller variables
         */
        $scope.id = Apperyio.EntityAPI('String');
        $scope.CONTACT = Apperyio.EntityAPI('CONTACT');
        $scope.CONTACTS = Apperyio.EntityAPI('CONTACTS');
        $scope.status = Apperyio.EntityAPI('String');
        $scope.userid = Apperyio.EntityAPI('String');
        $scope.lorc = Apperyio.EntityAPI('String');
    }

});