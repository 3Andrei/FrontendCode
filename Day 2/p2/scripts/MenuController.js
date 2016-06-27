/**
 * Created by Nicolescu on 24.06.2016.
 */
hrApp.controller('MenuController',function($scope){
    $scope.demoActionList=[
        {
            label:"OtherScope",
            url:"views/childscope.html"
        },
        {
            label:"Math",
            url:"views/demomath.html"
        }
    ];
});