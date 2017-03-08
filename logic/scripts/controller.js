angular
    .module('myModule')
    .controller('controller', function ($scope, factory) {

        
        $scope.data = factory.getFactory();

    });