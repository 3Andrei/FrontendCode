hrApp.controller('MathController', ['$scope','MathService', function($scope,MathService){
    
    $scope.calculate = function() {
//        TODO #8 calculate op1, op2, op3, op4
        /*
        $scope.op1=$scope.numberA+$scope.numberB;
        $scope.op2=$scope.numberA-$scope.numberB;
        $scope.op3=$scope.numberA*$scope.numberB;
        $scope.op4=$scope.numberA/$scope.numberB;
        */

        $scope.op1=MathService.add($scope.numberA,$scope.numberB);
        $scope.op2=MathService.substract($scope.numberA,$scope.numberB);
        $scope.op3=MathService.multiplication($scope.numberA,$scope.numberB);
        $scope.op4=MathService.division($scope.numberA,$scope.numberB);
//        TODO #13 refactor your calculations using MathService
    }

}]);
