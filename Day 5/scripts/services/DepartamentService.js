/**
 * Created by Nicolescu on 29.06.2016.
 */
hrApp.service('DepartamentService', ['$http', 'CommonResourcesFactoryBackup', function ($http, CommonResourcesFactoryBackup) {
        return {
            findAllDepartament: function () {
                return $http.get(CommonResourcesFactoryBackup.findAllDepartmentsUrl)
                    .success(function (data) {
                        return data;
                    })
                    .error(function (err) {
                        alert("Datele nu au fost primite");
                    });
            },
            findById: function (departamentId) {
                return $http.get(CommonResourcesFactoryBackup.findOneDepartmentUrl + departamentId)
                    .success(function (data) {
                        return data;
                    })
                    .error(function (err) {
                        alert("Datele nu au fost primite");
                    });
            }
        }
    }]
);