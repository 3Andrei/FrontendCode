/**
 * Created by Nicolescu on 29.06.2016.
 */
hrApp.service('JobService', ['$http', 'CommonResourcesFactoryBackup', function ($http, CommonResourcesFactoryBackup) {
        return {
            findAllJobs: function () {
                return $http.get(CommonResourcesFactoryBackup.findAllJobsUrl)
                    .success(function (data) {
                        return data;
                    })
                    .error(function (err) {
                        alert("Datele nu au fost primite");
                    });
            },
            findById: function (jobId) {
                return $http.get(CommonResourcesFactoryBackup.findOneJobUrl + jobId)
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