(function() {
    
    angular
        .module('app')
        .controller('appController', [
            '$scope', '$log', '$q', 
            appController
    ]);
    
    function appController($scope, $log) {
      var self = this;  
        
        console.log(self);
    };
    
}());