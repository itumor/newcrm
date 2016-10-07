define(['require', 'app'], function(require, APP) {

    /**
     * Controller for EVENT_CREATE generated by Appery.io
     * @module EVENT_CREATE
     */

    APP.controller('EVENT_CREATE', ['$scope', 'Apperyio', controller]);

    function controller($scope, Apperyio) {
        /**
         * User controller functions
         */
        /**
         * @function init
         * @param _id
         * @param _lorc
         */
        $scope.init = function(_id, _lorc) {
            //On load screen logic
            //$scope.userid = sessionStorage.getItem("userid");
            $scope.userid = "57cc88a0e4b0ce1875dd5468";
            console.log($scope.userid);

            var $routeParams = Apperyio.get("$routeParams");
            $scope.id = $routeParams['_id'];
            console.log($scope.id);

            var $routeParams = Apperyio.get("$routeParams");
            $scope.LorC = $routeParams['_lorc'];
            console.log($scope.LorC);

            var requestData = {};
            requestData = (function mapping2780($scope) {
                var requestData = {};
                requestData.params = Apperyio.EntityAPI('UserDB_UserProfile_query_service.request.query', undefined, true);

                var userid_scope = $scope.userid;
                requestData.params.where = {
                    'userid': userid_scope
                };

                console.log(requestData.params);

                return requestData; /*|button_mapping|onbeforesend|8C381EEB-DE37-DC6A-1C41-8DB48AFE2338||2780|*/
            })($scope);

            // read more about using rest services: https://devcenter.appery.io/documentation/angularjs/rest-service/ 
            Apperyio.get("UserDB_UserProfile_query_service")(requestData).then( /*|service_bookmark|bookmark|8C381EEB-DE37-DC6A-1C41-8DB48AFE2338||8380|*/

            function(success) { // success callback
                (function mapping1288(success, $scope) {
                    var EMAIL_scope = $scope.EMAIL;
                    EMAIL_scope.from = success.data[0].email;
                    $scope.EMAIL = EMAIL_scope;
                    console.log("email from: " + $scope.EMAIL.from); /*|button_mapping|onsuccess|8C381EEB-DE37-DC6A-1C41-8DB48AFE2338||1288|*/
                })(success, $scope);

            }, function(error) { // callback to handle request error

            }, function(notify) { // notify callback, can fire few times
            });

        };

        /**
         * @function SENDMAIL
         */
        $scope.SENDMAIL = function() {
            var requestData = {};
            requestData = (function mapping1936($scope) {
                var requestData = {};
                requestData.params = Apperyio.EntityAPI('MailgunEmail_Mailgun_service.request.query', undefined, true);

                var EMAIL_scope = $scope.EMAIL;
                requestData.params.to = EMAIL_scope.to;
                requestData.params.subject = EMAIL_scope.subject;
                requestData.params.text = EMAIL_scope.body;
                requestData.params.from = EMAIL_scope.from;

                return requestData; /*|button_mapping|onbeforesend|BBF0FA9B-E05E-402E-953F-446198263FAB||1936|*/
            })($scope);

            // read more about using rest services: https://devcenter.appery.io/documentation/angularjs/rest-service/ 
            Apperyio.get("MailgunEmail_Mailgun_service")(requestData).then( /*|service_bookmark|bookmark|BBF0FA9B-E05E-402E-953F-446198263FAB||4035|*/

            function(success) { // success callback
                /*|button_mapping|onsuccess|BBF0FA9B-E05E-402E-953F-446198263FAB||3310|*/
                console.log("sent");
                $scope.eventsave();
                //$scope.showAlert("Email sent");
                //$scope.mailSent();
            }, function(error) { // callback to handle request error

            }, function(notify) { // notify callback, can fire few times
            });

        };

        /**
         * @function eventsave
         */
        $scope.eventsave = function() {
            var requestData = {};
            requestData = (function mapping4010($scope) {
                var requestData = {};
                requestData = Apperyio.EntityAPI('EVENTS2_create.request.data', undefined, true);

                var EVENT_scope = $scope.EVENT;
                var userid_scope = $scope.userid;
                var id_scope = $scope.id;
                var LorC_scope = $scope.LorC;
                requestData.DESCRIPTION = EVENT_scope.DESCRIPTION;
                requestData.TYPE = EVENT_scope.TYPE;
                requestData.STATUS = EVENT_scope.STATUS;
                requestData.RATING = EVENT_scope.RATING;
                requestData.NOTES = EVENT_scope.NOTES;
                requestData.TITLE = EVENT_scope.TITLE;
                requestData.STARTDATE = EVENT_scope.STARTDATE;
                requestData.ENDDATE = EVENT_scope.ENDDATE;
                requestData.CONTACT_DBID = EVENT_scope.CONTACT_DBID;
                requestData.SALESPERSON_DBID = userid_scope;
                requestData.COMPANY_DBID = id_scope;
                requestData.CLIENT_OR_LEAD = LorC_scope;

                return requestData; /*|button_mapping|onbeforesend|3C0F1256-877B-B6CA-B0D2-6FF8AD66D0F9||4010|*/
            })($scope);

            // read more about using rest services: https://devcenter.appery.io/documentation/angularjs/rest-service/ 
            Apperyio.get("EVENTS2_create")(requestData).then( /*|service_bookmark|bookmark|3C0F1256-877B-B6CA-B0D2-6FF8AD66D0F9||6317|*/

            function(success) { // success callback
                /*|button_mapping|onsuccess|3C0F1256-877B-B6CA-B0D2-6FF8AD66D0F9||7610|*/
                console.log("saved");
                Apperyio.navigateTo("EVENT_LIST", {
                    '_id': $scope.id,
                    'lorc': $scope.LorC
                });
            }, function(error) { // callback to handle request error
                console.log(error);

            }, function(notify) { // notify callback, can fire few times
                console.log(notify);
            });

        };

        /**
         * user controller variables
         */
        $scope.EVENT = Apperyio.EntityAPI('Event');
        $scope.EMAIL = Apperyio.EntityAPI('Email');
        $scope.from = Apperyio.EntityAPI('String');
        $scope.userid = Apperyio.EntityAPI('String');
        $scope.id = Apperyio.EntityAPI('String');
        $scope.LorC = Apperyio.EntityAPI('String');
    }

});