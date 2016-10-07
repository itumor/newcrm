define(['require'], function(require) {

    /**
     * Controller for index_menu generated by Appery.io
     * @module index_menu
     */

    function controller($scope, Apperyio) {
        /**
         * User controller functions
         */
        /**
         * @function init
         */
        $scope.init = function() {
            $scope.visionStatus = {};
            $scope.Header.H = "Customer Relationship Management";
            console.log("***************************************************");
            Apperyio.User.setDefaultDB('57cc7ddce4b037a0e24b24e0');
            Apperyio.User.isLogged().then(function(result) {
                console.log("isloginsuccess_" + JSON.stringify(result));
                $scope.showFlag = true;
                return true;
            }, function(error) {
                console.log("error_" + JSON.stringify(error));
                $scope.showFlag = false;
                return false;
            });
        };

        /**
         * @function Headerf
         * @param H
         */
        $scope.Headerf = function(H) {
            //$scope.Header.H = H;
            //$translate.use(H);
            //console.log('test');
        };

        /**
         * @function side_menu
         */
        $scope.side_menu = function() {
/*Apperyio.User.setDefaultDB(Apperyio.Config.get('myDB_settings.database_id'));
console.log("Db settings : " + Apperyio.Config.get('myDB_settings.database_id') + "------------------------------------------");
console.log("Is the user authorized???" + Apperyio.User.getStatus() + " ************************************************");
if (Apperyio.User.getStatus() !== "authorized"){
    return true;}
else {
	return false;}*/
        };

        /**
         * @function out
         */
        $scope.out = function() {
            Apperyio.User.logout().then(function(result) {
                Apperyio.navigateTo('/loginPage.html');
            }, function(error) {
                alert("error_" + JSON.stringify(error));
            });
        };

        /**
         * @function hidden
         */
        $scope.hidden = function() {
/*Apperyio.User.setDefaultDB(Apperyio.Config.get('myDB_settings.database_id'));

if (Apperyio.User.getStatus() !== "authorized"){
    return true;}
else {
	return false;}*/
        };

        /**
         * user controller variables
         */
        $scope.Header = Apperyio.EntityAPI('Header_1');
        $scope.showFlag = Apperyio.EntityAPI('Boolean');
    }

    return ['$scope', 'Apperyio', controller];

});