hrApp.controller('RequestController', ['$scope','$http', function($scope,$http ){

    $scope.jobList = [];
    var a={url:"http://hrapp-zth.rhcloud.com/hrapp/jobs",method:"GET"};
    $http(a)
        .success(function(data, status, headers, config) {
            $scope.jobList = data;
        })
        .error (function(data, status, headers, config){
            console.log("Error: " + status);
        });


//    TODO #10 - make AJAX call


}]);
