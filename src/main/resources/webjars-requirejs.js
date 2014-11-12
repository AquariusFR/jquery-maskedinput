/*global requirejs */

// Ensure any request for this webjar brings in dependencies. 
//
requirejs.config({
    paths: { "jquery-maskedinput": webjars.path("jquery-maskedinput", "jquery.maskedinput") },
    shim: { "jquery-maskedinput": [ "jquery" ] }
});
