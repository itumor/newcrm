define(['require', 'app'], function(require, APP) {

    /**
     * Controller for User_Profile generated by Appery.io
     * @module User_Profile
     */

    APP.controller('User_Profile', ['$scope', 'Apperyio', controller]);

    function controller($scope, Apperyio) {
        /**
         * User controller functions
         */
        /**
         * @function init
         */
        $scope.init = function() {
            //On load screen logic
            var userid = sessionStorage.getItem("userid");
            console.log(userid);
            $scope.nuserprofile.userid = userid;

            var sessionToken = sessionStorage.getItem("sessionToken");
            console.log(sessionToken);
            $scope.user.sessionToken = sessionToken;

            var requestData = {};
            requestData = (function mapping2829($scope) {
                var requestData = {};
                requestData.params = Apperyio.EntityAPI('UserDB_UserProfile_list_service.request.query', undefined, true);
                requestData.headers = Apperyio.EntityAPI('UserDB_UserProfile_list_service.request.headers', undefined, true);

                var nuserprofile_scope = $scope.nuserprofile;
                var user_scope = $scope.user;
                requestData.params.userid = nuserprofile_scope.userid;
                requestData.headers['X-Appery-Session-Token'] = user_scope.sessionToken;

                return requestData; /*|button_mapping|onbeforesend|13366E9B-AA77-7D2C-7A35-8BA6AD16F691||2829|*/
            })($scope);

            // read more about using rest services: https://devcenter.appery.io/documentation/angularjs/rest-service/ 
            Apperyio.get("UserDB_UserProfile_list_service")(requestData).then( /*|service_bookmark|bookmark|13366E9B-AA77-7D2C-7A35-8BA6AD16F691||3642|*/

            function(success) { // success callback
                (function mapping9157(success, $scope) {
                    var nuserprofile_scope = $scope.nuserprofile;
                    nuserprofile_scope._id = success.data[0]._id;
                    nuserprofile_scope.email = success.data[0].email;
                    nuserprofile_scope.country = success.data[0].country;
                    nuserprofile_scope.UserProfile = success.data[0].UserProfile;
                    nuserprofile_scope.userid = success.data[0].userid;
                    nuserprofile_scope.Full_Name = success.data[0].Full_Name;
                    nuserprofile_scope.User_Name = success.data[0].User_Name;
                    nuserprofile_scope.Title = success.data[0].Title;
                    $scope.nuserprofile = nuserprofile_scope; /*|button_mapping|onsuccess|13366E9B-AA77-7D2C-7A35-8BA6AD16F691||9157|*/
                })(success, $scope);
                $scope.$apply();

            }, function(error) { // callback to handle request error

            }, function(notify) { // notify callback, can fire few times
            });

        };

        /**
         * @function Update
         */
        $scope.Update = function() {
            var requestData = {};
            requestData = (function mapping1969($scope) {
                var requestData = {};
                requestData.headers = Apperyio.EntityAPI('UserDB_UserProfile_update_service.request.headers', undefined, true);
                requestData.params = Apperyio.EntityAPI('UserDB_UserProfile_update_service.request.query', undefined, true);
                requestData.data = Apperyio.EntityAPI('UserDB_UserProfile_update_service.request.body', undefined, true);

                var user_scope = $scope.user;
                var nuserprofile_scope = $scope.nuserprofile;
                requestData.headers['X-Appery-Session-Token'] = user_scope.sessionToken;
                requestData.params._id = nuserprofile_scope._id;
                requestData.data.email = nuserprofile_scope.email;
                requestData.data.country = nuserprofile_scope.country;
                requestData.data.UserProfile = nuserprofile_scope.UserProfile;
                requestData.data.userid = nuserprofile_scope.userid;
                requestData.data.Full_Name = nuserprofile_scope.Full_Name;
                requestData.data.Title = nuserprofile_scope.Title;

                return requestData; /*|button_mapping|onbeforesend|199AC044-D0F5-C605-BAE7-40CA0F62F928||1969|*/
            })($scope);

            // read more about using rest services: https://devcenter.appery.io/documentation/angularjs/rest-service/ 
            Apperyio.get("UserDB_UserProfile_update_service")(requestData).then( /*|service_bookmark|bookmark|199AC044-D0F5-C605-BAE7-40CA0F62F928||2095|*/

            function(success) { // success callback
                /*|button_mapping|onsuccess|199AC044-D0F5-C605-BAE7-40CA0F62F928||8644|*/

            }, function(error) { // callback to handle request error

            }, function(notify) { // notify callback, can fire few times
            });

        };

        /**
         * user controller variables
         */
        $scope.nuserprofile = Apperyio.EntityAPI('nuserprofile');
        $scope.user = Apperyio.EntityAPI('User');
    }

});