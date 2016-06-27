hrApp.controller("MathController",function($rootScope,$scope){
   $scope.result=0;
   //$scope.numberA=0;
    // $scope.numberB=0;

    $scope.addition=function(){

        var result=$scope.numberA+$scope.numberB;
        $scope.result=result;

    }

    $scope.subtraction=function(){
        var result=$scope.numberA-$scope.numberB;
        $scope.result=result;
    }

    $scope.multiplication=function(){
        var result=$scope.numberA*$scope.numberB;
        $scope.result=result;
    }

    $scope.division=function(){
        var result=$scope.numberA/$scope.numberB;
        $scope.result=result;
    }
})