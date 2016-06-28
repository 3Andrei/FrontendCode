/**
 * Created by Nicolescu on 28.06.2016.
 */
hrApp.controller('ColorsController',function($scope){
    $scope.selectItem;
    $scope.colors= [
        {
            "text" : "muted",
            "class": "text-muted",
            "type": "strong"
        },
        {
            "text" : "primary",
            "class": "text-primary",
            "type": "strong"
        },
        {
            "text" : "success",
            "class": "text-success",
            "type": "strong"
        },
        {
            "text" : "info",
            "class": "text-info",
            "type": "boring"
        },
        {
            "text" : "warning",
            "class": "text-warning",
            "type": "boring"
        },
        {
            "text" : "danger",
            "class": "text-danger",
            "type": "boring"
        }
    ];

    
    $scope.changeColor=function () {
       // console.log("ddd");
        $scope.selectItem=$scope.selected;
        console.log($scope.selectItem);
    };
    $scope.selected = $scope.colors[0];


})
