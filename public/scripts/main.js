//  Make logging safe for all browsers
window.log=function(){log.history=log.history||[];log.history.push(arguments);if(this.console){console.log(Array.prototype.slice.call(arguments))}};

requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'public/scripts/libs',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
      modernizr: 'modernizr.min', 
      jquery: 'jquery.min',
    }
});

// Start the main app logic.
requirejs(['modernizr', 'jquery'],
function (mod, $) {
    //jQuery loaded and can be used here now.

});