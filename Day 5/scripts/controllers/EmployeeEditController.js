hrApp.controller('EmployeeEditController', ['$scope', '$http', '$routeParams', '$location', 'CommonResourcesFactoryBackup','JobService','DepartamentService','EmployeeService',
    function ($scope, $http, $routeParams, $location, CommonResourcesFactoryBackup,JobService,DepartamentService,EmployeeService) {
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        //TODO #HR5



        $scope.jobs;
        $scope.departments;
        $scope.managers;
        $scope.employee;
        EmployeeService.findAllEmployees().
        then(
            function (res) {
                console.log(res.data[0]);
                $scope.managers=res.data;
            });

        JobService.findAllJobs().
        then(
            function (res) {
                console.log(res.data[0]);
                $scope.jobs=res.data;
            });

        DepartamentService.findAllDepartament().
        then(
            function (res) {
                console.log(res.data[0]);
                $scope.departments=res.data;
            });

        $scope.reset = function () {
            this.employee = {};
        };

        /**
         * Reset form
         */
        $scope.reset = function () {
            $scope.employee = {};
        };
        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.create = function (addEmployee) {
            $http({url: CommonResourcesFactoryBackup.editEmployeeUrl, method: 'PUT', data: addEmployee})
                .success(function (data) {
                    $scope.employee = data;
                    $location.url('/employeeView/' + $scope.employee.employeeId);
                });
        };

        

        EmployeeService.findById($routeParams.employeeId)
            .then(function (res) {
                $scope.employee=res.data;
            });


        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern =  /^[0]\.\d{1}(\d)?$/;

    }]);