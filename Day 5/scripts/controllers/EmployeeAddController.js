hrApp.controller('EmployeeAddController', ['$scope', '$http', '$location', 'CommonResourcesFactoryBackup','JobService','DepartamentService','EmployeeService',
    function($scope, $http, $location, CommonResourcesFactoryBackup,JobService,DepartamentService,EmployeeService) {
        $scope.employee = {};
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        //TODO #HR1

        /**
         * Reset form
         */
        $scope.jobs;
        $scope.departments;
        $scope.managers;
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
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */

        $scope.create = function (addEmployee) {

            $http({url: CommonResourcesFactoryBackup.addEmployeeUrl, method: 'POST', data: addEmployee})
                .success(function (data) {
                    $scope.employee = data;
                    console.log($scope.employee);
                    $location.url('/employeeView/' + $scope.employee.employeeId);
                });
        };

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern = /^[0]\.\d{1}(\d)?$/;
}]);