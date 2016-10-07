define(['require'], function(require) {
    /**
     * Routing configuration generated by Appery.io
     */

    /**
     * Default route
     * @type {{redirectTo: string}}
     */
    var default_route = {
        redirectTo: '/Login.html'
    };

/**
     * Routing configuration object
     * @property {object} default                               - Default routing configuration
     * @property {string} default.redirectTo                    - Default routing URL
     * @property {object} when                                  - Routing configuration for different URLs
     * @property {object} when./                                - Routing configuration for "/" URL
     * @property {string} when./.redirectTo                     - Redirect to default routing URL
     * @property {object} when["/Home.html"]    - Routing configuration for /Home.html URL
     * @property {string} when["/Home.html"].c  - Controller for /Home.html URL
     * @property {string} when["/Home.html"].t  - Template for /Home.html URL
     * @property {string[]} when["/Home.html"].d  - Dependencies for /Home.html URL
     * @property {object} when["/Profile.html"]    - Routing configuration for /Profile.html URL
     * @property {string} when["/Profile.html"].c  - Controller for /Profile.html URL
     * @property {string} when["/Profile.html"].t  - Template for /Profile.html URL
     * @property {string[]} when["/Profile.html"].d  - Dependencies for /Profile.html URL
     * @property {object} when["/Info.html"]    - Routing configuration for /Info.html URL
     * @property {string} when["/Info.html"].c  - Controller for /Info.html URL
     * @property {string} when["/Info.html"].t  - Template for /Info.html URL
     * @property {string[]} when["/Info.html"].d  - Dependencies for /Info.html URL
     * @property {object} when["/Login.html"]    - Routing configuration for /Login.html URL
     * @property {string} when["/Login.html"].c  - Controller for /Login.html URL
     * @property {string} when["/Login.html"].t  - Template for /Login.html URL
     * @property {string[]} when["/Login.html"].d  - Dependencies for /Login.html URL
     * @property {object} when["/Welcome.html"]    - Routing configuration for /Welcome.html URL
     * @property {string} when["/Welcome.html"].c  - Controller for /Welcome.html URL
     * @property {string} when["/Welcome.html"].t  - Template for /Welcome.html URL
     * @property {string[]} when["/Welcome.html"].d  - Dependencies for /Welcome.html URL
     * @property {object} when["/Register.html"]    - Routing configuration for /Register.html URL
     * @property {string} when["/Register.html"].c  - Controller for /Register.html URL
     * @property {string} when["/Register.html"].t  - Template for /Register.html URL
     * @property {string[]} when["/Register.html"].d  - Dependencies for /Register.html URL
     * @property {object} when["/translationtest.html"]    - Routing configuration for /translationtest.html URL
     * @property {string} when["/translationtest.html"].c  - Controller for /translationtest.html URL
     * @property {string} when["/translationtest.html"].t  - Template for /translationtest.html URL
     * @property {string[]} when["/translationtest.html"].d  - Dependencies for /translationtest.html URL
     * @property {object} when["/LEAD_LIST.html"]    - Routing configuration for /LEAD_LIST.html URL
     * @property {string} when["/LEAD_LIST.html"].c  - Controller for /LEAD_LIST.html URL
     * @property {string} when["/LEAD_LIST.html"].t  - Template for /LEAD_LIST.html URL
     * @property {string[]} when["/LEAD_LIST.html"].d  - Dependencies for /LEAD_LIST.html URL
     * @property {object} when["/LEAD_CREATE_Oracle.html"]    - Routing configuration for /LEAD_CREATE_Oracle.html URL
     * @property {string} when["/LEAD_CREATE_Oracle.html"].c  - Controller for /LEAD_CREATE_Oracle.html URL
     * @property {string} when["/LEAD_CREATE_Oracle.html"].t  - Template for /LEAD_CREATE_Oracle.html URL
     * @property {string[]} when["/LEAD_CREATE_Oracle.html"].d  - Dependencies for /LEAD_CREATE_Oracle.html URL
     * @property {object} when["/LEAD_DETAILS_Oracle.html/:_id"]    - Routing configuration for /LEAD_DETAILS_Oracle.html/:_id URL
     * @property {string} when["/LEAD_DETAILS_Oracle.html/:_id"].c  - Controller for /LEAD_DETAILS_Oracle.html/:_id URL
     * @property {string} when["/LEAD_DETAILS_Oracle.html/:_id"].t  - Template for /LEAD_DETAILS_Oracle.html/:_id URL
     * @property {string[]} when["/LEAD_DETAILS_Oracle.html/:_id"].d  - Dependencies for /LEAD_DETAILS_Oracle.html/:_id URL
     * @property {object} when["/LEAD_EDIT_Oracle.html/:_id"]    - Routing configuration for /LEAD_EDIT_Oracle.html/:_id URL
     * @property {string} when["/LEAD_EDIT_Oracle.html/:_id"].c  - Controller for /LEAD_EDIT_Oracle.html/:_id URL
     * @property {string} when["/LEAD_EDIT_Oracle.html/:_id"].t  - Template for /LEAD_EDIT_Oracle.html/:_id URL
     * @property {string[]} when["/LEAD_EDIT_Oracle.html/:_id"].d  - Dependencies for /LEAD_EDIT_Oracle.html/:_id URL
     * @property {object} when["/LEAD_LIST_Oracle.html"]    - Routing configuration for /LEAD_LIST_Oracle.html URL
     * @property {string} when["/LEAD_LIST_Oracle.html"].c  - Controller for /LEAD_LIST_Oracle.html URL
     * @property {string} when["/LEAD_LIST_Oracle.html"].t  - Template for /LEAD_LIST_Oracle.html URL
     * @property {string[]} when["/LEAD_LIST_Oracle.html"].d  - Dependencies for /LEAD_LIST_Oracle.html URL
     * @property {object} when["/menu.html"]    - Routing configuration for /menu.html URL
     * @property {string} when["/menu.html"].c  - Controller for /menu.html URL
     * @property {string} when["/menu.html"].t  - Template for /menu.html URL
     * @property {string[]} when["/menu.html"].d  - Dependencies for /menu.html URL
     * @property {object} when["/mailgun.html"]    - Routing configuration for /mailgun.html URL
     * @property {string} when["/mailgun.html"].c  - Controller for /mailgun.html URL
     * @property {string} when["/mailgun.html"].t  - Template for /mailgun.html URL
     * @property {string[]} when["/mailgun.html"].d  - Dependencies for /mailgun.html URL
     * @property {object} when["/Calendar.html"]    - Routing configuration for /Calendar.html URL
     * @property {string} when["/Calendar.html"].c  - Controller for /Calendar.html URL
     * @property {string} when["/Calendar.html"].t  - Template for /Calendar.html URL
     * @property {string[]} when["/Calendar.html"].d  - Dependencies for /Calendar.html URL
     * @property {object} when["/CSS_Calendar.html"]    - Routing configuration for /CSS_Calendar.html URL
     * @property {string} when["/CSS_Calendar.html"].c  - Controller for /CSS_Calendar.html URL
     * @property {string} when["/CSS_Calendar.html"].t  - Template for /CSS_Calendar.html URL
     * @property {string[]} when["/CSS_Calendar.html"].d  - Dependencies for /CSS_Calendar.html URL
     * @property {object} when["/fullcalendar.html"]    - Routing configuration for /fullcalendar.html URL
     * @property {string} when["/fullcalendar.html"].c  - Controller for /fullcalendar.html URL
     * @property {string} when["/fullcalendar.html"].t  - Template for /fullcalendar.html URL
     * @property {string[]} when["/fullcalendar.html"].d  - Dependencies for /fullcalendar.html URL
     * @property {object} when["/chart.html"]    - Routing configuration for /chart.html URL
     * @property {string} when["/chart.html"].c  - Controller for /chart.html URL
     * @property {string} when["/chart.html"].t  - Template for /chart.html URL
     * @property {string[]} when["/chart.html"].d  - Dependencies for /chart.html URL
     * @property {object} when["/ifcalendar.html"]    - Routing configuration for /ifcalendar.html URL
     * @property {string} when["/ifcalendar.html"].c  - Controller for /ifcalendar.html URL
     * @property {string} when["/ifcalendar.html"].t  - Template for /ifcalendar.html URL
     * @property {string[]} when["/ifcalendar.html"].d  - Dependencies for /ifcalendar.html URL
     * @property {object} when["/Contacts.html/:_id/:lorc"]    - Routing configuration for /Contacts.html/:_id/:lorc URL
     * @property {string} when["/Contacts.html/:_id/:lorc"].c  - Controller for /Contacts.html/:_id/:lorc URL
     * @property {string} when["/Contacts.html/:_id/:lorc"].t  - Template for /Contacts.html/:_id/:lorc URL
     * @property {string[]} when["/Contacts.html/:_id/:lorc"].d  - Dependencies for /Contacts.html/:_id/:lorc URL
     * @property {object} when["/Events.html"]    - Routing configuration for /Events.html URL
     * @property {string} when["/Events.html"].c  - Controller for /Events.html URL
     * @property {string} when["/Events.html"].t  - Template for /Events.html URL
     * @property {string[]} when["/Events.html"].d  - Dependencies for /Events.html URL
     * @property {object} when["/Proposals.html"]    - Routing configuration for /Proposals.html URL
     * @property {string} when["/Proposals.html"].c  - Controller for /Proposals.html URL
     * @property {string} when["/Proposals.html"].t  - Template for /Proposals.html URL
     * @property {string[]} when["/Proposals.html"].d  - Dependencies for /Proposals.html URL
     * @property {object} when["/CONTACT_CREATE.html/:_id/:lorc"]    - Routing configuration for /CONTACT_CREATE.html/:_id/:lorc URL
     * @property {string} when["/CONTACT_CREATE.html/:_id/:lorc"].c  - Controller for /CONTACT_CREATE.html/:_id/:lorc URL
     * @property {string} when["/CONTACT_CREATE.html/:_id/:lorc"].t  - Template for /CONTACT_CREATE.html/:_id/:lorc URL
     * @property {string[]} when["/CONTACT_CREATE.html/:_id/:lorc"].d  - Dependencies for /CONTACT_CREATE.html/:_id/:lorc URL
     * @property {object} when["/CONTACT_DETAILS.html/:_id"]    - Routing configuration for /CONTACT_DETAILS.html/:_id URL
     * @property {string} when["/CONTACT_DETAILS.html/:_id"].c  - Controller for /CONTACT_DETAILS.html/:_id URL
     * @property {string} when["/CONTACT_DETAILS.html/:_id"].t  - Template for /CONTACT_DETAILS.html/:_id URL
     * @property {string[]} when["/CONTACT_DETAILS.html/:_id"].d  - Dependencies for /CONTACT_DETAILS.html/:_id URL
     * @property {object} when["/CONTACT_EDIT.html/:_id"]    - Routing configuration for /CONTACT_EDIT.html/:_id URL
     * @property {string} when["/CONTACT_EDIT.html/:_id"].c  - Controller for /CONTACT_EDIT.html/:_id URL
     * @property {string} when["/CONTACT_EDIT.html/:_id"].t  - Template for /CONTACT_EDIT.html/:_id URL
     * @property {string[]} when["/CONTACT_EDIT.html/:_id"].d  - Dependencies for /CONTACT_EDIT.html/:_id URL
     * @property {object} when["/CLIENT_LIST.html/"]    - Routing configuration for /CLIENT_LIST.html/ URL
     * @property {string} when["/CLIENT_LIST.html/"].c  - Controller for /CLIENT_LIST.html/ URL
     * @property {string} when["/CLIENT_LIST.html/"].t  - Template for /CLIENT_LIST.html/ URL
     * @property {string[]} when["/CLIENT_LIST.html/"].d  - Dependencies for /CLIENT_LIST.html/ URL
     * @property {object} when["/CLIENT_CREATE.html"]    - Routing configuration for /CLIENT_CREATE.html URL
     * @property {string} when["/CLIENT_CREATE.html"].c  - Controller for /CLIENT_CREATE.html URL
     * @property {string} when["/CLIENT_CREATE.html"].t  - Template for /CLIENT_CREATE.html URL
     * @property {string[]} when["/CLIENT_CREATE.html"].d  - Dependencies for /CLIENT_CREATE.html URL
     * @property {object} when["/CLIENT_DETAILS.html/:_id"]    - Routing configuration for /CLIENT_DETAILS.html/:_id URL
     * @property {string} when["/CLIENT_DETAILS.html/:_id"].c  - Controller for /CLIENT_DETAILS.html/:_id URL
     * @property {string} when["/CLIENT_DETAILS.html/:_id"].t  - Template for /CLIENT_DETAILS.html/:_id URL
     * @property {string[]} when["/CLIENT_DETAILS.html/:_id"].d  - Dependencies for /CLIENT_DETAILS.html/:_id URL
     * @property {object} when["/CLIENT_EDIT.html/:_id"]    - Routing configuration for /CLIENT_EDIT.html/:_id URL
     * @property {string} when["/CLIENT_EDIT.html/:_id"].c  - Controller for /CLIENT_EDIT.html/:_id URL
     * @property {string} when["/CLIENT_EDIT.html/:_id"].t  - Template for /CLIENT_EDIT.html/:_id URL
     * @property {string[]} when["/CLIENT_EDIT.html/:_id"].d  - Dependencies for /CLIENT_EDIT.html/:_id URL
     * @property {object} when["/chartjs.html"]    - Routing configuration for /chartjs.html URL
     * @property {string} when["/chartjs.html"].c  - Controller for /chartjs.html URL
     * @property {string} when["/chartjs.html"].t  - Template for /chartjs.html URL
     * @property {string[]} when["/chartjs.html"].d  - Dependencies for /chartjs.html URL
     * @property {object} when["/page1.html"]    - Routing configuration for /page1.html URL
     * @property {string} when["/page1.html"].c  - Controller for /page1.html URL
     * @property {string} when["/page1.html"].t  - Template for /page1.html URL
     * @property {string[]} when["/page1.html"].d  - Dependencies for /page1.html URL
     * @property {object} when["/page2.html"]    - Routing configuration for /page2.html URL
     * @property {string} when["/page2.html"].c  - Controller for /page2.html URL
     * @property {string} when["/page2.html"].t  - Template for /page2.html URL
     * @property {string[]} when["/page2.html"].d  - Dependencies for /page2.html URL
     * @property {object} when["/Calendar_API.html"]    - Routing configuration for /Calendar_API.html URL
     * @property {string} when["/Calendar_API.html"].c  - Controller for /Calendar_API.html URL
     * @property {string} when["/Calendar_API.html"].t  - Template for /Calendar_API.html URL
     * @property {string[]} when["/Calendar_API.html"].d  - Dependencies for /Calendar_API.html URL
     * @property {object} when["/push_notifications.html"]    - Routing configuration for /push_notifications.html URL
     * @property {string} when["/push_notifications.html"].c  - Controller for /push_notifications.html URL
     * @property {string} when["/push_notifications.html"].t  - Template for /push_notifications.html URL
     * @property {string[]} when["/push_notifications.html"].d  - Dependencies for /push_notifications.html URL
     * @property {object} when["/USER_CONTACTS.html"]    - Routing configuration for /USER_CONTACTS.html URL
     * @property {string} when["/USER_CONTACTS.html"].c  - Controller for /USER_CONTACTS.html URL
     * @property {string} when["/USER_CONTACTS.html"].t  - Template for /USER_CONTACTS.html URL
     * @property {string[]} when["/USER_CONTACTS.html"].d  - Dependencies for /USER_CONTACTS.html URL
     * @property {object} when["/CONTACT_USER_CREATE.html"]    - Routing configuration for /CONTACT_USER_CREATE.html URL
     * @property {string} when["/CONTACT_USER_CREATE.html"].c  - Controller for /CONTACT_USER_CREATE.html URL
     * @property {string} when["/CONTACT_USER_CREATE.html"].t  - Template for /CONTACT_USER_CREATE.html URL
     * @property {string[]} when["/CONTACT_USER_CREATE.html"].d  - Dependencies for /CONTACT_USER_CREATE.html URL
     * @property {object} when["/EVENT_LIST.html/:_id/:_lorc"]    - Routing configuration for /EVENT_LIST.html/:_id/:_lorc URL
     * @property {string} when["/EVENT_LIST.html/:_id/:_lorc"].c  - Controller for /EVENT_LIST.html/:_id/:_lorc URL
     * @property {string} when["/EVENT_LIST.html/:_id/:_lorc"].t  - Template for /EVENT_LIST.html/:_id/:_lorc URL
     * @property {string[]} when["/EVENT_LIST.html/:_id/:_lorc"].d  - Dependencies for /EVENT_LIST.html/:_id/:_lorc URL
     * @property {object} when["/EVENT_CREATE.html/:_id/:_lorc"]    - Routing configuration for /EVENT_CREATE.html/:_id/:_lorc URL
     * @property {string} when["/EVENT_CREATE.html/:_id/:_lorc"].c  - Controller for /EVENT_CREATE.html/:_id/:_lorc URL
     * @property {string} when["/EVENT_CREATE.html/:_id/:_lorc"].t  - Template for /EVENT_CREATE.html/:_id/:_lorc URL
     * @property {string[]} when["/EVENT_CREATE.html/:_id/:_lorc"].d  - Dependencies for /EVENT_CREATE.html/:_id/:_lorc URL
     * @property {object} when["/EVENT_DETAILS.html/:_id"]    - Routing configuration for /EVENT_DETAILS.html/:_id URL
     * @property {string} when["/EVENT_DETAILS.html/:_id"].c  - Controller for /EVENT_DETAILS.html/:_id URL
     * @property {string} when["/EVENT_DETAILS.html/:_id"].t  - Template for /EVENT_DETAILS.html/:_id URL
     * @property {string[]} when["/EVENT_DETAILS.html/:_id"].d  - Dependencies for /EVENT_DETAILS.html/:_id URL
     * @property {object} when["/EVENT_EDIT.html"]    - Routing configuration for /EVENT_EDIT.html URL
     * @property {string} when["/EVENT_EDIT.html"].c  - Controller for /EVENT_EDIT.html URL
     * @property {string} when["/EVENT_EDIT.html"].t  - Template for /EVENT_EDIT.html URL
     * @property {string[]} when["/EVENT_EDIT.html"].d  - Dependencies for /EVENT_EDIT.html URL
     * @property {object} when["/User_Profile.html"]    - Routing configuration for /User_Profile.html URL
     * @property {string} when["/User_Profile.html"].c  - Controller for /User_Profile.html URL
     * @property {string} when["/User_Profile.html"].t  - Template for /User_Profile.html URL
     * @property {string[]} when["/User_Profile.html"].d  - Dependencies for /User_Profile.html URL
     * @property {object} when["/NOTE_CREATE.html"]    - Routing configuration for /NOTE_CREATE.html URL
     * @property {string} when["/NOTE_CREATE.html"].c  - Controller for /NOTE_CREATE.html URL
     * @property {string} when["/NOTE_CREATE.html"].t  - Template for /NOTE_CREATE.html URL
     * @property {string[]} when["/NOTE_CREATE.html"].d  - Dependencies for /NOTE_CREATE.html URL
     * @property {object} when["/NOTE_DETAILS.html/:_id"]    - Routing configuration for /NOTE_DETAILS.html/:_id URL
     * @property {string} when["/NOTE_DETAILS.html/:_id"].c  - Controller for /NOTE_DETAILS.html/:_id URL
     * @property {string} when["/NOTE_DETAILS.html/:_id"].t  - Template for /NOTE_DETAILS.html/:_id URL
     * @property {string[]} when["/NOTE_DETAILS.html/:_id"].d  - Dependencies for /NOTE_DETAILS.html/:_id URL
     * @property {object} when["/NOTE_EDIT.html/:_id"]    - Routing configuration for /NOTE_EDIT.html/:_id URL
     * @property {string} when["/NOTE_EDIT.html/:_id"].c  - Controller for /NOTE_EDIT.html/:_id URL
     * @property {string} when["/NOTE_EDIT.html/:_id"].t  - Template for /NOTE_EDIT.html/:_id URL
     * @property {string[]} when["/NOTE_EDIT.html/:_id"].d  - Dependencies for /NOTE_EDIT.html/:_id URL
     * @property {object} when["/NOTE_LIST.html"]    - Routing configuration for /NOTE_LIST.html URL
     * @property {string} when["/NOTE_LIST.html"].c  - Controller for /NOTE_LIST.html URL
     * @property {string} when["/NOTE_LIST.html"].t  - Template for /NOTE_LIST.html URL
     * @property {string[]} when["/NOTE_LIST.html"].d  - Dependencies for /NOTE_LIST.html URL
     * @property {object} when["/ATTACHED_NOTE_CREATE.html/:_id/:type"]    - Routing configuration for /ATTACHED_NOTE_CREATE.html/:_id/:type URL
     * @property {string} when["/ATTACHED_NOTE_CREATE.html/:_id/:type"].c  - Controller for /ATTACHED_NOTE_CREATE.html/:_id/:type URL
     * @property {string} when["/ATTACHED_NOTE_CREATE.html/:_id/:type"].t  - Template for /ATTACHED_NOTE_CREATE.html/:_id/:type URL
     * @property {string[]} when["/ATTACHED_NOTE_CREATE.html/:_id/:type"].d  - Dependencies for /ATTACHED_NOTE_CREATE.html/:_id/:type URL
     * @property {object} when["/ATTACHED_NOTE_DETAILS.html/:_id"]    - Routing configuration for /ATTACHED_NOTE_DETAILS.html/:_id URL
     * @property {string} when["/ATTACHED_NOTE_DETAILS.html/:_id"].c  - Controller for /ATTACHED_NOTE_DETAILS.html/:_id URL
     * @property {string} when["/ATTACHED_NOTE_DETAILS.html/:_id"].t  - Template for /ATTACHED_NOTE_DETAILS.html/:_id URL
     * @property {string[]} when["/ATTACHED_NOTE_DETAILS.html/:_id"].d  - Dependencies for /ATTACHED_NOTE_DETAILS.html/:_id URL
     * @property {object} when["/ATTACHED_NOTE_EDIT.html/:_id"]    - Routing configuration for /ATTACHED_NOTE_EDIT.html/:_id URL
     * @property {string} when["/ATTACHED_NOTE_EDIT.html/:_id"].c  - Controller for /ATTACHED_NOTE_EDIT.html/:_id URL
     * @property {string} when["/ATTACHED_NOTE_EDIT.html/:_id"].t  - Template for /ATTACHED_NOTE_EDIT.html/:_id URL
     * @property {string[]} when["/ATTACHED_NOTE_EDIT.html/:_id"].d  - Dependencies for /ATTACHED_NOTE_EDIT.html/:_id URL
     * @property {object} when["/ATTACHED_NOTE_LIST.html/:_id/:type"]    - Routing configuration for /ATTACHED_NOTE_LIST.html/:_id/:type URL
     * @property {string} when["/ATTACHED_NOTE_LIST.html/:_id/:type"].c  - Controller for /ATTACHED_NOTE_LIST.html/:_id/:type URL
     * @property {string} when["/ATTACHED_NOTE_LIST.html/:_id/:type"].t  - Template for /ATTACHED_NOTE_LIST.html/:_id/:type URL
     * @property {string[]} when["/ATTACHED_NOTE_LIST.html/:_id/:type"].d  - Dependencies for /ATTACHED_NOTE_LIST.html/:_id/:type URL

     * @property {object} otherwise                             - Routing configuration for another URL
     * @property {object} otherwise.redirectTo                  - Redirect to default routing URL
     * @property {object} route_names                           - Route aliases
     * @property {string} route_names.["Home"]  - "Home" is an alias for "/Home.html" routing
     * @property {string} route_names.["Profile"]  - "Profile" is an alias for "/Profile.html" routing
     * @property {string} route_names.["Info"]  - "Info" is an alias for "/Info.html" routing
     * @property {string} route_names.["Login"]  - "Login" is an alias for "/Login.html" routing
     * @property {string} route_names.["Welcome"]  - "Welcome" is an alias for "/Welcome.html" routing
     * @property {string} route_names.["Register"]  - "Register" is an alias for "/Register.html" routing
     * @property {string} route_names.["translationtest"]  - "translationtest" is an alias for "/translationtest.html" routing
     * @property {string} route_names.["LEAD"]  - "LEAD" is an alias for "/LEAD_LIST.html" routing
     * @property {string} route_names.["LEAD_CREATE_Oracle"]  - "LEAD_CREATE_Oracle" is an alias for "/LEAD_CREATE_Oracle.html" routing
     * @property {string} route_names.["LEAD_DETAILS_Oracle"]  - "LEAD_DETAILS_Oracle" is an alias for "/LEAD_DETAILS_Oracle.html/:_id" routing
     * @property {string} route_names.["LEAD_EDIT_Oracle"]  - "LEAD_EDIT_Oracle" is an alias for "/LEAD_EDIT_Oracle.html/:_id" routing
     * @property {string} route_names.["LEAD_LIST_Oracle"]  - "LEAD_LIST_Oracle" is an alias for "/LEAD_LIST_Oracle.html" routing
     * @property {string} route_names.["menu"]  - "menu" is an alias for "/menu.html" routing
     * @property {string} route_names.["mailgun"]  - "mailgun" is an alias for "/mailgun.html" routing
     * @property {string} route_names.["Calendar"]  - "Calendar" is an alias for "/Calendar.html" routing
     * @property {string} route_names.["CSS_Calendar"]  - "CSS_Calendar" is an alias for "/CSS_Calendar.html" routing
     * @property {string} route_names.["fullcalendar"]  - "fullcalendar" is an alias for "/fullcalendar.html" routing
     * @property {string} route_names.["chart"]  - "chart" is an alias for "/chart.html" routing
     * @property {string} route_names.["ifcalendar"]  - "ifcalendar" is an alias for "/ifcalendar.html" routing
     * @property {string} route_names.["Contacts"]  - "Contacts" is an alias for "/Contacts.html/:_id/:lorc" routing
     * @property {string} route_names.["Events"]  - "Events" is an alias for "/Events.html" routing
     * @property {string} route_names.["Proposals"]  - "Proposals" is an alias for "/Proposals.html" routing
     * @property {string} route_names.["CONTACT_CREATE"]  - "CONTACT_CREATE" is an alias for "/CONTACT_CREATE.html/:_id/:lorc" routing
     * @property {string} route_names.["CONTACT_DETAILS"]  - "CONTACT_DETAILS" is an alias for "/CONTACT_DETAILS.html/:_id" routing
     * @property {string} route_names.["CONTACT_EDIT"]  - "CONTACT_EDIT" is an alias for "/CONTACT_EDIT.html/:_id" routing
     * @property {string} route_names.["CLIENT_LIST"]  - "CLIENT_LIST" is an alias for "/CLIENT_LIST.html/" routing
     * @property {string} route_names.["CLIENT_CREATE"]  - "CLIENT_CREATE" is an alias for "/CLIENT_CREATE.html" routing
     * @property {string} route_names.["CLIENT_DETAILS"]  - "CLIENT_DETAILS" is an alias for "/CLIENT_DETAILS.html/:_id" routing
     * @property {string} route_names.["CLIENT_EDIT"]  - "CLIENT_EDIT" is an alias for "/CLIENT_EDIT.html/:_id" routing
     * @property {string} route_names.["chartjs"]  - "chartjs" is an alias for "/chartjs.html" routing
     * @property {string} route_names.["page1"]  - "page1" is an alias for "/page1.html" routing
     * @property {string} route_names.["page2"]  - "page2" is an alias for "/page2.html" routing
     * @property {string} route_names.["Calendar_API"]  - "Calendar_API" is an alias for "/Calendar_API.html" routing
     * @property {string} route_names.["push_notifications"]  - "push_notifications" is an alias for "/push_notifications.html" routing
     * @property {string} route_names.["USER_CONTACTS"]  - "USER_CONTACTS" is an alias for "/USER_CONTACTS.html" routing
     * @property {string} route_names.["CONTACT_USER_CREATE"]  - "CONTACT_USER_CREATE" is an alias for "/CONTACT_USER_CREATE.html" routing
     * @property {string} route_names.["EVENT_LIST"]  - "EVENT_LIST" is an alias for "/EVENT_LIST.html/:_id/:_lorc" routing
     * @property {string} route_names.["EVENT_CREATE"]  - "EVENT_CREATE" is an alias for "/EVENT_CREATE.html/:_id/:_lorc" routing
     * @property {string} route_names.["EVENT_DETAILS"]  - "EVENT_DETAILS" is an alias for "/EVENT_DETAILS.html/:_id" routing
     * @property {string} route_names.["EVENT_EDIT"]  - "EVENT_EDIT" is an alias for "/EVENT_EDIT.html" routing
     * @property {string} route_names.["User_Profile"]  - "User_Profile" is an alias for "/User_Profile.html" routing
     * @property {string} route_names.["NOTE_CREATE"]  - "NOTE_CREATE" is an alias for "/NOTE_CREATE.html" routing
     * @property {string} route_names.["NOTE_DETAILS"]  - "NOTE_DETAILS" is an alias for "/NOTE_DETAILS.html/:_id" routing
     * @property {string} route_names.["NOTE_EDIT"]  - "NOTE_EDIT" is an alias for "/NOTE_EDIT.html/:_id" routing
     * @property {string} route_names.["NOTE_LIST"]  - "NOTE_LIST" is an alias for "/NOTE_LIST.html" routing
     * @property {string} route_names.["ATTACHED_NOTE_CREATE"]  - "ATTACHED_NOTE_CREATE" is an alias for "/ATTACHED_NOTE_CREATE.html/:_id/:type" routing
     * @property {string} route_names.["ATTACHED_NOTE_DETAILS"]  - "ATTACHED_NOTE_DETAILS" is an alias for "/ATTACHED_NOTE_DETAILS.html/:_id" routing
     * @property {string} route_names.["ATTACHED_NOTE_EDIT"]  - "ATTACHED_NOTE_EDIT" is an alias for "/ATTACHED_NOTE_EDIT.html/:_id" routing
     * @property {string} route_names.["ATTACHED_NOTE_LIST"]  - "ATTACHED_NOTE_LIST" is an alias for "/ATTACHED_NOTE_LIST.html/:_id/:type" routing

     */
    return {
    default:
        default_route, when: {
            '/': default_route,
            '/Home.html': {
                c: '$Home/HomeController',
                t: '$Home/HomeTemplate.html',
                d: []
            },
            '/Profile.html': {
                c: '$Profile/ProfileController',
                t: '$Profile/ProfileTemplate.html',
                d: []
            },
            '/Info.html': {
                c: '$Info/InfoController',
                t: '$Info/InfoTemplate.html',
                d: []
            },
            '/Login.html': {
                c: '$Login/LoginController',
                t: '$Login/LoginTemplate.html',
                d: [

                "angular-translate.min", "AngularTranslate"]
            },
            '/Welcome.html': {
                c: '$Welcome/WelcomeController',
                t: '$Welcome/WelcomeTemplate.html',
                d: []
            },
            '/Register.html': {
                c: '$Register/RegisterController',
                t: '$Register/RegisterTemplate.html',
                d: []
            },
            '/LEAD_CREATE_Oracle.html': {
                c: '$LEAD_CREATE_Oracle/LEAD_CREATE_OracleController',
                t: '$LEAD_CREATE_Oracle/LEAD_CREATE_OracleTemplate.html',
                d: []
            },
            '/LEAD_DETAILS_Oracle.html/:_id': {
                c: '$LEAD_DETAILS_Oracle/LEAD_DETAILS_OracleController',
                t: '$LEAD_DETAILS_Oracle/LEAD_DETAILS_OracleTemplate.html',
                d: []
            },
            '/LEAD_EDIT_Oracle.html/:_id': {
                c: '$LEAD_EDIT_Oracle/LEAD_EDIT_OracleController',
                t: '$LEAD_EDIT_Oracle/LEAD_EDIT_OracleTemplate.html',
                d: []
            },
            '/LEAD_LIST_Oracle.html': {
                c: '$LEAD_LIST_Oracle/LEAD_LIST_OracleController',
                t: '$LEAD_LIST_Oracle/LEAD_LIST_OracleTemplate.html',
                d: []
            },
            '/menu.html': {
                c: '$menu/menuController',
                t: '$menu/menuTemplate.html',
                d: []
            },
            '/mailgun.html': {
                c: '$mailgun/mailgunController',
                t: '$mailgun/mailgunTemplate.html',
                d: []
            },
            '/Calendar.html': {
                c: '$Calendar/CalendarController',
                t: '$Calendar/CalendarTemplate.html',
                d: []
            },
            '/CSS_Calendar.html': {
                c: '$CSS_Calendar/CSS_CalendarController',
                t: '$CSS_Calendar/CSS_CalendarTemplate.html',
                d: []
            },
            '/fullcalendar.html': {
                c: '$fullcalendar/fullcalendarController',
                t: '$fullcalendar/fullcalendarTemplate.html',
                d: []
            },
            '/chart.html': {
                c: '$chart/chartController',
                t: '$chart/chartTemplate.html',
                d: []
            },
            '/ifcalendar.html': {
                c: '$ifcalendar/ifcalendarController',
                t: '$ifcalendar/ifcalendarTemplate.html',
                d: []
            },
            '/Contacts.html/:_id/:lorc': {
                c: '$Contacts/ContactsController',
                t: '$Contacts/ContactsTemplate.html',
                d: []
            },
            '/Events.html': {
                c: '$Events/EventsController',
                t: '$Events/EventsTemplate.html',
                d: []
            },
            '/Proposals.html': {
                c: '$Proposals/ProposalsController',
                t: '$Proposals/ProposalsTemplate.html',
                d: []
            },
            '/CONTACT_CREATE.html/:_id/:lorc': {
                c: '$CONTACT_CREATE/CONTACT_CREATEController',
                t: '$CONTACT_CREATE/CONTACT_CREATETemplate.html',
                d: []
            },
            '/CONTACT_DETAILS.html/:_id': {
                c: '$CONTACT_DETAILS/CONTACT_DETAILSController',
                t: '$CONTACT_DETAILS/CONTACT_DETAILSTemplate.html',
                d: []
            },
            '/CONTACT_EDIT.html/:_id': {
                c: '$CONTACT_EDIT/CONTACT_EDITController',
                t: '$CONTACT_EDIT/CONTACT_EDITTemplate.html',
                d: []
            },
            '/CLIENT_LIST.html/': {
                c: '$CLIENT_LIST/CLIENT_LISTController',
                t: '$CLIENT_LIST/CLIENT_LISTTemplate.html',
                d: []
            },
            '/CLIENT_CREATE.html': {
                c: '$CLIENT_CREATE/CLIENT_CREATEController',
                t: '$CLIENT_CREATE/CLIENT_CREATETemplate.html',
                d: []
            },
            '/CLIENT_DETAILS.html/:_id': {
                c: '$CLIENT_DETAILS/CLIENT_DETAILSController',
                t: '$CLIENT_DETAILS/CLIENT_DETAILSTemplate.html',
                d: []
            },
            '/CLIENT_EDIT.html/:_id': {
                c: '$CLIENT_EDIT/CLIENT_EDITController',
                t: '$CLIENT_EDIT/CLIENT_EDITTemplate.html',
                d: []
            },
            '/chartjs.html': {
                c: '$chartjs/chartjsController',
                t: '$chartjs/chartjsTemplate.html',
                d: []
            },
            '/Calendar_API.html': {
                c: '$Calendar_API/Calendar_APIController',
                t: '$Calendar_API/Calendar_APITemplate.html',
                d: []
            },
            '/push_notifications.html': {
                c: '$push_notifications/push_notificationsController',
                t: '$push_notifications/push_notificationsTemplate.html',
                d: []
            },
            '/USER_CONTACTS.html': {
                c: '$USER_CONTACTS/USER_CONTACTSController',
                t: '$USER_CONTACTS/USER_CONTACTSTemplate.html',
                d: []
            },
            '/CONTACT_USER_CREATE.html': {
                c: '$CONTACT_USER_CREATE/CONTACT_USER_CREATEController',
                t: '$CONTACT_USER_CREATE/CONTACT_USER_CREATETemplate.html',
                d: []
            },
            '/EVENT_LIST.html/:_id/:_lorc': {
                c: '$EVENT_LIST/EVENT_LISTController',
                t: '$EVENT_LIST/EVENT_LISTTemplate.html',
                d: []
            },
            '/EVENT_CREATE.html/:_id/:_lorc': {
                c: '$EVENT_CREATE/EVENT_CREATEController',
                t: '$EVENT_CREATE/EVENT_CREATETemplate.html',
                d: []
            },
            '/EVENT_DETAILS.html/:_id': {
                c: '$EVENT_DETAILS/EVENT_DETAILSController',
                t: '$EVENT_DETAILS/EVENT_DETAILSTemplate.html',
                d: []
            },
            '/EVENT_EDIT.html': {
                c: '$EVENT_EDIT/EVENT_EDITController',
                t: '$EVENT_EDIT/EVENT_EDITTemplate.html',
                d: []
            },
            '/User_Profile.html': {
                c: '$User_Profile/User_ProfileController',
                t: '$User_Profile/User_ProfileTemplate.html',
                d: []
            },
            '/NOTE_CREATE.html': {
                c: '$NOTE_CREATE/NOTE_CREATEController',
                t: '$NOTE_CREATE/NOTE_CREATETemplate.html',
                d: []
            },
            '/NOTE_DETAILS.html/:_id': {
                c: '$NOTE_DETAILS/NOTE_DETAILSController',
                t: '$NOTE_DETAILS/NOTE_DETAILSTemplate.html',
                d: []
            },
            '/NOTE_EDIT.html/:_id': {
                c: '$NOTE_EDIT/NOTE_EDITController',
                t: '$NOTE_EDIT/NOTE_EDITTemplate.html',
                d: []
            },
            '/NOTE_LIST.html': {
                c: '$NOTE_LIST/NOTE_LISTController',
                t: '$NOTE_LIST/NOTE_LISTTemplate.html',
                d: []
            },
            '/ATTACHED_NOTE_CREATE.html/:_id/:type': {
                c: '$ATTACHED_NOTE_CREATE/ATTACHED_NOTE_CREATEController',
                t: '$ATTACHED_NOTE_CREATE/ATTACHED_NOTE_CREATETemplate.html',
                d: []
            },
            '/ATTACHED_NOTE_DETAILS.html/:_id': {
                c: '$ATTACHED_NOTE_DETAILS/ATTACHED_NOTE_DETAILSController',
                t: '$ATTACHED_NOTE_DETAILS/ATTACHED_NOTE_DETAILSTemplate.html',
                d: []
            },
            '/ATTACHED_NOTE_EDIT.html/:_id': {
                c: '$ATTACHED_NOTE_EDIT/ATTACHED_NOTE_EDITController',
                t: '$ATTACHED_NOTE_EDIT/ATTACHED_NOTE_EDITTemplate.html',
                d: []
            },
            '/ATTACHED_NOTE_LIST.html/:_id/:type': {
                c: '$ATTACHED_NOTE_LIST/ATTACHED_NOTE_LISTController',
                t: '$ATTACHED_NOTE_LIST/ATTACHED_NOTE_LISTTemplate.html',
                d: []
            }

        },
        otherwise: default_route,
        route_names: {
            'Home': '/Home.html',
            'Profile': '/Profile.html',
            'Info': '/Info.html',
            'Login': '/Login.html',
            'Welcome': '/Welcome.html',
            'Register': '/Register.html',
            'translationtest': '/translationtest.html',
            'LEAD': '/LEAD_LIST.html',
            'LEAD_CREATE_Oracle': '/LEAD_CREATE_Oracle.html',
            'LEAD_DETAILS_Oracle': '/LEAD_DETAILS_Oracle.html/:_id',
            'LEAD_EDIT_Oracle': '/LEAD_EDIT_Oracle.html/:_id',
            'LEAD_LIST_Oracle': '/LEAD_LIST_Oracle.html',
            'menu': '/menu.html',
            'mailgun': '/mailgun.html',
            'Calendar': '/Calendar.html',
            'CSS_Calendar': '/CSS_Calendar.html',
            'fullcalendar': '/fullcalendar.html',
            'chart': '/chart.html',
            'ifcalendar': '/ifcalendar.html',
            'Contacts': '/Contacts.html/:_id/:lorc',
            'Events': '/Events.html',
            'Proposals': '/Proposals.html',
            'CONTACT_CREATE': '/CONTACT_CREATE.html/:_id/:lorc',
            'CONTACT_DETAILS': '/CONTACT_DETAILS.html/:_id',
            'CONTACT_EDIT': '/CONTACT_EDIT.html/:_id',
            'CLIENT_LIST': '/CLIENT_LIST.html/',
            'CLIENT_CREATE': '/CLIENT_CREATE.html',
            'CLIENT_DETAILS': '/CLIENT_DETAILS.html/:_id',
            'CLIENT_EDIT': '/CLIENT_EDIT.html/:_id',
            'chartjs': '/chartjs.html',
            'page1': '/page1.html',
            'page2': '/page2.html',
            'Calendar_API': '/Calendar_API.html',
            'push_notifications': '/push_notifications.html',
            'USER_CONTACTS': '/USER_CONTACTS.html',
            'CONTACT_USER_CREATE': '/CONTACT_USER_CREATE.html',
            'EVENT_LIST': '/EVENT_LIST.html/:_id/:_lorc',
            'EVENT_CREATE': '/EVENT_CREATE.html/:_id/:_lorc',
            'EVENT_DETAILS': '/EVENT_DETAILS.html/:_id',
            'EVENT_EDIT': '/EVENT_EDIT.html',
            'User_Profile': '/User_Profile.html',
            'NOTE_CREATE': '/NOTE_CREATE.html',
            'NOTE_DETAILS': '/NOTE_DETAILS.html/:_id',
            'NOTE_EDIT': '/NOTE_EDIT.html/:_id',
            'NOTE_LIST': '/NOTE_LIST.html',
            'ATTACHED_NOTE_CREATE': '/ATTACHED_NOTE_CREATE.html/:_id/:type',
            'ATTACHED_NOTE_DETAILS': '/ATTACHED_NOTE_DETAILS.html/:_id',
            'ATTACHED_NOTE_EDIT': '/ATTACHED_NOTE_EDIT.html/:_id',
            'ATTACHED_NOTE_LIST': '/ATTACHED_NOTE_LIST.html/:_id/:type'

        }
    };
});