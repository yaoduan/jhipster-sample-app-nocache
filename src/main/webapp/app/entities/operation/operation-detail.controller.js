(function() {
    'use strict';

    angular
        .module('jhipsterNoCacheSampleApplicationApp')
        .controller('OperationDetailController', OperationDetailController);

    OperationDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'Operation', 'BankAccount', 'Label'];

    function OperationDetailController($scope, $rootScope, $stateParams, entity, Operation, BankAccount, Label) {
        var vm = this;
        vm.operation = entity;
        
        var unsubscribe = $rootScope.$on('jhipsterNoCacheSampleApplicationApp:operationUpdate', function(event, result) {
            vm.operation = result;
        });
        $scope.$on('$destroy', unsubscribe);

    }
})();
