define( ['require', 'ms-client-sdk'], function( require, appClient ){

	function func( Apperyio ){

		return function (data) {
			var AppClientInitOptions = {
				"domain": Apperyio.Config.get("AppClientSettings.domain"),
				"apiKey": Apperyio.Config.get("AppClientSettings.apiKey"),
				"currentState": Apperyio.Config.get("AppClientSettings.currentState"),
				"handleNetworkState": Apperyio.Config.get("AppClientSettings.handleNetworkState"),
				"isDataValidationEnabled" : false
			};
			if(!_.isUndefined(AppClientInitOptions.handleNetworkState) && _.isString(AppClientInitOptions.handleNetworkState)){
				AppClientInitOptions.handleNetworkState = AppClientInitOptions.handleNetworkState.toLowerCase() === "true";
			}
			return appClient.init(AppClientInitOptions);
		};

	}

	var _ApperyioAppClient = function (Apperyio, mssdk) {
		var Q = Apperyio.getLibrary("q");
		this.methods = {
			goOnline: function () {
				return this.invokeAfterSuccessInit(function(success){
                	return success.goOnline();
                });
			},

			goOffline: function () {
				return this.invokeAfterSuccessInit(function(success){
                	return success.goOffline();
                });
			},

			setSessionToken: function (sessionToken) {
				return this.invokeAfterSuccessInit(function(success){
                    return success.setSessionToken(sessionToken);
                });
			},

			revertLocalChanges: function(){
				return this.invokeAppClientMethod("revertLocalChanges");
			},

			retrySync: function () {
				return this.invokeAppClientMethod("retrySync");
			},

			resetFailedSync: function () {
				return this.invokeAppClientMethod("resetFailedSync");
			},

			getState: function () {
				return this.invokeAfterInit(function(){
                   return {
                   	   state: appClient.state
                   };
                });
			},

			login: function (username, password){
				return this.invokeAfterSuccessInit(function(success){
                   return success.login(username, password);
                });
			},

			logout: function (){
				return this.invokeAfterSuccessInit(function(success){
                   return success.logout();
                });
			},

			instance: function (){
				return Q(appClient);
			},

			invokeAfterInit: function(func){
				return mssdk()["catch"](function(){
                }).then(func);
			},

			invokeAfterSuccessInit: function(func){
				return mssdk().then(func);
			},

			invokeAppClientMethod: function(method){
				var promise;
				if (!appClient.isInitialized()) {
					promise = this.invokeAfterInit(appClient[method]);
				}else{
					promise = appClient[method]();
				}
				return promise;
			}
		};
	};

	function AppClientFactoryImpl(Apperyio, mssdk) {
		var AppClient = new _ApperyioAppClient(Apperyio, mssdk);
		return AppClient.methods;
	}

	return [{
		// name for angular resource
		name: 'mssdk',
		// type of angular resource [factory, filter, service]
		type: 'service',
		// angular dependency injection array
		deps: [ 'Apperyio', func ]
	}, {
		type: 'factory',
		name: 'AppClientGeneralOperations',
		deps: ['Apperyio', 'mssdk', AppClientFactoryImpl]
	}];

});
