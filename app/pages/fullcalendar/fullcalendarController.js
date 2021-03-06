define(['require', 'app'], function(require, APP) {

    /**
     * Controller for fullcalendar generated by Appery.io
     * @module fullcalendar
     */

    APP.controller('fullcalendar', ['$scope', 'Apperyio', controller]);

    function controller($scope, Apperyio) {
        /**
         * User controller functions
         */
        /**
         * @function init
         */
        $scope.init = function() {

            var sessionToken = sessionStorage.getItem("sessionToken");
            console.log(sessionToken);

            $(document).ready(function() {
                $.ajax({
                    url: "https://api.appery.io/rest/1/apiexpress/api/EVENTS?apiKey=0d0bbf5f-3256-451b-bac7-5b2341d8e7d3",
                    method: "GET",
                    headers: {

                        "x-appery-session-token": sessionToken,

                    },
                    success: function(data) {
                        console.log(data);
                        var STATUS = [];
                        var SCOUNT = [];
                        var events = [];

                        for (var i in data) {
                            //	STATUS.push("STATUS " + data[i].STATUS);
                            //	SCOUNT.push(data[i].SCOUNT);
                            events.push({
                                title: data[i].TITLE,
                                start: data[i].STARTDATE,
                                end: data[i].ENDDATE
                            });
                        }

                        console.log(events);
                        $(document).ready(function() {

                            $('#calendar').fullCalendar({

                                header: {
                                    left: 'prev,next today',
                                    center: 'title',
                                    right: 'month,agendaWeek,agendaDay,listWeek'
                                },
                                //	defaultView: 'listWeek',
                                defaultDate: '2016-09-12',
                                navLinks: true,
                                // can click day/week names to navigate views
                                editable: true,
                                eventLimit: true,
                                // allow "more" link when too many events
                                events: events
                            });

                        });

                    },
                    error: function(data) {
                        console.log(data);
                    }
                });
            });

/*

var x = $scope.n.Year = 'All Day Event yesy';
  $scope.events =  [{title: x, start: '2016-09-01'},{title: 'Long Event',start: '2016-09-07',end: '2016-09-10'}];

 alert($scope.events);
	$(document).ready(function() {
		
		$('#calendar').fullCalendar({
		   
		    header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay,listWeek'
			},
		//	defaultView: 'listWeek',
			defaultDate: '2016-09-12',
			navLinks: true, // can click day/week names to navigate views
			editable: true,
			eventLimit: true, // allow "more" link when too many events
			events:$scope.events
		});
	
	});*/
        };

        /**
         * @function prev
         */
        $scope.prev = function() {
            $('#calendar').fullCalendar('prev');
        };

        /**
         * @function next
         */
        $scope.next = function() {
            $('#calendar').fullCalendar('next');
        };

        /**
         * @function changeView
         * @param viewName
         */
        $scope.changeView = function(viewName) {
            $('#calendar').fullCalendar('changeView', viewName);
        };

        /**
         * @function today
         */
        $scope.today = function() {
            $('#calendar').fullCalendar('today');
        };

        /**
         * @function cc
         * @param events
         */
        $scope.cc = function(events) {

            /////////////////////////////////////////////////

        };

        /**
         * user controller variables
         */
        $scope.n = Apperyio.EntityAPI('Year');
        $scope.events = Apperyio.EntityAPI('events');
    }

});