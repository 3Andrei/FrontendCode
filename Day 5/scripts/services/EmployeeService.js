hrApp.service('EmployeeService', ['$http', 'CommonResourcesFactoryBackup', function ($http, CommonResourcesFactoryBackup) {
        return {
            findAllEmployees: function () {
                return $http.get(CommonResourcesFactoryBackup.findAllEmployeesUrl)
                    .success(function (data) {
                        return data;
                    })
                    .error(function (err) {
                       alert('Datele nu au fost preluate');
                    });
            },
            findById: function (employeeId) {
                return $http.get(CommonResourcesFactoryBackup.findOneEmployeeUrl + employeeId)
                    .success(function (data) {
                        return data;
                    })
                    .error(function (err) {
                        return {
                            "id": 100,
                            "firstName": "Steven",
                            "lastName": "King",
                            "email": "SKING",
                            "phoneNumber": "515.123.4567",
                            "hireDate": "1987-06-17",
                            "jobId": 1,
                            "salary": 24000.00,
                            "commissionPct": null,
                            "managerId": null,
                            "departmentId": 90
                        };
                    });
            },
            deleteById: function (employeeId) {
                return $http.delete(CommonResourcesFactoryBackup.deleteEmployeeUrl +'/'+employeeId)
                    .success(function (data) {
                       alert('Obiectul a fost sters')
                    })
                    .error(function (err) {
                        alert('Obiectul nu a putut fi sters');
                    });
            }
        }
    }]
);