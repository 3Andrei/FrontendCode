/**
 * Created by Nicolescu on 28.06.2016.
 */
hrApp.controller('FormsController',function ($scope) {

    $scope.valideaza=function () {
        if($scope.myForm.$valid==true){
            alert('Data are valid!')
        }else{
            alert('Data are invalid!')
        }
    }
});