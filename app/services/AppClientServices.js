define(['require', 'lodash'], function (require, _) {

	var _ApperyioAppClientServices = function (Apperyio, AppClientWrapper) {

		this.methods = {
			login: function (options) {
				return AppClientWrapper.login(options['username'], options['password']);
			},
			logout: function (options) {
				return AppClientWrapper.logout();
			},
			goOnline: function (options) {
				return AppClientWrapper.goOnline();
			},
			goOffline: function (options) {
				return AppClientWrapper.goOffline();
			},
			getState: function (options) {
				return AppClientWrapper.getState();
			},
			retrySync: function (options) {
				return AppClientWrapper.retrySync();
			},
			resetFailedSync: function (options) {
				return AppClientWrapper.resetFailedSync();
			},			
		};
	};

	function AppClientServicesFactoryImpl(Apperyio, AppClientWrapper) {
		var AppClientServices = new _ApperyioAppClientServices(Apperyio, AppClientWrapper);
		return AppClientServices.methods;
	}

	function login(AppClientServices) {
		return AppClientServices.login;
	}
	
	function logout(AppClientServices) {
		return AppClientServices.logout;
	}
	
	function goOnline(AppClientServices) {
		return AppClientServices.goOnline;
	}

	function goOffline(AppClientServices) {
		return AppClientServices.goOffline;
	}

	function getState(AppClientServices) {
		return AppClientServices.getState;
	}

	function retrySync(AppClientServices) {
		return AppClientServices.retrySync;
	}

	function resetFailedSync(AppClientServices) {
		return AppClientServices.resetFailedSync;
	}	

	return [{
		type: 'factory',
		name: 'AppClientServices',
		deps: ['Apperyio', 'AppClientGeneralOperations', AppClientServicesFactoryImpl]
	}, {
		type: 'service',
		name: 'AppClientLogin',
		deps: ['AppClientServices', login]
	}, {
		type: 'service',
		name: 'AppClientLogout',
		deps: ['AppClientServices', logout]
	}, {
		type: 'service',
		name: 'AppClientGoOnline',
		deps: ['AppClientServices', goOnline]
	}, {
		type: 'service',
		name: 'AppClientGoOffline',
		deps: ['AppClientServices', goOffline]
	}, {
		type: 'service',
		name: 'AppClientGetState',
		deps: ['AppClientServices', getState]
	}, {
		type: 'service',
		name: 'AppClientRetrySync',
		deps: ['AppClientServices', retrySync]
	}, {
		type: 'service',
		name: 'AppClientResetFailedSync',
		deps: ['AppClientServices', resetFailedSync]
	}];
});