define(['require'], function(require) {
    return {

        /**
         * Application constants. This values generated from all service settings.
         * Also there are Push Notification settings there if Push Notifications enabled for this project.
         */

        /**
         * NEWCRM_settings
         * @property API_EXPRESS_API_KEY       - 
         */
        NEWCRM_settings: {
            "API_EXPRESS_API_KEY": "0d0bbf5f-3256-451b-bac7-5b2341d8e7d3"
        },
        /**
         * PushSettings
         * @property PushApiKey       - 
         */
        PushSettings: {
            "PushApiKey": "26881523-182f-4728-a702-4d421b4b5023"
        },
        /**
         * UserDB_settings
         * @property database_id       - 
         */
        UserDB_settings: {
            "database_id": "57cc7ddce4b037a0e24b24e0"
        },
        /**
         * AppClientSettings
         * @property domain       - 
         * @property apiKey       - 
         * @property currentState       - 
         * @property handleNetworkState       - 
         * @property version       - 
         */
        AppClientSettings: {
            "domain": "https://appery.io",
            "apiKey": "0d0bbf5f-3256-451b-bac7-5b2341d8e7d3",
            "currentState": "undefined",
            "handleNetworkState": "true",
            "version": "3"
        },
        /**
         * Settings
         */
        Settings: {},
        /**
         * appname_settings
         * @property database_id       - 
         */
        appname_settings: {
            "database_id": "5484f44de4b04851aa8107b7"
        },
        /**
         * myDB_settings
         * @property database_id       - 
         */
        myDB_settings: {
            "database_id": "57cc7ddce4b037a0e24b24e0"
        },
        /**
         * Push Notification settings.
         * @property {boolean} badge       - If badge enabled for push
         * @property {boolean} alert       - If alert enabled for push
         * @property {boolean} sound       - If sound enabled for push
         * @property {string} senderID     - Sender Id for android devices
         * @property {string} url          - URL of Apperyio push rest service
         * @property {string} guid         - Project GUID
         */
        PushNotification: {
            ios: {
                badge: true,
                alert: true,
                sound: true
            },
            android: {
                senderID: 822478939066
            },
            url: "https://api.appery.io/rest/push/reg",
            guid: "bc7daffe-3e0d-4c0e-b73f-a88cca878d61"
        }
    };
});