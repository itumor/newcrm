define(['require', 'app'], function(require, APP) {

    /**
     * Controller for NOTE_LIST generated by Appery.io
     * @module NOTE_LIST
     */

    APP.controller('NOTE_LIST', ['$scope', 'Apperyio', controller]);

    function controller($scope, Apperyio) {
        /**
         * User controller functions
         */
        /**
         * @function init
         */
        $scope.init = function() {
            //On load screen logic
            $scope.showSpinner1 = true;

            $scope.userid = sessionStorage.getItem("userid");
            $scope.userid = "57cc88a0e4b0ce1875dd5468";
            console.log($scope.userid);
            $scope.$apply();

            var requestData = {};
            requestData = (function mapping7456($scope) {
                var requestData = {};
                requestData = Apperyio.EntityAPI('NOTES_find.request.data', undefined, true);

                var userid_scope = $scope.userid;
                requestData.where.USER_ID = userid_scope;

                return requestData; /*|button_mapping|onbeforesend|C5293352-A3A2-00C7-6CB7-3C4213CF5482||7456|*/
            })($scope);

            // read more about using rest services: https://links.appery.io/ve-snippet-rest
            Apperyio.get("NOTES_find")(requestData).then( /*|service_bookmark|bookmark|C5293352-A3A2-00C7-6CB7-3C4213CF5482||4361|*/

            function(success) { // success callback
                (function mapping8565(success, $scope) {
                    var NOTES_scope = $scope.NOTES;
                    NOTES_scope = [];
                    for (var i = 0, l = success.length; i < l; i++) {
                        NOTES_scope[i] = Apperyio.EntityAPI('NOTES.[i]');
                        NOTES_scope[i] = success[i];
                    }
                    $scope.NOTES = NOTES_scope; /*|button_mapping|onsuccess|C5293352-A3A2-00C7-6CB7-3C4213CF5482||8565|*/

                    $scope.showSpinner1 = false;
                    $scope.$apply();
                })(success, $scope);

            }, function(error) { // callback to handle request error
                console.log(error);
            }, function(notify) { // notify callback, can fire few times
                console.log(notify);
            });

        };

        /**
         * @function DETAILS
         * @param _id
         */
        $scope.DETAILS = function(_id) {
            console.log(_id);
            Apperyio.navigateTo("NOTE_DETAILS", {
                '_id': _id
            });
        };

        /**
         * @function EDIT
         * @param _id
         */
        $scope.EDIT = function(_id) {
            console.log(_id);
            Apperyio.navigateTo("NOTE_EDIT", {
                '_id': _id
            });
        };

        /**
         * @function DELETE
         * @param _id
         */
        $scope.DELETE = function(_id) {
            var requestData = {};
            requestData = (function mapping9188($scope) {
                var requestData = {};
                requestData = Apperyio.EntityAPI('NOTES_delete.request.data', undefined, true);

                requestData.DBID = _id;

                return requestData; /*|button_mapping|onbeforesend|5D67D253-C696-52C8-4C7D-21A766CB151C||9188|*/
            })($scope);

            // read more about using rest services: https://links.appery.io/ve-snippet-rest
            Apperyio.get("NOTES_delete")(requestData).then( /*|service_bookmark|bookmark|5D67D253-C696-52C8-4C7D-21A766CB151C||3655|*/

            function(success) { // success callback
                /*|button_mapping|onsuccess|5D67D253-C696-52C8-4C7D-21A766CB151C||1570|*/

                console.log("success");
                $scope.init();
            }, function(error) { // callback to handle request error
                console.log(error);
            }, function(notify) { // notify callback, can fire few times
                console.log(notify);
            });

        };

        /**
         * user controller variables
         */
        $scope.showSpinner1 = Apperyio.EntityAPI('Boolean');
        $scope.NOTE = Apperyio.EntityAPI('NOTE');
        $scope.NOTES = Apperyio.EntityAPI('NOTES');
        $scope.Token = Apperyio.EntityAPI('String');
        $scope.userid = Apperyio.EntityAPI('String');
    }

});