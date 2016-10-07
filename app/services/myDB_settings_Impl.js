define(['require', 'lodash'],

    function(require, _){
        /**
         * Implementation of the service
         * @returns {Function} - the main function executed each time the service is invoked
         */
        function myDB_settingsImpl(Apperyio) {
            /**
             * General function executed with service
             * @params {Object} passed_request - request data passed when invoking service
             * @returns {Object} - promise with then(), catch() and finally() methods
             */
            var invoke = function( passed_request ) {
                var $q = Apperyio.get('$q');              //about $q            https://docs.angularjs.org/api/ng/service/$q
                var $timeout = Apperyio.get('$timeout');  //about $timeout      https://docs.angularjs.org/api/ng/service/$timeout
                var deferred = $q.defer();                //about deferred api: https://docs.angularjs.org/api/ng/service/$q#the-deferred-api

                /**
                 * An example of how deferred works
                 * There could be any asynchronious code, after which deferred.resolve() or deferred.reject() is called
                 */
                $timeout(function() {
                    try {
                        var service = Apperyio.EntityAPI('myDB_settings'),
                            echo = service.echo,
                            defaults = service.request.data,
                            request,
                            response;

                        /**
                         * If there is no echo described in service, response is formed considering passed and default request
                         */
                        if (_.isUndefined(echo)) {
                            /**
                             * Passed request data structure IS RECOMMENDED to match the default request, described in service!
                             * An example of how to merge default request data with passed data (_.extend() should be used with flat objects only):
                             */
                            request = _.extend({}, defaults, passed_request);

                            /**
                             * CUSTOM CODE for processing request and forming responce could be placed here
                             * Response structure IS RECOMMENDED to match default response, described in service!
                             * An example of forming an empty response:
                             */
                            response = {};

                            deferred.resolve(response);
                        } else {
                            try {
                                echo = JSON.parse(echo);
                            } catch(e) {}
                            deferred.resolve(echo);
                        }
                    } catch(e) {
                        deferred.reject(e);
                    }
                }, 0);

                return deferred.promise;
            };

            return invoke;
        }

        /**
         * Using require.js assumes that information for service registration is returned next
         */
        return [{
            type: 'service',
            name: 'myDB_settings', //This name should be equal to the service's name
            deps: ['Apperyio', myDB_settingsImpl]
        }];

    });