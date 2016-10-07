define( ['require'], function( require ){

    /** 
     * Service constructor function.
     * The first service call to this function will be invoked 
     * as "new Func" and object will be returned.
     * All subsequent service calls will return the same cached object.
     * Read more at https://docs.angularjs.org/guide/providers#service-recipe
     * Inject and use this service in scope method as following:
     * var serviceInstance = Apperyio.get("serviceName");
     */
    function Func( Apperyio ){
        var person = this;
        person.name = ""; // default value set to blank
    }

    return [{
        /* name for angular resource */
        name: 'dataStorage',
        /* type of angular resource */
        type: 'service',
        /* angular dependency injection array */
        deps: [ 'Apperyio', Func ]
    }];
});