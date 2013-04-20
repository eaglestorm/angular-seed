'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])
    .value('version', '0.1')
    .factory("s1", function () {

        var obj = {
            prop1: "prop1",
            prop2: "prop2"
        };

        function create() {
            return obj;
        };

        function save(){

        };

        function del(){

        }

        return {
            create: create
        };
    });
