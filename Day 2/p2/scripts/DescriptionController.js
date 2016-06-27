/**
 * Created by Nicolescu on 24.06.2016.
 */
hrApp.controller("DescriptionController",function($rootScope,$scope){
    
    $scope.title = 'Two Way Binding Demo';
    $scope.childtemplate = 'templates/childscope.html';
    $scope.resetFirstVariable = function() {
        $scope.firstVariable = undefined;
    };
    $scope.setFirstVariable = function(val) {
        $scope.firstVariable = val;
    };
    
    $scope.toggleDescriptionShow=function(){
        console.log("Hello");
        if($scope.descriptionShow == true){
            $scope.descriptionShow = false;
            return;
        }
        $scope.descriptionShow = true;
    }
})

