define( [ 'require', 'angular' ], function( require, angular ){
    /**
     * Read more about AngularJS modules in official docs: 
     * https://docs.angularjs.org/guide/module
     * 
     * Check here how to paste 3rd party modules:
     * https://devcenter.appery.io/documentation/angularjs/resources/#Using_3rd_party_modules
     */
    var module = angular.module('AngularTranslate', ['pascalprecht.translate']);
    
    module.config(
        
        ["$translateProvider", function($translateProvider) {
            $translateProvider.translations('en', {
                TITLE: 'Hello',
                
                LANGUAGE: 'English',
                
                HEADER: 'Customer Relation Management',
                
                LOGIN: 'Login',
                USERNAME: 'User Name',
                PASSWORD: 'Password',
                NAME:'Name' ,
                DESCRIPTION :'Description',
                STATUS :'Status',
                CONTACTED :'Contacted',
                NOT_CONECTED:'Not Contacted',
                CANCELLED :'Cancelled',
                INDUSTRY :'Industry',
                Full_Name:'Full Name',
                SOURCE:'Source',
                COMPANY : 'Company',
                WEBSITE :'Website',
                PHONE_1 : 'Phone1',
                PHONE_2 :'Phone2',
                RATING : 'Rating',
                E_MAIL : 'e-mail',
                ADDRESS : 'Address',
                REGION : 'Region',
                CITY :'City',
                COUNTRY :'Country',
                HEADCOUNT :'Head Count', 
                DOB :'DOB',
                TWITTER_ID :'Twitter ID',
                INSTAGRAM_ID : 'Instagram ID',
                FACEBOOK_ID : 'Facebook',
                NOTES : 'Notes',
                OWNER : 'Owner',
                MAIN_CONTACT : 'Main Contact',
                SUBMIT :'Submit',
                CONTACT_CREATE :'Contact Create',
                ANN_REVENUE : 'Ann Revenue',
                CLIENT_DETAILS : 'Client Details',
                CLIENT_CREATE : 'Client Create',
                CLIENT_EDIT : 'Client Edit',
                CONTACT_DETAILS :'Contact Details',
                CONTACT_EDIT :'Contact Edit',
                LEAD : 'Lead',
                CREATE_EVENT :'Create Event',
                TYPE : 'Type',
                SEND_TO :'Send To',
                SUBJECT :'Subject',
                MESSAGE_BODY : 'Message Body',
                START_DATE :'Start Date',
                End_DATE :'End Date',
                ACTIVE:'Active',
                INACTIVE : 'Inactive',
                CREATE_LEAD : 'Create Lead',
                ID :'ID',
                USER_ID :'User Id',
                LEAD_DETAIL : 'Lead Detail' ,
                
                
                FOO: 'This is a paragraph.',
                BUTTON_LANG_EN: 'english',
                BUTTON_LANG_DE: 'العربية'
            });
            
            
            
            
            $translateProvider.translations('ar', {
                TITLE: 'مرحبا',
                
                LANGUAGE: 'العربية',
                HEADER: 'إدارة علاقات العملاء',
                
                LOGIN: 'دخول',
                USERNAME: 'اسم المستخدم',
                PASSWORD: 'كلمة السر',
                NAME:'الاسم' ,
                DESCRIPTION :'الوصف',
                STATUS :'الحالة',
                CONTACTED :'متصل',
                NOT_CONECTED: 'غير متصل',
                CANCELLED :'لاغى',
                INDUSTRY :'صناعة',
                Full_Name :'الاسم كامل',
                SOURCE:'المصدر',
                COMPANY : 'الشركة',
                WEBSITE :'الموقع الإلكترونى',
                PHONE_1 : 'رقم الهاتف الاول',
                PHONE_2 :'رقم الهاتف الثانى',
                RATING : 'معدل',
                E_MAIL : 'البريد الاليكترونى',
                ADDRESS : 'العنوان',
                REGION : 'المنطقة',
                CITY :'المدينة',
                COUNTRY :'البلد',
                HEADCOUNT :'الحجم', 
                DOB :'تاريخ الميلاد',
                TWITTER_ID :'تويتر',
                INSTAGRAM_ID : 'انستجرام',
                FACEBOOK_ID : 'فيس بوك',
                NOTES : 'ملاحظات',
                OWNER : 'المالك',
                MAIN_CONTACT : 'رئيسى',
                SUBMIT :'ادخال',
                CONTACT_CREATE :'ادخال عميل',
                ANN_REVENUE : 'الربح السنوى',
                CLIENT_DETAILS : 'تفاصيل العميل',
                CLIENT_CREATE : 'انشاء عميل ',
                CLIENT_EDIT : 'تعديل بيانات عميل',
                CONTACT_DETAILS :'تفاصيل',
                CONTACT_EDIT :'تعديل',
                LEAD : 'شركة',
                CREATE_EVENT :'عمل إجتماع',
                TYPE : 'نوع',
                SEND_TO :'إلى',
                SUBJECT :'مادة',
                MESSAGE_BODY : 'محتوى الرسالة',
                START_DATE :'بداية التاريخ',
                End_DATE :'نهاية التاريخ',
                ACTIVE:'فعال',
                INACTIVE :'غير فعال',
                CREATE_LEAD : 'انشاء مؤسسة',
                ID : 'مفتاح',
                USER_ID :'كود العميل',
                LEAD_DETAIL : 'تفاصيل المؤسسة',
                 
                
                FOO: 'Dies ist ein Paragraph.',
                BUTTON_LANG_EN: 'english',
                BUTTON_LANG_DE: 'العربية'
            });
            $translateProvider.preferredLanguage('ar');
        }]);
        
        
        
        
        
        module.factory('Language', function ($translate) {
            //add the languages you support here. ar stands for arabic
            var rtlLanguages = ['ar'];

            var isRtl = function() {
            var languageKey = $translate.proposedLanguage() || $translate.use();
            for (var i=0; i<rtlLanguages.length; i+=1) {
                if (languageKey.indexOf(rtlLanguages[i])>-1) 
                    return true;
            }
            return false; 
        };

        //public api
        return {
            isRtl: isRtl
        };
    });
      //module.provider(name, providerType);
      //module.factory(name, providerFunction);
      //module.service(name, constructor);
      //module.value(name, object);
      //module.constant(name, object);
      //module.decorator(The, This);
      //module.animation(name, animationFactory);  //animations take effect only if the ngAnimate module is loaded
      //module.filter(name, filterFactory);
      //module.controller(name, constructor);
      //module.directive(name, directiveFactory);
      //module.config(configFn);
      //module.run(initializationFn);
});